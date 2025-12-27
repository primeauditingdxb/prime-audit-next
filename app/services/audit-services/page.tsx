import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Audit Services in Dubai & Sharjah | Trusted Firm in UAE',
    description: 'Professional audit services in Dubai and Sharjah for compliance, transparency, and business confidence. Reliable audits tailored to UAE regulations.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/audit-services'
    }
}

export default function AuditServicesPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/audit_services_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Audit Services' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Audit Services in Dubai & Sharjah for Reliable Financial Transparency
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Comprehensive, regulation-compliant audit services tailored for businesses in the UAE.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href="#details" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors font-medium">
                                Learn more
                            </a>
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors font-medium">
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main id="details" className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left column - main content */}
                    <article className="lg:col-span-2 space-y-12">
                        
                        {/* Intro */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <p className="text-muted leading-relaxed mb-6">
                                In the UAE's regulated business environment, audits are no longer viewed as a formality. They are a vital mechanism for financial transparency, regulatory compliance, and business credibility. Whether required by free zone authorities, banks, investors, or internal governance policies, professional Audit Services play a critical role in protecting businesses from financial, legal, and reputational risks.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                At Prime Audit Solutions, we deliver independent, accurate, and regulation-compliant audit services to businesses operating across Dubai and Sharjah. Our audits are designed not only to meet statutory requirements but also to provide management with meaningful financial insights that support better decision-making.
                            </p>
                        </section>

                        {/* Why Essential */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Audit Services Are Essential for UAE Businesses</h2>
                            <p className="text-muted mb-4">
                                Many businesses in the UAE are required to submit audited financial statements annually. However, beyond compliance, audits deliver tangible value by identifying risks, inefficiencies, and control gaps.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Professional audit services help businesses:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Meet regulatory and free zone requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Strengthen financial credibility with banks and investors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Detect errors, misstatements, or irregularities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improve internal controls and financial discipline</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Support long-term sustainability and growth</span>
                                </li>
                            </ul>
                            <p className="text-muted text-sm mt-4 italic">
                                Without structured audits, businesses often face difficulties during financing, regulatory inspections, or ownership changes.
                            </p>
                        </section>

                        {/* Comprehensive Services */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Comprehensive Audit Services Tailored to UAE Regulations</h2>
                            <p className="text-muted mb-8">
                                Our audit services are conducted in accordance with International Standards on Auditing (ISA) and aligned with UAE regulatory requirements. Each audit engagement is customized based on the nature, size, and risk profile of the business.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Statutory Audit Services</h3>
                                    <p className="text-sm text-muted">Statutory audits are mandatory for many UAE free zones, regulated entities, and businesses seeking external financing. These audits verify the accuracy and fairness of financial statements and ensure compliance with applicable laws.</p>
                                </div>
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Internal Audit Services</h3>
                                    <p className="text-sm text-muted">Internal audits focus on evaluating internal controls, operational efficiency, and risk management processes. They help management identify weaknesses before they become costly issues.</p>
                                </div>
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Compliance Audits</h3>
                                    <p className="text-sm text-muted">Compliance audits assess whether a business adheres to UAE laws, internal policies, and regulatory guidelines. These audits are especially important for businesses operating across multiple jurisdictions.</p>
                                </div>
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Free Zone Audit Reports</h3>
                                    <p className="text-sm text-muted">Most UAE free zones require annual audited financial statements. We prepare audit reports that meet free zone authority requirements and submission standards.</p>
                                </div>
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Special Purpose Audits</h3>
                                    <p className="text-sm text-muted">These audits are conducted for specific needs such as mergers, acquisitions, restructuring, or management reviews.</p>
                                </div>
                            </div>
                        </section>

                        {/* Industry Experience */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit Firms in Dubai with Industry-Specific Experience</h2>
                            <p className="text-muted mb-4">
                                As one of the reliable audit firms in Dubai, we serve a wide range of industries, including:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Trading and distribution</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Manufacturing and industrial businesses</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Real estate and construction</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Professional services</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Retail and e-commerce</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Logistics and transportation</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Our auditors understand industry-specific risks and tailor audit procedures accordingly, ensuring relevance and accuracy.
                            </p>
                        </section>

                         {/* Sharjah Focus */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit Firms in Sharjah Supporting Mainland & Free Zone Businesses</h2>
                            <p className="text-muted mb-4">
                                Sharjah-based businesses operate under distinct regulatory and operational frameworks. As experienced audit firms in Sharjah, we support both mainland and free zone entities with compliant and reliable audit services.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Our Sharjah audit engagements focus on:</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Regulatory compliance</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Financial transparency</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Risk identification</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Practical recommendations for improvement</span>
                            </div>
                        </section>

                        {/* Methodology */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Our Audit Methodology</h2>
                            <p className="text-muted mb-6">
                                We follow a structured and transparent audit approach to ensure consistency and reliability.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Step 1: Business Understanding & Risk Assessment</h4>
                                        <p className="text-sm text-muted">We analyze the business model, industry risks, and regulatory environment.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Step 2: Internal Control Evaluation</h4>
                                        <p className="text-sm text-muted">We review financial controls, accounting systems, and documentation practices.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Step 3: Substantive Testing</h4>
                                        <p className="text-sm text-muted">We verify transactions, balances, and supporting documents.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Step 4: Audit Reporting</h4>
                                        <p className="text-sm text-muted">We issue a clear audit report with observations and recommendations.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted text-sm mt-6 italic">This systematic process ensures accuracy while minimizing business disruption.</p>
                        </section>

                         {/* Accounting & Bookkeeping Importance */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Importance of Strong Accounting Systems in Audit Readiness</h2>
                            <p className="text-muted mb-6">
                                Audit outcomes depend heavily on the quality of underlying financial records. Businesses that maintain structured <a href="/services/accounting-services" className='underline'>Accounting Services In Dubai</a> experience smoother audits, fewer queries, and faster completion timelines.
                                <br/><br/>
                                Similarly, companies using professional <a href="/services/accounting-services" className='underline'>Accounting Services In Sharjah</a> benefit from localized compliance knowledge and well-organized financial documentation, which significantly improves audit efficiency.
                            </p>

                            <h3 className="text-xl font-bold text-primary-dark mb-3">Role of Bookkeeping in Successful Audits</h3>
                            <p className="text-muted mb-4">
                                Inconsistent or incomplete bookkeeping is one of the most common causes of audit delays. Professional <a href="/services/accounting-services" className='underline'>Bookkeeping Services Dubai</a> ensure that transactions are recorded accurately and supported by proper documentation.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Reliable bookkeeping:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Reduces audit observations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improves financial accuracy</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Strengthens audit confidence</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Minimizes regulatory risk</span>
                                </li>
                            </ul>
                        </section>

                        {/* Technology */}
                         <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                             <h2 className="text-2xl font-bold text-primary-dark mb-4">Technology and Audit Efficiency</h2>
                             <p className="text-muted mb-4">
                                Modern audits rely heavily on digital systems. Businesses that use secure and compliant <a href="/services/accounting-services" className='underline'>Bookkeeping And Accounting Software</a> enable auditors to access accurate data efficiently, reducing audit time and errors.
                             </p>
                             <p className="font-semibold text-gray-800 mb-2">Proper accounting software also ensures:</p>
                             <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Clear audit trails</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Automated reconciliations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Secure data storage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Faster financial verification</span>
                                </li>
                            </ul>
                        </section>

                        {/* Challenges */}
                        <section>
                             <h2 className="text-2xl font-bold text-primary-dark mb-4">Common Audit Challenges Faced by UAE Businesses</h2>
                             <p className="text-muted mb-4">Many businesses encounter audit issues due to:</p>
                             <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Poor bookkeeping practices</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Incomplete documentation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Weak internal controls</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Lack of financial transparency</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Non-compliance with regulations</span>
                                </li>
                            </ul>
                             <p className="text-muted mt-4">
                                Professional audit services help identify and address these challenges before they escalate into penalties or regulatory action.
                             </p>
                        </section>

                        {/* Long Term Value */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">How Audit Services Add Long-Term Business Value</h2>
                            <p className="text-muted mb-4">
                                Audits are not just compliance exercises. When conducted professionally, they help businesses:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improve financial governance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Enhance management accountability</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Strengthen investor and lender confidence</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Support strategic planning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Prepare for growth or restructuring</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4 italic">
                                Businesses that view audits as a strategic tool gain long-term operational benefits.
                            </p>
                        </section>


                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Choose Prime Audit Solutions for Audit Services?</h2>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Licensed and experienced audit professionals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Deep understanding of UAE regulations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Industry-specific audit expertise</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Transparent and timely reporting</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Confidential and ethical practices</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-6 font-medium">
                                Our audits are designed to protect your business while delivering actionable insights.
                            </p>
                        </section>

                        {/* Who Should Opt */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Who Should Opt for Professional Audit Services?</h2>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Free zone companies with annual audit requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Businesses seeking bank loans or investors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Companies undergoing restructuring or expansion</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">SMEs aiming to improve financial discipline</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Organizations focused on long-term compliance</span>
                                </li>
                            </ul>
                        </section>


                         {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit Services – Frequently Asked Questions (UAE)</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Are audit services mandatory in Dubai?</h3>
                                    <p className="text-sm text-muted">Audits are mandatory for many free zone entities and regulated businesses.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How long does an audit typically take?</h3>
                                    <p className="text-sm text-muted">Most audits are completed within 2–4 weeks, depending on business size.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can audit services help identify financial risks?</h3>
                                    <p className="text-sm text-muted">Yes, audits help uncover control weaknesses and financial risks.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do SMEs require audit services in the UAE?</h3>
                                    <p className="text-sm text-muted">Many SMEs require audits for banking, licensing, or investor purposes.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What documents are required for an audit?</h3>
                                    <p className="text-sm text-muted">Financial statements, ledgers, bank statements, invoices, and supporting records.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Conclusion */}
                        <section className="bg-surface rounded-xl p-6 border border-gray-100">
                            <h2 className="text-xl font-bold text-primary-dark mb-3">Audits as a Foundation for Business Confidence</h2>
                            <p className="text-muted">
                                In a competitive UAE market, financial credibility matters. Professional audit services provide assurance to regulators, stakeholders, and management that financial information is accurate and reliable.
                                <br/><br/>
                                At Prime Audit Solutions, our audit services are built on integrity, expertise, and a deep understanding of UAE business requirements helping businesses operate with confidence and clarity.
                            </p>
                        </section>

                    </article>

                    {/* Right column — aside */}
                    <aside className="space-y-6">
                        <div className="sticky top-24 bg-white rounded-xl shadow p-6 border border-gray-100">
                            <h4 className="font-semibold text-lg text-primary-dark mb-4">Quick Summary</h4>
                            <ul className="space-y-3 text-sm text-muted">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Service</span>
                                    <span>Audit & Assurance</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai & Sharjah</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Duration</span>
                                    <span>2–4 Weeks (Avg)</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="font-medium text-gray-700">Ideal For</span>
                                    <span>SMEs, Free Zone & Regulated Entities</span>
                                </li>
                            </ul>

                            <div className="mt-6 space-y-3">
                                <Link
                                    href="/contact"
                                    className="block w-full text-center px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                                >
                                    Request a proposal
                                </Link>

                                <a
                                    href="https://wa.me/971501234567"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full flex text-center justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-3 py-3 rounded-lg transition-colors"
                                >
                                    <FaWhatsapp className="h-5 w-5" />
                                    <span className="text-sm font-medium">Chat on WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-surface rounded-xl p-5 border border-gray-100">
                            <h5 className="font-semibold text-primary-dark mb-3">Who Needs This?</h5>
                            <ul className="space-y-2 text-sm text-muted list-disc pl-4">
                                <li>Free zone companies</li>
                                <li>Businesses seeking loans</li>
                                <li>Companies restructuring</li>
                                <li>SMEs improving discipline</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our experts for tailored advice on your audit requirements.</p>
                            <Link href="/contact" className="mt-4 inline-block px-4 py-2 bg-primary-dark text-white text-sm rounded hover:opacity-90">Contact us</Link>
                        </div>
                    </aside>
                </div>

                {/* Wide CTA */}
                <div className="mt-16">
                    <CTA />
                </div>
            </main>
        </>
    )
}
