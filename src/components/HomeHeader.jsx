import Brand from './Brand.jsx'
import '../styles/header.css'
import './HomeHeader.css'

function HomeHeader() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar__row">
          <span className="topbar__item">✓ Licensed Insurance Specialists</span>
          <span className="topbar__item">✓ No Medical Exam Options</span>
          <a className="topbar__call" href="tel:+18447801683">📞 Call Now: (844) 780-1683</a>
        </div>
      </div>

      <header className="header" id="header">
        <div className="container header__row">
          <Brand href="#top" ariaLabel="TrustedBenefitHub — Medicare & Final Expense" />

          <nav className="nav" id="nav">
            <a href="#final-expense">Final Expense</a>
            <a href="#medicare">Medicare</a>
            <a href="#how">How It Works</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="nav__cta">Get Free Quote</a>
          </nav>

          <button className="nav__toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    </>
  )
}

export default HomeHeader