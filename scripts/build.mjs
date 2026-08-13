#!/usr/bin/env node
/**
 * Static site generator for the Algebridge Directory.
 *
 * Zero dependencies on purpose: `node scripts/build.mjs` produces a complete
 * static site in dist/ that any host can serve. Every topic gets a real HTML
 * page so the content is indexable rather than hidden behind a client router.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCurriculum } from "./curriculum-loader.mjs";
import { LEGAL_PAGES, ABOUT_PAGE } from "../content/legal.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "dist");

export const SITE = {
  name: "Algebridge Directory",
  short: "Directory",
  tagline: "Every topic from Pre-Algebra through Algebra 2, explained twice.",
  description:
    "A free directory of every Pre-Algebra, Algebra 1, Geometry and Algebra 2 topic. Each one has a hand-picked video, a plain-English explanation, a rigorous explanation, a worked example, and unlimited practice on AlgeBridge.",
  url: "https://algebridge-directory.vercel.app",
  practiceBase: "https://algebridge.vercel.app",
  org: "AlgeBridge",
  orgUrl: "https://algebridge.org",
  contactEmail: "hello@algebridge.org",
  updated: "13 August 2026",
};

/* -------------------------------------------------------------------------- */
/* helpers                                                                     */
/* -------------------------------------------------------------------------- */

/** Small counts read better spelled out in headings. */
const COUNT_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven"];

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/**
 * Lightweight prose renderer for the curriculum text.
 * Supports: blank-line paragraphs, "- " lists, **bold**, and ~maths~ spans.
 * A maths span containing a newline is rendered as a block instead of a chip.
 */
function prose(text = "") {
  const lines = String(text).split("\n");
  const out = [];
  let para = [];
  let list = [];

  const inline = (s) => {
    let html = esc(s);
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return html;
  };

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${para.map(inline).join("<br>")}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      out.push(`<ul>${list.map((li) => `<li>${inline(li)}</li>`).join("")}</ul>`);
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushPara();
      flushList();
      continue;
    }
    if (/^[-•]\s+/.test(line)) {
      flushPara();
      list.push(line.replace(/^[-•]\s+/, ""));
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();

  // Maths spans are resolved after block assembly so they may span lines.
  return out
    .join("\n")
    .replace(/~([^~]+)~/g, (_, body) => {
      const isBlock = body.includes("<br>") || body.includes("\n");
      const cleaned = body.replace(/<br>/g, "\n");
      return isBlock
        ? `<code class="math math-block">${cleaned}</code>`
        : `<code class="math">${body}</code>`;
    });
}

/** Practice URL: deep link to the exact skill when AlgeBridge has one. */
function practiceUrl(topic) {
  if (topic.practice && topic.practice.unit && topic.practice.skill) {
    return `${SITE.practiceBase}/learn/${topic.practice.unit}/${topic.practice.skill}`;
  }
  return SITE.practiceBase;
}

const icon = {
  search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  bookmark: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 4h12v16l-6-4-6 4z"/></svg>`,
  check: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4 4L19 7"/></svg>`,
  play: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>`,
  spark: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  logo: `<svg class="brand-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#1d4ed8"/><path d="M7 21c0-5 3.6-9 9-9s9 4 9 9" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M7 21h18" stroke="#93c5fd" stroke-width="2.4" stroke-linecap="round"/><circle cx="16" cy="9" r="2" fill="#fff"/></svg>`,
};

/* -------------------------------------------------------------------------- */
/* layout                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Set once in main() so the footer's course list follows the curriculum
 * instead of being hand-maintained. Adding a course file is then the only
 * edit needed to add a course.
 */
let courseNav = [];

