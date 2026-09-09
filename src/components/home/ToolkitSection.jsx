import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import {
  SiJavascript,
  SiPython,
  SiNotion,
  SiGit,
  SiFigma,
  SiPrettier,
  SiC,
  SiCplusplus,
} from 'react-icons/si'
import { TbSql, TbBrandVscode, TbBrandOffice } from 'react-icons/tb'
import Section from '../common/Section.jsx'
import styles from './ToolkitSection.module.css'

// Icon set per design/decisions.md. Monochrome via currentColor.
// A couple of marks come from Tabler (Tb*) because Simple Icons dropped
// them (VS Code / Office trademark) or never had them (SQL is not a brand).
const TOOLS = [
  { name: 'Java', Icon: FaJava },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Python', Icon: SiPython },
  { name: 'C', Icon: SiC },
  { name: 'C++', Icon: SiCplusplus },
  { name: 'CSS', Icon: FaCss3Alt },
  { name: 'SQL', Icon: TbSql },
  { name: 'HTML5', Icon: FaHtml5 },
  { name: 'Notion', Icon: SiNotion },
  { name: 'Git', Icon: SiGit },
  { name: 'Figma', Icon: SiFigma },
  { name: 'VS Code', Icon: TbBrandVscode },
  { name: 'Microsoft Office', Icon: TbBrandOffice },
  { name: 'Prettier', Icon: SiPrettier },
]

export default function ToolkitSection() {
  return (
    <Section number="03" title="My Toolkit" id="toolkit" wide>
      <ul className={styles.grid}>
        {TOOLS.map(({ name, Icon }) => (
          <li key={name} className={styles.item}>
            <Icon className={styles.icon} role="img" aria-label={name} title={name} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
