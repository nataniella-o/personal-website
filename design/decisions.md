# Homepage Rebuild — Decisions Log

Running record of decisions made during the homepage rebuild. Newest section at the bottom.
Every entry: what was decided + any context needed to act on it later.

---

## Stack / infrastructure

- **Migrate to Vite + React.** The current plain-HTML/fetch-partials setup is replaced.
  - CSS stays plain CSS as **CSS Modules** per component (no framework).
  - Global design tokens + `@font-face` live in one `global.css`.
  - Partials (`header.html`, `footer.html`, `projects.html`) become components; `loadHTML()` in `script.js` is removed.
  - Routing: React Router — `/`, `/about`, `/projects`, `/project/:id`, catch-all `<NotFound>`.
  - `typed.js` kept as an npm dependency, driven from `useEffect`.
  - `font-awesome` CDN replaced by `react-icons` (LinkedIn / GitHub / envelope only).
- **Deployment: GitHub Action. Confirmed.** Add `.github/workflows/deploy.yml` in the same change as the migration so the live site keeps deploying (`npm ci` → `npm run build` → publish `dist/` to Pages). `CNAME` moves into `public/` so `nataniellaogogo.com` survives the build. GitHub Pages source setting will need to be switched to "GitHub Actions".

## Layout

- Homepage is a **two-column split**: fixed non-scrolling left rail (**30%**), independently scrolling right column (**70%**). Page scroll = right column only. (`--rail-w`; started at 40/60, El changed to 30/70.)
- **Keep a header** (reverses the earlier "remove the global header" decision). See updated prototype `design/homepage-prototype.png`.
  - **Full-width bar** across the top, above both columns. **`position: fixed` — stays pinned on scroll (confirmed).** The left rail and right column both start *below* the header. Layout per updated `design/homepage-prototype.png`.
  - **Solid mauve bar** (El's override — the prototype had it match the columns). Thin bottom border. **No vertical divider through the header** (removed).
  - **Left of header:** the monogram logo — `assets/short_logo.png` (the "NO" mark: N + O with star accents, black), links to `/`. **Confirmed.** *(verify the PNG has a transparent background so it sits cleanly on the champagne header; if not, get a transparent export.)*
  - **Right of header:** the nav — `About · Experience · Projects · Resume`. This is the *only* nav area; the previously-planned "nav pinned top-right inside the right column" is dropped in favour of this header.
  - The old hamburger `.side-nav` + `showSidebar()` are still removed.
- **`Experience` link → 404 for now** (route renders `<NotFound>`; no Experience page yet).

## Responsive (< ~768px)

- Split collapses to a single column: **left rail first (without the boarding-pass card), then the right column.**
- Left rail stops being fixed.
- Header stays as a full-width bar at the top; nav sits as a simple inline row (no hamburger). *(mobile header layout — logo + wrapped nav row — pending final confirm)*

## Colour palette

Source: `design/colour-palette.jpeg`. Prototype is greyscale; this mapping is the agreed application.

| Token | Hex |
|---|---|
| Champagne | `#EDE3D0` |
| Mauve | `#CA9BAA` |
| Moss | `#827C34` |
| Babyblue | `#CFDAFF` |
| Cabernet | `#5B3C45` |
| Off-white ground | `#F7F3EC` |

- Left rail background → **Champagne**
- Right column background → **off-white** (`#F7F3EC`)
- Body text + headings → **Cabernet**
- Links (rail card, "MORE ABOUT ME →", nav) → **Cabernet**, underlined
- Section-header rules / card borders → Cabernet, low opacity
- Boarding-pass card → white panel on the champagne rail
- Whimsical accents only (typed cursor, project-card hover, link hover, active nav) → **Mauve / Moss / Babyblue**
- Toolkit icons → monochrome **Cabernet**

## Typography

- **"Hello," typed line → Avenir Next.**
- **"I'm Nataniella" → Giza** (convert `assets/giza_fonts/Giza.otf` → woff2).
- Body copy / section headers → Avenir (existing).
- Boarding-pass card → monospace, **Space Mono** (Google Fonts). **Confirmed.**
- "Nataniella OGOGO" footer wordmark → use the image asset **`assets/long_logo.png`** (not a web font). **Confirmed.** *(verify transparent background.)*

## Left rail content

- Typed greeting cycles the existing greeting array (`Hello, / Bonjour, / …`) with a visible blinking cursor.
- Portrait: `assets/headshot.jpeg` in a rounded frame (image to be swapped later by El).
- "I'm Nataniella" in Giza.
- **Boarding-pass card** (new component) replaces the old `#contact` "Where am I?" block. Monospace. Content:
  - Header: `OGOGO/NATANIELLA`
  - `FROM WINNIPEG/YWG` · `TO ANYWHERE/!!!` · `STATUS OPEN TO WORK`
  - `FIELD CS + DESIGN` · `SEAT 1A` · `GATE NOW`
  - Link row: `EMAIL · LINKEDIN · GITHUB · RESUME`
  - This is the deliberate "whimsical" moment — kept restrained.

## Right column content

- **`01 — Who's Typing?`** — bio copy (final, provided by El):
  > I am many things, but in this context, I am Software Developer with a design-driven eye. I care equally as much about how something i build feels to use and how it is built.
  >
  > I have a range of background experience from Full-stack Development and Figma-based design work, including a machine learning project built during the AI4Good Fellowship in 2024. I am drawn to the space where they overlap: how people actually think and interact with the things i build
  - Ends with `MORE ABOUT ME →` → `/about`.

- **`02 — My Projects`** — 4 cards (image placeholder + caption line + bold title; no tag pills):
  | Title | Caption |
  |---|---|
  | Kahyah App | `ONGOING · FULL STACK DEV` |
  | QDog | `FALL 2025 · FRONTEND DEV & DESIGN LEAD` |
  | Outfitly | `WINTER 2025 · DESIGN LEAD & RESEARCHER` |
  | OvaTech AI | `SUMMER 2024 · ML & FRONTEND DEV` |
  - **Outfitly = Closetly** (renamed).
  - Netflix project drops off the homepage grid (stays on `/projects`).
  - Ends with `MORE PROJECTS →` → `/projects`.
  
- **`03 — My Toolkit`** — monochrome icon grid, no text labels.
  - Existing `assets/icons/` PNGs are colored and incomplete → use a **monochrome SVG set** (e.g. Simple Icons). Approved as long as icons look similar to the current set.
  - Icons: Java, JS, Python, CSS, SQL, HTML5, Notion, Git, Figma, VS Code, Office, Prettier, C, C++.
- **Footer** — inline in the right column (no separate pink bar):
  - Italic: "Thank you for visiting my website!" / "If this website resonated with you or you want to create something cool, please feel free to reach out!"
  - "Nataniella OGOGO" wordmark → `assets/long_logo.png`.
  - Mono social-icon row: LinkedIn / GitHub / Email.

## Other pages

- `about.html`, `projects.html`, `404.html`, `project-detail.html` get ported to components with minimal restyle for now — full redesign is a later phase.

---

## Build progress

### Step 1 — Vite + React scaffold ✅ (done, not committed)

- Old site moved to `legacy/` (git renames, nothing deleted). `assets/` → `public/assets/`, `CNAME` → `public/CNAME`.
- Scaffold: `package.json`, `vite.config.js`, `index.html` (Vite entry), `src/main.jsx`, `src/App.jsx`.
- Deps: React 19, react-router-dom 7, vite 6, typed.js, `@fontsource/space-mono`.
- `src/styles/global.css` — palette + type tokens, `@font-face` for Giza (points at `Giza.otf` for now; woff2 conversion still TODO), `--header-h` / `--rail-w` layout vars.
- `src/components/Header.jsx` + `.module.css` — fixed bar, `NO` logo, nav (`About / Experience / Projects / Resume`). Visual polish (champagne/off-white split, divider) deferred to step 3.
- `src/pages/` — `Home`, `About`, `Projects`, `ProjectDetail`, `NotFound` placeholders; routing live; unknown paths + `/experience` → `NotFound`.
- `.github/workflows/deploy.yml` — `npm ci` → `npm run build` → `cp dist/index.html dist/404.html` (SPA deep-link fallback) → deploy `dist/` to Pages.
- **`npm run build` verified green** — emits `dist/index.html` + `dist/assets/index-*.js` (~235 kB). (Local build is slow ~6 min in sandbox; CI will be fast.)

**Follow-ups (not blocking):**
- After merge to `main`: switch the repo's GitHub Pages "Source" to **GitHub Actions**.
- Clean junk in `public/assets/` (`.DS_Store`, `2 copy.png`, `command-line` extensionless, `css.png.webp`).

### Step 2 — Global tokens + fonts polish ✅ (done)

- `public/assets/giza_fonts/Giza.woff2` generated from `Giza.otf` (fonttools, 306 kB → 127 kB). `@font-face` in `global.css` now lists woff2 first, otf as fallback.
- `main.jsx` imports trimmed to `@fontsource/space-mono/latin-400.css` + `latin-700.css` (was pulling latin-ext + vietnamese subsets too).
- **Avenir Next: accepting the system-font approach** (not licensing a webfont for now). It ships on macOS/iOS so Apple visitors get it; others fall back (Segoe UI → generic geometric sans). `--font-hello` / `--font-body` stacks in `global.css`. Can revisit if El wants a hosted webfont.

### Step 3 — Layout shell ✅ (done)

- `src/components/styles/Header.module.css` — fixed full-width bar (`--header-h` 64px). A `::before` panel spans `--rail-w` in champagne with a right border, so the column divider reads as continuous from the header down the page. Bottom hairline border. Logo left, nav right.
- `src/pages/Home.jsx` + `Home.module.css` — the split:
  - `.rail` — `position: fixed`, `--rail-w` (40%), full height below the header, `overflow: hidden` (does not scroll), champagne, right divider, `56px / --rail-pad-x` padding. Placeholder text only (step 4 fills it).
  - `.column` — `margin-left: --rail-w`, off-white, scrolls with the page (only scrolling region). Placeholder text only (steps 5–8).
- New layout tokens in `global.css`: `--rail-pad-x` 48px, `--col-pad-x` 64px, `--bp-stack` 768px.
- Basic `< 768px` stacking already stubbed in both stylesheets (rail becomes static, full-width, bottom border) — step 9 refines it, incl. dropping the boarding-pass card on mobile.
- Verified on the Vite dev server + a clean production build.

### Step 4 — Left rail (styled) ✅ (done)

- `src/components/LeftRail.jsx` — composes the rail: typed greeting → portrait → "I'm Nataniella" → boarding-pass card. Wrapper is a flex column with `clamp()` gaps, `max-width: 440px`.
- `src/components/TypedGreeting.jsx` — `typed.js` in a `useEffect` (destroy on cleanup, StrictMode-safe). Greeting list carried over from `legacy/js_files/script.js`. Renders into an `<h1>`.
- `src/components/BoardingPass.jsx` + `.module.css` — mono card, white (`--bg-card`), dashed section rules. `<dl>` grid of the 6 fields; link row (EMAIL / LINKEDIN / GITHUB / RESUME). Email = **`nataniellaog@gmail.com`** (confirmed by El). Link hover → moss.
- `src/components/styles/LeftRail.module.css` — `.stack` is full rail-content width (`align-items: stretch`, no max-width), so the boarding-pass card spans the rail (inside Home `.rail`'s `--rail-pad-x` padding). Greeting: Avenir-Next stack, 700, muted cabernet (`color-mix` 52%), cursor tinted mauve. Portrait: `width: min(78%, 280px)`, `aspect-ratio 4/5`, `max-height 38vh`, rounded 14px, `object-fit: cover` on `headshot.jpeg`. Name: Giza, cabernet.
- **Header colour → mauve** (El's call; deviates from the prototype which had the header match the columns). `--bg-header: var(--mauve)` token. **No vertical divider through the header** — the `::before` panel was removed entirely. The rail↔column divider still runs below the header (Home `.rail` border-right). Logged as a deliberate override.
- New tokens: `--bg-header`, `--bg-card` (#fffdf9), `--rule-dash`.
- Rail still `overflow: hidden` (non-scrolling per decision) — content sized conservatively to fit; portrait capped at 40vh.

**Step 4 follow-ups (from /btw reports):**
- Header logo routing: React Router v7 doesn't reset scroll on navigation. Added `src/components/ScrollToTop.jsx` (mounted in `App.jsx`) to reset scroll on route change, and a logo `onClick` that smooth-scrolls to top when already on `/`.
- Fixed the placeholder pages (`About` / `Projects` / `ProjectDetail` / `NotFound`): the inline `padding: 24` shorthand was overriding `paddingTop`, so content sat under the fixed header. Now `padding: 24` + `paddingTop: calc(var(--header-h) + 24px)`.

### Step 5 — Right column §01 "Who's Typing?" ✅ (done)

- `src/components/Section.jsx` + `.module.css` — reusable numbered-section pattern (`NN – Title` heading with a full-width bottom rule, `.body` capped at 620px). Will also carry §02 and §03.
- `src/components/ArrowLink.jsx` + `.module.css` — the "MORE ABOUT ME →" link style (uppercase, letter-spaced, underlined; arrow nudges right on hover). Reused for §02's "MORE PROJECTS →".
- `src/components/AboutSection.jsx` + `.module.css` — §01: the three bio paragraphs (verbatim from El, casing intentional) + `ArrowLink` → `/about`.
- `src/pages/Home.jsx` / `Home.module.css` — column is now a flex column with `clamp(48px, 8vh, 84px)` gap between sections; placeholder removed.

### Step 6 — Right column §02 "My Projects" ✅ (done)

- `src/components/ProjectCard.jsx` + `.module.css` — a card = tinted rounded panel → 4:3 thumb (empty tinted block until real images are added) → uppercase caption → bold title. Whole card is a `<Link>`; hover lifts it slightly.
  - **Hover crossfades caption+title → a short description** (per `design/project-card-hover.png`). Both layers are stacked in one CSS-grid cell so card height stays put and there's no jump. `@media (hover: none)` keeps caption+title on touch. Descriptions trimmed from the "what it is" notes in `design/portfolio-projects.md` (in `ProjectsSection.jsx`) — **draft copy, confirm wording with El**.
- `src/components/ProjectsSection.jsx` + `.module.css` — §02: 2×2 grid (1-col under 768px) of the 4 featured projects + `ArrowLink` → `/projects`.
  - Cards link to `/project/<slug>` (`kahyah`, `qdog`, `outfitly`, `ovatech-ai`) — the route resolves to the placeholder `ProjectDetail` for now; real case-study pages are a later content-dependent phase.
  - Captions use ` | ` separators per the prototype (decisions table had `·`).
- Netflix project stays off the homepage grid (still destined for `/projects`).

### Step 7 — Right column §03 "My Toolkit" ✅ (done)

- Added `react-icons` dependency (was in the step-1 plan). Icons render as inline SVG, monochrome via `currentColor` → `var(--text)`.
- `src/components/ToolkitSection.jsx` + `.module.css` — §03: a `repeat(6,1fr)` icon grid (5 then 4 cols on smaller screens), no labels. Icons lift + go opaque on hover.
- Icon sourcing for the 14 tools (Java, JS, Python, CSS, SQL, HTML5, Notion, Git, Figma, VS Code, Office, Prettier, C, C++):
  - Simple Icons (`Si*`): JS, Python, Notion, Git, Figma, Prettier, C, C++
  - Font Awesome (`Fa*`): Java, HTML5, CSS (`FaCss3Alt` — Simple Icons has no `SiCss3`)
  - Tabler (`Tb*`): **SQL** (`TbSql`, a text mark — SQL isn't a brand), **VS Code** (`TbBrandVscode`), **Office** (`TbBrandOffice`) — Simple Icons dropped the latter two over trademark.
  - Legacy colored PNGs in `public/assets/icons/` are now unused (cleanup later).

### Step 8 — Footer ✅ (done)

- `src/components/Footer.jsx` + `styles/Footer.module.css` — inline at the end of the right column, top rule. Row: italic thank-you copy (left) + `long_logo.png` wordmark (right, `align-items: flex-end`); social row below (LinkedIn / GitHub / Email via `react-icons/fa`, hover lifts + goes moss).
- Social links match the boarding-pass card (linkedin `/in/nataniella-ogogo`, github `nataniella-o`, email `nataniellaog@gmail.com`).
- **`long_logo.png` and `short_logo.png` both have alpha** (`sips hasAlpha: yes`) — the earlier transparency concern is resolved; they sit cleanly on their backgrounds.

### Component styles folder

- All component CSS modules live in `src/components/styles/` (moved after step 7). `src/pages/Home.module.css` and `src/styles/global.css` unchanged.

### Step 9 — Responsive ✅ (done)

- Breakpoint is `768px` (literal in `@media` — `--bp-stack` is just documentation).
- **Split collapses** to one column: `.split` → `flex-direction: column`; `.rail` → `position: static`, full width, `overflow: visible`, bottom border instead of right; `.column` → full width, no left margin.
- **Boarding-pass card hidden on mobile** — `<BoardingPass>` wrapped in `.pass` in `LeftRail`, `display: none` under 768.
- **Header stacks on mobile** — logo row above a wrapping nav row (no hamburger). `--header-h` is overridden to `96px` under 768 in `global.css` so every split offset stays in sync. Logo/nav left-aligned, nav `flex-wrap: wrap`. *(layout is my call — flag if you want it different)*
- Mobile tweaks: `.name` gets a gentler clamp + `overflow-wrap: break-word`; portrait a touch larger; existing per-component 768 breakpoints (projects grid → 1 col, toolkit → 4–5 cols, section body full width, footer stacks) left as tuned.

**Step 9 follow-up edits:**
- Project cards trimmed on mobile (`< 768`): smaller padding, `16/10` thumb, smaller title; grid capped at `380px` and centered.
- **Project-card hover on touch**: `@media (hover: none)` now un-stacks the text cell and shows caption+title **and** the description together (static) — the crossfade only exists where hover works.
- **Mobile header → hamburger menu** (reverses the earlier "no hamburger, wrapping nav row" decision — El's call). Header goes back to single-row on mobile; `--header-h` mobile override removed. `Header.jsx` has a `menuOpen` state, a `.menuButton` (FaBars/FaTimes), and a `.menu` dropdown panel under the fixed bar; menu closes on route change and on link click.
- **Left rail centered on mobile**: `.stack` gets `align-items: center` + `text-align: center` under 768 — greeting, portrait, and name all center. (Typed greeting will shift slightly as it types since the line re-centers per keystroke — inherent to centered typing.)
- **Footer mobile layout**: under 768 the footer centers (`text-align: center`), `.top` stacks column with the wordmark first (`order: -1`) then the note, socials centered. Note drops to `0.85rem` on mobile only (matches `ProjectCard .desc` — no type-scale token exists; El chose inline reuse over adding `--text-sm`). Social `<a>`s given `width: 1.4em` + centered (all viewports) so the gaps read evenly despite the three icons' differing glyph widths.
- **Section headings tokenized**: added `--fs-section` (`clamp(1.3rem, 2vw, 1.55rem)`) + `--fw-section` (700) to `global.css`; `Section.module.css .heading` uses them. Was `clamp(1rem, 1.4vw, 1.2rem)` / 600 — barely larger than body copy, so §01/§02/§03 headings now read as a clear step above the paragraphs.
- **About-section paragraphs** step down to `0.9rem` under 768px.
- **Footer colour**: `.footer` now full-bleed inside the right column (negative margins cancelling `--col-pad-x` / new `--col-pad-bottom` token, both with mobile overrides in `global.css`), so the background reaches the column edges instead of sitting inset in a box. Colour is `--bg-footer` = `color-mix(babyblue 85%, transparent)` (El wanted babyblue ~85%). Kept the `border-top` as the separator. Header still carries El's experimental `background: var(--bg-header, 90%)` — that's a no-op (2nd `var()` arg is a fallback, not opacity); left as-is pending El's call on whether the header should also be translucent.
