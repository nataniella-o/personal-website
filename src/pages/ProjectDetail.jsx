import { useParams } from 'react-router-dom'
import Header from '../components/layout/Header.jsx'

export default function ProjectDetail() {
  const { id } = useParams()
  return (
    <>
      <Header />
      <main style={{ padding: 24, paddingTop: 'calc(var(--header-h) + 24px)' }}>
        {/* Ported from legacy/project-detail.html in a later phase — see design/decisions.md */}
        <p>Project detail — placeholder ({id}).</p>
      </main>
    </>
  )
}
