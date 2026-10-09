import '../styles/sections.css'
import './FinalExpenseSection.css'

function FinalExpenseSection() {
  return (
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
  )
}

export default FinalExpenseSection