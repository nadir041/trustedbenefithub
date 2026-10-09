import '../styles/sections.css'
import './FaqSection.css'

function FaqSection() {
  return (
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
  )
}

export default FaqSection