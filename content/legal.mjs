/**
 * Legal and informational page content for the Algebridge Directory.
 *
 * These are written to describe what the site actually does — no accounts, no
 * analytics, no advertising, localStorage only, third-party embeds from
 * YouTube and fonts from Google. Nothing here claims a practice the site does
 * not follow.
 *
 * DRAFT_NOTICE renders a review banner on the two operative policies. Set
 * SHOW_DRAFT_NOTICE to false once the outstanding details in README.md
 * (legal entity, governing law, DMCA agent, contact address) are confirmed.
 */

export const SHOW_DRAFT_NOTICE = true;

const DRAFT_NOTICE = `<div class="notice"><strong>Draft for review.</strong> This policy is complete in substance but still needs four details confirmed before launch: the operating legal entity, the governing jurisdiction, a monitored contact address, and a named DMCA agent. They are listed in the project README.</div>`;

const notice = () => (SHOW_DRAFT_NOTICE ? DRAFT_NOTICE : "");

export const ABOUT_PAGE = {
  html: `
<p>The Algebridge Directory covers every topic taught from Pre-Algebra through Algebra 2 — Algebra 1, Geometry and Algebra 2 included — free and open to anyone. It exists because the hardest part of getting unstuck in maths is usually not the maths. It is finding one clear explanation of the exact thing that is confusing, without wading through a forty-minute lecture or a page of adverts.</p>

<h2>Two explanations for every topic</h2>
<p>Each topic carries both a plain-language explanation and a rigorous one, and you can switch between them on any page.</p>
<ul>
  <li><strong>Simple</strong> is what a patient friend would say out loud. No notation you have not met, concrete numbers, and the intuition that makes the rule feel inevitable rather than arbitrary.</li>
  <li><strong>In depth</strong> is the precise version. Proper names, general forms, the reason a rule holds, the edge cases, and where the idea reappears later in the sequence.</li>
</ul>
<p>Most sites pick one or the other. Picking one is what forces students to give up: the simple version leaves you unable to answer the exam question, and the rigorous version is unreadable when you are already lost. Having both, one click apart, is the entire point of this directory.</p>

<h2>What is on every topic page</h2>
<ul>
  <li>A hand-picked video from an established maths channel.</li>
  <li>The two explanations described above.</li>
  <li>A worked example broken into numbered steps.</li>
  <li>The two or three mistakes that actually cost students marks on that topic.</li>
  <li>A link to unlimited practice problems on the AlgeBridge platform.</li>
</ul>

<h2>Practice</h2>
<p>This directory explains. It does not drill. Practice happens on <a href="https://algebridge.vercel.app" target="_blank" rel="noopener">AlgeBridge</a>, which generates fresh problems rather than serving a fixed set, so a topic never runs out. Where AlgeBridge has a skill matching the topic you are reading, the practice button opens that exact skill. Where it does not yet, the button opens the platform and the page says so rather than pretending the deep link exists.</p>
`,
};

