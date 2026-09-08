import styles from './ProjectRow.module.css'

// One project entry on the /projects page. See design/projects-prototype.png.
export default function ProjectRow({
  index,
  name,
  timePeriod,
  role,
  type,
  description,
  tools = [],
  image,
}) {
  const isLive = /ongoing/i.test(timePeriod)

  return (
    <li className={styles.row}>
      <div className={styles.meta}>
        <span className={styles.index} aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
        <p className={styles.period}>
          {isLive && <span className={styles.pulse} aria-hidden="true" />}
          {timePeriod}
        </p>
      </div>

      <div className={styles.media}>
        {image ? <img src={image} alt="" /> : null}
      </div>

      <div className={styles.body}>
        <p className={styles.caption}>
          {role} <span className={styles.sep} aria-hidden="true">|</span> {type}
        </p>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.desc}>{description}</p>

        {tools.length > 0 && (
          <ul className={styles.tools}>
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}
