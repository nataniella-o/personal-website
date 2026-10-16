import { Link, useParams } from 'react-router-dom'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import { PROJECTS } from '../data/projects.js'
import styles from './ProjectDetail.module.css'

// Case-study template for /project/:id. No Figma frame exists for this page
// (see design/decisions.md) — built directly against the visual language
// already established on /projects, /about, /experience: Giza titles, the
// ROLE | TYPE eyebrow + pulse dot from ProjectRow, tool pills, dashed rules,
// leading ✦ on subsection headings.
//
// Sections are conditional on the data having content, so KAHYAH's shorter
// "currently building" entry (see src/data/projects.js) just renders fewer
// of them rather than needing a separate template.
export default function ProjectDetail() {
  const { id } = useParams()
  const project = PROJECTS.find((p) => p.slug === id)

  if (!project) {
    return (
      <>
        <Header />
        <main className={styles.page}>
          <div className={styles.inner}>
            <p className={styles.notFound}>
              Couldn&rsquo;t find that project.{' '}
              <Link to="/projects">Back to all projects →</Link>
            </p>
          </div>
        </main>
      </>
    )
  }

  const {
    name,
    role,
    type,
    timePeriod,
    date,
    description,
    tools = [],
    image,
    links = [],
    whatSheDid = [],
    whyItMatters,
    interestingPart,
    status,
    gallery = [],
  } = project

  const isLive = /ongoing/i.test(timePeriod)

  const projectIndex = PROJECTS.findIndex((p) => p.slug === project.slug)
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null
  const nextProject =
    projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.inner}>
          <Link to="/projects" className={styles.back}>
            <span aria-hidden="true">←</span> All projects
          </Link>

          <header className={styles.hero}>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.type}>{type}</p>
          </header>

          <div className={styles.cover}>
            {image ? (
              <img src={image} alt={`${name} cover`} />
            ) : (
              <span className={styles.fallbackMark} aria-hidden="true">
                In progress
                <span className={styles.fallbackStar}>✦</span>
              </span>
            )}
          </div>

          <p className={styles.lede}>{description}</p>

          <div
            className={
              links.length > 0
                ? `${styles.meta} ${styles.metaWithLinks}`
                : styles.meta
            }
          >
            <div className={styles.metaCol}>
              <span className={styles.metaLabel}>Timeline</span>
              <p className={styles.metaValue}>
                {isLive && <span className={styles.pulse} aria-hidden="true" />}
                {date}
              </p>
            </div>

            <div className={styles.metaCol}>
              <span className={styles.metaLabel}>Role</span>
              <p className={styles.metaValue}>{role}</p>
            </div>

            {tools.length > 0 && (
              <div className={styles.metaCol}>
                <span className={styles.metaLabel}>Tools</span>
                <p className={styles.metaValue}>{tools.join(', ')}</p>
              </div>
            )}

            {links.length > 0 && (
              <div className={styles.metaCol}>
                <span className={styles.metaLabel}>Links</span>
                <p className={styles.metaValue}>
                  {links.map(({ label, href }, i) => (
                    <span key={href}>
                      {i > 0 && ' · '}
                      <a
                        className={styles.metaLinkAnchor}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {label}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>

          <div className={styles.body}>
            {whyItMatters && (
              <section className={styles.section}>
                <h2 className={styles.heading}>
                  <span className={styles.headingStar} aria-hidden="true">
                    ✦
                  </span>
                  Why it matters
                </h2>
                <p className={styles.whyItMatters}>{whyItMatters}</p>
              </section>
            )}

            {whatSheDid.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.heading}>
                  <span className={styles.headingStar} aria-hidden="true">
                    ✦
                  </span>
                  What I did
                </h2>
                <ul className={styles.list}>
                  {whatSheDid.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>
            )}

            {interestingPart && (
              <section className={styles.callout}>
                <h2 className={styles.heading}>
                  <span className={styles.headingStar} aria-hidden="true">
                    ✦
                  </span>
                  The interesting part
                </h2>
                <p>{interestingPart}</p>
              </section>
            )}

            {gallery.length > 0 && (
              <section className={styles.section}>
                <div className={styles.galleryGrid}>
                  {gallery.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className={styles.galleryImg}
                    />
                  ))}
                </div>
              </section>
            )}

            {status && <p className={styles.status}>{status}</p>}
          </div>

          {(prevProject || nextProject) && (
            <nav className={styles.projectNav} aria-label="More projects">
              {prevProject && (
                <Link
                  to={`/project/${prevProject.slug}`}
                  className={styles.navLink}
                >
                  <span className={styles.navArrow} aria-hidden="true">
                    ←
                  </span>
                  <span>
                    <span className={styles.navLabel}>Previous project</span>
                    <span className={styles.navName}>{prevProject.name}</span>
                  </span>
                </Link>
              )}

              {nextProject && (
                <Link
                  to={`/project/${nextProject.slug}`}
                  className={`${styles.navLink} ${styles.navLinkNext}`}
                >
                  <span>
                    <span className={styles.navLabel}>Next project</span>
                    <span className={styles.navName}>{nextProject.name}</span>
                  </span>
                  <span className={styles.navArrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>

        <Footer />
      </main>
    </>
  )
}
