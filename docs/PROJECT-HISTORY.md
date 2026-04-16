# Adams Industries Website -- Project History

A chronological record of how the site was built, from first decisions through current state. Updated April 2026.

---

## 1. Project Setup

The site is a Hugo static site for Adams Industries LLC, a family-run general contractor based in Baton Rouge, Louisiana. The company has 20+ years in commercial, residential, industrial, marine, and emergency construction. The site's strategic focus is positioning the firm as an approved Solution 2 participating contractor in the Restore Louisiana Homeowner Assistance Program (HUD-funded hurricane recovery for 2020-21 storms).

Hugo was chosen for speed, simplicity, and cheap hosting (static files, no server). A local Hugo binary was vendored at `./bin/hugo` so the project runs without a global install.

Configuration lives in `hugo.toml`. Base URL is `https://adamsindustries.com/`. Relative URLs are enabled (`relativeURLs = true`) so the site can be previewed from the filesystem and served over HTTP without breaking links.

---

## 2. Brand Identity and Visual Design

### Color palette (muted, deliberately desaturated)

- Primary navy: `#1e3a5f`
- Navy dark: `#132a48`
- Navy darker: `#0b1c33`
- Brass/aged gold: `#b88a2b`
- Gold dark: `#8c6a1f`
- Soft gold callout background: `#f1e8d2`
- Soft blue section background: `#e7edf4`
- Alternating background tint: `#f5f7fa`
- Body text: `#242a33`, muted text: `#5a6472`
- Hairlines: `#dde1e7`

An earlier iteration used a brighter palette (`#0A2A5E` navy + `#FFB71B` gold). The owner chose to pull it back to something quieter and more refined.

### Typography

- Display and labels: Barlow Condensed (uppercase, heavy)
- Body: Roboto
- Loaded via `<link>` tags in the `<head>`, not CSS `@import` (sandbox environments silently drop `@import`)

### Logo

Three SVG variants live in `static/`:

- `logo.svg` -- navy star + silver/brass text, for light backgrounds
- `logo-light.svg` -- white/brass, for dark hero sections
- `logo-mono.svg` -- monochrome

The masthead does not display a logo image. The owner preferred a typographic wordmark ("Adams Industries" in white, "LLC" in brass). The homepage hero uses the logo as a large background watermark behind the headline.

### Design direction

Dark navy masthead and hero bands. White or pale blue-tinted content sections. Brass/gold used sparingly for button fills, metric values on dark backgrounds, and hover accents. One prominent CTA per section. Spacious and responsive via `clamp()` and mobile breakpoints.

### Magazine framing (removed)

Earlier iterations framed the site as a magazine with Vol./Issue copy, "Field Notes," "Masthead," "On Record," "Dispatch," and similar kickers. The owner explicitly asked to remove all of it. The site now uses plain section names and plain layout. The word "Inquire" for the contact CTA was kept by owner request.

---

## 3. Site Structure and Templates

### Layouts

```
layouts/
  _default/
    baseof.html         -- base shell (head, masthead, main block, colophon)
    list.html           -- section index template
    single.html         -- single-page template
    single.amp.html     -- standalone AMP template (does not extend baseof)
  blog/list.html        -- custom blog list, date-sorted descending
  contact/list.html     -- custom two-column layout with contact form
  index.html            -- homepage
  partials/
    head.html           -- meta tags, OG tags, Google Fonts, CSS, RSS, AMP cross-link
    masthead.html        -- sticky navy header with wordmark and mobile hamburger
    colophon.html        -- four-column footer
    inquire.html         -- reusable contact CTA block
    social-icons.html    -- Facebook/Instagram/TikTok SVG icons
```

### How baseof works

Minimal shell: HTML head via `head.html` partial, masthead partial, a `main` block that child templates fill, colophon partial, and a JSON-LD script block pulled from page front matter.

### Key template features

- **list.html**: page hero, optional disclaimer box, body markdown, configurable feature grid (2-up or 3-up), optional `afterBody` HTML section, reusable Inquire CTA.
- **single.html**: page hero with title/deck/optional button, body markdown as article, Inquire CTA.
- **index.html** (homepage): cover section with skyline background and navy overlay, Solution 2 banner, four-sector feature grid, by-the-numbers metrics section, "Why Adams Industries" section from markdown body, Inquire CTA.
- **blog/list.html**: page hero, disclaimer with RSS and AMP info, two-column feature grid of posts (newest first).
- **contact/list.html**: two-column layout with article content on the left, contact form on the right.

### AMP

Blog posts and service detail pages get AMP twins automatically via Hugo's output format system. The AMP template is standalone (does not extend baseof), inlines all CSS in `<style amp-custom>`, and has bidirectional canonical linking to the HTML version. AMP was added because the owner requested it. Not deeply invested in, but maintained.

---

## 4. Content

### Navigation (7 items, owner-specified order)

