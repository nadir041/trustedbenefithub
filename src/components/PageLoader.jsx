import './PageLoader.css'

function PageLoader() {
  return (
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
        <p className="loader__text">Finalexpenseplanhub</p>
        <span className="loader__sub">Securing your peace of mind…</span>
      </div>
    </div>
  )
}

export default PageLoader