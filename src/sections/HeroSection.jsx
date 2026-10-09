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
            Final Expense &amp; Medicare Coverage,
            <span className="grad-text">Made Simple &amp; Affordable</span>
          </h1>
          <p className="hero__lead">
            Protect the people you love from the burden of final costs and get the
            Medicare benefits you deserve. Compare top-rated plans in minutes —
            <strong>no medical exam required</strong> on many options.
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