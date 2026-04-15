# Skill — Working on adamsIndustries-www

This file is a practical reference for anyone (human or AI) picking up work on this project. Read the matching `memory.md` in this same directory for business/brand decisions and context that doesn't live in the code.

## What this is

A Hugo static site for **Adams Industries LLC**, a Baton Rouge, Louisiana, family-run general contractor. The site is navy-blue + brass, sans-serif, mobile-friendly, AMP-enhanced on content pages, and specifically positions the firm as a participating contractor in **Solution 2** of the Restore Louisiana Homeowner Assistance Program.

- **Public URL** (intended): https://adamsindustries.com/
- **Source**: everything in this repo except `public/`
- **Build output**: `public/` (gitignored, regenerated on every build)

## Stack

- **Hugo** (static site generator) — local binary at `./bin/hugo` so the project is runnable without a global Hugo install
- **Go templates** in `layouts/`
- **Markdown + YAML frontmatter** in `content/`
- **Static assets** in `static/` (copied verbatim to site root during build)
- **Google Fonts** Barlow Condensed + Roboto (loaded via `<link>` in `<head>`)
- Output formats: **HTML** + **RSS** + custom **AMP**

## Build & run

```bash
# Development — live-reload server on http://localhost:1313
./bin/hugo server -D

# Production build — writes to public/
./bin/hugo --minify

# New service/blog post from archetype
./bin/hugo new services/new-service.md
./bin/hugo new blog/YYYY-MM-some-slug.md
```

Never edit files in `public/` directly; they are regenerated.

## Directory layout

```
adamsIndustries-www/
├── hugo.toml                        # Site config, menu, shared params, output formats
├── archetypes/default.md            # Template for `hugo new`
├── content/
│   ├── _index.md                    # Homepage (cover + features + numbers + letter)
│   ├── services/
│   │   ├── _index.md                # Services overview
│   │   ├── commercial-recovery.md
│   │   ├── residential-recovery.md
│   │   └── emergency-response.md
│   ├── solution-2/_index.md         # Dedicated Solution 2 page
│   ├── process/_index.md            # How We Build
│   ├── portfolio/_index.md          # Project-type catalogue (no fabricated clients)
│   ├── team/_index.md               # Team (functional roles, no named personas)
│   ├── credentials/_index.md        # BBB A+, license, insurance verification
│   ├── about/_index.md              # About
│   ├── contact/_index.md            # Contact (nav label "Inquire")
│   └── blog/                        # 10 backdated Solution 2 posts
│       ├── _index.md
│       └── YYYY-MM-slug.md          # One post per file with `date:` frontmatter
├── layouts/
│   ├── _default/
│   │   ├── baseof.html              # Base shell: head + masthead + main block + colophon
│   │   ├── list.html                # Section index template (renders features[], afterBody, etc.)
│   │   ├── single.html              # Single-page template (service details, etc.)
│   │   └── single.amp.html          # Standalone AMP template (does NOT extend baseof)
│   ├── blog/list.html               # Custom blog list — iterates .Pages.ByDate.Reverse
│   ├── contact/list.html            # Custom contact layout with form
│   ├── index.html                   # Homepage
│   └── partials/
│       ├── head.html                # <head> contents + AMP cross-link
│       ├── masthead.html            # Wordmark + menu
│       ├── colophon.html            # Footer
│       └── inquire.html             # Reusable contact-CTA block
├── static/
│   ├── css/styles.css               # One stylesheet for everything (HTML output)
│   ├── logo.svg                     # Brand mark (navy star, brass + silver wordmark)
│   ├── logo-light.svg               # White/brass version for use on dark backgrounds
│   ├── robots.txt                   # Stuffed with Solution 2 context + AI crawler allowlist
│   └── llms.txt                     # Markdown summary for LLM/AI crawlers
├── bin/hugo                         # Vendored Hugo binary (gitignored)
└── public/                          # Build output (gitignored)
```

## Content model — YAML frontmatter keys

All content pages are Markdown with YAML frontmatter. These are the conventions the templates read:

### Always
- `title` — page H1 (string)
- `description` — meta description / OG description (string)
- `deck` — subtitle under the H1 (string, optional)

