import LegalFooter from '../components/LegalFooter.jsx'
import LegalHeader from '../components/LegalHeader.jsx'
import './LegalPage.css'
import './PartnersPage.css'

const partners = [
  'National Senior Benefit Advisors',
  'Elite Agency',
  'YourWayMedicare',
  'Unlimited Investors Group',
  'Tranzact',
  'Thomas Art',
  'Spring Venture Group',
  'SelectQuote',
  'Px',
  'Plan B Group',
  'One Digital',
  'Morgan Fidelity',
  'Kauffman Insurance Group',
  'iHealth Plans',
  'GetMeHealthcare',
  'Family First Insurance',
  'Exact Benefits Group',
  'Enhance',
  'EHealth',
  'Datalot',
  'Connect One Health',
  'ClearMatch Medicare',
  'Clearlink',
  'Carida Insurance',
  'Assurance IQ Medicare',
  'Amerilife',
  'HLG Solutions',
  'GoHealth',
  'HealthMarkets',
  'Integrity Marketing Group',
  'Ritter Insurance Marketing',
  'Senior Market Sales',
  'eTelequote',
  'TrueCoverage',
  'Boomer Benefits',
  'Chapter Medicare',
  'HealthPlanOne',
  'QuoteWizard',
  'EverQuote',
  'MediaAlpha',
  'SmartFinancial',
  'QuinStreet',
  'Insurify',
  'NextGen Leads',
  'Mutual of Omaha',
  'All Web Leads',
  'Benepath',
  'VelaPoint',
  'American Senior Benefits',
  'Senior Life Insurance Company',
  'Policygenius',
  'eFinancial',
  'Ethos',
  'Quility',
  'Symmetry Financial Group',
  'Agent Pipeline',
  'Physicians Mutual',
  'Convey Health Solutions',
  'HealthSherpa',
  'HealthCare.com',
  'USHealth Group',
  'Pivot Health',
  'Choice Mutual',
  'Lincoln Heritage Life Insurance',
  'Globe Life',
  'Fluent',
  'Answer Financial',
  'Bankers Life',
  'American-Amicable',
  'Colonial Penn Life Insurance',
]

function PartnersPage() {
  return (
    <div className="legal-page">
      <LegalHeader />

      <main className="legal-main">
        <div className="legal-title container">
          <h1>Our Partners</h1>
          <p>Insurance companies, agencies, and marketing partners that may contact you.</p>
        </div>

        <article className="legal-document">
          <p>By submitting your information through Finalexpenseplanhub.com and providing your consent, you authorize the following companies, their agents, and marketing partners to contact you about Final Expense insurance and related products by telephone call, text message, or email at the contact information you provided.</p>

          <ul className="partners-list">
            {partners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>

          <p>This list may be updated from time to time. Your consent is not a condition of purchase, and you may revoke it at any time. For more information, please review our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-and-conditions">Terms &amp; Conditions</a>.</p>

          <p className="legal-disclaimer">This website is not affiliated with or endorsed by any government agency, Medicare, or the Centers for Medicare &amp; Medicaid Services. This is a solicitation for insurance.</p>
          <a href="/" className="legal-back">← Back to Home</a>
        </article>
      </main>

      <LegalFooter />
    </div>
  )
}

export default PartnersPage
