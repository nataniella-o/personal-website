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

**Rename (El):** `--cabernet` → `--burgundy` (also new hex `#6b3f52`), `--moss` → `--sage` (also new hex `#98a869`), project-wide (tokens + all `var()` uses + this doc). `--mauve` is unchanged. Champagne and babyblue are commented out in `global.css` for now; `--bg-rail` and `--bg-header` currently use `--mauve`, `--bg-footer` uses `--sage`.

| Token | Hex |
|---|---|
| Champagne | `#EDE3D0` |
| Mauve | `#ca9baa` |
| Sage | `#98a869` |
| Babyblue | `#CFDAFF` |
| Burgundy | `#6b3f52` |
| Off-white ground | `#F7F3EC` |

- Left rail background → **Champagne**
- Right column background → **off-white** (`#F7F3EC`)
- Body text + headings → **Burgundy**
- Links (rail card, "MORE ABOUT ME →", nav) → **Burgundy**, underlined
- Section-header rules / card borders → Burgundy, low opacity
- Boarding-pass card → white panel on the champagne rail
- Whimsical accents only (typed cursor, project-card hover, link hover, active nav) → **Mauve / Sage / Babyblue**
- Toolkit icons → monochrome **Burgundy**

## Typography

- **"Hello," typed line → Avenir Next.**
- **"I'm Nataniella" → Giza** (convert `assets/giza_fonts/Giza.otf` → woff2).
- Body copy / section headers → Avenir (existing).
- Boarding-pass card → monospace, **Space Mono** (Google Fonts). **Confirmed.**
- "Nataniella OGOGO" footer wordmark → use the image asset **`assets/long_logo.png`** (not a web font). **Confirmed.** *(verify transparent background.)*

## Left rail content — later edits

- Portrait is now a **circle, centered** (all viewports): `aspect-ratio: 1/1`, `border-radius: 50-60%` (equivalent on a square), `align-self: center`. Width caps against `min(78%, 280px, 38vh)` on desktop (the `38vh` term keeps it perfectly square instead of a `max-height` that could stretch it into an oval); mobile drops the `vh` term since the rail isn't fixed-height there.
- **Doodle accent** (`assets/pic-doodle.jpeg`, black line art on a white JPEG — no alpha): sits behind the circle in a new `.portraitWrap`, `mix-blend-mode: multiply` to drop the white against the champagne rail. First-pass placement (`width: 55%`, bottom-right, peeking from behind the circle) — flagged as needing a visual tuning pass from the browser, not a final position.

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
  - **Local time**: `.head` row now shows `YWG HH:MM` top-right (opposite `OGOGO/NATANIELLA`). Live clock via `Intl.DateTimeFormat` fixed to `America/Winnipeg` (El's time, not the visitor's), 24h, refreshed every 30s. `useLocalTime` hook in `BoardingPass.jsx`.

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

- `about.html`, `404.html`, `project-detail.html` get ported to components with minimal restyle for now — full redesign is a later phase.

### /projects page ✅ (built)

Per `design/projects-prototype.png`: shared `<Header>` + centered "Projects" title + lede, then a stack of full-width `<ProjectRow>`s (time period | image | text with role/type caption, name, description, tool pills), then shared `<Footer>`.

- `src/data/projects.js` — single source, **5 projects, ordered ongoing/most-recent first**: KAHYAH → QDog → Closetly → OvaTech AI → Netflix. (Homepage `ProjectsSection` still has its own separate 4-item array — could be unified later.)
- `src/components/ProjectRow.jsx` + `.module.css`; `src/pages/Projects.jsx` + `.module.css`.
- `.page` carries `--col-pad-x` / `--col-pad-bottom` padding so `<Footer>`'s full-bleed negative margins work here too.

Resolved with El:
- **Name is "Outfitly"** (not Closetly) — `slug: 'outfitly'`. Matches the homepage card.
- KAHYAH tool pill: **"In Development"** for now.
- OvaTech "NumPhy" → **"NumPy"** confirmed.
- Descriptions: El tweaked; keeping her wording.
- "Projects" heading → **Giza** (`--font-display`).
- Rows stay unlinked — detail pages come later.

Still pending: real project images (placeholders for now).

**Whimsy accents added to /projects** (each ties to an existing motif, kept small):
- Pulsing `●` dot on the "Ongoing" row's time period — echoes the boarding-pass live clock. Sage. Guarded by `prefers-reduced-motion`.
- Project name nudges `translateX(6px)` on row hover — echoes the `MORE PROJECTS →` arrow slide.
- Row dividers are **dashed** (was solid) — echoes the boarding-pass card's section rules; list gets a closing dashed bottom border.
- Oversized faint Giza numerals `01`–`05` in the time-period column — echoes the homepage `01 – …` section numbering.
- Small `✦` star by the "Projects" title + an italic end-of-list line "That's all of them — for now ✦" — echoes the 4-point stars in the logo/wordmark. Sage.

### Custom cursor