function layout({ title, description, body, active = "", canonical = "", extraHead = "" }) {
  const fullTitle = title === SITE.name ? title : `${title} — ${SITE.name}`;
  // Browse and Courses are hidden on narrow screens: both are reachable from
  // the strip nav and the footer, and keeping them would push the CTA off-screen.
  const navLink = (href, label, key, badge) =>
    `<a class="header-link${active === key ? " is-active" : ""}${
      badge ? "" : " hide-sm"
    }" href="${href}">${
      badge
        ? `${icon.bookmark}<span class="label">${label}</span><span class="count-badge" data-saved-count>0</span>`
        : `<span class="label">${label}</span>`
    }</a>`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
${canonical ? `<link rel="canonical" href="${SITE.url}${canonical}">` : ""}
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css">
${extraHead}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap">
    <div class="header-bar">
      <a class="brand" href="/">${icon.logo}<span><span class="hide-sm">Algebridge </span><strong style="font-weight:700">Directory</strong></span></a>
      <nav class="header-nav" aria-label="Main">
        ${navLink("/", "Browse", "browse")}
        ${navLink("/courses/", "Courses", "courses")}
        ${navLink("/saved/", "Saved", "saved", true)}
        <a class="header-link header-cta" href="${SITE.practiceBase}" target="_blank" rel="noopener">Practice</a>
      </nav>
    </div>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-about">
        <a class="brand" href="/">${icon.logo}<span>Algebridge Directory</span></a>
        <p>A free directory of every topic from Pre-Algebra through Algebra 2, Geometry included. Built alongside <a href="${SITE.orgUrl}">${SITE.org}</a>, a student-led initiative.</p>
      </div>
      <div>
        <h4>Courses</h4>
        <ul>
          ${courseNav
            .map((c) => `<li><a href="/${c.id}/">${esc(c.title)}</a></li>`)
            .join("\n          ")}
          <li><a href="/courses/">All courses</a></li>
        </ul>
      </div>
      <div>
        <h4>Directory</h4>
        <ul>
          <li><a href="/">Browse topics</a></li>
          <li><a href="/saved/">Saved</a></li>
          <li><a href="/about/">About</a></li>
          <li><a href="${SITE.practiceBase}" target="_blank" rel="noopener">Practice on AlgeBridge</a></li>
        </ul>
      </div>
      <div>
        <h4>Legal</h4>
        <ul>
          <li><a href="/terms/">Terms of Service</a></li>
          <li><a href="/privacy/">Privacy Policy</a></li>
          <li><a href="/cookies/">Cookies</a></li>
          <li><a href="/copyright/">Copyright &amp; DMCA</a></li>
          <li><a href="/accessibility/">Accessibility</a></li>
          <li><a href="/disclaimer/">Disclaimer</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${esc(SITE.org)}. Educational use, free of charge.</span>
      <span>Videos are embedded from YouTube and remain the property of their creators.</span>
    </div>
  </div>
</footer>
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}

/* -------------------------------------------------------------------------- */
/* components                                                                  */
/* -------------------------------------------------------------------------- */

/** Numeric rank so "easiest first" can sort without string comparisons. */
const LEVEL_RANK = { Intro: 1, Core: 2, Advanced: 3 };

function topicCard(topic, video, order = 0) {
  const url = `/topic/${topic.slug}/`;
  const thumb = video
    ? `<a class="thumb" href="${url}" aria-label="${esc(topic.title)}">
         <img src="${esc(video.thumbnail)}" alt="" loading="lazy" width="480" height="360">
         ${video.duration ? `<span class="duration">${esc(video.duration)}</span>` : ""}
         <span class="play"><span>${icon.play}</span></span>
       </a>`
    : `<a class="thumb" href="${url}" aria-label="${esc(topic.title)}"></a>`;

  return `<article class="topic-card" data-topic="${esc(topic.slug)}" data-course="${esc(
    topic.courseId
  )}" data-level="${esc(topic.level)}" data-unit="${esc(topic.unitId)}"
    data-order="${order}" data-rank="${LEVEL_RANK[topic.level] || 2}"
    data-title="${esc(topic.title.toLowerCase())}"
    data-search="${esc(
      [topic.title, topic.summary, topic.unitTitle, topic.courseTitle, (topic.tags || []).join(" ")]
        .join(" ")
        .toLowerCase()
    )}">
  ${thumb}
  <div class="card-body">
    <div class="tag-row">
      <span class="tag tag-course">${esc(topic.courseShort)}</span>
      <span class="tag tag-level">${esc(topic.level)}</span>
      ${topic.practice ? `<span class="tag">Practice ready</span>` : ""}
    </div>
    <h3><a href="${url}">${esc(topic.title)}</a></h3>
    <p class="card-summary">${esc(topic.summary)}</p>
    <dl class="meta-grid">
      <div><dt>Unit</dt><dd title="${esc(topic.unitTitle)}">${esc(topic.unitTitle)}</dd></div>
      <div><dt>Video</dt><dd>${video ? esc(video.duration || "—") : "—"}</dd></div>
      <div><dt>Source</dt><dd title="${esc(video ? video.channel : "")}">${
        video ? esc(video.channel) : "—"
      }</dd></div>
      <div><dt>Level</dt><dd>${esc(topic.level)}</dd></div>
    </dl>
    <div class="card-actions">
      <a class="btn btn-secondary" href="${url}">View topic</a>
      <button class="icon-btn" type="button" data-save="${esc(topic.slug)}" aria-pressed="false"
        aria-label="Save ${esc(topic.title)}" title="Save for later">${icon.bookmark}</button>
    </div>
  </div>
</article>`;
}

