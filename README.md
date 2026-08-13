# Algebridge Library

A free directory of every topic from Pre-Algebra through Algebra 2. Each topic has a
hand-picked video, a plain-English explanation, a rigorous explanation, a worked example,
a list of the mistakes that actually cost marks, and a link to unlimited practice on
[AlgeBridge](https://algebridge.vercel.app).

**130 topics · 3 courses · 130 verified videos · 43 practice deep links**

| | Pre-Algebra | Algebra 1 | Algebra 2 |
|---|---|---|---|
| Units | 7 | 9 | 9 |
| Topics | 48 | 46 | 36 |

## Before this goes public

Four details in the legal pages are placeholders that only you can fill in. Until they
are set, `content/legal.mjs` renders a "Draft for review" banner on the Terms, Privacy
and Copyright pages.

1. **Operating legal entity.** The pages say "AlgeBridge, a student-led educational
   initiative". If AlgeBridge is incorporated, or is a project of an incorporated entity,
   use the registered name.
2. **Governing jurisdiction.** Terms §11 currently says the jurisdiction is pending. It
   needs a state/country and a venue.
3. **A monitored contact address.** `/contact/` deliberately does not publish an address
   yet, because publishing one that bounces is worse than publishing none. Set
   `SITE.contactEmail` in `scripts/build.mjs` and add it to the Contact page copy.
4. **A named DMCA agent.** Registering an agent with the U.S. Copyright Office costs
   about $6 and is what gives a site safe-harbour protection. Named in `/copyright/`.

Once those are set, flip `SHOW_DRAFT_NOTICE` to `false` at the top of
`content/legal.mjs` and rebuild.

## How it works

No framework and no dependencies. `scripts/build.mjs` reads the curriculum, merges in the
verified video data and writes 144 static HTML pages. Every topic is a real page, so the
content is indexable rather than hidden behind a client-side router.

```
data/
  pre-algebra.mjs     curriculum: units → topics → both explanations, example, mistakes
  algebra-1.mjs
  algebra-2.mjs
  videos.json         generated — one verified YouTube video per topic
content/
  legal.mjs           Terms, Privacy, Cookies, Copyright, Accessibility, Disclaimer, Contact
scripts/
  build.mjs           static site generator
  fetch-videos.mjs    video sourcing + verification pipeline
  verify.mjs          pre-deploy checks
assets/               styles.css, app.js (copied verbatim into dist/)
dist/                 generated output — gitignored
```

### Commands

```bash
npm run build      # generate dist/
npm run dev        # build and serve on http://localhost:4810
npm run verify     # pre-deploy checks (see below)
npm run videos     # fill in any topic missing a verified video
```

## The video pipeline

This is the part worth understanding, because it is where a site like this usually starts
lying. No video ID is ever written by hand or guessed. For each topic,
`scripts/fetch-videos.mjs`:

1. Searches YouTube with the topic's query and parses the real result list.
2. Discards every result whose channel is not on a fixed trusted list (Khan Academy,
   The Organic Chemistry Tutor, Math Antics, Professor Dave, Mario's Math Tutoring and a
   handful of others), and every video under 2.5 or over 45 minutes.
3. Verifies the survivor twice: oEmbed proves the video exists and is public, and the
   watch page proves `playableInEmbed` so the iframe cannot render "Video unavailable".
4. Caches the result, with channel, title, duration and verification date.

A topic with no trusted match is left **without** a video rather than filled with a random
result. Currently all 130 topics have one. The current spread:

| Channel | Videos |
|---|---|
| Khan Academy | 66 |
| The Organic Chemistry Tutor | 46 |
| Math with Mr. J | 9 |
| Mario's Math Tutoring | 5 |
| Professor Dave Explains | 3 |
| Brian McLogan | 1 |

Videos are embedded via `youtube-nocookie.com`, credited by channel name under every
player, and linked back to the original. Nothing is hosted, re-uploaded or monetised.

## Verification

`npm run verify` gates a deploy on five checks:

- every internal link resolves to a page that exists (5,305 links)
- no unrendered `~maths~` markup or template leaks reached the HTML
- all 130 topic pages contain both explanations, the example, the mistakes and the CTA
- every video ID is well formed and carries channel attribution
- every practice deep link returns 200 on the live AlgeBridge platform (43 links)

## Practice links

Topics deep-link to the exact matching skill where AlgeBridge has one:
`algebridge.vercel.app/learn/{unitId}/{skillId}`. AlgeBridge currently has 13 units and
46 skills, all Algebra 1 shaped, so 43 of the 130 topics deep-link and the rest open the
platform's front page. Those pages say so rather than implying a link that does not
exist. Adding skills to AlgeBridge is what closes the gap — the mapping lives in the
`practice` field of each topic.

## Design

Layout and interaction language follow [doq.world](https://doq.world): warm paper
background, white cards with a hairline border and a 1px shadow, pill filters, one bold
accent block carrying a large serif number, and a secondary strip nav. Typography is
Fraunces for headings and Inter for body, matching Doq. Colour is AlgeBridge's own:
`#2563eb` primary and `#1d4ed8` for the accent blocks, taken from the `bridge` palette in
the main platform's Tailwind config.

## Deliberate omissions

- No accounts, and no way to create one.
- No user counts, testimonials, ratings or outcome statistics. There is no user base to
  measure and inventing numbers would be dishonest.
- No analytics, advertising or tracking of any kind. The Privacy Policy names the only
  two third parties involved (Google Fonts and, on play, YouTube) rather than claiming
  the site touches nobody.
- No original video content. The explanations are written; the videos are curated.
