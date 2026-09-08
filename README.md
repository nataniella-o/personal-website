# nataniellaogogo.com

My personal portfolio — a software developer with a design-driven eye. Live at
**[nataniellaogogo.com](https://nataniellaogogo.com)**.

## Stack

- **React 19** + **React Router 7**
- **Vite 6** build
- Plain CSS as **CSS Modules**, one per component; design tokens + `@font-face`
  in `src/styles/global.css`
- [`react-icons`](https://react-icons.github.io/react-icons/), [`typed.js`](https://mattboldt.com/demos/typed-js/),
  `@fontsource/space-mono`
- Node 22

## Getting started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
```

## Structure

```
src/
  main.jsx              app entry (mounts <App>, imports global.css)
  App.jsx               routes
  pages/                one file per route
    Home · About · Experience · Projects · ProjectDetail · NotFound
  components/
    layout/             Header, Footer, ScrollToTop  (app shell)
    common/             ArrowLink, Section           (reusable primitives)
    home/               left rail + the §01–§03 sections + project card
    about/              ActivityScroller
    projects/           ProjectRow
    experience/         ExperienceRow
  data/                 projects.js, experience.js   (page content)
  styles/global.css     palette + type tokens, @font-face

public/assets/          images, fonts, resume, CNAME, favicon
design/                 Figma exports + decisions.md (running design log)
```

Routes: `/`, `/about`, `/experience`, `/projects`, `/project/:id`, and a
catch-all 404.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: `npm ci` → `npm run build`
→ copy `dist/index.html` to `dist/404.html` (SPA deep-link fallback) → publish
`dist/` to GitHub Pages.

- Repo **Settings → Pages → Source** must be set to **GitHub Actions**.
- The custom domain is kept by `public/CNAME` (ends up at `dist/CNAME` on build).

## Notes

- `design/decisions.md` is the running log of every design + build decision.
- `CLAUDE.md` is the project brief.