function finderBar(courses, { activeCourse = "all", topicCount = 0 } = {}) {
  const pill = (value, label) =>
    `<button class="pill${value === activeCourse ? " is-active" : ""}" type="button" data-filter-course="${value}">${esc(
      label
    )}</button>`;
  return `<div class="finder">
  <label class="search-box">
    <span class="sr-only">Search topics</span>
    ${icon.search}
    <input type="search" id="topic-search" placeholder="Search ${topicCount} topics — try &quot;factoring&quot; or &quot;proof&quot;" autocomplete="off">
  </label>
  <div class="pill-row" role="group" aria-label="Filter by course">
    ${pill("all", "All")}
    ${courses.map((c) => pill(c.id, c.short)).join("\n    ")}
  </div>
  <div class="select-row">
    <label class="select-pill">
      <span>Level</span>
      <select data-level-select>
        <option value="all">All levels</option>
        <option value="Intro">Intro</option>
        <option value="Core">Core</option>
        <option value="Advanced">Advanced</option>
      </select>
    </label>
    <label class="select-pill">
      <span>Sort</span>
      <select data-sort>
        <option value="curriculum">Curriculum order</option>
        <option value="az">Topic A–Z</option>
        <option value="za">Topic Z–A</option>
        <option value="easiest">Easiest first</option>
        <option value="hardest">Hardest first</option>
      </select>
    </label>
    <span class="result-pill" data-result-count>${topicCount} topics</span>
    <button class="pill pill-reset" type="button" data-reset hidden>Clear filters</button>
  </div>
</div>`;
}

function stripNav(courses, activeId = "") {
  return `<nav class="strip" aria-label="Courses">
  <a href="/" class="${activeId === "" ? "is-active" : ""}">All topics</a>
  ${courses
    .map(
      (c) =>
        `<a href="/${c.id}/" class="${activeId === c.id ? "is-active" : ""}">${esc(c.title)}</a>`
    )
    .join("\n  ")}
  <a href="/saved/">Saved</a>
  <a href="/about/">About</a>
</nav>`;
}

/* -------------------------------------------------------------------------- */
/* pages                                                                       */
/* -------------------------------------------------------------------------- */

function homePage(courses, topics, videos) {
  const withVideo = topics.filter((t) => videos[t.slug] && !videos[t.slug].missing).length;
  const practiceReady = topics.filter((t) => t.practice).length;

  const body = `<div class="wrap">
  <section class="hero">
    <div class="hero-inner">
      <div>
        <h1>Every algebra and geometry topic,<br>explained two ways</h1>
        <p class="lede">Pre-Algebra, Algebra 1, Geometry and Algebra 2. Each topic has a hand-picked video, a plain-English explanation, a rigorous one, a worked example, and unlimited practice problems.</p>
        <p class="hero-note">${topics.length} topics · ${withVideo} verified videos · free, no account needed</p>
      </div>
      <div class="stat-block">
        <span class="stat-number">${topics.length}</span>
        <span class="stat-label">Topics</span>
        <span class="stat-sub">across ${courses.length} courses</span>
      </div>
    </div>
    ${finderBar(courses, { topicCount: topics.length })}
    ${stripNav(courses)}
  </section>

  <div class="section-head">
    <h2>All topics</h2>
    <span class="muted" data-result-count>${topics.length} topics</span>
  </div>

  <div class="card-grid" id="topic-grid">
    ${topics.map((t, i) => topicCard(t, videos[t.slug], i)).join("\n")}
    <div class="empty-state" data-empty hidden>
      <h3 data-empty-title>No topics match that search</h3>
      <p data-empty-body>Try a shorter word, or clear the filters to see all ${topics.length} topics.</p>
      <p style="margin-top:14px"><button class="btn btn-primary" type="button" data-reset>Clear filters</button></p>
    </div>
  </div>

  <div class="banner">
    <div class="banner-icon">${icon.spark}</div>
    <div>
      <h2>Infinite practice, one click away</h2>
      <p>${practiceReady} topics link straight to a matching skill on AlgeBridge, where problems are generated fresh every time.</p>
    </div>
    <a class="btn btn-primary banner-action" href="${SITE.practiceBase}" target="_blank" rel="noopener">Open AlgeBridge</a>
  </div>
</div>`;

  return layout({
    title: SITE.name,
    description: SITE.description,
    body,
    active: "browse",
    canonical: "/",
    extraHead: `<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
    })}</script>`,
  });
}

