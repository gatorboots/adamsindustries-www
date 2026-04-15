# Memory — Context for adamsIndustries-www

Persistent decisions, facts, and lessons from building this site. Read this alongside `skill.md` before making changes. Keep this file current — when a decision changes, update the relevant section here so the next session doesn't re-litigate it.

Paired convention:
- **`skill.md`** = how the project works (mechanics).
- **`memory.md`** = why it's that way (context, decisions, do's and don'ts).

---

## Who the client is

- **Firm:** Adams Industries LLC
- **Type:** family-run general contractor
- **Location:** Baton Rouge, Louisiana
- **Phone (canonical):** (985) 255-2435
- **Email (canonical):** info@adamsindustriesllc.com
- **Facebook:** https://www.facebook.com/adamsindustriesbr
- **Website history:** previously used a Wix builder at adamsindustriesbr.wixsite.com/build — replaced by this Hugo site
- **Experience:** 20+ years in Louisiana construction
- **Credentials:** Louisiana State Licensing Board for Contractors (licensed), general liability, workers' comp, BBB A+

### Not to be confused with
Adams Industries LLC is **not** ALERT FM and **not** Global Security Systems. Those are separate entities in the same operator's orbit. When working on this site, treat Adams Industries as a standalone construction firm — the owner specifically asked to disregard ALERT FM history when building this site.

---

## What the firm does

Four sectors under one roof:

- **Commercial** — retail, office, hospitality, healthcare, multi-tenant
- **Residential** — new builds, additions, remodels, post-storm rebuilds
- **Industrial & marine** — specialty construction, with specialty-partner coordination
- **Emergency response** — post-storm stabilization, board-up, water extraction, insurance-ready damage documentation

Self-performs design + project management + skilled labor; brings in specialty partners for marine/heavy-industrial scope.

---

## Solution 2 — the strategic lever

**Critical to the business moving forward.** Treat the Solution 2 page and content as a first-class thing, not a side-page.

- Solution 2 is the homeowner-managed construction path of the **Restore Louisiana Homeowner Assistance Program** — the state- and HUD-funded recovery program for 2020-21 hurricane damage (Laura, Delta, Zeta, Ida, May 2021 severe storms).
- **Adams Industries is an approved Louisiana-licensed contractor available through Solution 2.**
- Program launched Feb 2022; homeowner application deadline closed Oct 31, 2023; *active Solution 2 projects continue through construction.*
- Official program page: https://www.restore.la.gov/solution-2-contractors
- Key mechanics to keep straight on the site:
  - Contractors must be Louisiana-licensed, verified by LSLBC
  - Homeowner + contractor sign a Project Plan with timeline + draw schedule
  - Must begin within **180 days** of grant execution with a documented inspection
  - Must complete within **365 days** absent written hardship extension
  - Up to **5 progress draws**, two-party payments after inspection
  - **No advance payments**, ever
  - All work must fall inside program-approved **Estimated Cost of Repairs (ECR)**
  - Change orders require pre-approval

Every piece of Solution 2 copy on the site should be accurate against the above. Always link to the official restore.la.gov page for authority.

---

## Brand decisions (durable)

### Visual identity

- **Palette (current, muted):**
  - Navy blue `#1e3a5f` — primary
  - Brass / aged gold `#b88a2b` — accent
  - White paper, blue-tinted off-whites for alternating sections
  - Deliberately **desaturated from the earlier "poppy" navy+gold** (`#0A2A5E` + `#FFB71B`). If asked for muted/refined, the current palette IS the muted version — don't pull back toward the punchy values.
- **Typography:**
  - Barlow Condensed for display + eyebrow/labels (uppercase, heavy)
  - Roboto for body
  - Loaded via `<link>` in `<head>`, not CSS `@import`
- **Logo:**
  - `static/logo.svg` — original (navy star + silver/brass ADAMS + navy INDUSTRIES/LLC). Used on light backgrounds.
  - `static/logo-light.svg` — white/brass version for the dark hero jumbotron backdrop. Don't delete it; the homepage hero depends on it.
  - **Masthead nav does NOT show the logo image** — by owner preference after trying it small. Uses a typographic wordmark instead ("Adams Industries" in white + "LLC" in brass).
  - The full logo lives in the homepage hero as a large, mask-softened watermark behind the headline.

