import Section from './Section.jsx'
import ArrowLink from './ArrowLink.jsx'
import styles from './styles/AboutSection.module.css'

// Copy is final, provided by El — kept verbatim (voice/casing intentional).
const PARAGRAPHS = [
  'I am many things, but in this context, I am Software Developer with a design-driven eye.',
  'I care equally about how something feels to use as I do about how it is built.',
  'I have a range of background experience from Full-stack Development and Figma-based design work, including a machine learning project built during the AI4Good Fellowship in 2024. I am drawn to the space where they overlap: how people actually think and interact with the things I build.',
]

export default function AboutSection() {
  return (
    <Section number="01" title="Who's Typing?" id="about">
      {PARAGRAPHS.map((text, i) => (
        <p key={i} className={styles.para}>
          {text}
        </p>
      ))}
      <ArrowLink to="/about">More about me</ArrowLink>
    </Section>
  )
}