function coursesPage(courses, topics) {
  const body = `<div class="wrap">
  <div class="breadcrumb"><a href="/">Directory</a><span aria-hidden="true">/</span><span>Courses</span></div>
  <h1 class="detail-title">${COUNT_WORDS[courses.length] || courses.length} courses, ${topics.length} topics</h1>
  <p class="detail-lede">Work through a course in order, or jump to whatever is confusing right now. Nothing is locked and no account is required.</p>
  <div class="card-grid" style="margin-top:22px">
    ${courses
      .map((course) => {
        const count = topics.filter((t) => t.courseId === course.id).length;
        const ready = topics.filter((t) => t.courseId === course.id && t.practice).length;
        return `<a class="course-card" href="/${course.id}/">
      <h3>${esc(course.title)}</h3>
      <p>${esc(course.description)}</p>
      <div class="course-stats">
        <span><strong>${count}</strong> topics</span>
        <span><strong>${course.units.length}</strong> units</span>
        <span><strong>${ready}</strong> practice links</span>
      </div>
    </a>`;
      })
      .join("\n")}
  </div>
</div>`;
  return layout({
    title: "Courses",
    description: `All ${topics.length} topics across ${courses.map((c) => c.title).join(", ")}.`,
    body,
    active: "courses",
    canonical: "/courses/",
  });
}

function coursePage(course, courses, topics, videos) {
  const mine = topics.filter((t) => t.courseId === course.id);
  const body = `<div class="wrap">
  <section class="hero">
    <div class="hero-inner">
      <div>
        <div class="breadcrumb" style="margin-top:0"><a href="/">Directory</a><span aria-hidden="true">/</span><a href="/courses/">Courses</a><span aria-hidden="true">/</span><span>${esc(
          course.title
        )}</span></div>
        <h1>${esc(course.title)}</h1>
        <p class="lede">${esc(course.description)}</p>
        <p class="hero-note">${mine.length} topics · ${course.units.length} units</p>
      </div>
      <div class="stat-block">
        <span class="stat-number">${mine.length}</span>
        <span class="stat-label">Topics</span>
        <span class="stat-sub">${esc(course.tagline)}</span>
      </div>
    </div>
    ${stripNav(courses, course.id)}
  </section>

  ${course.units
    .map((unit) => {
      const unitTopics = mine.filter((t) => t.unitId === unit.id);
      return `<section class="unit-block" id="${esc(unit.id)}">
    <div class="unit-head">
      <h3>${esc(unit.title)}</h3>
      <span class="unit-count">${unitTopics.length} topics</span>
    </div>
    <p class="unit-blurb">${esc(unit.blurb)}</p>
    <div class="card-grid">
      ${unitTopics.map((t) => topicCard(t, videos[t.slug])).join("\n")}
    </div>
  </section>`;
    })
    .join("\n")}
</div>`;

  return layout({
    title: course.title,
    description: `${course.title}: ${course.tagline} ${mine.length} topics with videos, two explanations each and unlimited practice.`,
    body,
    active: "courses",
    canonical: `/${course.id}/`,
  });
}