### Homepage only (`content/_index.md`)
- `coverHeadline` — large display headline (can include `<br>`, HTML-safe)
- `coverDeck` — hero paragraph
- `coverCTA` — hero button label
- `sol2` — `{ heading, body, url, buttonLabel }` — Solution 2 banner directly under the jumbotron
- `features` — array of `{ kicker, title, summary, url, linkLabel }` for the home feature grid
- `featuresHeading`, `featuresDeck` — intro above the feature grid
- `numbers` — array of `{ value, label }` for the by-the-numbers strip
- `numbersHeading` — intro heading above numbers
- `letterHeading` — intro heading above the editor's-letter body text (the Markdown body is rendered here)
- `inquireHeading`, `inquireDeck`, `inquireButton` — contact CTA overrides

### Section index pages (list.html)
- `features` — same shape as homepage; renders as feature-card grid
- `featuresGrid` — `"2"` for a 2-up grid (default is 3-up)
- `featuresAlt` — `true` gives the feature section the alt-background
- `featuresHeading`, `featuresDeck` — intro
- `disclaimer` — HTML string rendered in a highlighted note box above the content
- `afterBody` — raw HTML rendered below the features (use for additional article content)
- `afterBodyAlt` — `true` gives afterBody the alt-background
- Body Markdown is rendered before the features

### Single pages (single.html — service details etc.)
- `heroButton` — `{ label, url }` puts a button directly in the hero
- Body Markdown is the article

### Any page
- `inquireHeading`, `inquireDeck`, `inquireButton`, `inquireURL` — per-page overrides of the CTA
- `jsonld` — raw JSON-LD string rendered as `<script type="application/ld+json">`

### Blog posts
- `date` — **required**, drives sort order + RSS `<pubDate>`
- `slug` — optional, controls URL (default is filename slug)
- `categories` — array of strings, passes through to RSS categories
- `deck` — subtitle under the post title
- Body Markdown is the post

## Navigation / menu

Menu entries live in `hugo.toml` under `[[menu.main]]`. Current intended nav order (7 items, set by the owner):

1. Home — `/`
2. Services — `/services/`
3. Solution 2 — `/solution-2/`
4. Portfolio — `/portfolio/`
5. Blog — `/blog/`
6. About — `/about/`
7. Inquire — `/contact/` (the page slug is `contact/`; the menu label reads "Inquire")

Pages *not* in the main nav but still in content: `/process/`, `/team/`, `/credentials/`. They are reached via deep links and the footer.

To change a menu label, edit the `name = "…"` under the matching `[[menu.main]]` block.

## Output formats — how HTML / RSS / AMP are produced

From `hugo.toml`:

```toml
[outputs]
  home = ["HTML", "RSS"]
  section = ["HTML", "RSS"]
  page = ["HTML", "AMP"]

[outputFormats.AMP]
  mediaType = "text/html"
  baseName = "index"
  isHTML = true
  path = "amp"
```

Effects:
- The home and every section index get both an HTML page and an RSS feed at the same URL with `.xml`.
- Every single page (blog posts, service detail pages, solution-2) gets both an HTML page and an AMP page. The AMP page lives at `/amp/{original-path}/index.html`, so blog post `/blog/foo/` has its AMP twin at `/amp/blog/foo/`.
- `head.html` emits `<link rel="amphtml">` from every HTML page with an AMP twin. The AMP template emits `<link rel="canonical">` back to the HTML page. This bidirectional linking is required for search engines to understand the pair.

## Color + typography system (CSS variables)

Defined in `static/css/styles.css` `:root`:

```css
--blue:        #1e3a5f;    /* muted navy, primary */
--blue-dark:   #132a48;
--blue-darker: #0b1c33;
--blue-soft:   #e7edf4;    /* soft blue surface */
--blue-tint:   #f5f7fa;    /* alternating section background */

--gold:        #b88a2b;    /* brass, accent */
--gold-dark:   #8c6a1f;
--gold-soft:   #f1e8d2;    /* callout background */

--paper:       #ffffff;
--ink:         #121821;
--text:        #242a33;
--text-muted:  #5a6472;
--hairline:    #dde1e7;
--line-dark:   rgba(255,255,255,0.12);   /* borders on dark bg */

--font-display: Barlow Condensed + fallbacks (uppercase, heavy weight)
--font-body:    Roboto + system fallbacks
--font-eyebrow: same as display (used for small caps / kickers / nav)
```

**Don't add a new semantic color without also updating the AMP template** — its `<style amp-custom>` duplicates a subset of these.

## AMP specifics — what to keep in mind

The AMP template (`layouts/_default/single.amp.html`) is standalone — it does NOT extend `baseof.html`. All its CSS is inlined in `<style amp-custom>`. Rules:

- Must stay under 75 KB of inlined custom CSS.
- Cannot load external stylesheets *except* Google Fonts (explicitly allow-listed by AMP).
- Cannot contain custom `<script>` (only the AMP runtime + JSON-LD).
- Replace `<img>` with `<amp-img>` if you add images.
- Cannot use regular forms that POST to an action URL. For now there's no form on AMP posts; if you add one, use `action-xhr`.
- Links back to the HTML twin via `<link rel="canonical">` — `{{ $htmlPermalink := (.OutputFormats.Get "HTML").Permalink }}`. Don't try to regex-strip `/amp/` from `.Permalink`; the path format is `/amp/blog/…` not `/blog/…/amp/`.

## SEO + AI crawler strategy

- `static/robots.txt` — opens with a large comment block describing the firm and Solution 2, then explicitly allow-lists ~15 major AI crawlers (GPTBot, ClaudeBot, anthropic-ai, Google-Extended, CCBot, PerplexityBot, Applebot-Extended, Meta-ExternalAgent, MistralAI-User, cohere-ai, YouBot, Diffbot, etc.) plus standard search engines. Updates to firm facts belong here so they enter AI training corpora.
- `static/llms.txt` — structured markdown summary aimed at LLM retrieval. Follows the emerging convention at the time of writing. Keep it synced with key business facts.
- `rel="amphtml"` / `rel="canonical"` cross-linking between HTML and AMP (see above).
- `rel="alternate" type="application/rss+xml"` on every page's `<head>` pointing to the relevant feed.
- JSON-LD `GeneralContractor` + `Service` + `ContactPage` per page, fed by the `jsonld:` frontmatter key.

## Gotchas learned the hard way

- **`relativeURLs = true`** in `hugo.toml` is important — the preview panel opens the rendered `public/` via `file://`, which means absolute paths like `/css/styles.css` resolve to the filesystem root, not the site root. Relative URLs work in both `file://` preview *and* `http://` serving. Keep this flag on.
- **`safeURL` for `tel:` and `mailto:`** — Go templates sanitize URL values pulled from `.Site.Params.*` and render them as `#ZgotmplZ` unless piped through `safeURL`. All phone/email links in partials use `{{ .Site.Params.phoneHref | safeURL }}`.
- **AMP output format detection** — `.AlternativeOutputFormats` works for cross-linking, but `.OutputFormats.Get "AMP"` sometimes returns nil depending on context. When in doubt, iterate `.AlternativeOutputFormats` and match on `.Name | lower == "amp"`.
- **Google Fonts via `<link>`, not CSS `@import`** — some preview sandboxes silently drop the `@import` at the top of a stylesheet, which breaks the whole stylesheet from loading. The `<link rel="stylesheet">` form in `head.html` is reliable.
- **Google Fonts or any CSS change requires re-running `./bin/hugo --minify`** — even though `hugo server` has live-reload for content, full minified production output is what deploys.
- **The preview panel only shows the last Write/Edited file** — rebuilding Hugo won't shift the preview panel onto the rendered page; to force a refresh, Edit the rendered file directly (it's a gitignored build artifact and will be overwritten on next build, so the edit is harmless).
- **Don't render copyrighted text verbatim** — blog posts that reference state press releases summarize them and link to the original source. Do not exceed ~15 quoted words from any external source; quote only for attribution.

## How to add a new blog post

1. `./bin/hugo new blog/YYYY-MM-slug.md`
2. Fill in frontmatter: `title`, `date`, `description`, `deck`, `slug`, `categories`.
3. Write Markdown body. Link to official sources for anything from the state.
4. Save. The dev server will pick it up; the production build (`./bin/hugo --minify`) will regenerate the RSS feed and AMP twin automatically.
5. New posts appear at the top of `/blog/` (sorted by `date:` descending).

## How to add a new service-detail page

1. `./bin/hugo new services/new-service.md`
2. Title, deck, body. Optional `heroButton: { label, url }` for a hero CTA.
3. Add a `features[]` entry on the homepage and/or `content/services/_index.md` that links to the new page.
4. AMP twin is produced automatically.

## How to update firm facts (phone, email, address, tagline)

Edit `hugo.toml` → `[params]`. These feed every page's contact strip, footer, schema.org, and metadata through `.Site.Params.*`. Also update `static/robots.txt` and `static/llms.txt` so the AI-crawler feeds stay consistent.

## Deployment

The build artifact is `public/`. Serve it as static files (Netlify, Cloudflare Pages, S3+CloudFront, any static host). Build command: `hugo --minify`. Publish directory: `public`.

The `baseURL` in `hugo.toml` must match the production domain (`https://adamsindustries.com/`) for canonical URLs, OG URLs, and the RSS feed self-link to be correct.