export const LEGAL_PAGES = [
  {
    slug: "terms",
    title: "Terms of Service",
    navTitle: "Terms of Service",
    effective: "13 August 2026",
    description:
      "The terms governing use of the Algebridge Directory, a free educational resource.",
    html: `
${notice()}
<p>These Terms of Service (the “Terms”) govern your access to and use of the Algebridge Directory at this website (the “Directory”). The Directory is operated by AlgeBridge, a student-led educational initiative (“we”, “us”). By using the Directory you agree to these Terms. If you do not agree, please do not use the Directory.</p>

<h2>1. What the Directory is</h2>
<p>The Directory is a free, publicly available catalogue of mathematics topics covering Pre-Algebra, Algebra 1, Geometry and Algebra 2. Each topic page contains written explanations, a worked example, a list of common mistakes, an embedded third-party video, and a link to a separate practice platform.</p>
<p>The Directory is an educational reference. It is not a school, not a tutoring service, not a certification programme, and not a substitute for instruction from a qualified teacher.</p>

<h2>2. No account, no charge</h2>
<p>The Directory requires no account, no registration and no payment. We do not sell anything through the Directory, do not display advertising, and do not operate a subscription of any kind. Any feature that appears to remember you — saved topics, topics marked as learned, your preferred explanation depth — is stored in your own browser and is described in the <a href="/privacy/">Privacy Policy</a>.</p>

<h2>3. Permitted use</h2>
<p>You may read, share and link to the Directory freely. You may use it for personal study, in a classroom, in tutoring, or in a homework help setting, at no charge and without seeking permission.</p>
<p>You may not:</p>
<ul>
  <li>Copy the written explanations wholesale and republish them as your own work.</li>
  <li>Sell access to the Directory or to its content.</li>
  <li>Attempt to interfere with, overload or gain unauthorised access to the site or the systems that serve it.</li>
  <li>Use automated tools to scrape the site at a rate that degrades it for other users.</li>
  <li>Remove, obscure or alter any attribution to a video creator.</li>
</ul>

<h2>4. Intellectual property</h2>
<h3>Our content</h3>
<p>The written explanations, worked examples, mistake lists, page structure, code and design of the Directory are our original work and remain our property. Mathematical facts themselves are not owned by anyone; our particular expression of them is.</p>
<p>You may quote short passages for non-commercial educational purposes with attribution to the Algebridge Directory and a link back to the page quoted.</p>
<h3>Third-party video content</h3>
<p>Every video on the Directory is embedded from YouTube and was created by, and remains the property of, its respective creator. We do not host, upload, modify, monetise or claim any ownership of that content. Each embed credits the channel by name and links to the original video. See <a href="/copyright/">Copyright &amp; DMCA</a> for takedown requests.</p>

<h2>5. Accuracy and no warranty</h2>
<p>The explanations are written carefully and checked, but the Directory is provided “as is” and “as available”, without warranties of any kind, express or implied, including any implied warranties of merchantability, fitness for a particular purpose, accuracy or non-infringement.</p>
<p>Mathematics content can contain errors, and curricula differ between schools, districts and countries. Your teacher's conventions take precedence over ours for the purposes of your coursework. If you find an error, please tell us — see <a href="/contact/">Contact</a>.</p>
<p>We do not warrant that the Directory will be uninterrupted, error-free, or that third-party videos will remain available. Videos are verified at build time as public and embeddable, but a creator may remove or restrict a video at any time thereafter, which is outside our control.</p>

<h2>6. Third-party links and services</h2>
<p>The Directory links to and embeds services we do not control, including YouTube and the AlgeBridge practice platform. Your use of those services is governed by their own terms and privacy policies, not these Terms. We are not responsible for third-party content, availability or practices.</p>

<h2>7. Limitation of liability</h2>
<p>To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of data, academic outcome, opportunity or profit, arising from your use of or inability to use the Directory — including any reliance on its content. Because the Directory is provided free of charge, our total aggregate liability arising from or relating to the Directory will not exceed one hundred United States dollars (US$100).</p>
<p>Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited, including liability for death or personal injury caused by negligence, or for fraud.</p>

<h2>8. Users under 18</h2>
<p>The Directory is designed to be safe for students of school age. It collects no personal information, requires no account and contains no advertising. If you are under 18, you may use the Directory, and we encourage you to review the <a href="/privacy/">Privacy Policy</a> with a parent, guardian or teacher so that everyone understands the third-party embeds described there.</p>

<h2>9. Changes</h2>
<p>We may update these Terms as the Directory changes. The “last updated” date at the top of this page will always reflect the current version. Material changes will be summarised at the top of this page for a reasonable period. Continued use after a change constitutes acceptance of the revised Terms.</p>

<h2>10. Termination</h2>
<p>We may modify, suspend or discontinue the Directory, in whole or in part, at any time and without notice. Because there are no accounts, there is nothing to terminate on your side; clearing your browser storage removes everything the Directory has kept.</p>

<h2>11. Governing law</h2>
<p>These Terms are governed by the laws of the jurisdiction in which AlgeBridge is established, without regard to conflict-of-law principles. The specific governing jurisdiction and venue are pending confirmation and will be stated here before the Directory is promoted publicly.</p>

<h2>12. Contact</h2>
<p>Questions about these Terms can be sent through the details on the <a href="/contact/">Contact</a> page.</p>
`,
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    navTitle: "Privacy Policy",
    effective: "13 August 2026",
    description:
      "What the Algebridge Directory stores (almost nothing), what stays on your device, and which third parties are involved.",
    html: `
${notice()}
<p>This policy explains what happens to information when you use the Algebridge Directory. It is written to be accurate rather than reassuring, so it names the two third parties that are involved even though we would rather the answer were simply “nobody”.</p>

<h2>Summary</h2>
<ul>
  <li>We do not ask for your name, email address, age, school or anything else. There is no account and no form.</li>
  <li>We do not run analytics, advertising, tracking pixels or fingerprinting of any kind.</li>
  <li>Saved topics, learned topics and your explanation-depth preference are stored <strong>in your browser only</strong> and never transmitted to us.</li>
  <li>Two third parties receive a request from your browser when a page loads: <strong>Google Fonts</strong> (for two typefaces) and, once you press play, <strong>YouTube</strong> (for the video). Both can see your IP address. Details below.</li>
</ul>

<h2>1. Information we collect</h2>
<p>None directly. The Directory has no sign-up, no contact form, no comments, no newsletter and no analytics script. We do not maintain a database of users because there are no users to maintain — the site is a set of static files.</p>

<h2>2. Information stored on your device</h2>
<p>The Directory uses your browser's <code>localStorage</code>, which is storage on your own computer or phone that we cannot read remotely. Three items may be written:</p>
<table>
  <thead><tr><th>Key</th><th>What it holds</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td><code>algebridge-directory:saved</code></td><td>A list of topic names you bookmarked</td><td>To show them on the Saved page</td></tr>
    <tr><td><code>algebridge-directory:learned</code></td><td>A list of topic names you marked as learned</td><td>To track your own progress</td></tr>
    <tr><td><code>algebridge-directory:depth</code></td><td>Either “simple” or “complex”</td><td>To open topics at your preferred depth</td></tr>
  </tbody>
</table>
<p>These contain no personal information, expire only when you clear them, and are specific to the browser you are using — they do not follow you to another device. You can erase all of them at any time by clearing site data in your browser settings. See the <a href="/cookies/">Cookies &amp; Local Storage</a> page for instructions.</p>
<p>The Directory sets no cookies of its own.</p>

<h2>3. Third parties</h2>
<h3>Google Fonts</h3>
<p>Page text uses two typefaces served by Google Fonts. Loading them sends your IP address and basic browser information to Google, in the same way as visiting any page that uses a web font. We receive nothing from this and set no identifiers through it. Google's handling of those requests is described in its own privacy policy.</p>
<h3>YouTube</h3>
<p>Each topic page embeds one video using YouTube's privacy-enhanced player at <code>youtube-nocookie.com</code>. This mode is designed not to set tracking cookies until you actually play a video. Once you press play, YouTube — a Google service — receives your IP address and playback information, and applies its own privacy policy and, where you are signed in to a Google account, may associate the view with that account.</p>
<p>We chose the privacy-enhanced player specifically to keep this minimal, but we cannot make an embedded Google service collect nothing, and we will not claim otherwise. If you prefer to avoid it entirely, do not press play; every topic page is complete in writing without the video.</p>
<h3>Our host</h3>
<p>The site is served by a static web host. Like every web server, it processes standard request data — IP address, user agent, requested URL, timestamp — in order to deliver the page, and may retain short-term operational logs for security and reliability. We do not use those logs to build profiles and do not combine them with anything else.</p>
<h3>The AlgeBridge practice platform</h3>
<p>Practice links open <code>algebridge.vercel.app</code>, a separate product with its own accounts and its own privacy policy. Once you follow that link you are on a different site and this policy no longer applies.</p>

<h2>4. Children's privacy</h2>
<p>The Directory is intended for school-age students and is likely to be used by children under 13. We have designed it so that no personal information is collected from anyone, of any age: there is no registration, no contact form, no messaging, no advertising and no analytics.</p>
<p>Because we collect no personal information, there is nothing for a parent to request, correct or delete from us. Local browser storage can be cleared by the child, a parent or a teacher at any time. If you believe a child has somehow provided personal information to us, please contact us and we will investigate and delete anything found.</p>
<p>Parents and educators should be aware of the YouTube embed described above, since pressing play involves a Google service. Schools with strict requirements may prefer to use the written explanations only, which require no interaction with YouTube.</p>

<h2>5. Your rights</h2>
<p>Data protection laws including the GDPR and the CCPA give you rights over personal data held about you. Since we hold none, there is nothing for us to disclose, correct, port or erase. We do not sell or share personal information — there is none to sell, and we would not sell it if there were. Requests relating to data held by Google as a result of the font or video embeds must be directed to Google.</p>

<h2>6. Security</h2>
<p>The Directory is a static site served over HTTPS, with no database and no user data at rest, which removes most categories of breach risk by construction. No system is perfectly secure, but there is no store of personal information here to compromise.</p>

<h2>7. Changes to this policy</h2>
<p>If the site ever adds something that collects information — analytics, a contact form, accounts — this policy will be updated before that feature ships, and the change will be summarised at the top of this page. The date at the top always reflects the current version.</p>

<h2>8. Contact</h2>
<p>Privacy questions can be sent through the details on the <a href="/contact/">Contact</a> page.</p>
`,
  },
  {
    slug: "cookies",
    title: "Cookies & Local Storage",
    navTitle: "Cookies",
    description:
      "The Algebridge Directory sets no cookies of its own. Here is exactly what it does store and how to clear it.",
    html: `
<p>Short version: this site sets <strong>no cookies of its own</strong>, and shows no cookie banner because there is nothing to consent to. It does use local storage for three small preferences, and it embeds YouTube videos which may set cookies once you press play.</p>

<h2>What we store</h2>
<p>Three items in <code>localStorage</code>, all optional and all created only if you use the relevant feature:</p>
<ul>
  <li><code>algebridge-directory:saved</code> — topics you bookmarked.</li>
  <li><code>algebridge-directory:learned</code> — topics you marked as learned.</li>
  <li><code>algebridge-directory:depth</code> — whether you prefer the simple or in-depth explanation.</li>
</ul>
<p>Local storage differs from cookies in one way that matters here: it is never attached to network requests, so this data is not transmitted to us or to anyone else. It sits on your device until cleared.</p>

<h2>What third parties may store</h2>
<ul>
  <li><strong>YouTube</strong> — videos are embedded through <code>youtube-nocookie.com</code>, which is designed not to set tracking cookies until playback begins. Pressing play may set cookies controlled by Google.</li>
  <li><strong>Google Fonts</strong> — serves two typefaces. Font requests do not set cookies, but do reveal your IP address to Google.</li>
</ul>
<p>Both are described in more detail in the <a href="/privacy/">Privacy Policy</a>.</p>

<h2>How to clear everything</h2>
<p>Clearing site data removes all three items and any YouTube cookies set through the embeds:</p>
<ul>
  <li><strong>Chrome</strong> — Settings → Privacy and security → Third-party cookies → See all site data and permissions, then find this site and delete.</li>
  <li><strong>Safari</strong> — Settings → Privacy → Manage Website Data, search for this site and remove.</li>
  <li><strong>Firefox</strong> — Settings → Privacy &amp; Security → Cookies and Site Data → Manage Data.</li>
  <li><strong>Edge</strong> — Settings → Cookies and site permissions → Manage and delete cookies and site data → See all site data.</li>
</ul>
<p>Using the site in a private or incognito window keeps nothing after the window closes. Saved topics will not persist in that mode, which is expected rather than a fault.</p>

<h2>Do Not Track</h2>
<p>We do not track you, with or without a Do Not Track header, so the setting makes no difference to how this site behaves.</p>
`,
  },
  {
    slug: "copyright",
    title: "Copyright & DMCA",
    navTitle: "Copyright & DMCA",
    description:
      "How the Algebridge Directory handles third-party video, attribution, and takedown requests from creators.",
    html: `
${notice()}
<p>This page explains what we own, what we do not, and how a creator or rights holder can have material removed.</p>

<h2>Videos are embedded, not hosted</h2>
<p>Every video in the Directory is embedded from YouTube using YouTube's standard, publicly available embed player. This means:</p>
<ul>
  <li>We do not host any video file. Nothing is uploaded to, copied onto or stored on our servers.</li>
  <li>We do not modify, re-encode, crop, re-upload or strip branding from any video.</li>
  <li>We do not monetise embedded videos and run no advertising anywhere on the Directory. Any advertising you see inside a player is served by YouTube, and the revenue relationship is between YouTube and the creator, exactly as it would be on YouTube itself.</li>
  <li>Every embed names the channel and links to the original video on YouTube.</li>
  <li>Playback statistics accrue to the creator's own YouTube analytics, as with any embed.</li>
</ul>
<p>Videos are selected by searching YouTube, filtering to a short list of established mathematics education channels, and then verifying programmatically that each video is public and that its creator has left embedding enabled. A creator who disables embedding removes the video from this site automatically, because the player will no longer load it.</p>

<h2>Creator requests</h2>
<p>If you are a creator or rights holder and you would prefer your video not to appear here, we will remove the embed. You do not need to file a formal notice, hire a lawyer or explain your reasoning. Send the video URL and a note that you want it removed, and we will take it out at the next build and confirm to you. We would rather lose an embed than keep one that is unwelcome.</p>

<h2>Formal DMCA notice</h2>
<p>If you prefer to proceed formally under the Digital Millennium Copyright Act, send a written notice containing:</p>
<ol>
  <li>A physical or electronic signature of the copyright owner or a person authorised to act on their behalf.</li>
  <li>Identification of the copyrighted work claimed to have been infringed.</li>
  <li>Identification of the material claimed to be infringing, with enough detail for us to locate it — the page URL on this site is ideal.</li>
  <li>Your contact information, including address, telephone number and email address.</li>
  <li>A statement that you have a good-faith belief that the use is not authorised by the copyright owner, its agent or the law.</li>
  <li>A statement, made under penalty of perjury, that the information in the notice is accurate and that you are the owner or authorised to act on the owner's behalf.</li>
</ol>
<p>Send it through the details on the <a href="/contact/">Contact</a> page. A designated DMCA agent is being registered and will be named here; until that is complete, notices sent to the contact address will be actioned on receipt.</p>
<p>Counter-notices may be submitted by the same route, and should include the elements set out in 17 U.S.C. § 512(g)(3).</p>

<h2>Our own content</h2>
<p>The written explanations, worked examples, mistake lists, code and design are our original work. If you believe any of that text infringes your rights, use the same contact route and we will investigate promptly and remove anything that should not be there.</p>

<h2>Attribution</h2>
<p>Underlying mathematical facts are not copyrightable and belong to no one. The explanations here are written independently rather than adapted from any textbook. Where a named theorem, rule or mnemonic has a conventional attribution, it is named in the text.</p>
`,
  },
  {
    slug: "accessibility",
    title: "Accessibility",
    navTitle: "Accessibility",
    description:
      "What the Algebridge Directory does to stay usable for everyone, and what is not yet done.",
    html: `
<p>Students who need assistive technology are exactly the students least well served by most maths sites. This page states what has been done and, more usefully, what has not.</p>

<h2>Target</h2>
<p>We aim to meet <strong>WCAG 2.1 Level AA</strong>. We do not claim full conformance, because that claim should follow a formal audit and none has been carried out yet.</p>

<h2>What is in place</h2>
<ul>
  <li>Semantic HTML throughout — real headings in order, lists, and a single main landmark per page.</li>
  <li>A “skip to content” link as the first focusable element on every page.</li>
  <li>Full keyboard operation. Every control, filter, tab and button is reachable and operable without a mouse, and focus is visible.</li>
  <li>Body text at 16px with a 1.6 line height, and no maximum-scale restriction, so browser zoom to 200% works normally.</li>
  <li>Text and background colours chosen to meet the 4.5:1 contrast ratio for body text.</li>
  <li>Descriptive link text rather than “click here”, and buttons labelled with the topic they act on.</li>
  <li>Decorative images marked as such so screen readers skip them; video thumbnails carry the topic name via their link.</li>
  <li>Explanation tabs use ARIA tab semantics with correct selected states.</li>
  <li>Every topic is complete as text. The video is a supplement, never the only source of an explanation — this matters for deaf and hard-of-hearing students and for anyone on a slow connection.</li>
  <li>The site works with JavaScript disabled: all content, navigation and topic pages render. Only search, filtering and the saved list require JavaScript.</li>
  <li>No autoplay, no motion-triggered animation, and no content that flashes.</li>
</ul>

<h2>Known gaps</h2>
<ul>
  <li><strong>Captions on videos.</strong> We embed third-party videos and cannot add captions to them. Most videos from the channels used carry captions, but we do not currently verify this per video, and we do not filter out those without. This is the most significant open gap.</li>
  <li><strong>Mathematical notation.</strong> Expressions are written with Unicode characters rather than MathML. This reads acceptably in most screen readers but is less precise than proper mathematical markup, and some symbols may be announced awkwardly.</li>
  <li><strong>No formal audit.</strong> Nothing here has been tested by an accessibility professional or against a full assistive-technology matrix.</li>
  <li><strong>No dark mode</strong> yet.</li>
</ul>

<h2>Telling us about a problem</h2>
<p>If something on the Directory is unusable for you, please say so through the <a href="/contact/">Contact</a> page. Describe the page and what happened. Accessibility reports are treated as bugs, not as feature requests, and are prioritised accordingly.</p>
`,
  },
  {
    slug: "disclaimer",
    title: "Educational Disclaimer",
    navTitle: "Disclaimer",
    description:
      "What the Algebridge Directory is for, what it is not, and the limits of relying on it.",
    html: `
<p>The Directory is a study aid. This page sets out plainly what that does and does not mean.</p>

<h2>It is not a substitute for your teacher</h2>
<p>Curricula vary between countries, states, districts and individual classrooms. Notation, preferred methods, rounding conventions and even the definition of a term can differ from what you see here. Where this site and your teacher disagree, follow your teacher — they are marking your work.</p>

<h2>Accuracy</h2>
<p>Every explanation and worked example has been written and checked with care. That is not the same as being error-free. If you find a mistake, please report it through the <a href="/contact/">Contact</a> page and it will be corrected. We would much rather be told.</p>
<p>Do not rely on this site as the sole source for anything consequential — a graded assessment, a standardised test, or a professional calculation — without checking it against your own materials.</p>

<h2>No guarantee of results</h2>
<p>Using this Directory will not guarantee any particular grade, test score, placement or outcome. Learning depends on far more than the quality of an explanation, and we make no claims about how much anyone's results will improve. We also publish no statistics about student outcomes, because we have not measured any and inventing them would be dishonest.</p>

<h2>Third-party videos</h2>
<p>Videos are made by independent creators and are chosen because they explain a topic well. We do not control their content and have not verified every statement in every video. A creator's approach, notation or emphasis may differ from the written explanation on the same page. Neither is “wrong”; if they conflict in a way that matters, trust your course materials.</p>

<h2>Academic integrity</h2>
<p>This Directory is designed to help you understand a topic, which is why every page leads with an explanation rather than an answer. Using it to learn is exactly the point. Copying a worked example as your own submitted work, or using it during an assessment where outside resources are not permitted, is your responsibility and may violate your school's academic integrity policy.</p>

<h2>Availability</h2>
<p>The Directory is provided free and without any commitment to remain available, at a particular address, or in its current form. Third-party videos may be removed by their creators at any time without notice to us.</p>
`,
  },
  {
    slug: "contact",
    title: "Contact",
    navTitle: "Contact",
    description: "How to report an error, request a video takedown, or ask about the Algebridge Directory.",
    html: `
<p>The Directory has no contact form, because a form would mean collecting and storing your details, and the <a href="/privacy/">Privacy Policy</a> would then have to say so. Email is simpler and leaves you in control of what you send.</p>

<h2>Reaching us</h2>
<p>Correspondence goes to the AlgeBridge initiative, whose main site is <a href="https://algebridge.org">algebridge.org</a>. A dedicated address for the Directory is being set up and will be published here before the site is promoted publicly.</p>

<h2>What to include</h2>
<h3>Reporting a mistake in an explanation</h3>
<p>Send the page address and a short description of what is wrong. If you are quoting a step from a worked example, saying which step number saves a lot of time. Corrections are the most useful thing anyone can send us.</p>
<h3>Creators requesting video removal</h3>
<p>Send the video URL and a note that you want it removed. No formal notice is needed and no reason is required. See <a href="/copyright/">Copyright &amp; DMCA</a> for the formal route if you prefer it.</p>
<h3>Accessibility problems</h3>
<p>Describe the page, the assistive technology you are using and what happened. These are treated as bugs. See <a href="/accessibility/">Accessibility</a> for what is already known.</p>
<h3>Teachers and schools</h3>
<p>The Directory is free to use in class, to link from a course page, or to print from, with no permission needed and no licence to sign. If your school's filtering blocks YouTube, note that every topic is complete as written text without the video.</p>

<h2>What we cannot help with</h2>
<p>We cannot provide individual tutoring, answer homework questions by email, or check your work. There is no support team here. The Directory and the practice platform are the help we can offer.</p>
`,
  },
];
