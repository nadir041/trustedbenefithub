import './Brand.css'

function Brand({ href, className = 'brand', ariaLabel }) {
  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      <span className="brand__mark">
        <img className="brand__logo" src="/assets/brand-shield.png" width="42" height="42" alt="" aria-hidden="true" />
      </span>
      <span className="brand__lockup">
        <span className="brand__name">Trusted<strong>Benefit</strong>Hub</span>
        <span className="brand__tag">Medicare &amp; Final Expense</span>
      </span>
    </a>
  )
}

export default Brand