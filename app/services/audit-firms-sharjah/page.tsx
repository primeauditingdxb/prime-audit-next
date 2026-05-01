import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Audit Firms in Sharjah | Trusted Audit Services for Mainland & Free Zone Businesses',
    description: 'Trusted audit firm in Sharjah for mainland and free zone businesses. ISA-compliant statutory, internal, and compliance audit services with fixed-fee support.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/audit-firms-sharjah'
    }
}

export default function AuditFirmsSharjahPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/audit_firms_sharjah_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Audit Firms in Sharjah' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Audit Firms in Sharjah
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Trusted ISA-compliant audit services for mainland and free zone businesses. Statutory, internal, and compliance audits with fixed-fee support.
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
                                Choosing the right audit firm in Sharjah is one of the most important financial decisions a business can make. A properly conducted audit does more than satisfy a regulatory requirement — it strengthens financial credibility, improves internal controls, supports licence renewals, and gives business owners, investors, banks, and regulators confidence in the numbers behind the business.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Prime Audit Solutions LLC provides reliable, ISA-compliant audit services in Sharjah for mainland companies, free zone entities, and growing businesses that need accurate, independent, and regulator-ready financial assurance.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Sharjah is home to a diverse and fast-growing business landscape spanning industrial companies, trading firms, logistics operators, manufacturing businesses, professional services, and free zone entities. Each of these business types faces different audit expectations, reporting obligations, and financial risks. Our audit services are designed to give Sharjah businesses more than just a signed report — we deliver clarity, compliance, and confidence.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Whether you operate in mainland Sharjah, SHAMS, SAIF Zone, HFZA, SRTIP, or another Sharjah free zone, our team delivers audit support built around local regulatory expectations and practical commercial understanding. If your books need to be reviewed before audit begins, our <Link href="/services/accounting-services" className="underline">Accounting Services in Sharjah</Link> team can help prepare clean, audit-ready records first.
                            </p>
                        </section>

                        {/* Why Audit Services Matter */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Audit Services Matter for Sharjah Businesses</h2>
                            <p className="text-muted mb-4">
                                An audit is not simply an annual compliance exercise. It is an independent financial review that validates whether your financial statements are accurate, complete, and prepared in accordance with accepted accounting standards. For businesses in Sharjah, this matters not only for regulatory filings and licence renewals, but also for banking relationships, investor confidence, internal governance, and long-term financial credibility.
                            </p>
                            <p className="text-muted mb-4">
                                A weak or delayed audit can create serious business consequences. It can delay free zone licence renewals, weaken investor confidence, create banking friction, expose reporting gaps, and increase regulatory scrutiny. A properly managed audit helps identify financial issues early, improves internal discipline, and gives stakeholders confidence in the integrity of your reporting.
                            </p>
                            <p className="text-muted mb-3">Professional audit support helps Sharjah businesses:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Maintain regulatory compliance</li>
                                <li>Strengthen financial credibility</li>
                                <li>Support licence renewal requirements</li>
                                <li>Improve internal controls</li>
                                <li>Reduce reporting risk</li>
                                <li>Identify financial weaknesses early</li>
                                <li>Improve investor and lender confidence</li>
                                <li>Support long-term business growth</li>
                            </ul>
                            <p className="text-muted">
                                Businesses preparing for annual audit often also require <Link href="/services/tax-advisory" className="underline">Tax Advisory Services in Sharjah</Link> to align tax treatment and reporting before submission.
                            </p>
                        </section>

                        {/* Who This Service Is Best For */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Who This Service Is Best For</h2>
                            <p className="text-muted mb-4">Our audit services in Sharjah are best suited for:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Mainland Sharjah companies requiring statutory audit support</li>
                                <li>Free zone businesses with annual audit submission requirements</li>
                                <li>SMEs preparing for bank finance or investor due diligence</li>
                                <li>Trading and industrial businesses with higher reporting complexity</li>
                                <li>Group entities requiring intercompany reconciliation and audit coordination</li>
                                <li>Businesses with weak internal controls or incomplete records</li>
                                <li>Companies preparing for restructuring, acquisition, or external review</li>
                            </ul>
                            <p className="text-muted">
                                Whether your audit is mandatory, investor-driven, or operationally strategic, our team provides independent assurance that supports both compliance and better financial control.
                            </p>
                        </section>

                        {/* Our Audit Services Include */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Audit Services in Sharjah Include</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Full-Scope Audit &amp; Assurance Services</h3>
                            <p className="text-muted mb-4">We provide a complete range of audit and assurance services for Sharjah businesses, including:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Statutory (External) Audit</li>
                                <li>Internal Audit</li>
                                <li>Free Zone Audit</li>
                                <li>Compliance Audit</li>
                                <li>Agreed-Upon Procedures (AUP)</li>
                                <li>Special Purpose Audit</li>
                                <li>Financial Review &amp; Compilation Engagements</li>
                                <li>Management Accounts Review</li>
                                <li>Internal control reviews</li>
                                <li>Audit support for tax and regulatory reviews</li>
                            </ul>
                            <p className="text-muted">Every audit is tailored to your entity structure, industry, and reporting obligations.</p>
                        </section>

                        {/* Mainland & Free Zone */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit Services for Sharjah Mainland &amp; Free Zone Businesses</h2>
                            <p className="text-muted mb-4">We provide audit services for businesses across Sharjah mainland and major free zones, including:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Sharjah Mainland (DED)</li>
                                <li>SHAMS (Sharjah Media City)</li>
                                <li>SAIF Zone (Sharjah Airport International Free Zone)</li>
                                <li>HFZA (Hamriyah Free Zone Authority)</li>
                                <li>SRTIP (Sharjah Research Technology and Innovation Park)</li>
                                <li>SFZA (Sharjah Publishing City)</li>
                            </ul>
                            <p className="text-muted mb-4">
                                Each jurisdiction has different reporting expectations, accepted formats, deadlines, and authority-specific audit requirements. Our team ensures your audit report is prepared in the correct format and submitted in line with the authority&apos;s expectations.
                            </p>
                            <p className="text-muted">
                                For businesses also operating in Dubai, our <Link href="/services/audit-services" className="underline">Audit Services in Dubai &amp; Sharjah</Link> team provides coordinated cross-emirate audit support.
                            </p>
                        </section>

                        {/* Our Audit Process */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Audit Process</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">What to Expect During the Audit</h3>
                            <p className="text-muted mb-4">Our audit process is designed to minimise disruption, improve reporting clarity, and deliver reliable independent assurance.</p>
                            <ol className="space-y-3 text-muted list-decimal pl-5 mb-4">
                                <li>Engagement planning and business understanding</li>
                                <li>Risk assessment and audit scoping</li>
                                <li>Review of accounting records and supporting documentation</li>
                                <li>Testing of balances, transactions, and disclosures</li>
                                <li>Internal control and process review</li>
                                <li>Management clarification and issue resolution</li>
                                <li>Audit report preparation and issuance</li>
                                <li>Management letter and recommendations</li>
                            </ol>
                            <p className="text-muted">This structured approach ensures accuracy, efficiency, and practical commercial insight.</p>
                        </section>

                        {/* Documents Required */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Documents Typically Required for Audit</h2>
                            <p className="text-muted mb-4">To begin an audit, we generally require:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Trade licence and incorporation documents</li>
                                <li>Financial statements and trial balance</li>
                                <li>General ledger and chart of accounts</li>
                                <li>Bank statements and reconciliations</li>
                                <li>Sales and purchase ledgers</li>
                                <li>VAT returns and tax records</li>
                                <li>Fixed asset register</li>
                                <li>Inventory records (where applicable)</li>
                                <li>Payroll records</li>
                                <li>Major contracts and loan agreements</li>
                            </ul>
                            <p className="text-muted">Early document preparation helps reduce delays and speeds up audit completion.</p>
                        </section>

                        {/* Sector Experience */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit Services for Trading, Manufacturing &amp; Free Zone Businesses</h2>
                            <p className="text-muted mb-4">Our audit team regularly supports:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Trading companies with supplier-heavy operations</li>
                                <li>Manufacturing businesses with stock, cost, and inventory controls</li>
                                <li>Logistics and distribution companies with operational reporting complexity</li>
                                <li>Professional service firms with revenue recognition considerations</li>
                                <li>Free zone businesses requiring licence renewal audit support</li>
                                <li>Group entities with intercompany balances and related-party exposure</li>
                            </ul>
                            <p className="text-muted">This sector-specific experience allows us to deliver commercially relevant audit insight, not just generic compliance reporting.</p>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Businesses Choose Prime Audit Solutions</h2>
                            <p className="text-muted mb-4">
                                Businesses choose Prime Audit Solutions because we combine independent audit discipline with strong accounting understanding and practical UAE regulatory experience.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Clients Trust Us</h3>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>ISA-compliant audit methodology</li>
                                <li>ACCA and CA-qualified audit professionals</li>
                                <li>Experience across Sharjah mainland and free zone audits</li>
                                <li>Clear, regulator-ready reporting</li>
                                <li>Fast turnaround and practical communication</li>
                                <li>Fixed-fee audit engagements</li>
                                <li>Bilingual support in English and Arabic</li>
                                <li>Strong coordination with tax and accounting teams</li>
                            </ul>
                            <p className="text-muted">We deliver audit support that is accurate, efficient, and commercially useful.</p>
                        </section>

                        {/* Client Case Study */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Client Case Study</h2>
                            <p className="text-muted mb-4">
                                A Sharjah-based industrial trading company approached Prime Audit Solutions after repeated audit delays created licence renewal issues and weak lender confidence. Our team restructured the audit file, corrected reporting gaps, completed the statutory audit, and delivered a regulator-ready report within deadline.
                            </p>
                            <p className="text-muted">
                                The client now retains Prime Audit Solutions annually for audit, reporting, and compliance coordination.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Is a statutory audit mandatory in Sharjah?</h3>
                                    <p className="text-sm text-muted">Many mainland and free zone businesses in Sharjah are required to maintain audited financial statements annually, depending on licence type and authority.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do SHAMS and SAIF Zone companies need audits?</h3>
                                    <p className="text-sm text-muted">Yes. Many Sharjah free zone entities are required to submit annual audited financial statements for licence renewal.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How long does an audit take in Sharjah?</h3>
                                    <p className="text-sm text-muted">Most SME audits are completed within 3–5 weeks once complete records are received.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What documents are required for audit?</h3>
                                    <p className="text-sm text-muted">Typically: financial statements, ledgers, bank records, VAT returns, payroll records, and supporting contracts.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How much do audit services cost in Sharjah?</h3>
                                    <p className="text-sm text-muted">Fees depend on business size, reporting complexity, transaction volume, and audit scope. Fixed-fee quotes are provided after review.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can you audit both Sharjah and Dubai entities?</h3>
                                    <p className="text-sm text-muted">Yes. We support audit engagements across Sharjah, Dubai, and multi-entity UAE group structures.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Contact Sharjah&apos;s Trusted Audit Partner</h2>
                            <p className="text-muted mb-4">Contact Prime Audit Solutions LLC for a practical audit consultation, document checklist, and fixed-fee proposal tailored to your Sharjah business.</p>
                            <p className="text-muted mb-4"><Link href="/contact" className="underline">Get in touch</Link> with us today for a practical review of your audit requirements, reporting quality, and compliance obligations.</p>
                        </div>

                    </article>

                    {/* Right column — aside */}
                    <aside className="space-y-6">
                        <div className="sticky top-24 bg-white rounded-xl shadow p-6 border border-gray-100">
                            <h4 className="font-semibold text-lg text-primary-dark mb-4">Quick Summary</h4>
                            <ul className="space-y-3 text-sm text-muted">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Service</span>
                                    <span>Audit &amp; Assurance</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Sharjah &amp; UAE</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Frequency</span>
                                    <span>Annual</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="font-medium text-gray-700">Ideal For</span>
                                    <span>All Business Types</span>
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
                                    href="https://wa.me/971545660697"
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
                                <li>Mainland companies</li>
                                <li>Free zone entities</li>
                                <li>SMEs &amp; trading firms</li>
                                <li>Group structures</li>
                            </ul>
                        </div>

                        <div className="bg-surface rounded-xl p-5 border border-gray-100">
                            <h5 className="font-semibold text-primary-dark mb-3">Contact Us</h5>
                            <ul className="space-y-2 text-sm text-muted">
                                <li>📞 +971 54 566 0697</li>
                                <li>✉️ info@primeauditsolutions.com</li>
                                <li>📍 Al Karama, Dubai, UAE</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5">
                            <h5 className="font-semibold text-primary-dark">Need a Sharjah audit proposal?</h5>
                            <p className="text-sm text-muted mt-2">Speak with our team for a practical review of your audit requirements, reporting quality, and compliance obligations.</p>
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
