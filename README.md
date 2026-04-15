# Adams Industries LLC — Website

Hugo static site for Adams Industries LLC, a Baton Rouge, LA construction firm.

**Company:** Adams Industries LLC
**Location:** Baton Rouge, LA
**Phone:** (985) 255-2435
**Email:** info@adamsindustriesllc.com
**Scope:** Commercial, residential, industrial, marine construction, and hurricane recovery across Louisiana
**Credentials:** Licensed, insured, BBB A+

## Building the Site

This is a [Hugo](https://gohugo.io) project. All content, layouts, and config live at the repo root. Running `hugo` renders the site into `public/`, which is the deploy artifact — **do not edit files in `public/` directly**; they will be overwritten.

### Install Hugo (macOS)

```bash
brew install hugo
# or, without Homebrew, grab a binary from https://github.com/gohugoio/hugo/releases
# and put it on your PATH
```

### Development

```bash
hugo server -D         # live-reload dev server on http://localhost:1313
```

### Production build

```bash
hugo --minify          # renders into ./public/
```

### Create a new service detail page

```bash
hugo new services/new-service.md
```

This uses `archetypes/default.md` to scaffold the frontmatter.

## Project Structure

```
adamsIndustries-www/
├── hugo.toml                         # Site config, menu, params
├── archetypes/
│   └── default.md                    # Frontmatter template for new content
├── content/                          # Markdown source
│   ├── _index.md                     # Homepage (magazine cover data)
│   ├── services/
│   │   ├── _index.md                 # Services overview
│   │   ├── commercial-recovery.md
│   │   ├── residential-recovery.md
│   │   └── emergency-response.md
│   ├── process/_index.md             # Field Notes
│   ├── portfolio/_index.md           # Portfolio
│   ├── team/_index.md                # Masthead
│   ├── credentials/_index.md         # On Record
│   ├── about/_index.md               # About
│   ├── contact/_index.md             # Inquire
│   └── blog/_index.md                # Dispatch
├── layouts/
│   ├── _default/
│   │   ├── baseof.html               # Base shell every page extends
│   │   ├── list.html                 # Section index pages
│   │   └── single.html               # Single pages (service details)
│   ├── contact/list.html             # Custom contact layout with form
│   ├── index.html                    # Homepage (magazine cover)
│   └── partials/
│       ├── head.html                 # <head> tag content
│       ├── masthead.html             # Top header + nav
│       ├── colophon.html             # Footer
│       └── inquire.html              # Reusable contact-CTA section
├── static/                           # Assets copied as-is to site root
│   ├── css/styles.css                # Magazine + LEMOINE-inspired theme
│   ├── logo.svg                      # Brand mark
│   └── robots.txt                    # Bot crawl permissions
└── public/                           # Hugo output (generated — do not edit)
```

## Content Model

Each page is a Markdown file with YAML frontmatter. The frontmatter drives the visual layout; the Markdown body is rendered as the article/editor's letter section.

### Common frontmatter fields

- `title` — page headline (display-1)
- `description` — meta description
- `kicker` — small red eyebrow above the headline
- `deck` — italic subtitle beneath the headline
- `byline` — small-caps attribution line

### Layout-specific fields

**Homepage (`content/_index.md`)**
- `coverHeadline`, `coverDeck`, `coverCTA` — hero copy
- `toc[]` — "In This Issue" list items (num, title, url, pg)
- `features[]` — feature card grid (kicker, title, summary, url, linkLabel)
- `pullquote` — `{text, attr}`
- `numbers[]` — by-the-numbers band (value, label)
- `letterKicker`, `letterHeading` — editor's letter intro; body text is the Markdown

**Section index pages (list.html)**
- `features[]` — feature-card grid
- `featuresGrid` — grid density (`"2"` = 2-up)
- `featuresAlt` — use off-white background (true/false)
- `disclaimer` — yellow-tinted note above the content
- `afterBody` — additional HTML block after the main content
- `afterBodyAlt` — use off-white background on afterBody

**Single pages (single.html)**
- `heroButton` — `{label, url}` CTA button inside the hero
- `pullquote` — `{text, attr}`
- Body is Markdown — becomes the article, with numbered lists styled as process steps

**Any page**
- `inquireHeading`, `inquireKicker`, `inquireDeck`, `inquireButton`, `inquireURL` — customize the Inquire section at the bottom
- `jsonld` — raw JSON-LD string rendered as `<script type="application/ld+json">`

## Theme

- **Palette:** charcoal `#32373c` + gold `#ffb71b` + white (LEMOINE-inspired)
- **Typography:** Barlow Condensed (display, uppercase) + Roboto (body)
- Magazine-style structural elements: kickers, decks, bylines, pull quotes, by-the-numbers band, masthead/colophon, editorial "In This Issue"
- Full stylesheet at `static/css/styles.css`

## Deployment

1. Run `hugo --minify`
2. Upload the contents of `public/` to your web host (e.g. Netlify, Cloudflare Pages, S3 + CloudFront)
3. Ensure `robots.txt` and `sitemap.xml` (auto-generated by Hugo) are served at the domain root

For Cloudflare Pages / Netlify, the build command is `hugo --minify` and the publish directory is `public`.
