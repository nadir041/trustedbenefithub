import '../styles/buttons.css'
import '../styles/sections.css'
import './MedicareSection.css'

function MedicareSection() {
  return (
    <section className="section section--alt" id="medicare">
      <div className="container medicare__grid">
        <div className="medicare__media reveal" aria-hidden="true">
          <div className="stat-card stat-card--float">
            <span className="stat-card__big">$0</span>
            <span className="stat-card__label">Premium plans available*</span>
          </div>
          <div className="stat-card stat-card--float2">
            <span className="stat-card__big">65+</span>
            <span className="stat-card__label">Eligible &amp; qualifying</span>
          </div>
          <div className="medicare__ill">
            <svg viewBox="0 0 200 200" width="100%" height="100%" role="img" aria-label="Medicare illustration">
              <circle cx="100" cy="100" r="88" fill="#e6f6f1" />
              <path d="M100 40l45 20v28c0 26-19 42-45 50-26-8-45-24-45-50V60l45-20z" fill="#0b3d6b" />
              <path d="M84 100l11 11 24-26" stroke="#2ec7a6" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="medicare__copy reveal">
          <span className="eyebrow">Final Expense Plans</span>
          <h2>Get every benefit you're entitled to</h2>
          <p>Planning ahead for final expenses? We help you explore affordable final expense insurance options designed to help protect your loved ones from the financial burden of funeral and end-of-life costs.</p>
          <ul className="checklist">
            <li>Affordable final expense coverage options</li>
            <li>Help ease the burden of funeral expenses</li>
            <li>Coverage options to fit your needs and budget</li>
            <li>Simple guidance to help you compare available plans</li>
          </ul>
          <a href="#contact" className="btn btn--primary">Compare Final Expense Plans →</a>
          <p className="fineprint">*Availability varies by county and eligibility. We do not offer every plan available in your area.</p>
        </div>
      </div>
    </section>
  )
}

export default MedicareSection