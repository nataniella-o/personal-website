# nataniellaogogo.com — Project Brief for Claude Code

## What this project is
Rebuild of an existing personal portfolio site. Not a greenfield build — there's an existing repo and an old Figma prototype. This is a revision, and the build phase follows a content phase and a Figma design phase that have already happened (or are happening) outside of Claude Code.

## Stack
- React
- HTML / CSS (no CSS framework unless I say otherwise — assume plain CSS or CSS Modules)
- Bundler: **Vite** (confirm/replace if the existing repo uses something else — check `package.json` before assuming)

## Positioning (why the site looks/reads the way it does)
The site targets **Software Development and Design** roles specifically — not a general five-role portfolio. Every layout and content decision should read as speaking to a hiring manager for a dev or design role.

Primary narrative:
> "Software developer with a design-driven eye, interested in how people think and interact with technology."

## Locked design language
Four words, already decided — don't reinterpret them:
- **Interesting**
- **Thoughtful**
- **Confident**
- **Whimsical** — accent only. This should show up in small, deliberate moments (a hover state, a transition, a detail) — never as the dominant tone of a whole page. If you're about to apply "whimsical" broadly across a layout, stop and flag it instead.

## The one rule that matters most
**This is implementation, not design.** If a layout, spacing, color, or type decision isn't clearly shown in the Figma file/exports I give you, stop and ask me rather than inventing something to fill the gap. Guessing at unspecified design decisions is the single biggest way this project goes wrong.

## Before touching anything
1. Review the current repo structure and stack as they actually exist — don't assume based on this doc.
2. Review the Figma exports/frames in `design/` (or wherever I've placed them) before building the corresponding page.
3. If content for a section isn't finalized yet, ask rather than filling it with placeholder copy that might get treated as final.

## Working style
- I have a coding background — explain non-obvious decisions (component boundaries, state approach, why a file got split a certain way), but don't over-explain basic syntax.
- Small chunks, reviewed one at a time: navbar → hero → case study card → etc. Don't build the whole site in one pass.
- If you hit a decision point not covered by the Figma file or this doc, ask — don't proceed and mention it after the fact.

## Known content structure (subject to change — confirm against latest content before building)
- Homepage: narrative-led, Dev + Design framing
- About page: full rewrite in progress (there may be a placeholder in an AI4Good Lab paragraph — leave it if it's still there, don't patch it in isolation, a full rewrite is coming)
- Case study pages: built from scratch, not a revision of existing pages. Likely projects: OvaTech AI, Netflix Modelling & Query System, QDog, Closetly, and a shorter "currently building" entry for KAHYAH — confirm final list/shape before building all of them out.
- "Inspiring women in tech" — kept as a smaller mention, not a headline element
- HCI — retained, framed as reinforcing design-driven positioning, not as a separate fifth interest

## Do not
- Invent design decisions not shown in Figma
- Treat "whimsical" as an equal-weight tone alongside the other three words
- Build out full case study pages before content for them is confirmed finalized
- Assume the old Figma prototype (pre-rebuild) reflects the current locked design words — it doesn't, it's a layout reference only
