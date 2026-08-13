#!/usr/bin/env node
/**
 * Pre-deploy verification for the Algebridge Library.
 *
 * Checks that are worth running before every deploy:
 *   1. Every internal link in dist/ points at a page that exists.
 *   2. Every practice deep link resolves on the live AlgeBridge platform.
 *   3. Every topic has a verified video and every embed id is well formed.
 *   4. No unrendered markup (stray ~ maths delimiters) leaked into the HTML.
 *   5. Every topic page contains both explanations and the required sections.
 *
 * Exits non-zero if anything fails, so it can gate a deploy.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCurriculum } from "./curriculum-loader.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "dist");

const failures = [];
const warnings = [];
const fail = (msg) => failures.push(msg);
const warn = (msg) => warnings.push(msg);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

async function main() {
  if (!fs.existsSync(OUT)) {
    console.error("dist/ does not exist — run `node scripts/build.mjs` first.");
    process.exit(1);
  }

  const { topics } = await loadCurriculum(ROOT);
  const videos = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "videos.json"), "utf8"));
  const files = walk(OUT);
  const htmlFiles = files.filter((f) => f.endsWith(".html"));

  console.log(`Checking ${htmlFiles.length} HTML pages...\n`);

  /* -- 1. internal links ---------------------------------------------------- */
  const exists = (urlPath) => {
    const clean = urlPath.split("#")[0].split("?")[0];
    if (clean === "/") return fs.existsSync(path.join(OUT, "index.html"));
    const asDir = path.join(OUT, clean, "index.html");
    const asFile = path.join(OUT, clean);
    return fs.existsSync(asDir) || fs.existsSync(asFile);
  };

  let linkCount = 0;
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    const rel = path.relative(OUT, file);
    for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
      linkCount++;
      if (!exists(match[1])) fail(`Broken internal link ${match[1]} in ${rel}`);
    }
  }
  console.log(`✓ internal links: checked ${linkCount}`);

  /* -- 2. stray markup ------------------------------------------------------ */
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    const rel = path.relative(OUT, file);
    const body = html.split("<body>")[1] || "";
    if (body.includes("~")) fail(`Unrendered ~ maths delimiter in ${rel}`);
    if (/\[object Object\]|undefined<|>undefined/.test(body)) {
      fail(`Template leak (undefined/object) in ${rel}`);
    }
  }
  console.log("✓ no unrendered markup");

  /* -- 3. topic page completeness ------------------------------------------ */
  for (const topic of topics) {
    const file = path.join(OUT, "topic", topic.slug, "index.html");
    if (!fs.existsSync(file)) {
      fail(`Missing page for topic ${topic.slug}`);
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    const required = [
      ['id="panel-simple"', "simple explanation"],
      ['id="panel-complex"', "in-depth explanation"],
      ["Worked example", "worked example"],
      ["Common mistakes", "mistakes section"],
      ["Start practising", "practice CTA"],
      ["youtube-nocookie.com/embed/", "video embed"],
    ];
    for (const [needle, label] of required) {
      if (!html.includes(needle)) fail(`${topic.slug}: missing ${label}`);
    }
  }
  console.log(`✓ ${topics.length} topic pages contain all required sections`);

  /* -- 4. videos ------------------------------------------------------------ */
  let missingVideo = 0;
  for (const topic of topics) {
    const v = videos[topic.slug];
    if (!v || v.missing) {
      missingVideo++;
      warn(`${topic.slug}: no verified video`);
      continue;
    }
    if (!/^[A-Za-z0-9_-]{11}$/.test(v.id)) fail(`${topic.slug}: malformed video id "${v.id}"`);
    if (!v.channel) fail(`${topic.slug}: video has no channel attribution`);
  }
  console.log(
    `✓ videos: ${topics.length - missingVideo}/${topics.length} verified with attribution`
  );

  /* -- 5. practice deep links ---------------------------------------------- */
  const deepLinks = [
    ...new Set(
      topics
        .filter((t) => t.practice)
        .map((t) => `https://algebridge.vercel.app/learn/${t.practice.unit}/${t.practice.skill}`)
    ),
  ];
  console.log(`\nChecking ${deepLinks.length} unique practice deep links against AlgeBridge...`);

  let ok = 0;
  for (const url of deepLinks) {
    try {
      const res = await fetch(url, { method: "GET", redirect: "follow" });
      if (res.ok) ok++;
      else fail(`Practice link ${res.status}: ${url}`);
    } catch (err) {
      fail(`Practice link unreachable: ${url} (${err.message})`);
    }
    await new Promise((r) => setTimeout(r, 120));
  }
  console.log(`✓ practice links: ${ok}/${deepLinks.length} resolve`);

  /* -- report --------------------------------------------------------------- */
  console.log("");
  if (warnings.length) {
    console.log(`${warnings.length} warning(s):`);
    warnings.slice(0, 12).forEach((w) => console.log(`  ! ${w}`));
  }
  if (failures.length) {
    console.log(`\n${failures.length} FAILURE(S):`);
    failures.slice(0, 30).forEach((f) => console.log(`  ✗ ${f}`));
    process.exit(1);
  }
  console.log("All checks passed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
