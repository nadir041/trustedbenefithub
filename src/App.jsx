import LegalPage from './pages/LegalPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PartnersPage from './pages/PartnersPage.jsx'
import usePageBehavior from './hooks/usePageBehavior.js'

function App() {
  const legalPage = window.location.pathname.replace(/\/+$/, '').split('/').pop()
  const pageKind = ['privacy-policy', 'terms-and-conditions', 'partners'].includes(legalPage) ? legalPage : null

  usePageBehavior(pageKind)

  if (pageKind === 'partners') return <PartnersPage />
  if (pageKind) return <LegalPage type={pageKind} />
  return <HomePage />
}

export default App
