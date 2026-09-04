import styles from './styles/Section.module.css'

// Numbered section with a full-width rule under the heading.
// Shared by the right-column sections (§01–§03). See design/decisions.md.
export default function Section({ number, title, id, children }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.heading}>
        <span className={styles.number}>{number}</span>
        <span className={styles.sep} aria-hidden="true"> – </span>
        {title}
      </h2>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
