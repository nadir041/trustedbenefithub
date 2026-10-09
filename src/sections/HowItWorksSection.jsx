import '../styles/sections.css'
import './HowItWorksSection.css'

function HowItWorksSection() {
  return (
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
            <p>Fill out the quick form, it takes less than 2 minutes and there's no obligation.</p>
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
  )
}

export default HowItWorksSection