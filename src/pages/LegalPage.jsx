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
          <p>Last updated: <strong>October 10, 2026</strong></p>
        </div>

        <article className="legal-document">
          {isPrivacy ? (
            <>
              <p>Finalexpenseplanhub.com (“we,” “us,” or “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, Finalexpenseplanhub.com (the “Site”), or submit information through our forms. By using our Site, you acknowledge the practices described in this Privacy Policy.</p>

              <h2>1. Information We Collect</h2>
              <p>When you submit a form or request information through our Site, we may collect personal information such as:</p>
              <ul>
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>ZIP code</li>
                <li>Age or other details relevant to your insurance inquiry</li>
                <li>Any additional information you voluntarily provide</li>
              </ul>
              <p>
                We use this information to respond to your inquiries, help you explore final expense insurance options, and connect you with insurance professionals where applicable.
              </p>
              <p>
                <strong>Automatically Collected Information</strong><br/>
                When you visit our Site, certain information may be collected automatically, including your IP address, browser type, device information, pages visited, referring website, and dates and times of visits. This information helps us understand website usage, maintain security, and improve our services.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your requests for information about final expense insurance.</li>
                <li>Help you compare available insurance coverage options.</li>
                <li>Connect you with licensed insurance agents, agencies, or insurance providers where applicable.</li>
                <li>Communicate with you about your inquiry, including by phone, email, or text message, where permitted and authorized.</li>
                <li>Improve our website, services, and user experience.</li>
                <li>Monitor website performance and prevent fraudulent or unauthorized activity.</li>
                <li>Comply with applicable laws, regulations, and legal obligations.</li>
              </ul>
              <p>
                <strong>Communications and Consent</strong><br/>
                If you provide your contact information and give the required consent, we or the insurance partners identified in the applicable disclosure may contact you regarding your insurance inquiry or available products. Depending on your consent, communications may include telephone calls, text messages, emails, or calls and messages using automated technology where legally permitted.

Consent to receive marketing communications is not a condition of purchasing insurance. Your consent does not override applicable legal requirements, and any Do-Not-Call restrictions or other communication rules will be observed as required by law.
              </p>

              <h2>3. How We Share Your Information</h2>
              <ul>
                <li> <strong>Insurance professionals and providers:</strong> To licensed agents, agencies, or insurance carriers when necessary to respond to your inquiry or provide requested insurance information.</li>
                <li><strong>Service providers:</strong> To vendors that assist with website hosting, analytics, communications, security, and other business operations.</li>
                <li><strong>Legal compliance: </strong> When disclosure is required by law, regulation, court order, or a lawful government request.</li>
                <li><strong>Business transactions: </strong> In connection with a merger, acquisition, restructuring, or transfer of business assets, subject to applicable legal requirements.</li>
              </ul>
              <p>Information may be shared only as appropriate for the relevant purpose and subject to applicable law. We do not authorize third parties to use your information in ways that conflict with applicable privacy requirements.</p>

              <h2>44. Cookies and Tracking Technologies</h2>
              <p>Our Site may use cookies, pixels, analytics tools, and similar technologies to support website functionality, understand visitor behavior, measure performance, and improve our services.</p>

              <p>You can manage or disable cookies through your browser settings. Certain website features may not function properly if cookies are disabled. Where required by law, we will obtain consent for applicable non-essential tracking technologies.</p>

              <h2>5. Your Privacy Rights and Choices</h2>
              <p>Depending on your location and applicable law, you may have the right to:</p>
              <ul>
                <li>Request access to personal information we hold about you.</li>
                <li>Request correction of inaccurate information.</li> 
                <li>Request deletion of your personal information, subject to legal exceptions.</li>
                <li>Opt out of certain marketing communications or data-processing activities where applicable.</li>
                <li>Withdraw consent for future communications where consent is the legal basis for processing.</li>
                </ul>
                <p>
                  To stop receiving promotional emails, use the unsubscribe link included in the message. To stop receiving text messages, reply STOP where supported. You may also request that we update or delete your information by contacting us at the email address provided below.

Opting out of marketing communications does not necessarily stop service-related messages or communications that we are legally permitted or required to send.
                </p>

              <h2>6. Data Security</h2>
              <p>We use reasonable administrative, technical, and organizational measures intended to protect personal information against unauthorized access, disclosure, alteration, and destruction.
              Although we take appropriate precautions, no website, electronic transmission, or storage system can be guaranteed to be completely secure. We cannot guarantee absolute security of your information.</p>

              <h2>7. Data Retention</h2>
              <p>We retain personal information for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, respond to inquiries, maintain business records, resolve disputes, and comply with applicable legal obligations. Retention periods may vary depending on the nature of the information and the relevant requirements.</p>

              <h2>8. Third-Party Websites and Services</h2>
              <p>Our Site may contain links to third-party websites or services. These third parties may have their own privacy policies and practices. We are not responsible for the privacy, security, or content of websites we do not operate. We encourage you to review the applicable privacy policies before submitting personal information to third parties.</p>

              <h2>9. Children's Privacy</h2>
              <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies.</p>

              <h2>10. Insurance Information Disclaimer</h2>
              <p>Finalexpenseplanhub.com provides information for general marketing and insurance inquiry purposes. Unless expressly stated otherwise, we are not an insurance carrier and do not make guarantees regarding coverage, eligibility, benefits, or pricing.
              
              We are not affiliated with or endorsed by any government agency unless explicitly disclosed. Insurance products, rates, eligibility requirements, and availability may vary by state, insurer, and individual circumstances. Any insurance recommendations or quotes should be confirmed with the relevant licensed insurance professional or provider.</p>

              <h2>11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our practices, website functionality, or applicable legal requirements. Any changes will be posted on this page along with the updated effective date. Your continued use of the Site after an update constitutes use subject to the revised policy, to the extent permitted by law.</p>

              <h2>12. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or wish to exercise an applicable privacy right, please contact us:</p>
              <address className="legal-address">

                <span>Email: <a href="mailto:info@finalexpenseplanhub.com.com">info@finalexpenseplanhub.com</a></span>
                <span>Phone: <a href="tel:+18447801683">(844) 780-1683</a></span>
              </address>
            </>
          ) : (
            <>
              <p>Welcome to Finalexpenseplanhub.com (the “Site”). These Terms and Conditions govern your access to and use of our website. By accessing or using this Site, you agree to these terms. Please read them carefully before submitting any personal information through our forms.</p>

              <h2>Use of the Site</h2>
              <p>You agree to use this Site only for lawful purposes and to provide accurate and complete information when submitting a form or requesting information about final expense insurance. You may not attempt to disrupt the Site, interfere with its functionality, gain unauthorized access to its systems, or use it for fraudulent or unlawful activities.</p>

              <h2>Eligibility</h2>
              <p>This Site is intended for individuals who are at least 18 years old and reside in the United States. By using this Site or submitting your information, you represent that you meet these eligibility requirements.</p>

              <h2>Consent to Contact</h2>
              <p>When you submit your contact information through this Site, you may be asked to provide consent to receive communications regarding final expense insurance products, quotes, and related services.</p>
              <p>Where you provide the required consent, Finalexpenseplanhub.com and the insurance agents, agencies, or partners identified in the applicable consent disclosure may contact you by telephone, email, or text message. This may include the use of automated dialing systems or prerecorded messages where permitted by law and covered by your consent.</p>
              <p>Your consent to receive marketing communications is not a condition of purchasing insurance. Applicable federal and state laws, including restrictions relating to Do-Not-Call registries, will apply. You may withdraw your consent or opt out of marketing communications as described in the relevant communication or by contacting us at the email address listed below.</p>

              <h2>No Guarantee of Coverage or Quotes</h2>
              <p>Submitting information through this Site does not guarantee that you will receive an insurance quote, qualify for coverage, or be issued an insurance policy.</p>
              <p>Premiums, coverage amounts, eligibility, benefits, and policy terms depend on the insurance provider, your individual circumstances, and applicable underwriting requirements. Final decisions regarding coverage and pricing are made by the relevant insurance provider.</p>

              <h2>Insurance Information Disclaimer</h2>
              <p>The information provided on this Site is for general informational and marketing purposes only. It should not be considered a guarantee of insurance coverage, a binding offer, or a substitute for reviewing the terms of an actual insurance policy.</p>
              <p>Insurance products and availability may vary by state and provider. You should consult an appropriately licensed insurance professional for information about specific products, eligibility requirements, benefits, and costs.</p>
              <p>Unless expressly stated otherwise, Finalexpenseplanhub.com is not an insurance carrier and does not represent any government agency. Any relationships with insurance providers or licensed agents will be subject to the applicable disclosures and agreements.</p>

              <h2>Intellectual Property</h2>
              <p>All content on this Site, including text, graphics, logos, images, design elements, and page layouts, is owned by or licensed to Finalexpenseplanhub.com and is protected by applicable intellectual property laws.</p>
              <p>You may not reproduce, copy, modify, distribute, republish, or commercially use Site content without prior written permission, except where permitted by law.</p>

              <h2>Limitation of Liability</h2>
              <p>To the extent permitted by applicable law, Finalexpenseplanhub.com shall not be liable for indirect, incidental, consequential, or special damages arising from your use of or inability to use the Site.</p>
              <p>We do not guarantee uninterrupted access, error-free operation, or the accuracy or completeness of all information presented on the Site. We are not responsible for the independent actions, services, or representations of third-party insurance providers, agents, or external websites.</p>
              <p>Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law.</p>

              <h2>Third-Party Links and Services</h2>
              <p>Our Site may contain links to third-party websites or services for your convenience. These websites operate independently and may have their own terms, privacy policies, and practices.</p>
              <p>We do not control or assume responsibility for third-party content, services, or privacy practices. You should review the applicable terms and policies before interacting with any third-party website.</p>

              <h2>Privacy</h2>
              <p>Your use of this Site is also subject to our Privacy Policy, which explains how we collect, use, disclose, and protect personal information. By using the Site, you acknowledge that you can review our Privacy Policy to understand these practices.</p>

              <h2>Changes to These Terms</h2>
              <p>We reserve the right to update or modify these Terms and Conditions at any time. Changes will become effective when posted on this page, unless otherwise stated. The effective date will be updated when appropriate.</p>
              <p>Your continued use of the Site after revised terms are posted constitutes acceptance of the updated terms to the extent permitted by applicable law. We encourage you to review this page periodically.</p>

              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
              <address className="legal-address">
                <span>Website: Finalexpenseplanhub.com</span>
                <span>Email: <a href="mailto:info@finalexpenseplanhub.com">info@finalexpenseplanhub.com</a></span>
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