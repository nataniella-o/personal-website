// Project inventory — source: design/portfolio-projects.md
// Ordered ongoing / most-recent first.
//
// `description` is the compact /projects row copy. `whatSheDid`,
// `whyItMatters`, `interestingPart`, `status`, `links`, `gallery` feed the
// /project/:id case study — drafted from portfolio-projects.md's raw notes
// (including its "what it demonstrates" framing, woven into the prose rather
// than labelled).
// `whyItMatters` is the real-world-stakes beat — only present where a project
// has actual users/impact to point to (QDog, Closetly, OvaTech AI); skipped
// for Netflix (a graded exercise, not a deployed system) and KAHYAH (no
// finished work yet) rather than forcing a stakes narrative that isn't there.
// `links` is an array of { label, href } — only real, confirmed URLs (no
// invented repo/site links); omitted where there's nothing public yet
// (Netflix, KAHYAH).
// `gallery` is empty for every project; drop image paths in per-project as
// they're ready (KAHYAH has no gallery/whatSheDid/interestingPart — it's the
// short "currently building" entry, no finished work to write up yet).

export const PROJECTS = [
  {
    slug: 'kahyah',
    name: 'KAHYAH',
    timePeriod: 'Ongoing',
    date: 'August 2026 - ',
    role: 'Full Stack Developer',
    type: 'Side Project',
    description:
      'An ongoing continuation of the Outfitly concept. It’s a wardrobe app being built with a friend outside of coursework. We are still in the early stages, so there is no finished product yet.',
    tools: ['In Development'],
    image: null,
    status: 'In progress. We are still in the early stages, so there is no finished product yet.',
    gallery: [],
  },
  {
    slug: 'qdog',
    name: 'QDog',
    timePeriod: 'Fall 2025',
    date: 'September - December, 2025',
    role: 'Design Lead & Frontend Developer',
    type: 'Course Project',
    description:
      'A virtual veterinary app for remote pet care access — appointment details, prescriptions, vet notes, past logs, and a pet health tracker. Built for COMP 4350 (Software Engineering 2) as a team of five, finished and graded.',
    tools: ['Jira', 'Confluence', 'Figma', 'Jest', 'TypeScript', 'SCSS'],
    image: '/assets/project-cover-photos/qdog-cover.png',
    links: [{ label: 'GitHub', href: 'https://github.com/4350-fall-2025' }],
    whatSheDid: [
      'Led design and built the Figma prototypes for every page',
      'Built the frontend: navbar/sidebar for both profile types (owner and vet), the homepage/overview, owner dashboard, pet dashboard, and pet diary dashboard',
      'Wrote the Jest tests for all of it',
      'Built a second, separate CLI-based UI with its own login flow, proving the frontend and backend were properly decoupled, in a different language and framework than the main app',
    ],
    whyItMatters:
      'Access to veterinary care isn’t evenly distributed. Getting a pet in front of a vet, tracking a prescription, or digging up an old note from a past visit is harder than it should be for a lot of owners. A remote-first system like this doesn’t replace in-person care, but it closes some of that gap: history, prescriptions, and notes in one place instead of scattered across memory and paper.',
    interestingPart:
      'The decoupled frontend/backend requirement forced a real architectural constraint most projects don’t: a second, fully working frontend against the same backend, with a login that actually authenticates and routes correctly. It’s evidence of understanding separation of concerns, not just of shipping a feature.',
    status: 'Finished and graded. A full SDLC, SCRUM-run team of five.',
    gallery: [],
  },
  {
    slug: 'closetly',
    name: 'Closetly',
    timePeriod: 'Winter 2025',
    date: 'January - April, 2025',
    role: 'Design Lead & UI/UX Researcher',
    type: 'Course Project',
    description:
      'A wardrobe digitization app that eases daily outfit-decision fatigue and gives context-aware outfit recommendations. A research-heavy COMP 4020 (Human-Computer Interaction 2) project spanning a field study, prototyping, and a user study, finished and graded.',
    tools: ['Figma'],
    image: '/assets/project-cover-photos/closetly-cover.png',
    links: [
      {
        label: 'Figma Prototype',
        href: 'https://www.figma.com/proto/swfECG6KfckJwTnvMyKWLw/4020-g12-project?node-id=0-1&t=f0Sf0Gni3eFt1Iw8-1',
      },
    ],
    whatSheDid: [
      'Originated the idea',
      'Ran interviews and usability tests with the team',
      'Designed and built the detailed Figma prototype',
    ],
    whyItMatters:
      'Outfit-decision fatigue is a small, daily tax most people pay without naming it. This issue is made worse when half a wardrobe already paid for goes unworn because it’s hard to remember what’s there or how to combine it. Outfitly’s angle is specific, not generic: easing that daily friction and getting more real use out of clothes people already own.',
    interestingPart:
      'The most research-driven project here: a field study through to a recommendation system grounded in what that study actually found, not just visuals.',
    status: 'Finished and graded. Currently being built outside coursework, as KAHYAH.',
    gallery: [],
  },
  {
    slug: 'ovatech-ai',
    name: 'OvaTech AI',
    timePeriod: 'Summer 2024',
    date: ' May - June, 2024',
    role: 'Machine Learning Model & Frontend Developer',
    type: 'Internship',
    description:
      'An AI and computer-vision tool to aid PCOS diagnosis from symptoms and ultrasound images, plus condition-monitoring support for people already diagnosed. Built to support, not replace, medical professionals, during a three-week machine learning fellowship at the AI4Good Lab.',
    tools: ['Python', 'PyTorch', 'NumPy', 'React', 'Vite', 'TypeScript', 'Figma', 'Git'],
    image: '/assets/project-cover-photos/ovatech-ai-cover.png',
    links: [
      { label: 'Website', href: 'https://ovatech-ai.netlify.app/' },
      {
        label: 'GitHub',
        href: 'https://github.com/OvaTech-AI/pcos_cnn_diagnosis',
      },
    ],
    whatSheDid: [
      'Built the CNN model that scans ultrasound images to detect ovarian cysts',
      'Designed the Figma prototype for the proposed mobile app',
      'Built the site that showcases both the prototype and the two ML models, my CNN and a teammate’s symptom-based Random Forest model',
    ],
    whyItMatters:
      'PCOS diagnosis usually means a long wait for a specialist appointment, and that wait delays treatment. A tool like this doesn’t replace that care, but it can help close some of the gap in the meantime by flagging risk from symptoms and imaging instead of leaving people to wait it out in the dark.',
    interestingPart:
      'Two weeks to build, after four weeks of learning ML from scratch.',
    status:
      'Finished. The GitHub repo is up, though a few Hugging Face–hosted pieces are inactive.',
    gallery: [],
  },
  {
    slug: 'netflix-query-system',
    name: 'Netflix Modelling & Query System',
    timePeriod: 'Winter 2024',
    date: 'January - April, 2024',
    role: 'Database Engineer',
    type: 'Course Project',
    description:
      'A database design and implementation project for COMP 3380 (Database Concepts & Usages): one modelled database built from five public Netflix-related datasets, queried through SQL and an interactive Java CLI, finished and graded.',
    tools: ['Java', 'SQL', 'Command Line'],
    image: '/assets/project-cover-photos/netflix-cover.png',
    whatSheDid: [
      'Built the ER diagrams',
      'Wrote the SQL queries',
      'Built an interactive CLI in Java to query the database',
    ],
    interestingPart:
      'Two of the five source datasets were supposed to reference the same users but used incompatible ID systems — a classic messy real-world data problem. The fix was a judgment call: randomly reassign IDs so the data could be joined, accepting that not every user ends up rating every title as the tradeoff.',
    status:
      'Finished and graded. A course project, not a live or deployed product. Code available upon request.',
    gallery: [],
  },
]
