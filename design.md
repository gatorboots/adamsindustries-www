---
version: alpha
name: Adams Industries
description: Family-run Louisiana general contractor. Quiet authority, navy and brass, no magazine flourish.

colors:
  primary: "#1e3a5f"
  primary-dark: "#132a48"
  primary-tint: "#f5f7fa"
  secondary: "#b88a2b"
  secondary-dark: "#8c6a1f"
  secondary-soft: "#f1e8d2"
  paper: "#ffffff"
  text: "#242a33"
  text-muted: "#5a6472"
  hairline: "#dde1e7"

typography:
  display-1:
    fontFamily: Barlow Condensed
    fontSize: 4.25rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.005em
  display-2:
    fontFamily: Barlow Condensed
    fontSize: 2.75rem
    fontWeight: 700
    lineHeight: 1.05
  heading-2:
    fontFamily: Barlow Condensed
    fontSize: 1.65rem
    fontWeight: 700
    lineHeight: 1.1
  heading-3:
    fontFamily: Barlow Condensed
    fontSize: 1.15rem
    fontWeight: 700
    lineHeight: 1.1
  body-md:
    fontFamily: Roboto
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  deck:
    fontFamily: Roboto
    fontSize: 1.15rem
    fontWeight: 300
    lineHeight: 1.55
  kicker:
    fontFamily: Barlow Condensed
    fontSize: 0.78rem
    fontWeight: 600
    letterSpacing: 0.22em
  label-caps:
    fontFamily: Barlow Condensed
    fontSize: 0.72rem
    fontWeight: 600
    letterSpacing: 0.12em
  nav:
    fontFamily: Barlow Condensed
    fontSize: 1rem
    fontWeight: 700
    letterSpacing: 0.11em
  button:
    fontFamily: Barlow Condensed
    fontSize: 0.82rem
    fontWeight: 600
    letterSpacing: 0.18em

rounded:
  sm: 2px
  md: 10px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px

components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    padding: 13px 26px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.secondary}"
  button-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    padding: 13px 26px
  button-dark-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    padding: 13px 26px
  button-ghost-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
  feature-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text}"
    padding: 28px 24px
  feature-card-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text}"
  form-input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text}"
    typography: "{typography.body-md}"
    padding: 11px
  contact-form:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.text}"
    padding: 28px
  masthead:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
  colophon:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.paper}"
  inquire-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
  numbers-strip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
  call-box:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: 16px 22px
  call-box-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.paper}"
  disclaimer:
    backgroundColor: "{colors.secondary-soft}"
    textColor: "{colors.primary-dark}"
    padding: 15px 20px
  kicker:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.secondary-dark}"
    typography: "{typography.kicker}"
  feature-card-body:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text-muted}"
    typography: "{typography.body-md}"
  link-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.secondary-dark}"
  hairline-rule:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.text}"
    height: 1px
---

## Overview

Adams Industries is a family-run general contractor in Baton Rouge, Louisiana, with twenty-plus years across commercial, residential, industrial, and marine work. The visual identity is built to read as steady, local, and credible. Quiet authority over flash. Civic gravity over polish.

The earlier iteration of the site leaned magazine: kickers like "Field Notes" and "Masthead," a brighter navy-and-yellow palette, more flourish. The owner pulled it back. The current system is plain section names, a muted palette, and editorial structure used sparingly. Display type is uppercase and condensed for civic weight; body type is Roboto, comfortably set, no theatrics.

## Colors

The palette is two voices, navy and brass, plus a reserved set of tints and neutrals. Navy carries every dark surface and most headings. Brass is the only accent and shows up sparingly: the masthead's bottom border, the buttons, the numbers-strip values, social-icon hover. White paper is the default canvas; soft tints alternate sections without pulling attention.

