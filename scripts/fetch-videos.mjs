#!/usr/bin/env node
/**
 * Video sourcing pipeline for Algebridge Directory.
 *
 * Rules this script enforces, in order of importance:
 *   1. No invented video IDs. Every ID comes from a real YouTube search result.
 *   2. Every ID is verified twice: oEmbed (proves the video exists and is public)
 *      and the watch page (proves `playableInEmbed`, so our iframe will not
 *      show "Video unavailable").
 *   3. Only channels on the TRUSTED list are accepted. A topic with no trusted
 *      match is left WITHOUT a video rather than filled with a random result.
 *
 * The cache in data/videos.json is incremental: re-running only fetches topics
 * that are missing or explicitly invalidated with --refresh <slug>.
 *
 * Usage:
 *   node scripts/fetch-videos.mjs             # fill in missing topics
 *   node scripts/fetch-videos.mjs --recheck   # re-verify everything cached
 *   node scripts/fetch-videos.mjs --refresh slug-one,slug-two
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCurriculum } from "./curriculum-loader.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CACHE_PATH = path.join(ROOT, "data", "videos.json");

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/**
 * Channels whose maths explainers we are willing to put in front of a student.
 * `weight` breaks ties when several trusted channels match a query.
 * Matching is case-insensitive on the channel name reported by YouTube.
 */
const TRUSTED = [
  { name: "Khan Academy", weight: 100 },
  { name: "Math Antics", weight: 96 },
  { name: "The Organic Chemistry Tutor", weight: 94 },
  { name: "Professor Dave Explains", weight: 88 },
  { name: "Mario's Math Tutoring", weight: 86 },
  { name: "MathHelp.com", weight: 84 },
  { name: "Brian McLogan", weight: 82 },
  { name: "Math with Mr. J", weight: 80 },
  { name: "patrickJMT", weight: 78 },
  { name: "Krista King", weight: 76 },
  { name: "NancyPi", weight: 76 },
  { name: "Eddie Woo", weight: 74 },
  { name: "Mathispower4u", weight: 72 },
  { name: "freeCodeCamp.org", weight: 70 },
  { name: "tecmath", weight: 68 },
  { name: "Mr. Sal", weight: 60 },
  { name: "TabletClass Math", weight: 60 },
  { name: "Math Meeting", weight: 58 },
  { name: "MashUp Math", weight: 58 },
  { name: "Cognito", weight: 56 },
];

const MIN_SECONDS = 150; // under 2.5 min is usually a teaser, not a lesson
const MAX_SECONDS = 2700; // over 45 min is a course, not a topic explainer

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, { timeout = 25000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: {
        "User-Agent": UA,
        "Accept-Language": "en-US,en;q=0.9",
        // Skips the EU consent interstitial, which otherwise returns a page
        // with no ytInitialData and silently looks like "no results".
        Cookie: "CONSENT=YES+cb; SOCS=CAISHAgCEhJnd3NfMjAyMzA4MTAtMF9SQzIaAmVuIAEaBgiA_LyaBg",
      },
    });
    if (!res.ok) return { ok: false, status: res.status, body: "" };
    return { ok: true, status: res.status, body: await res.text() };
  } catch (err) {
    return { ok: false, status: 0, body: "", error: String(err) };
  } finally {
    clearTimeout(timer);
  }
}

