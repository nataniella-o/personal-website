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

- Homepage is a **two-column split**: fixed non-scrolling left rail (~40%), independently scrolling right column (~60%). Page scroll = right column only.
- **Keep a header** (reverses the earlier "remove the global header" decision). See updated prototype `design/homepage-prototype.png`.
  - **Full-width bar** across the top, above both columns. **`position: fixed` — stays pinned on scroll (confirmed).** The left rail and right column both start *below* the header. Layout per updated `design/homepage-prototype.png`.
  - Light background matching the columns beneath (champagne-tinted left portion, off-white right), thin bottom border; the column divider line continues up through it.
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
- Convert `Giza.otf` → woff2.
- Trim `@fontsource/space-mono` to the `latin` subset only (currently bundles latin-ext + vietnamese too).
- Clean junk in `public/assets/` (`.DS_Store`, `2 copy.png`, `command-line` extensionless, `css.png.webp`).
- "Avenir Next" is not a free webfont — `global.css` currently falls back to a system stack. Decide whether to license/host it or accept the fallback.
