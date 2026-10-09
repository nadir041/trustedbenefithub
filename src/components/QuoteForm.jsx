import '../styles/buttons.css'
import './QuoteForm.css'

function QuoteForm() {
  return (
    <form className="quote-form" id="contact" name="contact" noValidate>
      <div className="quote-form__head">
        <h2 id="formHeading">Get Your Free Quote</h2>
        <p>100% free &amp; confidential — takes under 2 minutes.</p>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="John" autoComplete="given-name" required />
          <small className="err" data-for="firstName"></small>
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Smith" autoComplete="family-name" required />
          <small className="err" data-for="lastName"></small>
        </div>
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" autoComplete="tel" inputMode="tel" required />
        <small className="err" data-for="phone"></small>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="state">State (2 letters)</label>
          <input type="text" id="state" name="state" placeholder="TX" maxLength="2" autoComplete="address-level1" autoCapitalize="characters" required />
          <small className="err" data-for="state"></small>
        </div>
        <div className="field">
          <label htmlFor="zipcode">Zip Code</label>
          <input type="text" id="zipcode" name="zipcode" placeholder="75001" maxLength="5" autoComplete="postal-code" inputMode="numeric" required />
          <small className="err" data-for="zipcode"></small>
        </div>
      </div>

      <input id="leadid_token" name="universal_leadid" type="hidden" value="" />
      <input type="hidden" id="xxTrustedFormCertUrl_0" name="xxTrustedFormCertUrl" value="" />
      <input type="hidden" id="xxTrustedFormPingUrl_0" name="xxTrustedFormPingUrl" value="" />

      <div className="field field--consent">
        <label className="consent">
          <input type="checkbox" id="consent" name="consent" required />
          <span className="consent__text">
            By checking this box, I agree to be contacted by TrustedBenefitHub and its
            partners at the number provided (including via autodialer, pre-recorded messages
            &amp; SMS), even if it is on a Do-Not-Call list. Consent is not a condition of
            purchase. I agree to the
            <a href="privacy-policy" target="_blank" rel="noopener">Privacy Policy</a> &amp;
            <a href="terms-and-conditions" target="_blank" rel="noopener">Terms</a>.
          </span>
        </label>
        <small className="err" data-for="consent"></small>
      </div>

      <button type="submit" id="submitBtn" className="btn btn--full btn--glow">
        <span className="btn__label">Get My Free Quote →</span>
        <span className="btn__spinner" aria-hidden="true"></span>
      </button>

      <p className="quote-form__secure">🔒 Your information is secure &amp; will never be sold to spammers.</p>

      <p className="quote-form__disclaimer" style={{ marginTop: '14px', fontSize: '11px', lineHeight: '1.55', color: '#6b7280' }}>
        We do not offer every plan available in your area. Any information we provide is limited to
        those plans we do offer in your area. Please contact Medicare.gov or 1&#8209;800&#8209;MEDICARE
        to get information on all of your options. TrustedBenefitHub is a private, non-government entity
        and is not affiliated with or endorsed by the U.S. government, the federal Medicare program, the
        Centers for Medicare &amp; Medicaid Services (CMS), or any government agency.
      </p>

      <div className="form-success" id="formSuccess" hidden>
        <div className="form-success__icon">✓</div>
        <h3>Thank you, <span id="successName">friend</span>!</h3>
        <p>One of our licensed specialists will reach out shortly with your personalized quote.</p>
      </div>
    </form>
  )
}

export default QuoteForm