### Page layout posture

- Dark navy masthead and hero bands.
- White or very pale blue-tinted content sections between.
- Gold (brass) used sparingly — button fills, kicker tick marks (dropped in the clean redesign), number values on dark backgrounds, hover accents.
- One prominent CTA per section. Don't stack CTAs.
- Spacious, readable, responsive via `clamp()` + mobile breakpoints.

### Magazine metaphor — REMOVED

Earlier iterations framed the site as a magazine (Vol. 22 · Issue 01 · Spring 2026; cover story; In This Issue TOC; "Field Notes" / "Masthead" / "On Record" / "Dispatch" / "Inquire" / "Bureau" section names; Act I-V and Plate 01 kickers; pullquotes; editorial bylines). The owner asked to remove all of that and return to plain, cleaner layouts. The magazine framing is gone from layouts, partials, CSS, and content.

**Do not reintroduce the magazine metaphor** unless explicitly asked. Use plain section names, plain kickers (or none), no Vol/Issue copy, no pullquotes, no byline chips.

Nav labels per owner's explicit request: Home, Services, Solution 2, Portfolio, Blog, About, Inquire. The word "Inquire" was kept by the owner's choice and is the only survivor of the magazine vocabulary. That's fine — it reads as a verb, not a magazine section.

Pages not in nav but still accessible (footer + deep links): `/process/`, `/team/`, `/credentials/`.

---

## Voice decisions

The owner wants the site to sound **distinctly not-LEMOINE**. LEMOINE is a large institutional construction firm with corporate/polished voice ("One Mission. Yours.™", "Building peace of mind"). Adams' voice is:

- **Plain-spoken, direct, blunt where earned.**
- **Louisiana-specific** — references parishes, the Gulf, hurricane season, insurance adjusters, state-specific code, etc.
- **Family-run and small** — differentiates by being the one who answers their own phone. The tagline is "Twenty Years in Hurricane Country. We Still Answer Our Own Phones."
- **Self-aware about size** — "Not the biggest contractor in the state. We don't want to be."
- **Proud of storm response capability** — lean into the hurricane-country angle; it's the strongest differentiator.
- **Honest about portfolio and team** — do not fabricate specific client names, project numbers, or staff personas. Portfolio describes *kinds of work*, team describes *functional roles*, and references are available on request rather than posted publicly.

### Phrases and concepts that work

- "We still answer our own phones."
- "The crew you can get on the phone."
- "One point of accountability from first meeting through final walkthrough."
- "The small stuff that only matters after something goes wrong."
- "When the storm comes, we're already on the road."
- "Not a call center in sight."
- Louisiana framing: "parish-correct permitting", "hurricane country", "the Gulf doesn't care", "64 parishes served".

### Owner writing preferences (from CLAUDE.md)

- Plain, spoken grammar.
- **No em dashes** — the owner specifically avoids them. *Note: several pages in this site currently use em dashes heavily. That is a debt against the owner's stated preference — if doing a content pass, consider replacing em dashes with periods or parenthetical commas.*
- Short sentences are fine.
- Read drafts out loud for cadence.
- Blunt, earned, a little world-weary. Names the grift without sounding like part of it.

---

## Content integrity rules

- **Portfolio page:** describes project types, not specific clients. Disclaimer in place noting that photos/references are available on request but not publicly posted. Do not add fake client names or fabricated project stats.
- **Team page:** describes functional roles (principal, supervisors, trades, back office, emergency crew, specialty partners) without named individuals or headshots. If real staff info is provided later, it can be added, but not invented.
- **Blog posts referencing press releases:** summarize in own words, cite the official URL. Do not reproduce more than ~15 words verbatim from any external source. Blog posts to date cite real sources (restore.la.gov/news, gov.louisiana.gov, KPLC, WBRZ) and can be trusted.
- **All dates in the backdated blog posts are real** — keyed to actual program milestones (Feb 2022 launch, May 2023 eligibility expansion, Aug 1 2023 survey deadline, Oct 31 2023 application deadline, Nov 2023 post-deadline). Do not change dates without a reason.

