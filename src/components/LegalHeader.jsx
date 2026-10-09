import Brand from './Brand.jsx'
import '../styles/header.css'
import './LegalHeader.css'

function LegalHeader() {
  return (
    <header className="header legal-header">
      <div className="container header__row">
        <Brand href="/" ariaLabel="TrustedBenefitHub — Home" />
        <nav className="legal-nav" aria-label="Main navigation">
          <a href="/#contact" className="nav__cta">Get Free Quote</a>
        </nav>
      </div>
    </header>
  )
}

export default LegalHeader