1. Home (`/`)
2. Services (`/services/`)
3. Solution 2 (`/solution-2/`)
4. Portfolio (`/portfolio/`)
5. Blog (`/blog/`)
6. About (`/about/`)
7. Inquire (`/contact/`) -- label is "Inquire," page slug is "contact"

Off-menu pages accessible via deep links and footer: `/process/`, `/team/`, `/credentials/`.

### Homepage

Headline: "We Answer the Call. Building and Rebuilding Louisiana." Features a four-sector grid (Commercial, Residential, Industrial & Marine, Emergency), a by-the-numbers section (20+ years, A+ BBB, 4 sectors, 64 parishes, 1 phone number), a Solution 2 banner directly under the jumbotron, and a "Why Adams Industries" section from the page body markdown. JSON-LD uses GeneralContractor schema.

### Services

Overview page with links to three detail pages:

- `services/commercial-recovery.md` -- retail, office, hospitality, healthcare
- `services/residential-recovery.md` -- new builds, additions, post-storm rebuilds, parish-correct permitting, insurance documentation
- `services/emergency-response.md` -- stabilization, board-up, water extraction, damage documentation

### Solution 2 (critical strategic page)

Treated as first-class content. Six-step feature grid explaining program mechanics. Detailed `afterBody` section covering why Adams Industries fits the program, what homeowners should have ready, what a project looks like, honest notes (no advance payments, ECR is the ceiling, documentation requirements), and links to official resources. Disclaimer flags all info as summaries of the official state program. Custom Inquire CTA: "Talk Through a Solution 2 Project." JSON-LD uses Service schema.

### Other pages

- **Process**: "How We Build" -- five-step project methodology.
- **Portfolio**: describes project types, not specific clients. Photos/references available on request, not publicly posted. No fabricated client names or metrics.
- **Team**: functional roles (principal, supervisors, trades, back office, emergency crew, specialty partners). No named individuals or headshots.
- **Credentials**: BBB A+ rating, LSLBC verification, general liability + workers' comp, references on request.
- **About**: company history, family-run focus, 20+ year Louisiana presence.
- **Contact/Inquire**: two-column layout, contact form with anti-spam protections.

### Blog (11 posts)

All posts are backdated to align with real Restore Louisiana program milestones. Each references official sources (restore.la.gov, gov.louisiana.gov, KPLC, WBRZ) with links and summaries in the site's own words. Posts in chronological order:

- 2022-02: Restore Louisiana launches for 2020-21 homeowners
- 2022-04: Solution 1 vs Solution 2 (explaining program paths)
- 2022-07: Vetting a Solution 2 contractor
- 2022-10: The project plan -- what to expect
- 2023-01: Adams Industries joins Solution 2
- 2023-03: The 180-day clock (construction start deadline)
- 2023-05: Restore Louisiana expands eligibility
- 2023-07: Survey deadline approaching (August 1, 2023)
- 2023-10: Application deadline extended (October 31, 2023)
- 2023-11: After the deadline (post-deadline projects continuing)

RSS feed is auto-generated. Each post gets an AMP twin automatically.

---

## 5. Static Assets

### CSS

Single unified stylesheet at `static/css/styles.css` (~600+ lines). Color variables in `:root`. Responsive typography via `clamp()`. Grid-based layouts. Mobile-first with media queries. Covers typography, header/nav, hero/cover, Solution 2 banner, interior pages, feature cards, numbers section, buttons, forms, footer, and responsive breakpoints. Cache-busted in the `<head>` via build timestamp.

### JavaScript

`static/js/contact-form.js` -- client-side form handler. Validates required fields, checks the honeypot, enforces a 2-second time-to-submit minimum, extracts the Turnstile token, and POSTs to the Google Apps Script endpoint using `text/plain` content type (avoids CORS preflight that Apps Script cannot answer). Handles success/error messaging, form reset, and Turnstile widget reset.

### Media

- `static/media/brskyline-bw.jpg` -- desaturated Baton Rouge skyline, used as hero background
- `static/media/la-flag.svg` -- Louisiana flag icon

### SEO and crawlers

- `static/robots.txt` -- 70+ lines documenting firm facts and Solution 2 program info for AI crawlers. Allow-lists GPTBot, ClaudeBot, anthropic-ai, Google-Extended, CCBot, PerplexityBot, Applebot, Meta-ExternalAgent, MistralAI, cohere-ai, YouBot, Diffbot, plus standard search engines.
- `static/llms.txt` -- markdown summary of company info and Solution 2 mechanics, following the emerging LLM-crawler convention.

---

## 6. Contact Form System

### Architecture

Client-side form (Hugo template + JavaScript) posts to a Google Apps Script backend, which verifies a Cloudflare Turnstile token, runs anti-spam checks, and appends rows to a Google Sheet with optional email notification.

### Anti-spam layers

1. **Honeypot** -- hidden `website` field. Bots auto-fill it; the backend silently drops those submissions.
2. **Time-to-submit check** -- submissions faster than 2 seconds get rejected. Bots typically submit instantly.
3. **Cloudflare Turnstile** -- managed-mode CAPTCHA widget. Usually invisible for real users; suspicious visitors get a quick challenge.
4. **Required-fields validation** -- name, phone, and service must be present.

