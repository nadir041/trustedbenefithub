import Brand from './Brand.jsx'
import './SiteFooter.css'

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand href="#top" className="brand brand--footer" />
          <p>Helping families across America find affordable Final Expense and Medicare coverage from top-rated, licensed carriers.</p>
          <ul className="footer__contact">
            <li>📞 <a href="tel:+18447801683">(844) 780-1683</a></li>
            <li>✉️ <a href="mailto:support@trustedbenefithub.com">support@trustedbenefithub.com</a></li>
            <li>📍 <span>5601 Democracy Drive, Suite 265,<br />Plano, TX 75024</span></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Coverage</h4>
          <a href="#final-expense">Final Expense</a>
          <a href="#medicare">Medicare Advantage</a>
          <a href="#medicare">Medicare Supplement</a>
          <a href="#contact">Get a Quote</a>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <a href="#how">How It Works</a>
          <a href="#faq">FAQ</a>
          <a href="mailto:support@trustedbenefithub.com">Contact Us</a>
        </div>

        <div className="footer__col">
          <h4>Legal</h4>
          <a href="privacy-policy">Privacy Policy</a>
          <a href="terms-and-conditions">Terms &amp; Conditions</a>
        </div>
      </div>

      <div className="footer__disclaimer container">
        <p>We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options. This is a solicitation for insurance. Not affiliated with or endorsed by any government agency.</p>
        <p className="footer__copy">© <span id="year">2026</span> TrustedBenefitHub.com — All rights reserved.</p>
      </div>
    </footer>
  )
}

export default SiteFooter