- **Primary (#1e3a5f).** Muted navy, the workhorse. Masthead, page heroes, "Inquire" band, primary buttons in dark-on-light contexts, headings.
- **Primary-dark (#132a48).** Footer surface, button-hover deepening on the primary.
- **Primary-tint (#f5f7fa).** Section alternation tint. Use for `.spread--alt` rhythm.
- **Secondary (#b88a2b).** Aged brass. The single accent. Use it for the gold band on the masthead, button fills, hover states, numbers-strip values, the disclaimer's left border. Never as a body-text color.
- **Secondary-dark (#8c6a1f).** Hover color for body links. Also the kicker color in default contexts.
- **Secondary-soft (#f1e8d2).** Background tint for disclaimer / yellow-flagged notes.
- **Paper (#ffffff).** Default page background.
- **Text (#242a33).** Body copy.
- **Text-muted (#5a6472).** Captions, secondary copy, feature-card body.
- **Hairline (#dde1e7).** Borders, dividers, form-input edges.

The earlier iteration used a brighter `#0A2A5E` navy and `#FFB71B` gold. Do not reintroduce those. The present palette is deliberately desaturated.

## Typography

Two families. Barlow Condensed for display and labels — uppercase, condensed, civic. Roboto for everything else — generous line-height, neutral. Both load via `<link>` tags in the `<head>` (the preview environment silently drops `@import`, so Google Fonts must come in as link tags).

- **Display-1 (`.display-1`).** Hero and page titles. Uppercase, weight 700, slight negative tracking. Fluid sized between 2.1rem and 4.25rem.
- **Display-2 (`.display-2`).** Section headlines. Uppercase, weight 700, fluid between 1.65rem and 2.75rem.
- **Heading-2 / Heading-3.** Article-body subheadings. Heading-2 carries a hairline rule above; heading-3 is a step inside heading-2.
- **Body-md.** Roboto 400 at 16px, line-height 1.65. The base reading size jumps to ~17.5px under 720px viewports for legibility.
- **Deck.** Roboto 300 in the 1–1.15rem range, set up to 60ch. Sits beneath display-1 and section intros, slightly faded against navy.
- **Kicker.** Small uppercase eyebrow above headlines. Brass by default, can render as muted or navy. Letter-spacing 0.22em is intentional.
- **Label-caps.** Form labels, social rules, smaller eyebrows. Tighter tracking than kicker.
- **Nav.** Masthead links, weight 700.
- **Button.** Same family as nav, weight 600, with a wider 0.18em track for civic emphasis.

Avoid italics. Avoid lowercase display headings.

## Layout

The site is grid-light. Most pages use a single centered column; a few use two-column splits.

- **Container widths.** `.container` 1200px max. `.container--narrow` 820px (article-width). `.container--wide` 1400px (rare).
- **Container padding.** 24px horizontal at desktop, 18px under 720px viewports.
- **Vertical rhythm.** Sections (`.spread`) use `clamp(2.75rem, 5.5vw, 4.5rem)` of vertical padding. Heroes use `clamp(3.5rem, 7vw, 6rem)`. Stay generous; the design earns its weight from breathing room, not chrome.
- **Section alternation.** Adjacent sections alternate between paper and `.spread--alt` (primary-tint background) to give the page rhythm.
- **Two-column splits.** Contact page uses `1.1fr 1fr`. Footer uses `1.5fr 1fr 1fr 1.3fr` collapsing to 2-up at ≤1024px and 1-up at ≤560px.

Spacing tokens (`xs`–`2xl`) describe the practical scale: 4 / 8 / 16 / 24 / 40 / 64. Most paddings are an `md`–`lg` step; section vertical padding is `xl`–`2xl`.

## Elevation & Depth

Elevation is used once, deliberately. Feature cards lift on hover with a low, navy-tinted shadow: `0 4px 14px rgba(30, 58, 95, 0.08)`. Everything else is flat. The masthead is sticky but doesn't cast a shadow — only a 2px brass bottom border separates it from content.

If a new element needs depth, prefer a hairline border over a shadow. The system's depth language is rules, not lifts.

## Shapes

The system is mostly square-edged. Sharp corners suit the civic, ledger-like feel.

- **Buttons, form inputs, feature cards, contact-form panel, section bands.** No rounding. Hard 0px corners.
- **Call-box (the phone-number CTA).** 10px (`rounded.md`). The one rounded element on the page; it stands out on purpose.
- **Call-box icon, social-icon hover circle.** Full circle (`rounded.full`).
- **Social-icons resting state, footer logo.** 2px (`rounded.sm`).

When in doubt, no rounding.

## Components

- **`button-primary`.** Brass fill, navy text, brass border. Hover inverts to navy fill / brass text. Used in light contexts (article body, contact CTA after the form).
- **`button-dark`.** Navy fill, paper text. Used in mid-light contexts where navy reads better than brass against the surrounding background.
- **`button-ghost`.** Transparent background, paper text and border. Used inside `.cover` and `.inquire` (navy hero surfaces). Hover snaps to the brass fill.
- **`feature-card`.** Paper background, hairline border, 28px / 24px padding. Heading uses heading-3 in navy, body in muted text. Hover swaps the border to navy and lifts with the navy-tinted shadow.
- **`form-input`.** Paper background, hairline border, square corners. Focus ring is a 3px navy halo at 12% opacity (`0 0 0 3px rgba(30, 58, 95, 0.12)`).
- **`contact-form`.** Soft primary-tint card holding the form group. Hairline border. Heading is navy display, centered on mobile.
- **`masthead`.** Sticky navy band, paper wordmark with a brass "LLC" suffix, 2px brass bottom border. Nav links are paper resting / brass on hover or active.
- **`colophon`.** Footer in primary-dark with paper text at 74% opacity. 2px brass top border. Headings use kicker tone in brass.
- **`inquire-cta`.** Closing band in navy with the Louisiana flag silhouette set behind at 8% opacity. Headings paper, deck paper at 86%, contact rules in line-dark hairlines.
- **`numbers-strip`.** Navy band with brass values (display-1) and paper labels (label-caps). Numbers separated by a 1px line-dark divider on desktop, stacked with bottom hairlines on mobile.
- **`call-box`.** The phone CTA. Navy fill, brass label, paper number, brass circular icon. The single rounded element. Hover deepens to primary-dark and shifts the border to brass; subtle 1px upward translate.
- **`disclaimer`.** Soft brass background, 3px brass left rule, navy text. Used for yellow-flagged notes inside article bodies.

## Do's and Don'ts

- **Do** keep the palette muted. The current navy is the muted one (`#1e3a5f`). The brass is `#b88a2b`. Anything brighter pulls the system toward the earlier iteration the owner explicitly rejected.
- **Do** keep display type uppercase and condensed. That's where the civic weight lives.
- **Do** alternate paper and primary-tint section backgrounds for rhythm.
- **Do** use brass sparingly. One brass element per section is usually enough.
- **Do** prefer hairlines over shadows. The one allowed shadow is on `feature-card-hover`.

- **Don't** reintroduce magazine kickers like "Field Notes," "Masthead," "Dispatch," or "Vol./Issue" copy. The owner removed them on purpose.
- **Don't** use the brighter earlier palette (`#0A2A5E` navy, `#FFB71B` gold).
- **Don't** add em-dashes to generated copy unless the owner has used them first. Prefer commas, periods, or rephrasing.
- **Don't** round buttons, form inputs, or section bands. Square corners are part of the voice.
- **Don't** use brass as a body-text color. It's an accent, not a reading color.
- **Don't** introduce a third type family. Barlow Condensed and Roboto cover everything.
- **Don't** add italics to display headings. Reserve italics for occasional emphasis in body prose.
