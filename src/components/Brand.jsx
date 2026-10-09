import './Brand.css'

function Brand({ href, className = 'brand', ariaLabel, variant = 'header' }) {
  const isHeader = variant === 'header'

  return (
    <a
      href={href}
      className={`${className} ${isHeader ? 'brand--header' : 'brand--footer'}`}
      aria-label={ariaLabel || 'Final Expense PlanHub'}
    >
      {isHeader ? (
        <img
          className="brand__logo"
          src="/assets/Final%20Expense%20PlanHub%20Logo-1.png"
          alt="Final Expense PlanHub logo"
        />
      ) : (
        <img
          className="brand__footer-logo"
          src="/assets/footer%20logo.png"
          alt="Final Expense PlanHub footer logo"
        />
      )}
    </a>
  )
}

export default Brand