# Portfolio Projects — Working List

**Purpose:** Raw project inventory for the content phase of the nataniellaogogo.com rebuild. This is input material, not finished copy — case study write-ups still need to be drafted from this.

**Note on framing:** Site focus is now Software Development + Design (see handover doc, Section 1). Most projects below are university course projects — finished and graded, not shipped/live products. That distinction should be handled honestly in the actual site copy rather than implied away.

---

## 1. OvaTech AI

**What it is:** AI/computer vision tool to aid PCOS diagnosis from symptoms and ultrasound images, plus condition-monitoring support for people already diagnosed. Built to support, not replace, medical professionals. Built during a 3-week machine learning fellowship at the AI4Good Lab (2024), sponsored by Google DeepMind, Mila Institute, and AMII.

**Tools:** Python, Vite, React, Git, Figma, TypeScript

**What she did:**
- Built the CNN model that scans ultrasound images to detect ovarian cysts
- Designed the Figma prototype for the proposed mobile app (interactive prototype, not built out — team ran out of time)
- Built the website showcasing the Figma prototype and both ML models (her CNN model + a teammate's Random Forest model that predicts PCOS likelihood from symptom combinations)

**What it demonstrates:** Both design and dev — confirmed. The CNN model is real dev/ML work alongside the Figma design and website build, not incidental to it.

**The interesting part:**
- Built under real time pressure — 2 weeks to build, after only 4 weeks learning ML from scratch
- Addresses a real gap: PCOS diagnosis typically involves long appointment wait times; this could shorten that and support faster doctor diagnosis
- Couldn't find a comparable existing tool

**Status:** Finished. GitHub repo exists but some components (Hugging Face-hosted pieces) are inactive.

**On site:** Yes

---

## 2. Netflix Modelling & Query System

**What it is:** Database design/implementation project for COMP 3380 (Database Concepts & Usages). Modeled a database from public Netflix-related data and built SQL queries against it.

**Tools:** Java, SQL, command line

**Summary:** Combined 5 datasets (titles, credits, Netflix Userbase, Netflix_Dataset_Movie, Netflix_Dataset_Rating) into one modeled database. Required real data-cleaning work — user IDs didn't match across datasets, so ratings had to be reassigned via randomized ID mapping across users, meaning not every user rates every title.

**What she did:**
- Built the ER diagrams
- Wrote the SQL queries
- Built an interactive CLI in Java to query the database

**What it demonstrates:** Dev work and database design specifically.

**The interesting part:** The data-cleaning problem — two of the five source datasets (Netflix Userbase and Netflix_Dataset_Rating) were supposed to reference the same users but used incompatible ID systems. Had to make a judgment call to randomly reassign IDs so the data could be joined, accepting that not every user rates every title as a tradeoff of that decision. A concrete example of a common real-world data problem (messy, inconsistent source data) and a specific decision made to solve it. *(This framing was Claude's suggestion, given El's go-ahead — worth restating in her own words during the actual write-up.)* Original personal-milestone note, kept for context: first time working with or creating a database.

**Status:** Finished & graded (course project — not live/deployed)

**On site:** Yes

---

## 3. QDog — Virtual Vet App

**What it is:** COMP 4350 (Software Engineering 2) project. A virtual veterinary app for remote pet care access — stores appointment details, prescriptions, vet notes, and past logs, plus a pet health tracker.

**Tools:** Jira, Confluence, Figma, Jest

**What she did:**
- Design lead + frontend development
- Built Figma prototypes for all pages
- Frontend build: navbar/sidebar for both profile types (owner and vet), homepage/overview, owner dashboard, pet dashboard, pet diary dashboard
- Wrote Jest tests for the above
- Built a second, separate CLI-based UI implementing login and pet viewing — required by the course to demonstrate decoupled frontend/backend architecture (a login screen that actually verifies credentials and routes correctly, in a different framework/language than the main frontend)

**What it demonstrates:** SCRUM/Agile team experience, understanding of the full SDLC, plus range — same backend served two structurally different frontends.

**The interesting part:** The decoupled frontend/backend requirement — the course forced a real architectural constraint most projects don't require: build a second, fully functional frontend in a different language/framework against the same backend, with a working login that actually authenticates and routes correctly, not a mockup. Evidence of understanding clean separation of concerns, not just team participation. *(This framing was Claude's suggestion, given El's go-ahead — worth restating in her own words during the actual write-up.)* Team-of-5 / SCRUM context is worth keeping as supporting detail, not the lead. Original personal-milestone note, kept for context: worked as part of a 5-person team; first time building a full app end-to-end, even though she didn't work on every part of it.

**Status:** Finished & graded (course project)

**On site:** Yes

---

## 4. Closetly

**What it is:** COMP 4020 (Human-Computer Interaction 2) project. Research-heavy, structured across three milestones: field study + requirements + design alternatives → low-fidelity prototype + cognitive walkthrough + experiment design → running the study + analysis + recommendations. A wardrobe digitization app: reduces daily outfit-decision fatigue, encourages sustainable use of existing wardrobe items, and gives context-aware outfit recommendations (weather, preferences, events).

**What she did:**
- Originated the initial idea
- Conducted interviews and usability tests with teammates
- Designed and built the detailed Figma prototype

**What it demonstrates:** Design and UX research specifically — this is the strongest research/UX-process project in the list, even though the site's focus has narrowed to Dev + Design.

**The interesting part:** A unique take on an existing problem — helps with decision fatigue and organizing large wardrobes, an angle that's specific rather than generic.

**Status:** Done & graded (course project)

**On site:** Yes

---

## 5. KAHYAH (continuation of Closetly)

**What it is:** A real, ongoing continuation of the Closetly concept, now being built with a friend outside of coursework.

**Status:** In progress — early stages. Not finished, not graded, not a course project. Different category from the four above.

**On site:** Yes — decided. Given it's early-stage, likely works best as a shorter "currently building" entry rather than a full case study, since there isn't a finished product or outcome to write up yet. Worth deciding that shape during the content phase.

---

## Open Items Before Case Studies Can Be Written

1. **"The interesting part" is filled on all 5 projects.** Netflix DB and QDog now use technical-decision hooks suggested by Claude (data-cleaning judgment call; decoupled frontend/backend requirement) rather than the original personal-milestone framing
2. ~~OvaTech's self-assessment may undersell dev work~~ **Resolved:** confirmed as both design and dev.
3. ~~KAHYAH's inclusion undecided~~ **Resolved:** yes, on site — shape (short entry vs. full case study) still to be decided.
4. All course projects need honest status framing in actual copy — "finished and graded," not implied as shipped/live. **Confirmed as the approach.**