/** Pull the ytInitialData blob out of a YouTube HTML page. */
function extractInitialData(html) {
  const marker = "var ytInitialData = ";
  const start = html.indexOf(marker);
  if (start === -1) return null;
  const from = start + marker.length;
  // Balance braces so we stop exactly at the end of the JSON object.
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = from; i < html.length; i++) {
    const ch = html[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') inString = true;
    else if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        try {
          return JSON.parse(html.slice(from, i + 1));
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

/** Walk any object shape and collect every videoRenderer we can find. */
function collectVideoRenderers(node, out = []) {
  if (!node || typeof node !== "object") return out;
  if (Array.isArray(node)) {
    for (const item of node) collectVideoRenderers(item, out);
    return out;
  }
  if (node.videoRenderer && node.videoRenderer.videoId) out.push(node.videoRenderer);
  for (const key of Object.keys(node)) {
    if (key === "videoRenderer") continue;
    collectVideoRenderers(node[key], out);
  }
  return out;
}

const textOf = (obj) => {
  if (!obj) return "";
  if (typeof obj.simpleText === "string") return obj.simpleText;
  if (Array.isArray(obj.runs)) return obj.runs.map((r) => r.text).join("");
  return "";
};

function parseDuration(str) {
  if (!str) return 0;
  const parts = str.split(":").map((n) => parseInt(n, 10));
  if (parts.some(Number.isNaN)) return 0;
  return parts.reduce((acc, n) => acc * 60 + n, 0);
}

function parseViews(str) {
  const m = String(str || "").replace(/,/g, "").match(/([\d.]+)\s*([KMB])?/i);
  if (!m) return 0;
  const n = parseFloat(m[1]);
  const mult = { k: 1e3, m: 1e6, b: 1e9 }[(m[2] || "").toLowerCase()] || 1;
  return Math.round(n * mult);
}

function trustedEntry(channel) {
  const c = String(channel || "").toLowerCase().trim();
  return TRUSTED.find((t) => {
    const name = t.name.toLowerCase();
    return c === name || c.startsWith(name) || c.includes(name);
  });
}

/** How well does a candidate title cover the words we searched for? */
function titleOverlap(title, query) {
  const stop = new Set([
    "how", "to", "the", "a", "an", "of", "and", "with", "for", "in", "on",
    "math", "algebra", "explained", "tutorial", "lesson", "khan", "academy",
  ]);
  const words = query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stop.has(w));
  if (!words.length) return 0;
  const t = title.toLowerCase();
  const hits = words.filter((w) => t.includes(w)).length;
  return hits / words.length;
}

/**
 * YouTube throttles bursts by returning a page with no ytInitialData, which is
 * indistinguishable from "no results" unless you retry. Back off and try again
 * rather than silently recording a topic as having no video available.
 */
async function searchYouTube(query, { attempts = 4 } = {}) {
  const url =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(query) +
    "&hl=en&gl=US" +
    // sp filter restricts results to videos; duration is filtered by us.
    "&sp=EgIQAQ%253D%253D";

  let data = null;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    const res = await get(url);
    if (res.ok) {
      data = extractInitialData(res.body);
      if (data) break;
    }
    if (attempt < attempts) {
      const backoff = 2000 * Math.pow(2, attempt - 1); // 2s, 4s, 8s
      console.log(`      throttled on "${query}", retrying in ${backoff / 1000}s`);
      await sleep(backoff);
    }
  }
  if (!data) return [];
  const seen = new Set();
  const out = [];
  for (const r of collectVideoRenderers(data)) {
    if (seen.has(r.videoId)) continue;
    seen.add(r.videoId);
    const channel =
      textOf(r.ownerText) ||
      textOf(r.longBylineText) ||
      textOf(r.shortBylineText);
    out.push({
      id: r.videoId,
      title: textOf(r.title),
      channel,
      durationText: textOf(r.lengthText),
      seconds: parseDuration(textOf(r.lengthText)),
      views: parseViews(textOf(r.viewCountText)),
      publishedText: textOf(r.publishedTimeText),
    });
  }
  return out;
}

function rank(candidates, query) {
  return candidates
    .map((c) => {
      const trust = trustedEntry(c.channel);
      if (!trust) return null;
      if (c.seconds < MIN_SECONDS || c.seconds > MAX_SECONDS) return null;
      if (/#shorts/i.test(c.title)) return null;
      const overlap = titleOverlap(c.title, query);
      const viewBonus = Math.min(Math.log10(Math.max(c.views, 1)) * 3, 18);
      // Trust dominates; title relevance is the tiebreaker; views nudge.
      const score = trust.weight + overlap * 40 + viewBonus;
      return { ...c, trustedChannel: trust.name, score: Math.round(score * 10) / 10, overlap };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
}

/** Proves the video is public AND embeddable. Returns canonical metadata. */
async function verify(id) {
  const oembed = await get(
    `https://www.youtube.com/oembed?url=${encodeURIComponent(
      `https://www.youtube.com/watch?v=${id}`
    )}&format=json`
  );
  if (!oembed.ok) return { ok: false, reason: `oembed ${oembed.status}` };
  let meta;
  try {
    meta = JSON.parse(oembed.body);
  } catch {
    return { ok: false, reason: "oembed parse" };
  }

  const watch = await get(`https://www.youtube.com/watch?v=${id}`);
  if (!watch.ok) return { ok: false, reason: `watch ${watch.status}` };
  if (/"playableInEmbed":false/.test(watch.body)) {
    return { ok: false, reason: "embedding disabled" };
  }
  if (!/"playableInEmbed":true/.test(watch.body)) {
    return { ok: false, reason: "embeddable flag missing" };
  }
  if (/"isFamilySafe":false/.test(watch.body)) {
    return { ok: false, reason: "not family safe" };
  }
  const durMatch = watch.body.match(/"lengthSeconds":"(\d+)"/);
  return {
    ok: true,
    title: meta.title,
    channel: meta.author_name,
    channelUrl: meta.author_url,
    thumbnail: meta.thumbnail_url,
    seconds: durMatch ? parseInt(durMatch[1], 10) : 0,
  };
}

function fmtDuration(seconds) {
  if (!seconds) return "";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

async function resolveTopic(topic, log) {
  const queries = [topic.video, ...(topic.videoAlt || [])].filter(Boolean);
  const tried = [];
  for (const query of queries) {
    const results = await searchYouTube(query);
    tried.push(`${query} (${results.length} results)`);
    const ranked = rank(results, query);
    for (const cand of ranked.slice(0, 5)) {
      const v = await verify(cand.id);
      await sleep(250);
      if (!v.ok) {
        log(`      reject ${cand.id} ${cand.channel}: ${v.reason}`);
        continue;
      }
      return {
        slug: topic.slug,
        id: cand.id,
        title: v.title,
        channel: v.channel,
        channelUrl: v.channelUrl,
        thumbnail: v.thumbnail,
        seconds: v.seconds || cand.seconds,
        duration: fmtDuration(v.seconds || cand.seconds),
        views: cand.views,
        score: cand.score,
        query,
        verifiedAt: new Date().toISOString().slice(0, 10),
      };
    }
    await sleep(400);
  }
  return { slug: topic.slug, missing: true, tried };
}

async function main() {
  const args = process.argv.slice(2);
  const recheck = args.includes("--recheck");
  const refreshArg = args.indexOf("--refresh");
  const refresh = new Set(
    refreshArg > -1 && args[refreshArg + 1] ? args[refreshArg + 1].split(",") : []
  );

  const { topics } = await loadCurriculum(ROOT);
  const cache = fs.existsSync(CACHE_PATH)
    ? JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"))
    : {};

  const todo = topics.filter(
    (t) => recheck || refresh.has(t.slug) || !cache[t.slug] || cache[t.slug].missing
  );

  console.log(
    `Curriculum: ${topics.length} topics. Cached: ${
      Object.values(cache).filter((v) => !v.missing).length
    }. To fetch: ${todo.length}.`
  );

  let found = 0;

  // Sequential with a deliberate pause. Parallel requests get this IP
  // throttled within about thirty searches, which produces empty results
  // that look like genuine "no match" outcomes.
  for (let index = 0; index < todo.length; index++) {
    const topic = todo[index];
    console.log(`[${index + 1}/${todo.length}] ${topic.slug}`);
    const result = await resolveTopic(topic, (msg) => console.log(msg));
    if (result.missing) {
      console.log(`   ✗ no trusted match for "${topic.title}"`);
    } else {
      found++;
      console.log(
        `   ✓ ${result.channel} — ${result.title.slice(0, 70)} (${result.duration})`
      );
    }
    cache[topic.slug] = result;
    // Write as we go so a crash or interrupt never loses completed work.
    fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
    await sleep(1200);
  }

  const total = Object.values(cache).filter((v) => !v.missing).length;
  console.log(
    `\nDone. Verified videos: ${total}/${topics.length}. New: ${found}. Still missing: ${
      topics.length - total
    }.`
  );
  if (topics.length - total > 0) {
    const gaps = topics.filter((t) => !cache[t.slug] || cache[t.slug].missing);
    console.log("Topics without a verified video:");
    for (const g of gaps) console.log(`  - ${g.slug} (${g.title})`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
