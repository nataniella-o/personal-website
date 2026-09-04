import Section from './Section.jsx'
import ArrowLink from './ArrowLink.jsx'
import ProjectCard from './ProjectCard.jsx'
import styles from './ProjectsSection.module.css'

// 4 featured projects — titles + captions per design/decisions.md.
// Descriptions trimmed from the "what it is" notes in
// design/portfolio-projects.md; shown on card hover.
// Cards link to /project/:slug (detail pages are a later phase).
const PROJECTS = [
  {
    slug: 'kahyah',
    title: 'Kahyah App',
    caption: 'ONGOING  |  FULL STACK DEV',
    description:
      'An ongoing continuation of the Outfitly concept, currently being built with a friend outside of coursework.',
  },
  {
    slug: 'qdog',
    title: 'QDog',
    caption: 'FALL 2025  |  FRONTEND DEV & DESIGN LEAD',
    description:
      'A virtual veterinary app for remote pet care access for appointments, prescriptions, vet notes, and a health tracker.',
  },
  {
    slug: 'outfitly',
    title: 'Outfitly',
    caption: 'WINTER 2025  |  DESIGN LEAD & RESEARCHER',
    description:
      'A research-driven wardrobe app that started with a field study and ended in a detailed Figma prototype. Its purpose is to ease daily outfit-decision fatigue with context-aware recommendations.',
  },
  {
    slug: 'ovatech-ai',
    title: 'OvaTech AI',
    caption: 'SUMMER 2024  |  ML & FRONTEND DEV',
    description:
      'An AI and computer-vision tool to aid PCOS diagnosis from symptoms and ultrasound images, and support ongoing monitoring.',
  },
]

export default function ProjectsSection() {
  return (
    <Section number="02" title="My Projects" id="projects">
      <div className={styles.grid}>
        {PROJECTS.map(({ slug, title, caption, description }) => (
          <ProjectCard
            key={slug}
            to={`/project/${slug}`}
            title={title}
            caption={caption}
            description={description}
          />
        ))}
      </div>
      <ArrowLink to="/projects">More projects</ArrowLink>
    </Section>
  )
}
