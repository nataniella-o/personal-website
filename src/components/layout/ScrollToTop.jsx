import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router does not reset scroll on navigation. Without this, clicking the
// header logo (or any link) from a scrolled position lands you on the new route
// still scrolled down — so the landing page looks like it "didn't route".
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
