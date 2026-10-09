import QuoteForm from '../components/QuoteForm.jsx'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--1"></span>
        <span className="blob blob--2"></span>
        <span className="blob blob--3"></span>
        <span className="grid-overlay"></span>
      </div>

      <div className="container hero__grid">
        <div className="hero__copy reveal">
          <span className="badge">⭐ Rated 4.9/5 by 12,000+ families</span>
          <h1 className="hero__title">
            Affordable Final Expense Plans,
            <span className="grad-text">for Peace of Mind</span>
          </h1>
          <p className="hero__lead">
            Compare available coverage options in just a few minutes, find a plan that fits your needs and budget, and discover options that may not reProtect the people you love from the financial burden of funeral costs and final expenses. Explore affordable final expense insurance plans designed to help provide peace of mind for you and your family.  
            <strong> Quire a medical exam. </strong> Planning ahead today can help make tomorrow easier for the people who matter most.
          </p>

          <div className="hero__trust">
            <div className="trust__item"><strong>50</strong><span>States Covered</span></div>
            <div className="trust__divider"></div>
            <div className="trust__item"><strong>A+</strong><span>Rated Carriers</span></div>
            <div className="trust__divider"></div>
            <div className="trust__item"><strong>2 min</strong><span>Free Quote</span></div>
          </div>
        </div>

        <div className="hero__formwrap reveal">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}

export default HeroSection