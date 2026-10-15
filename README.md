# Internet Time Capsule

**A journey through the digital memories that shaped us.**

An interactive digital museum of internet history — 34 catalogued artefacts across four
periods, from the first web proposal in 1989 to generative search in the 2020s. Every
record carries an accession number, verified dates, a curatorial story, impact notes and
checkable sources.

Built as a static site: no backend, no database, no API keys, no accounts. Bookmarks live
in the visitor's browser.

---

## Contents

1. [What's inside](#whats-inside)
2. [Tech stack and architecture](#tech-stack-and-architecture)
3. [Project structure](#project-structure)
4. [Getting started](#getting-started)
5. [Deploying to GitHub Pages](#deploying-to-github-pages)
6. [Configuration](#configuration)
7. [Language — English & Bahasa Indonesia](#language--english--bahasa-indonesia)
8. [Adding or editing an artefact](#adding-or-editing-an-artefact)
9. [Images and licensing policy](#images-and-licensing-policy)
10. [Manual testing checklist](#manual-testing-checklist)
11. [Accessibility](#accessibility)
12. [Known limitations](#known-limitations)
13. [Validating the archive data](#validating-the-archive-data)

---

## What's inside

| Area | What it does |
| --- | --- |
| **Hero / masthead** | Editorial opening spread, a three-plate collage of real archive objects, live catalogue counts, and a year ruler (1989 → 2025) that jumps into the timeline. |
| **Featured acquisition** | One artefact presented as a museum wall label: *The Birth of the World Wide Web*, with plate, caption, attribution, curatorial note and record facts. |
| **Timeline Explorer** | Four periods, each sized proportionally to real elapsed years. Click, tab, or use ← → / Home / End. Selecting a period swaps the wall label *and* the catalogue index for that era, with no reload. |
| **Collections** | Full catalogue with multi-select collection filters, multi-select era filters, full-text search, four sort orders, a reset control, and a designed empty state. Cards use a repeating editorial rhythm (wide / medium / three-up) rather than a uniform grid. |
| **Record reader** | Deep-linkable modal (`#/artifact/<id>`) with focus trap, Escape, scroll lock, previous/next record, bookmark, copy-link, sources and image attribution. |
| **Then vs Now** | Six curated pairings (home page, discovery, presence, the machine, moving pictures, music) with two balanced panels, an axis-by-axis change table, and a curatorial summary. Both sides link to real catalogue records. |
| **Random discovery** | "Surprise me" draws a record from the whole catalogue and never repeats the previous draw while other records remain. |
| **My Archive** | Bookmarks persisted in `localStorage`, with a count, a saved-collection view, two-step clear, and an empty state. The UI states plainly that storage is per-browser. |
| **Search overlay** | Opens with the `/` key or the header button; ↑ ↓ to move, Enter to open, Esc to close. Empty query offers era and collection shortcuts that apply real filters. |
| **About** | Curatorial statement, method, known limitations, project record and colophon. |

Nothing in the interface is decorative: every button performs a documented action.

---

## Tech stack and architecture

- **HTML5 semantic markup** (`header`, `main`, `section`, `article`, `figure`, `dl`, `nav`)
- **CSS3** — custom properties, Grid, Flexbox, `clamp()` type scale, `color-mix()`,
  layered backgrounds, `prefers-reduced-motion` handling
- **JavaScript (TypeScript, ES2020+)** — React 19 for component state, bundled by Vite
- **Tailwind CSS v4** for utility styling on top of a hand-written design system
  (`src/index.css`: tokens, archive labels, plates, chips, buttons, grain, reveals)
- **localStorage** for My Archive
- **Inline SVG** for every icon — no icon font, no emoji

React + Vite is used here because it keeps one source of truth for the data and makes the
filtering, routing and modal state easy to reason about. The output is still a **single
static `dist/index.html`** (all CSS and JS inlined), so it hosts anywhere static files are
served — including a GitHub Pages project site under a sub-path.

### Data flow

```
src/config.ts            site identity, eras, collections
src/data/types.ts        Artifact / Source / Image types + Commons URL helper
src/data/eras/*.ts       the catalogue, one file per era (34 records)
src/data/artifacts.ts    aggregation, filtering, sorting, neighbours, random draw
src/data/comparisons.ts  the six Then vs Now pairings
        │
        ├── Timeline      (era → records)
        ├── Collection    (filters → records)
        ├── Reader        (id → record, neighbours)
        ├── Compare       (pair → two records)
        ├── Discovery     (random → record)
        ├── My Archive    (saved ids → records)
        └── Search        (query → records)
```

Every view reads the same array. Adding a record updates the timeline, collection, search,
random draw, counts and comparisons automatically.

---

## Project structure

```
internet-time-capsule/
├── index.html                  shell: meta, fonts, favicon, boot placeholder
├── public/.nojekyll           serve Pages output as-is (no Jekyll)
├── src/
│   ├── main.tsx                entry point + ErrorBoundary + LanguageProvider
│   ├── App.tsx                 composition, routing, shortcuts, scroll progress
│   ├── index.css               design system: tokens, components, motion
│   ├── config.ts               site config + era & collection definitions
│   ├── i18n/                   English + Bahasa Indonesia dictionaries & content
│   │   ├── types.ts            the Strings contract both languages satisfy
│   │   ├── en.ts / id.ts       UI strings per language
│   │   ├── content.ts          localised site/era/collection content
│   │   ├── comparisons.ts      localised Then vs Now pairings
│   │   ├── artifacts.ts        localised blurbs, notes & record labels
│   │   └── LanguageContext.tsx provider, hook, persistence
│   ├── data/
│   │   ├── types.ts            data contracts and the Commons URL helper
│   │   ├── artifacts.ts        aggregation, filtering, sorting, stats
│   │   ├── comparisons.ts      Then vs Now pairings
│   │   └── eras/
│   │       ├── early-web.ts          1989–1999  (14 records)
│   │       ├── social-web.ts         2000–2009  (12 records)
│   │       ├── mobile-era.ts         2010–2019  ( 5 records)
│   │       └── algorithmic-era.ts    2020–      ( 3 records)
│   ├── hooks/
│   │   ├── useBookmarks.ts     localStorage persistence, cross-tab sync
│   │   ├── useArtifactRoute.ts #/artifact/<id> deep links + history
│   │   └── useInView.ts        IntersectionObserver scroll reveals
│   ├── lib/
│   │   ├── scroll.ts           anchor scrolling with reduced-motion support
│   │   └── tokens.ts           era accents, plate monograms
│   ├── components/
│   │   ├── ErrorBoundary.tsx   branded recovery panel instead of a blank page
│   │   ├── Header.tsx          sticky nav, language toggle, drawer
│   │   ├── Hero.tsx            masthead, collage, year ruler, ticker
│   │   ├── Featured.tsx        the wall label
│   │   ├── Timeline.tsx        era tablist + wall label + catalogue index
│   │   ├── Collection.tsx      filter desk, results grid, empty state
│   │   ├── ArtifactCard.tsx    card + editorial layout rhythm
│   │   ├── ArtifactPlate.tsx   image frame, lazy loading, curator's plate fallback
│   │   ├── ArtifactReader.tsx  the record modal
│   │   ├── Compare.tsx         Then vs Now
│   │   ├── Discovery.tsx       Random discovery
│   │   ├── MyArchive.tsx       saved collection
│   │   ├── SearchOverlay.tsx   keyboard-first search
│   │   ├── About.tsx           statement, method, project record, colophon
│   │   ├── Footer.tsx          editorial footer
│   │   └── icons.tsx           inline SVG icon set
│   └── scripts/
│       └── validate-archive.ts data integrity checks
├── .github/workflows/deploy.yml  GitHub Pages deployment
├── README.md
└── LICENSE
```

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # writes a single static dist/index.html
npm run preview  # serve the production build locally
```

Requirements: Node.js 18 or newer.

---

## Deploying to GitHub Pages

The build emits **one self-contained `dist/index.html`** — no relative asset paths to get
wrong when the site lives at `https://username.github.io/internet-time-capsule/`.

### Option A — GitHub Actions (recommended, included)

1. Push this repository to GitHub as `internet-time-capsule`.
2. `.github/workflows/deploy.yml` is already in place.
3. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main`. The workflow installs, builds and publishes `dist/` automatically.
5. Open `https://<username>.github.io/internet-time-capsule/`.

### Option B — manual

```bash
npm run build
cd dist
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy Internet Time Capsule"
git push -f git@github.com:<username>/internet-time-capsule.git gh-pages
```

Then set **Settings → Pages → Source: branch `gh-pages`, folder `/ (root)`**.

---

## Configuration

Everything author- or deployment-specific lives in **`src/config.ts`**:

```ts
export const siteConfig = {
  name: "Internet Time Capsule",
  tagline: "A journey through the digital memories that shaped us.",
  volume: "VOL. 001",
  headline: "Before everything was online, everything was new.",
  github: { owner: "your-username", repo: "internet-time-capsule" },
};
```

Change `github.owner` to your username and the header, About and footer links update.
Eras and collections (`eras`, `categories`) are defined in the same file and drive the
timeline, filters, chips and comparison labels.

---

## Language — English & Bahasa Indonesia

The interface is fully bilingual. A **ID / EN toggle** in the header (and in the
mobile menu) switches languages instantly; the choice is saved in `localStorage`,
shared across tabs, and applied to `<html lang>`, the page title and the meta
description. First-time visitors get Indonesian automatically when their browser
language is Indonesian.

Translated content lives in **`src/i18n/`**:

| File | What it holds |
| --- | --- |
| `types.ts` | The `Strings` contract — both languages must satisfy it, so a missing key fails the build. |
| `en.ts` / `id.ts` | Every UI string: navigation, buttons, headings, placeholders, empty states, About, footer, error panel. |
| `content.ts` | Site tagline/intro, era titles/summaries/markers and collection names/notes. |
| `comparisons.ts` | The six Then vs Now pairings, fully translated. |
| `artifacts.ts` | Indonesian blurb + curatorial note for all 34 records, plus impact/fact label translations. |
| `LanguageContext.tsx` | Provider, `useLanguage()` hook, persistence and document-shell sync. |

Deliberate scope decision: the long-form record **stories, impact prose and fact
values stay in English** (the language of their cited sources). In Indonesian mode
the reader says so plainly, while summaries, labels and navigation are translated.
Search covers both languages. To translate a record fully later, extend
`artifactTextId` — `localizeArtifact` already merges overrides — and the validator
checks parity automatically.

---

## Adding or editing an artefact

1. Open the file for its era in `src/data/eras/`.
2. Append an object that satisfies the `Artifact` type:

```ts
{
  id: "hashtag",                 // slug used in #/artifact/<id>
  catalogId: "DES-035",          // unique accession number
  title: "The Hashtag",
  year: "2007 – present",        // display string
  yearNum: 2007,                 // numeric sort key (launch year)
  era: "social",                 // early | social | mobile | algo
  category: "design",            // web | social | gaming | devices | culture | design
  blurb: "One sentence for cards, search results and the timeline index.",
  story: ["First paragraph…", "Second paragraph…"],
  significance: "The curatorial note — why this belongs in the archive.",
  impact: [
    { label: "Technology", text: "…" },
    { label: "Culture",    text: "…" },
    { label: "Design",     text: "…" },
  ],
  facts: [
    { label: "Proposed", value: "23 August 2007" },
    { label: "By",       value: "Chris Messina" },
  ],
  image: {                        // optional — omit to show a curator's plate
    file: "Example file.svg",     // Wikimedia Commons file name
    alt: "Descriptive alt text for screen readers.",
    caption: "What the plate shows.",
    credit: "Author or source",
    license: "CC BY-SA 4.0, via Wikimedia Commons",
    fit: "contain",               // "contain" for logos, "cover" for screenshots
  },
  sources: [
    { label: "Hashtag", publisher: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Hashtag" },
  ],
}
```

3. Save. The timeline count, collection grid, filters, search index, random draw,
   catalogue statistics and neighbour navigation all pick it up automatically.
4. Run the validator (below) to confirm ids, accession numbers and sources are unique
   and complete.

**Accuracy rules used throughout the archive**

- Record launch, development and peak popularity separately when they differ.
- Attribute a figure to its claimant when it is not independently measured
  (e.g. "Microsoft reported ~1 million copies in four days").
- Omit anything that cannot be checked; every record cites at least one source.

---

## Images and licensing policy

Images are loaded from **Wikimedia Commons** through a stable redirect:

```
https://commons.wikimedia.org/wiki/Special:FilePath/<File_Name>?width=900
```

`commonsUrl()` in `src/data/types.ts` builds these URLs and renders SVG files as sized
PNGs. No API key and no build-time download are required; images are lazy-loaded below the
fold.

**Rules followed when choosing files**

1. Prefer freely licensed or public-domain files (PD-textlogo, CC0, CC BY, CC BY-SA, OFL).
2. Record the author and licence on the record card and in the plate caption.
3. Where no freely licensed image could be verified — GeoCities-era screenshots, some
   trademarked marks — the entry deliberately shows a **curator's plate**: a typographic
   composition built from the record's accession number, era and initials. No unattributed
   or rights-unclear file is used, and no broken-image icon is ever shown.
4. Screenshots of commercial interfaces are attributed to Wikimedia Commons as the source.

**To replace an image**, edit the `image.file` value to another Commons file name (spaces
are converted to underscores automatically) and update `alt`, `caption`, `credit` and
`license`. To check a file exists before publishing, open
`https://commons.wikimedia.org/wiki/File:<File_Name>`.

---

## Manual testing checklist

Run through this before publishing.

**Navigation**
- [ ] All six header links scroll to their section and show the active underline.
- [ ] Mobile drawer opens, closes on backdrop tap, on the close button, and on link select.
- [ ] Skip link reaches the collection; focus ring is visible on every control.
- [ ] `/` opens search; `Esc` closes it; ↑ ↓ and Enter select a result.
- [ ] Browser back/forward works after opening and closing records.

**Timeline**
- [ ] Clicking each of the four eras updates both the wall label and the index list.
- [ ] ← → Home End move between eras; the active tab receives focus.
- [ ] "Browse all N entries" applies the era filter and scrolls to Collections.

**Collections**
- [ ] Category chips multi-select; era chips multi-select; counts stay accurate.
- [ ] Search matches titles, blurbs, stories, facts and accession numbers.
- [ ] All four sort orders reorder the grid.
- [ ] An impossible query (e.g. `zzzz`) shows the empty state; Reset restores everything.
- [ ] Filter desk is sticky on desktop only, never covering content on mobile.

**Record reader**
- [ ] Opens from card, hero collage, timeline index, featured, discovery, compare, search
      and My Archive.
- [ ] Esc, backdrop click and the close button all close it; clicking inside the record
      does not.
- [ ] Tab cycles within the modal and returns focus to the trigger on close.
- [ ] Background scroll is locked and restored.
- [ ] Previous/next move chronologically and update the URL hash.
- [ ] Copy link reports "Copied" and the URL opens the same record in a new tab.
- [ ] Bookmark toggles instantly and survives a reload.
- [ ] Source links open in a new tab with `rel="noopener noreferrer"`.

**Images**
- [ ] Disconnect the network (or block `upload.wikimedia.org`): every plate falls back to
      the curator's plate with no broken-image icons and no layout shift.
- [ ] Records without images (Yahoo! Directory, FarmVille) show the plate by design.

**Then vs Now / Discovery / My Archive**
- [ ] All six pairings switch; prev/next wrap around; both panels open their records.
- [ ] "Surprise me" never repeats the same record twice in a row.
- [ ] Save three records, reload, confirm they persist; clear all asks for confirmation.
- [ ] Open the site in a second tab and toggle a bookmark — the first tab stays in sync.

**Responsive**
- [ ] 360 px, 768 px, 1024 px, 1440 px and 1920 px: no horizontal overflow.
- [ ] Hero collage, ruler, timeline bands, card rhythm, compare panels and the reader all
      reflow correctly; touch targets are at least 40 px.
- [ ] With `prefers-reduced-motion: reduce`, reveals appear immediately and the ticker
      stops.

**Build**
- [ ] `npm run build` completes with no errors; the browser console is clean on load.

---

## Accessibility

- Semantic landmarks and heading order; `dl`/`dt`/`dd` for record metadata.
- Timeline implemented as a WAI-ARIA tablist with roving tabindex and arrow-key support.
- Reader and search are `role="dialog"` + `aria-modal`, with focus trap, Escape handling,
  focus restoration and body scroll lock.
- Filters use `aria-pressed`; bookmark buttons use `aria-pressed` plus a text label, so
  state is never conveyed by colour alone.
- Live regions announce result counts and draw counts.
- Visible `:focus-visible` rings everywhere; contrast tested for ink on ivory and ivory on
  graphite.
- Every image has descriptive alt text; plates are typographic and readable without images.
- All motion is suppressed under `prefers-reduced-motion: reduce`.

---

## Known limitations

- The catalogue is selective and weighted towards the Anglo-American internet; histories
  from China, Russia, South Korea, Brazil and elsewhere appear only where they changed the
  global picture.
- Some services are documented from secondary sources because primary internal documents
  are not public.
- A handful of records (Yahoo! Directory, FarmVille) have no image: no freely licensed file
  could be verified, so a curator's plate is shown instead.
- My Archive is per-browser by design — clearing site data removes it, and it does not sync.
- Company logos shown for archival and editorial commentary remain the property of their
  owners; this project is not affiliated with or endorsed by any company it documents.
- The GitHub repository link is a placeholder until `src/config.ts` is updated.

---

## Validating the archive data

`src/scripts/validate-archive.ts` checks the integrity of the catalogue: unique ids and
accession numbers, valid era and category references, at least one source per record,
comparison links that resolve, and chronological neighbour ordering.

```bash
npx esbuild src/scripts/validate-archive.ts --bundle --platform=node \
  --format=esm --outfile=.tmp-validate.mjs --alias:@=./src && node .tmp-validate.mjs
```

---

## License

Code: MIT — see [LICENSE](LICENSE).
Text and curation: original writing for this project.
Images: individually attributed on each record; see the licensing policy above.
