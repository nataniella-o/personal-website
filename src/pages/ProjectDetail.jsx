import { useParams } from 'react-router-dom'
import Header from '../components/Header.jsx'

export default function ProjectDetail() {
  const { id } = useParams()
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-h)', padding: 24 }}>
        {/* Ported from legacy/project-detail.html in a later phase — see design/decisions.md */}
        <p>Project detail — placeholder ({id}).</p>
      </main>
    </>
  )
}