All four are enforced both client-side (for UX) and server-side in the Apps Script (authoritative).

### Setup steps completed

1. Created a Google Sheet for form submissions.
2. Created a Google Apps Script project ("Adams Industries -- Inquiry Form") and pasted in `docs/apps-script.gs`.
3. Added script properties: `SHEET_ID`, `TURNSTILE_SECRET`, `NOTIFY_EMAIL`, `ALLOWED_ORIGIN`.
4. Deployed the Apps Script as a web app (execute as owner, access: Anyone). Granted permissions for Sheets, external services, and email.
5. Set up Cloudflare Turnstile site (`adamsindustries-www`) with hostnames `gatorboots.github.io` and `www.adamsindustries.com`, widget mode: Managed.
6. Added the Turnstile site key and Apps Script endpoint URL to `hugo.toml`.

### Setup steps remaining

- Fill in `SHEET_ID` in the Apps Script properties (the Google Sheet ID from the URL).
- Fill in `TURNSTILE_SECRET` in the Apps Script properties (the Cloudflare Turnstile secret key).
- Fill in `NOTIFY_EMAIL` if email notifications are wanted.
- Test the form end-to-end on the live site: submit a test entry, confirm it lands in the Sheet, confirm email arrives if configured.

### Configuration values

| Key | Location | Value |
|-----|----------|-------|
| Form endpoint | `hugo.toml` | `https://script.google.com/macros/s/AKfycbyx5vRcQKT093mKbouIthlaN7aka8cKPK4tCHeqdxiMtNln_imhdnXKjNShD9FjGVAV9A/exec` |
| Turnstile site key | `hugo.toml` | `0x4AAAAAAC-foe0wKVwLd93v` |
| Turnstile secret key | Apps Script properties | (private, set in Cloudflare dashboard) |
| Sheet ID | Apps Script properties | (from Google Sheet URL) |
| Notify email | Apps Script properties | (optional) |

### Reference files

- `docs/FORM_SETUP.md` -- full setup guide
- `docs/apps-script.gs` -- Google Apps Script backend code
- `static/js/contact-form.js` -- client-side form handler
- `layouts/contact/list.html` -- form template

---

## 7. Build and Development

### Commands

```bash
# Development server with live reload (http://localhost:1313)
./bin/hugo server -D

# Production build (writes to public/)
./bin/hugo --minify

# New content from archetype
./bin/hugo new services/new-service.md
./bin/hugo new blog/YYYY-MM-slug.md
```

### Deployment

The site is compatible with Netlify, Cloudflare Pages, S3+CloudFront, or GitHub Pages. Build command: `hugo --minify`. Publish directory: `public`. The `baseURL` in `hugo.toml` should match the production domain.

GitHub Actions rebuilds the site on push.

---

## 8. Developer Notes and Gotchas

1. **`relativeURLs = true` is critical.** Enables both file:// preview and http:// serving. Keep it on.

2. **Google Fonts via `<link>`, not `@import`.** The preview sandbox silently drops `@import`.

3. **`safeURL` for tel: and mailto: links.** Go templates auto-escape URL values from `.Site.Params`, rendering them as `#ZgotmplZ`. All phone/email links use `| safeURL`.

4. **Never edit `public/` directly.** It is gitignored and regenerated on each build.

5. **AMP output format detection.** `.OutputFormats.Get "AMP"` sometimes returns nil. Use `.AlternativeOutputFormats` iteration and match on `.Name | lower == "amp"`.

6. **CSS changes require a full rebuild.** `hugo server` does not always pick up CSS changes; run `hugo --minify` to force it.

7. **Homepage hero logo uses `<img>`, not `background-image`.** Responsive scaling via flex container. Do not regress to background-image.

8. **No em dashes per owner preference.** Some existing pages still have them; a content pass would align everything with the owner's voice.

9. **Magazine framing was removed.** All Vol/Issue/magazine section names are gone. Do not reintroduce.

10. **Do not regress AMP.** Maintained because the owner asked for it.

11. **Content integrity rules:** Portfolio uses project types, not fake clients. Team uses functional roles, no named personas. Blog cites real sources. All blog dates are real and tied to actual program milestones.

12. **License number is not displayed.** The site says "licensed" and links to LSLBC. Adding the specific number would need the owner to provide it.

13. **Real client references are not listed.** Everything is framed as "available on request."

---

## 9. Open Items

- Fill in `SHEET_ID` and `TURNSTILE_SECRET` in Apps Script properties.
- Test the contact form end-to-end on the live site.
- Content pass to remove remaining em dashes if desired.
- Add specific Louisiana contractor license number to credentials page if owner provides it.
- DNS/hosting for `adamsindustries.com` not configured in the repo yet.
- Instagram and TikTok social links are placeholder/disabled in `hugo.toml`.