function topicPage(topic, index, allTopics, videos, courses) {
  const video = videos[topic.slug];
  const url = `/topic/${topic.slug}/`;
  const prev = allTopics[index - 1];
  const next = allTopics[index + 1];
  const related = allTopics
    .filter((t) => t.unitId === topic.unitId && t.slug !== topic.slug)
    .slice(0, 6);

  const videoPanel = video
    ? `<div class="panel">
    <div class="video-frame">
      <iframe src="https://www.youtube-nocookie.com/embed/${esc(video.id)}?rel=0"
        title="${esc(video.title)}" loading="lazy" allowfullscreen
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    <div class="video-credit">
      <span>Video by <strong>${esc(video.channel)}</strong> — “${esc(video.title)}”</span>
      <a href="https://www.youtube.com/watch?v=${esc(video.id)}" target="_blank" rel="noopener">Watch on YouTube</a>
    </div>
  </div>`
    : "";

  const body = `<div class="wrap">
  <div class="breadcrumb">
    <a href="/">Directory</a><span aria-hidden="true">/</span>
    <a href="/${esc(topic.courseId)}/">${esc(topic.courseTitle)}</a><span aria-hidden="true">/</span>
    <a href="/${esc(topic.courseId)}/#${esc(topic.unitId)}">${esc(topic.unitTitle)}</a><span aria-hidden="true">/</span>
    <span>${esc(topic.title)}</span>
  </div>

  <div class="tag-row">
    <span class="tag tag-course">${esc(topic.courseShort)}</span>
    <span class="tag tag-level">${esc(topic.level)}</span>
    ${(topic.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
  </div>
  <h1 class="detail-title">${esc(topic.title)}</h1>
  <p class="detail-lede">${esc(topic.summary)}</p>

  <div class="detail-grid">
    <div>
      ${videoPanel}

      <div class="panel">
        <div class="panel-head">
          <h2>The explanation</h2>
          <div class="tabs" role="tablist" aria-label="Explanation depth">
            <button class="tab" type="button" role="tab" id="tab-simple" aria-controls="panel-simple" aria-selected="true">Simple</button>
            <button class="tab" type="button" role="tab" id="tab-complex" aria-controls="panel-complex" aria-selected="false">In depth</button>
          </div>
        </div>
        <div class="panel-body">
          <div class="callout callout-key">
            <strong>Key idea</strong>
            ${esc(topic.keyIdea)}
          </div>
          <div class="prose" id="panel-simple" role="tabpanel" aria-labelledby="tab-simple">
            ${prose(topic.simple)}
          </div>
          <div class="prose" id="panel-complex" role="tabpanel" aria-labelledby="tab-complex" hidden>
            ${prose(topic.complex)}
          </div>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head"><h2>Worked example</h2></div>
        <div class="panel-body">
          <p class="prose"><strong>${esc(topic.example.prompt)}</strong></p>
          <ol class="steps">
            ${topic.example.steps.map((s) => `<li>${prose(s).replace(/^<p>|<\/p>$/g, "")}</li>`).join("\n            ")}
          </ol>
          <p class="answer-line"><strong>Answer:</strong> ${esc(topic.example.answer)}</p>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head"><h2>Common mistakes</h2></div>
        <div class="panel-body">
          <ul class="mistake-list">
            ${topic.mistakes.map((m) => `<li>${esc(m)}</li>`).join("\n            ")}
          </ul>
        </div>
      </div>

      <div class="pager">
        ${
          prev
            ? `<a href="/topic/${esc(prev.slug)}/"><span class="pager-label">Previous</span>${esc(prev.title)}</a>`
            : `<span></span>`
        }
        ${
          next
            ? `<a class="pager-next" href="/topic/${esc(next.slug)}/"><span class="pager-label">Next</span>${esc(
                next.title
              )}</a>`
            : `<span></span>`
        }
      </div>
    </div>

    <aside>
      <div class="practice-card">
        <h3>Practice this, endlessly</h3>
        <p>${
          topic.practice
            ? "Opens the matching skill on AlgeBridge, which generates a fresh problem every time."
            : "Opens the AlgeBridge practice platform. This topic has no matching skill there yet, so pick the closest one."
        }</p>
        <a class="btn btn-block" href="${practiceUrl(topic)}" target="_blank" rel="noopener">Start practising</a>
        <span class="fine">Free · opens algebridge.vercel.app</span>
      </div>

      <div class="panel" style="margin-top:18px">
        <div class="panel-head"><h2 style="font-size:17px">Track it</h2></div>
        <div class="panel-body">
          <button class="btn btn-secondary btn-block" type="button" data-save="${esc(topic.slug)}" aria-pressed="false">
            ${icon.bookmark}<span data-save-label>Save for later</span>
          </button>
          <button class="btn btn-secondary btn-block" style="margin-top:9px" type="button" data-learned="${esc(
            topic.slug
          )}" aria-pressed="false">
            ${icon.check}<span data-learned-label>Mark as learned</span>
          </button>
        </div>
      </div>

      ${
        related.length
          ? `<div class="panel" style="margin-top:18px">
        <div class="panel-head"><h2 style="font-size:17px">More in ${esc(topic.unitTitle)}</h2></div>
        <ul class="side-list">
          ${related
            .map(
              (r) =>
                `<li><a href="/topic/${esc(r.slug)}/">${esc(r.title)}<span class="side-meta">${esc(
                  r.level
                )}</span></a></li>`
            )
            .join("\n          ")}
        </ul>
      </div>`
          : ""
      }
    </aside>
  </div>
</div>`;

  const ld = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: topic.title,
    description: topic.summary,
    educationalLevel: topic.courseTitle,
    learningResourceType: "Concept explanation",
    isAccessibleForFree: true,
    url: `${SITE.url}${url}`,
    ...(video
      ? {
          video: {
            "@type": "VideoObject",
            name: video.title,
            thumbnailUrl: video.thumbnail,
            embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
            uploadDate: video.verifiedAt,
            description: `${video.channel} explains ${topic.title}.`,
          },
        }
      : {}),
  };

  return layout({
    title: topic.title,
    description: `${topic.summary} ${topic.keyIdea}`,
    body,
    active: "browse",
    canonical: url,
    extraHead: `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
  });
}

function savedPage(courses) {
  const body = `<div class="wrap">
  <div class="breadcrumb"><a href="/">Directory</a><span aria-hidden="true">/</span><span>Saved</span></div>
  <h1 class="detail-title">Your saved topics</h1>
  <p class="detail-lede">Saved topics and the ones you have marked as learned live in this browser only. Nothing is uploaded and no account exists.</p>

  <div class="section-head">
    <h2>Saved</h2>
    <span class="muted" data-saved-total>0 topics</span>
  </div>
  <div class="card-grid" id="saved-grid">
    <div class="empty-state" data-empty-saved>
      <h3>Nothing saved yet</h3>
      <p>Tap the bookmark on any topic and it will appear here.</p>
      <p style="margin-top:14px"><a class="btn btn-primary" href="/">Browse topics</a></p>
    </div>
  </div>

  <div class="section-head">
    <h2>Marked as learned</h2>
    <span class="muted" data-learned-total>0 topics</span>
  </div>
  <div class="card-grid" id="learned-grid">
    <div class="empty-state" data-empty-learned>
      <h3>Nothing marked yet</h3>
      <p>Open a topic and press “Mark as learned” once it makes sense.</p>
    </div>
  </div>
</div>`;
  return layout({
    title: "Saved",
    description: "Topics you have saved or marked as learned, stored in your browser.",
    body,
    active: "saved",
    canonical: "/saved/",
  });
}

function legalPage(page, allPages) {
  const body = `<div class="wrap">
  <div class="legal-layout">
    <nav class="legal-nav" aria-label="Legal pages">
      ${allPages
        .map(
          (p) =>
            `<a href="/${p.slug}/" class="${p.slug === page.slug ? "is-active" : ""}">${esc(
              p.navTitle || p.title
            )}</a>`
        )
        .join("\n      ")}
    </nav>
    <article class="legal-body">
      <h1>${esc(page.title)}</h1>
      <p class="updated">Last updated ${esc(SITE.updated)}${
        page.effective ? ` · Effective ${esc(page.effective)}` : ""
      }</p>
      ${page.html}
    </article>
  </div>
</div>`;
  return layout({
    title: page.title,
    description: page.description,
    body,
    canonical: `/${page.slug}/`,
  });
}

function aboutPage(topics, videos, courses) {
  const channels = [
    ...new Set(
      Object.values(videos)
        .filter((v) => !v.missing)
        .map((v) => v.channel)
    ),
  ].sort();
  const body = `<div class="wrap">
  <div class="breadcrumb"><a href="/">Directory</a><span aria-hidden="true">/</span><span>About</span></div>
  <div class="legal-layout">
    <nav class="legal-nav" aria-label="Sections">
      <a href="/about/" class="is-active">About</a>
      <a href="/courses/">Courses</a>
      <a href="/contact/">Contact</a>
      <a href="/terms/">Terms</a>
      <a href="/privacy/">Privacy</a>
    </nav>
    <article class="legal-body">
      <h1>About the Algebridge Directory</h1>
      <p class="updated">${topics.length} topics · ${
        Object.values(videos).filter((v) => !v.missing).length
      } verified videos · last built ${esc(SITE.updated)}</p>
      ${ABOUT_PAGE.html}
      <h2>Where the videos come from</h2>
      <p>Every video is an existing YouTube lesson from an established maths education channel. Nothing here is produced by us. Each video was found by search, filtered to a short list of trusted channels, and then verified programmatically to confirm it is public and embeddable. The channels currently represented are:</p>
      <ul>
        ${channels.map((c) => `<li>${esc(c)}</li>`).join("\n        ")}
      </ul>
      <p>Creators keep all rights to their work. Videos play through YouTube's privacy-enhanced player, and full credit with a direct link sits under every embed. See <a href="/copyright/">Copyright &amp; DMCA</a> if you are a creator and want an embed removed.</p>
      <h2>What this directory does not have</h2>
      <ul>
        <li>No accounts, and no way to create one.</li>
        <li>No user counts, testimonials or ratings — there is no user base to measure yet, and inventing figures would be dishonest.</li>
        <li>No advertising and no payment of any kind.</li>
        <li>No original video content. The explanations are written; the videos are curated.</li>
      </ul>
    </article>
  </div>
</div>`;
  return layout({
    title: "About",
    description: "How the Algebridge Directory is built, where the videos come from, and what it deliberately does not do.",
    body,
    canonical: "/about/",
  });
}

function notFoundPage() {
  const body = `<div class="wrap">
  <div class="empty-state" style="margin-top:40px">
    <h3>That page does not exist</h3>
    <p>The topic may have been renamed. Try browsing the directory instead.</p>
    <p style="margin-top:16px"><a class="btn btn-primary" href="/">Browse all topics</a></p>
  </div>
</div>`;
  return layout({ title: "Page not found", description: "Page not found.", body });
}

/* -------------------------------------------------------------------------- */
/* write                                                                       */
/* -------------------------------------------------------------------------- */

function writePage(relPath, html) {
  const full = path.join(OUT, relPath, "index.html");
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html);
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

async function main() {
  const { courses, topics } = await loadCurriculum(ROOT);
  const videos = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "videos.json"), "utf8"));
  courseNav = courses;

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  writePage("", homePage(courses, topics, videos));
  writePage("courses", coursesPage(courses, topics));
  for (const course of courses) {
    writePage(course.id, coursePage(course, courses, topics, videos));
  }
  topics.forEach((topic, i) => {
    writePage(`topic/${topic.slug}`, topicPage(topic, i, topics, videos, courses));
  });
  writePage("saved", savedPage(courses));
  writePage("about", aboutPage(topics, videos, courses));
  for (const page of LEGAL_PAGES) {
    writePage(page.slug, legalPage(page, LEGAL_PAGES));
  }
  fs.writeFileSync(path.join(OUT, "404.html"), notFoundPage());

  // Static assets
  copyDir(path.join(ROOT, "assets"), path.join(OUT, "assets"));

  // Search index consumed by the saved page to rebuild cards client-side.
  const index = topics.map((t) => ({
    slug: t.slug,
    title: t.title,
    summary: t.summary,
    course: t.courseShort,
    courseId: t.courseId,
    unit: t.unitTitle,
    level: t.level,
    thumb: videos[t.slug] && !videos[t.slug].missing ? videos[t.slug].thumbnail : "",
    duration: videos[t.slug] && !videos[t.slug].missing ? videos[t.slug].duration : "",
    channel: videos[t.slug] && !videos[t.slug].missing ? videos[t.slug].channel : "",
  }));
  fs.writeFileSync(path.join(OUT, "topics.json"), JSON.stringify(index));

  fs.writeFileSync(
    path.join(OUT, "favicon.svg"),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#1d4ed8"/><path d="M7 21c0-5 3.6-9 9-9s9 4 9 9" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M7 21h18" stroke="#93c5fd" stroke-width="2.4" stroke-linecap="round"/><circle cx="16" cy="9" r="2" fill="#fff"/></svg>`
  );

  const urls = [
    "/",
    "/courses/",
    "/saved/",
    "/about/",
    ...courses.map((c) => `/${c.id}/`),
    ...topics.map((t) => `/topic/${t.slug}/`),
    ...LEGAL_PAGES.map((p) => `/${p.slug}/`),
  ];
  fs.writeFileSync(
    path.join(OUT, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE.url}${u}</loc></url>`).join("\n")}
</urlset>`
  );
  fs.writeFileSync(
    path.join(OUT, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`
  );

  console.log(`Built ${urls.length} pages into dist/`);
  console.log(`  ${topics.length} topics, ${courses.length} courses, ${LEGAL_PAGES.length} legal pages`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
