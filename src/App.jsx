import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const loader = document.getElementById('loader')
    const hideLoader = () => {
      if (!loader) return
      setTimeout(() => loader.classList.add('hidden'), 650)
    }

    const header = document.getElementById('header')
    const onScroll = () => {
      if (!header) return
      if (window.scrollY > 20) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
    }

    const navToggle = document.getElementById('navToggle')
    const nav = document.getElementById('nav')
    if (navToggle && nav) {
      navToggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open')
        navToggle.classList.toggle('open', open)
        navToggle.setAttribute('aria-expanded', String(open))
      })

      nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          nav.classList.remove('open')
          navToggle.classList.remove('open')
          navToggle.setAttribute('aria-expanded', 'false')
        })
      })
    }

    const revealEls = document.querySelectorAll('.reveal')
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || (index % 4) * 80
            setTimeout(() => entry.target.classList.add('in'), delay)
            io.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

      revealEls.forEach((el) => io.observe(el))
    } else {
      revealEls.forEach((el) => el.classList.add('in'))
    }

    const yearEl = document.getElementById('year')
    if (yearEl) yearEl.textContent = new Date().getFullYear()

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    window.addEventListener('load', hideLoader)
    setTimeout(hideLoader, 3500)

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const id = link.getAttribute('href')
        if (!id || id.length < 2) return
        const target = document.querySelector(id)
        if (!target) return
        event.preventDefault()
        const y = target.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top: y, behavior: 'smooth' })
        if (window.history && history.pushState) history.pushState(null, '', id)
        else window.location.hash = id
      })
    })

    const form = document.getElementById('contact')
    const submitBtn = document.getElementById('submitBtn')
    const successBox = document.getElementById('formSuccess')

    const setError = (id, msg) => {
      const field = document.getElementById(id)
      if (!field) return true
      const wrap = field.closest('.field')
      const err = document.querySelector(`.err[data-for="${id}"]`)
      if (msg) {
        wrap.classList.add('invalid')
        if (err) err.textContent = msg
      } else {
        wrap.classList.remove('invalid')
        if (err) err.textContent = ''
      }
      return !msg
    }

    const validate = () => {
      let ok = true
      const value = (id) => (document.getElementById(id)?.value || '').trim()

      ok = setError('firstName', value('firstName').length >= 2 ? '' : 'Please enter your first name.') && ok
      ok = setError('lastName', value('lastName').length >= 2 ? '' : 'Please enter your last name.') && ok

      const digits = value('phone').replace(/\D/g, '')
      ok = setError('phone', digits.length >= 10 ? '' : 'Enter a valid phone number.') && ok

      const stateValue = value('state').toUpperCase()
      ok = setError('state', /^[A-Z]{2}$/.test(stateValue) ? '' : 'Enter a valid 2-letter state.') && ok
      ok = setError('zipcode', /^\d{5}$/.test(value('zipcode').replace(/\D/g, '')) ? '' : 'Enter a valid 5-digit zip.') && ok

      const consent = document.getElementById('consent')
      ok = setError('consent', consent && consent.checked ? '' : 'Please provide your consent to continue.') && ok
      return ok
    }

    ;['firstName', 'lastName', 'phone', 'state', 'zipcode'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) el.addEventListener('input', () => setError(id, ''))
    })

    const consentEl = document.getElementById('consent')
    if (consentEl) consentEl.addEventListener('change', () => setError('consent', ''))

    let leadIP = ''
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        leadIP = data.ip || ''
      })
      .catch(() => {})

    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault()
        if (!validate()) {
          const firstInvalid = form.querySelector('.field.invalid')
          if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' })
          return
        }

        submitBtn?.classList.add('loading')
        submitBtn.disabled = true

        const fieldValue = (selector) => {
          const el = document.querySelector(selector)
          return el ? el.value : ''
        }

        const certUrl = fieldValue('input[name="xxTrustedFormCertUrl"]')
        const data = {
          source: 'TrustedBenefitHub',
          firstName: document.getElementById('firstName').value.trim(),
          lastName: document.getElementById('lastName').value.trim(),
          phone: document.getElementById('phone').value.replace(/\D/g, ''),
          state: document.getElementById('state').value.trim().toUpperCase(),
          zipcode: document.getElementById('zipcode').value.replace(/\D/g, ''),
          consent: document.getElementById('consent').checked ? 'Yes' : 'No',
          trustedFormCert: certUrl,
          trustedFormToken: certUrl ? certUrl.split('/').pop() : '',
          trustedFormPingUrl: fieldValue('input[name="xxTrustedFormPingUrl"]'),
          leadiD: fieldValue('input[name="universal_leadid"]') || fieldValue('#leadid_token'),
          ip: leadIP,
          userAgent: navigator.userAgent,
        }

        const LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxkxfB4EKb1nAeEystZE0c8xxd48LzHcxiVJhCCPmGVRaaImtG6ikGS_2Q6VmRYGfgD1g/exec'
        const showSuccess = () => {
          submitBtn?.classList.remove('loading')
          const nameEl = document.getElementById('successName')
          if (nameEl) nameEl.textContent = data.firstName
          if (successBox) successBox.hidden = false
        }

        fetch(LEAD_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(data),
        }).then(showSuccess).catch(showSuccess)
      })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('load', hideLoader)
    }
  }, [])

  return (
    <>
      <div id="loader" className="loader">
        <div className="loader__inner">
          <div className="loader__ring">
            <span></span><span></span><span></span>
          </div>
          <div className="loader__logo">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4z" fill="#2ec7a6" />
              <path d="M9.2 12.2l1.9 1.9 4-4.2" stroke="#0b3d6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="loader__text">TrustedBenefitHub</p>
          <span className="loader__sub">Securing your peace of mind…</span>
        </div>
      </div>

      <div className="topbar">
        <div className="container topbar__row">
          <span className="topbar__item">✓ Licensed Insurance Specialists</span>
          <span className="topbar__item">✓ No Medical Exam Options</span>
          <a className="topbar__call" href="tel:+18447801683">📞 Call Now: (844) 780-1683</a>
        </div>
      </div>

      <header className="header" id="header">
        <div className="container header__row">
          <a href="#top" className="brand" aria-label="TrustedBenefitHub — Medicare & Final Expense">
            <span className="brand__mark">
              <img className="brand__logo" src="/assets/brand-shield.png" width="42" height="42" alt="" aria-hidden="true" />
            </span>
            <span className="brand__lockup">
              <span className="brand__name">Trusted<strong>Benefit</strong>Hub</span>
              <span className="brand__tag">Medicare &amp; Final Expense</span>
            </span>
          </a>

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

      <main id="top">
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
            </div>
          </div>
        </section>

        <section className="logos">
          <div className="container logos__row">
            <span>Trusted &amp; compared across A-rated carriers:</span>
            <div className="logos__marquee">
              <em>Mutual&nbsp;of&nbsp;Omaha</em><em>Aetna</em><em>Cigna</em><em>Humana</em><em>UnitedHealthcare</em><em>Foresters</em>
            </div>
          </div>
        </section>

        <section className="section" id="final-expense">
          <div className="container">
            <div className="section__head reveal">
              <span className="eyebrow">Final Expense Insurance</span>
              <h2>Peace of mind that fits any budget</h2>
              <p>Final expense life insurance is designed to cover funeral costs, medical bills, and other end-of-life expenses — so your loved ones aren't left with the bill.</p>
            </div>

            <div className="cards">
              <article className="card reveal">
                <div className="card__icon">🛡️</div>
                <h3>Guaranteed Acceptance</h3>
                <p>Ages 45–85 can qualify with no medical exam and no health questions on select plans.</p>
              </article>
              <article className="card reveal">
                <div className="card__icon">💵</div>
                <h3>Affordable Premiums</h3>
                <p>Plans starting as low as a cup of coffee a day, with rates that are locked for life.</p>
              </article>
              <article className="card reveal">
                <div className="card__icon">⚡</div>
                <h3>Fast Payout</h3>
                <p>Benefits are typically paid to your beneficiary within 24–48 hours of a claim.</p>
              </article>
              <article className="card reveal">
                <div className="card__icon">📉</div>
                <h3>Never Expires</h3>
                <p>As long as premiums are paid, your coverage stays active for your entire life.</p>
              </article>
            </div>
          </div>
        </section>

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
              <span className="eyebrow">Medicare Plans</span>
              <h2>Get every benefit you're entitled to</h2>
              <p>Turning 65 or already enrolled? We help you compare Medicare Advantage, Supplement (Medigap), and Part D plans so you never overpay or miss out on benefits.</p>
              <ul className="checklist">
                <li>Dental, vision &amp; hearing coverage options</li>
                <li>Prescription drug (Part D) savings</li>
                <li>$0 premium Advantage plans in many areas*</li>
                <li>Free plan reviews during enrollment periods</li>
              </ul>
              <a href="#contact" className="btn btn--primary">Compare Medicare Plans →</a>
              <p className="fineprint">*Availability varies by county and eligibility. We do not offer every plan available in your area.</p>
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <div className="section__head reveal">
              <span className="eyebrow">Simple Process</span>
              <h2>Get covered in 3 easy steps</h2>
            </div>
            <div className="steps">
              <div className="step reveal">
                <div className="step__num">1</div>
                <h3>Share a few details</h3>
                <p>Fill out the quick form — it takes less than 2 minutes and there's no obligation.</p>
              </div>
              <div className="step reveal">
                <div className="step__num">2</div>
                <h3>Compare your options</h3>
                <p>A licensed specialist matches you with the best plans from top-rated carriers.</p>
              </div>
              <div className="step reveal">
                <div className="step__num">3</div>
                <h3>Enjoy peace of mind</h3>
                <p>Lock in your rate and rest easy knowing your family is protected.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner">
          <div className="container cta-banner__row reveal">
            <div>
              <h2>Ready to protect your family's future?</h2>
              <p>Get your free, no-obligation quote today — it only takes a couple of minutes.</p>
            </div>
            <a href="#contact" className="btn btn--white">Get My Free Quote →</a>
          </div>
        </section>

        <section className="section section--alt" id="faq">
          <div className="container faq">
            <div className="section__head reveal">
              <span className="eyebrow">Questions?</span>
              <h2>Frequently asked questions</h2>
            </div>

            <div className="accordion reveal">
              <details>
                <summary>What is final expense insurance?</summary>
                <p>Final expense insurance is a type of whole life insurance designed to cover end-of-life costs such as funeral services, burial or cremation, and outstanding medical bills. It provides a modest death benefit paid directly to your chosen beneficiary.</p>
              </details>
              <details>
                <summary>Do I need a medical exam to qualify?</summary>
                <p>Many of our final expense plans require no medical exam. Some guaranteed-acceptance plans ask no health questions at all, making it easy to get covered even with pre-existing conditions.</p>
              </details>
              <details>
                <summary>When can I enroll in a Medicare plan?</summary>
                <p>You can enroll during your Initial Enrollment Period (around your 65th birthday), the Annual Enrollment Period (Oct 15 – Dec 7), or a Special Enrollment Period if you qualify. Our specialists can confirm your eligibility.</p>
              </details>
              <details>
                <summary>Is my personal information safe?</summary>
                <p>Absolutely. We use industry-standard security to protect your data and we never sell your information to spam lists. See our <a href="privacy-policy">Privacy Policy</a> for full details.</p>
              </details>
              <details>
                <summary>How much does coverage cost?</summary>
                <p>Costs vary based on your age, coverage amount, and location. Many final expense plans start at just a few dollars a day, and some Medicare Advantage plans have $0 monthly premiums. Get a free quote to see your exact rates.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <a href="#top" className="brand brand--footer">
              <span className="brand__mark">
                <img className="brand__logo" src="/assets/brand-shield.png" width="42" height="42" alt="" aria-hidden="true" />
              </span>
              <span className="brand__lockup">
                <span className="brand__name">Trusted<strong>Benefit</strong>Hub</span>
                <span className="brand__tag">Medicare &amp; Final Expense</span>
              </span>
            </a>
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

      <a href="tel:+18447801683" className="sticky-call" aria-label="Call now">📞 Call for a Free Quote</a>
    </>
  )
}

export default App