---

## SEO / AI-crawler strategy (durable)

- Robots.txt is **intentionally** stuffed with firm context and Solution 2 facts in leading comment block. That's by owner request — Solution 2 is strategic to the business, and the comment block is meant to surface those facts to AI crawlers that parse robots.txt.
- `llms.txt` exists at site root with the same info in markdown, per the emerging LLM-crawler convention.
- Explicitly allow all major AI crawlers (OpenAI, Anthropic, Google-Extended, CCBot, Perplexity, Apple, Meta, Mistral, Cohere, You.com, Diffbot) plus standard search engines.
- JSON-LD GeneralContractor + Service schemas per page.
- AMP is implemented (for blog posts and service detail pages) but is **no longer a Google SEO win** (removed from Top Stories in June 2021). Maintained because the owner asked; don't invest time deepening it unless the owner asks.
- RSS feeds for home and blog sections. Every HTML page declares the feed via `<link rel="alternate">`.

---

## Decisions that came up during development

- **Don't edit files in `public/`** as a durable practice. `public/` is Hugo's build output, gitignored, regenerated. The *exception*: touching a rendered file purely to force the preview panel to refresh onto it (harmless — will be overwritten on the next build).
- **Relative URLs (`relativeURLs = true`)** is on because the preview sandbox loads files via `file://`, where absolute paths like `/css/styles.css` fail. Don't turn this off unless the site is guaranteed to only be served via HTTP root.
- **Google Fonts via `<link>`** not `@import`. The import form was silently dropped by the preview sandbox early on and broke the whole stylesheet from loading.
- **`tel:` and `mailto:` need `safeURL`** when pulled from `.Site.Params.*` in templates — Go's auto-escaping renders them as `#ZgotmplZ` otherwise.
- **Local Hugo binary** at `./bin/hugo` is the canonical way to build. Do not assume a global `hugo` command exists.
- **Homepage hero uses a large watermark version of the logo** positioned via a `.cover-backdrop` flex container containing an `<img>`. The `<img>` approach (not `background-image`) is what makes it scale responsively across viewports. Don't regress to a background-image approach.

---

## Things the owner has explicitly asked for

- Solution 2 page: dedicated, detailed, linked from the homepage via a "We Care. We're Ready." banner directly under the jumbotron.
- Navy + gold color palette, muted (not poppy).
- Clean design, no magazine styles or nomenclature.
- Mobile-crucial — prior iterations had logo scaling issues on mobile that have since been fixed.
- White background on content sections.
- Blog with at least 10 posts backdated to the Solution 2 program launch window.
- RSS feed for syndication.
- AMP compliance for Google (with the SEO-caveat noted above).
- robots.txt and llms.txt stuffed with Solution 2 context.

## Things the owner has explicitly asked to avoid

- Magazine framing (Vol./Issue, "In This Issue", Field Notes, Masthead, On Record, Dispatch, Inquire as section name, Bureau, Letters to the Editor, Plate, Act, Chapter, Section Roman numerals).
- Anything that makes Adams look corporate or large — stay scrappy, family-run, accessible.
- Fabricated client names, project metrics, or staff personas.
- ALERT FM references on this site.

## Open questions / not yet resolved

- **Actual Louisiana contractor license number.** The site says "licensed" and points to LSLBC for verification but does not display a specific license number. If the owner wants one on the credentials page, it would need to be added to `content/credentials/_index.md`.
- **Real client references.** Every mention of references on the site frames them as "available on request." If the owner wants specific project photos or client quotes added, that's new content to gather — don't fabricate.
- **Em-dash cleanup.** The content was written with em dashes despite the owner's stated preference against them. A content pass to convert em dashes to periods or commas would bring the voice in line with the owner's stated voice preferences.
- **Domain / deployment.** The site is built for `https://adamsindustries.com/` per `baseURL` in `hugo.toml`. Actual DNS / hosting is not configured from this repo. Build is Netlify/Cloudflare Pages compatible (`hugo --minify`, publish `public/`).

---

## Last updated

This file reflects the state of the project as of the session that removed the magazine framing, muted the color palette, simplified the nav to 7 items, and wrote this `memory.md` + the paired `skill.md`.
