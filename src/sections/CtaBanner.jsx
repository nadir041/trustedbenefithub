import '../styles/buttons.css'
import './CtaBanner.css'

function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__row reveal">
        <div>
          <h2>Ready to protect your family's future?</h2>
          <p>Get your free, no-obligation quote today, it only takes a couple of minutes.</p>
        </div>
        <a href="#contact" className="btn btn--white">Get My Free Quote →</a>
      </div>
    </section>
  )
}

export default CtaBanner