- Site-wide mouse cursor is a **`✦` star** (`public/assets/cursor-star.svg`, burgundy fill + off-white halo so it shows on any background, 22px, hotspot 11,11). Set on `html` (`, auto` fallback) and on `a/button/summary/label/[role=button]` (`, pointer` fallback). El's call — accepted the usual custom-cursor UX trade-off.

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
- `src/components/BoardingPass.jsx` + `.module.css` — mono card, white (`--bg-card`), dashed section rules. `<dl>` grid of the 6 fields; link row (EMAIL / LINKEDIN / GITHUB / RESUME). Email = **`nataniellaog@gmail.com`** (confirmed by El). Link hover → sage.
- `src/components/styles/LeftRail.module.css` — `.stack` is full rail-content width (`align-items: stretch`, no max-width), so the boarding-pass card spans the rail (inside Home `.rail`'s `--rail-pad-x` padding). Greeting: Avenir-Next stack, 700, muted burgundy (`color-mix` 52%), cursor tinted mauve. Portrait: `width: min(78%, 280px)`, `aspect-ratio 4/5`, `max-height 38vh`, rounded 14px, `object-fit: cover` on `headshot.jpeg`. Name: Giza, burgundy.
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

- `src/components/Footer.jsx` + `styles/Footer.module.css` — inline at the end of the right column, top rule. Row: italic thank-you copy (left) + `long_logo.png` wordmark (right, `align-items: flex-end`); social row below (LinkedIn / GitHub / Email via `react-icons/fa`, hover lifts + goes sage).
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

### /about page ✅ (built)

Per `design/about-prototype.png`: shared `<Header>` → centered "About" title (Giza, `✦` accent) + lede + full-width rule → two-column bio ("Hello again!" + 3 paragraphs | portrait placeholder with "Winnipeg, MB (usually)" caption) → "Things I Enjoy Off The Clock" (`<ActivityScroller>`) → "Why This Website Exists" (3 numbered columns, vertical rules) → shared `<Footer>`.

- `src/pages/About.jsx` + `About.module.css` — mirrors `/projects` page shell (`.page` padding + `.inner` max-width `1180`) so `<Footer>`'s full-bleed margins work. Sub-section headings reuse the `--fs-section` / `--fw-section` tokens + full-width bottom rule (same look as the homepage `<Section>` heading, minus the number).
- **Copy is verbatim from the prototype sketch** — confirmed final by El, including the bio (the AI4Good Lab / UMWICS / retail paragraph) and the 01–03 reasons. Kept casing/wording as sketched ("peoples lives", "arguing myself about the spacing").
- `src/components/ActivityScroller.jsx` + `styles/ActivityScroller.module.css` — activity cards (image-top square placeholder + title + blurb), **4 visible**. This is the page's one whimsy beat.
  - **`.track` is a plain `overflow-x: auto` strip** (snap + thin custom scrollbar + `tabIndex=0` for keyboard). Driven by **prev / next arrow buttons** (`.controls`, centered below the strip): each press does `scrollBy` ≈ 2 card widths, `behavior: smooth` (→ `auto` under `prefers-reduced-motion`). A `scroll` listener keeps `atStart` / `atEnd` in sync to disable each arrow at its end; the whole `.controls` row hides when nothing overflows. Swipe / scrollbar / arrow-keys still work.
  - Card counts: 4 visible, 3 `< 1024`, 2 `< 768`, ~1.25 `< 520`. Card hover: `-3px` lift + sage border (removed under `hover: none`).
  - History: sketch had a static 4-up row → briefly a vertical auto-scroll loop → El: horizontal, no autoplay → El: "page scroll should scroll it" → tried a tall sticky-pinned block (scroll runway left a visual void) → tried hover-wheel-to-scrollLeft (El: lost the smooth feel) → **prev/next arrows** (current).
  - 6 activities from El: Building Lego / Reading / Watching movies / Drawing & painting (no blurb) / Sleeping / Logic puzzles.
- **Every subsection heading gets a leading `✦`** (`.headingStar`, sage) — "Hello again!", "Things I Enjoy Off The Clock", "Why This Website Exists". Echoes the logo/wordmark stars + the trailing star on the "About" title.
- **"Why This Website Exists" numerals → Giza** (`--font-display`), oversized + faint (`color-mix(burgundy 32%)`) — same treatment as the `/projects` row numbers (was small mono).
  - Bio → 1 col (portrait first) `< 768`. "Why" → 1 col, left rules become per-item.
- Activity card images are **empty tinted placeholders** for now (same treatment as project thumbs) — real art later.
- **Portrait**: `/assets/profile-pic.svg` (~1 MB traced SVG), shown raw — **no frame** (no border-radius / tint / crop), `width: 100%` of its column. Root `viewBox` tightened from `0 0 1800 1800` to `252.351562 89 1333.5 1585` (the artwork's outer clip box) to crop the empty margin; `width`/`height` attrs updated to match so the `<img>` intrinsic ratio is right. Caption below is right-aligned to the image's right edge, `700`, with a sage `FaMapMarkerAlt` pin before "Winnipeg, MB (usually)".
- Route was already wired (`/about` in `App.jsx`); this replaces the `About` placeholder.
