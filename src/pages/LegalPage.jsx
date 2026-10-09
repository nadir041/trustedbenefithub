import LegalFooter from '../components/LegalFooter.jsx'
import LegalHeader from '../components/LegalHeader.jsx'
import './LegalPage.css'

function LegalPage({ type }) {
  const isPrivacy = type === 'privacy-policy'
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'

  return (
    <div className="legal-page">
      <LegalHeader />

      <main className="legal-main">
        <div className="legal-title container">
          <h1>{title}</h1>
          <p>Last updated: <strong>January 1, 2026</strong></p>
        </div>

        <article className="legal-document">
          {isPrivacy ? (
            <>
              <p>TrustedBenefitHub ("we", "us", or "our") operates the website TrustedBenefitHub.com (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or submit a request for insurance information. Please read it carefully. By using the Site, you consent to the practices described here.</p>

              <h2>1. Information We Collect</h2>
              <p>We collect information you voluntarily provide and information collected automatically:</p>
              <ul>
                <li>Information you provide: first name, last name, age, telephone number, state, ZIP code, and any other details you submit through our quote or contact forms.</li>
                <li>Automatically collected data: IP address, browser type, device information, pages visited, referring URLs, and similar analytics data collected via cookies and comparable technologies.</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Connect you with licensed insurance agents and providers who can offer Final Expense, Medicare, and related insurance products;</li>
                <li>Respond to your inquiries and provide the quotes or information you requested;</li>
                <li>Contact you by telephone, SMS/text message, email, or automated technology (including autodialers and pre-recorded messages), consistent with the consent you provide;</li>
                <li>Improve our Site, services, and marketing; and</li>
                <li>Comply with legal obligations and prevent fraud or misuse.</li>
              </ul>

              <h2>3. Consent to Be Contacted (TCPA)</h2>
              <p>By submitting your information and checking the consent box on our form, you expressly consent to be contacted by TrustedBenefitHub and its marketing partners and licensed insurance agents at the telephone number you provided, including through the use of automatic telephone dialing systems, artificial or pre-recorded voice messages, and SMS text messages, even if your number is on a state or federal Do-Not-Call list. This consent is not a condition of purchasing any goods or services. Standard message and data rates may apply. You may revoke consent at any time (see Section 8).</p>

              <h2>4. How We Share Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Licensed insurance agents, brokers, carriers, and marketing partners who provide the requested insurance quotes and services;</li>
                <li>Service providers that support our operations (e.g., hosting, analytics, call-center services);</li>
                <li>Legal or governmental authorities when required by law, subpoena, or to protect our rights; and</li>
                <li>A successor entity in the event of a merger, acquisition, or sale of assets.</li>
              </ul>
              <p>We do not sell your personal information to unrelated third parties for their own independent marketing outside the scope described above.</p>

              <h2>5. Cookies &amp; Tracking Technologies</h2>
              <p>We use cookies, web beacons, and similar technologies to operate the Site, remember your preferences, measure performance, and support advertising. You can control cookies through your browser settings; disabling them may affect Site functionality.</p>

              <h2>6. Data Security</h2>
              <p>We implement reasonable administrative, technical, and physical safeguards designed to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

              <h2>7. Your Privacy Rights</h2>
              <p>Depending on your state of residence (for example, under the California Consumer Privacy Act), you may have the right to access, correct, delete, or restrict the use of your personal information, and to opt out of certain sharing. To exercise these rights, contact us using the details below.</p>

              <h2>8. Opt-Out &amp; Do-Not-Call</h2>
              <p>You may opt out of marketing communications at any time by replying "STOP" to any text message, asking a representative to place you on our internal Do-Not-Call list, or emailing us at <a href="mailto:support@trustedbenefithub.com">support@trustedbenefithub.com</a>. Please allow a reasonable time for your request to take effect.</p>

              <h2>9. Third-Party Links</h2>
              <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies.</p>

              <h2>10. Children's Privacy</h2>
              <p>Our Site is not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.</p>

              <h2>11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes are effective when posted on this page with a revised "Last updated" date. Your continued use of the Site constitutes acceptance of the updated policy.</p>

              <h2>12. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
              <address className="legal-address">
                <strong>TrustedBenefitHub</strong>
                <span>5601 Democracy Drive, Suite 265, Plano, TX 75024</span>
                <span>Email: <a href="mailto:support@trustedbenefithub.com">support@trustedbenefithub.com</a></span>
                <span>Phone: <a href="tel:+18447801683">(844) 780-1683</a></span>
              </address>
            </>
          ) : (
            <>
              <p>Welcome to TrustedBenefitHub.com (the "Site"). These Terms &amp; Conditions ("Terms") govern your access to and use of the Site and any services offered through it. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.</p>

              <h2>1. About Our Services</h2>
              <p>TrustedBenefitHub is a marketing and lead-generation service that connects consumers with licensed insurance agents, brokers, and carriers offering Final Expense, Medicare, and related insurance products. <strong>We are not an insurance company, and we do not issue policies, make coverage decisions, or provide insurance, legal, tax, or financial advice.</strong> Any insurance product is issued solely by the applicable licensed carrier.</p>

              <h2>2. Eligibility</h2>
              <p>You must be at least 18 years old and a legal resident of the United States to use this Site and submit a request. By using the Site, you represent that the information you provide is accurate, current, and complete.</p>

              <h2>3. No Guarantee of Coverage or Rates</h2>
              <p>Quotes, rates, benefits, and plan availability shown or referenced on the Site are illustrative and are not guarantees of coverage or pricing. Final eligibility, premiums, and terms are determined solely by the insurance carrier based on underwriting and applicable law. Plan availability varies by location and eligibility. We do not offer every plan available in your area.</p>

              <h2>4. Consent to Contact</h2>
              <p>By submitting your information through our forms, you agree to be contacted as described in our <a href="/privacy-policy">Privacy Policy</a>, including by telephone, SMS/text, email, and automated or pre-recorded means, even if your number is on a Do-Not-Call registry. Consent is not a condition of purchase.</p>

              <h2>5. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Submit false, misleading, or another person's information without authorization;</li>
                <li>Use the Site for any unlawful, fraudulent, or harmful purpose;</li>
                <li>Attempt to gain unauthorized access to the Site, its systems, or networks;</li>
                <li>Introduce viruses, malware, or other harmful code; or</li>
                <li>Copy, scrape, reproduce, or exploit any part of the Site without our written permission.</li>
              </ul>

              <h2>6. Intellectual Property</h2>
              <p>All content on the Site — including text, graphics, logos, images, and software — is owned by or licensed to TrustedBenefitHub and is protected by intellectual property laws. You may not use our trademarks or content without prior written consent.</p>

              <h2>7. Third-Party Links &amp; Services</h2>
              <p>The Site may contain links to third-party websites or reference third-party providers. We do not control and are not responsible for the content, products, services, or practices of any third party. Your dealings with such third parties are solely between you and them.</p>

              <h2>8. Disclaimer of Warranties</h2>
              <p>The Site and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. We do not warrant that the Site will be uninterrupted, secure, or error-free.</p>

              <h2>9. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, TrustedBenefitHub and its affiliates, officers, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or related to your use of the Site or any insurance product obtained through it, even if advised of the possibility of such damages.</p>

              <h2>10. Indemnification</h2>
              <p>You agree to indemnify and hold harmless TrustedBenefitHub and its affiliates from any claims, damages, liabilities, and expenses (including reasonable attorneys' fees) arising from your use of the Site or your violation of these Terms.</p>

              <h2>11. Governing Law</h2>
              <p>These Terms are governed by the laws of the United States and the state in which TrustedBenefitHub is organized, without regard to conflict-of-law principles. Any dispute shall be resolved in the courts located within that jurisdiction.</p>

              <h2>12. Changes to These Terms</h2>
              <p>We may modify these Terms at any time. Changes are effective when posted with a revised "Last updated" date. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.</p>

              <h2>13. Contact Us</h2>
              <p>For questions about these Terms, contact us at:</p>
              <address className="legal-address">
                <strong>TrustedBenefitHub</strong>
                <span>5601 Democracy Drive, Suite 265, Plano, TX 75024</span>
                <span>Email: <a href="mailto:support@trustedbenefithub.com">support@trustedbenefithub.com</a></span>
                <span>Phone: <a href="tel:+18447801683">(844) 780-1683</a></span>
              </address>
            </>
          )}

          <p className="legal-disclaimer">This website is not affiliated with or endorsed by any government agency, Medicare, or the Centers for Medicare &amp; Medicaid Services. This is a solicitation for insurance.</p>
          <a href="/" className="legal-back">← Back to Home</a>
        </article>
      </main>

      <LegalFooter />
    </div>
  )
}

export default LegalPage