import LegalPage from './pages/LegalPage.jsx'
import HomePage from './pages/HomePage.jsx'
import usePageBehavior from './hooks/usePageBehavior.js'

function App() {
  const legalPage = window.location.pathname.replace(/\/+$/, '').split('/').pop()
  const pageKind = ['privacy-policy', 'terms-and-conditions'].includes(legalPage) ? legalPage : null

  usePageBehavior(pageKind)

  if (pageKind) return <LegalPage type={pageKind} />
  return <HomePage />
}

export default App
