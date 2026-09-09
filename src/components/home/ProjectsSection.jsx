import Section from '../common/Section.jsx'
import ArrowLink from '../common/ArrowLink.jsx'
import ProjectCard from './ProjectCard.jsx'
import styles from './ProjectsSection.module.css'

// Featured projects — titles + captions per design/decisions.md.
// Descriptions trimmed from the "what it is" notes in
// design/portfolio-projects.md; shown on card hover.
// Cards link to /project/:slug (detail pages are a later phase).
//
// NOTE: KAHYAH is kept in the list but filtered out of the homepage grid for
// now (previewing a 3-up row). Drop the `.filter(...)` below to bring it back.
const COVERS = '/assets/project-cover-photos'
const PROJECTS = [
  {
    slug: 'kahyah',
    title: 'Kahyah App',
    caption: 'ONGOING  |  FULL STACK DEV',
    description:
      'An ongoing continuation of the Outfitly concept, currently being built with a friend outside of coursework.',
    image: null,
  },
  {
    slug: 'qdog',
    title: 'QDog',
    caption: 'FALL 2025  |  FRONTEND DEV & DESIGN LEAD',
    description:
      'A virtual veterinary app for remote pet care access for appointments, prescriptions, vet notes, and a health tracker.',
    image: `${COVERS}/qdog-cover.png`,
  },
  {
    slug: 'outfitly',
    title: 'Outfitly',
    caption: 'WINTER 2025  |  DESIGN LEAD & RESEARCHER',
    description:
      'A research-driven wardrobe app that eases daily outfit-decision fatigue with context-aware recommendations, from field study to Figma prototype.',
    image: `${COVERS}/closetly-cover.png`,
  },
  {
    slug: 'ovatech-ai',
    title: 'OvaTech AI',
    caption: 'SUMMER 2024  |  ML & FRONTEND DEV',
    description:
      'An AI and computer-vision tool to aid PCOS diagnosis from symptoms and ultrasound images, and support ongoing monitoring.',
    image: `${COVERS}/ovatech-ai-cover.png`,
  },
]

export default function ProjectsSection() {
  return (
    <Section number="02" title="My Projects" id="projects" wide>
      <div className={styles.grid}>
        {PROJECTS.filter((p) => p.slug !== 'kahyah').map(
          ({ slug, title, caption, description, image }) => (
            <ProjectCard
              key={slug}
              to={`/project/${slug}`}
              title={title}
              caption={caption}
              description={description}
              image={image}
            />
          ),
        )}
      </div>
      <ArrowLink to="/projects">All projects</ArrowLink>
    </Section>
  )
}
