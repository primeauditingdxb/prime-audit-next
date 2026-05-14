import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Audit Services in the UAE | Statutory & Internal Audit Firms',
    description: 'Prime Audit Solutions delivers comprehensive audit services across the UAE — statutory, internal, and forensic accounting — aligned with ISA and IFRS standards.',
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
                            Audit Services in the UAE — Independent, Thorough, and Fully Compliant
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Prime Audit Solutions delivers comprehensive audit services across all UAE emirates and free zones — statutory audit, internal audit, special purpose engagements, and forensic accounting — aligned with ISA and IFRS.
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
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">A UAE Audit Partner You Can Rely On</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Every business operating in the UAE — whether a mainland LLC, a free zone entity, or the branch of a foreign corporation — is required to have its annual financial statements independently audited by a registered, qualified auditor. Under the UAE corporate tax framework, audited IFRS financial statements now form the statutory basis for calculating taxable income and filing corporate tax returns, making the quality of your audit directly relevant to your tax position.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                But a well-executed audit delivers far more than regulatory compliance. It provides assurance to shareholders, confidence to lenders, credibility with the Federal Tax Authority, and management insights that strengthen governance and financial controls across the organisation.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Prime Audit Solutions is an established UAE audit firm providing statutory, external, and internal audit services to businesses across Dubai, Sharjah, Abu Dhabi, and the Northern Emirates. For tax compliance beyond the audit, our <Link href="/services/tax-advisory" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">Corporate Tax Advisory Services</Link> and <Link href="/services/corporate-tax-filing-dubai" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">corporate tax filing Dubai</Link> services ensure seamless integration between your audited accounts and your annual tax return.
                            </p>
                        </section>

                        {/* Our UAE Audit Services */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Our UAE Audit Services</h2>
                            <div className="space-y-6">
                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Statutory and External Audit</h3>
                                    <p className="text-muted leading-relaxed">
                                        We conduct annual statutory audits for companies of all sizes, structures, and sectors across every UAE emirate and free zone. Our audit methodology covers planning and risk assessment, internal controls evaluation, substantive testing of financial transactions and balances, and the issuance of an independent audit opinion. Every engagement produces a complete set of IFRS-compliant audited financial statements and a management letter identifying areas for operational and control improvement.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Internal Audit</h3>
                                    <p className="text-muted leading-relaxed">
                                        Our internal audit service provides independent, objective assurance over your internal control environment, risk management framework, and key operational processes. We design and execute risk-based internal audit programmes calibrated to your organisation's size and risk profile, delivering structured reports with prioritised findings and recommendations that management can act on immediately.
                                    </p>
                                    <p className="text-muted mt-3 italic text-sm">
                                        Internal audit is an increasingly valued tool for UAE businesses preparing for corporate tax scrutiny from the Federal Tax Authority.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Free Zone Audit Services</h3>
                                    <p className="text-muted leading-relaxed">
                                        We are approved auditors across major UAE free zones in both Dubai and Sharjah. Our team understands the specific audit report formats, financial statement requirements, portal submission procedures, and regulatory deadlines that apply to each zone. We manage the entire submission process on your behalf, from document preparation to final portal upload.
                                    </p>
                                    <p className="text-muted mt-3">
                                        For Dubai free zone specifics, see our dedicated <Link href="/services/audit-services" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">audit firms in Dubai</Link> page. For Sharjah free zone entities, visit our <Link href="/services/audit-firms-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">audit firms in Sharjah</Link> page.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Special Purpose Audits and Agreed-Upon Procedures</h3>
                                    <p className="text-muted leading-relaxed">
                                        We perform assurance engagements for specific purposes — including immigration financial requirements, bank financing applications, business acquisitions, and investor due diligence. Where a full statutory audit is not required, we perform targeted agreed-upon procedures to provide documented assurance over specific financial data or transactions.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Forensic Accounting and Fraud Review</h3>
                                    <p className="text-muted leading-relaxed">
                                        For businesses that have identified potential financial irregularities, or that wish to conduct a proactive fraud risk assessment, our forensic accounting team delivers structured investigations and fraud examinations — producing clear, documented findings and practical recommendations for remediation.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* UAE Audit Service Coverage */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">UAE Audit Service Coverage</h2>
                            <p className="text-muted mb-6">
                                Our audit services are available across the UAE. We maintain established presence and regulatory approvals in both Dubai and Sharjah, and serve clients across all Northern Emirates.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                                    <p className="text-muted">
                                        <strong className="text-gray-900">Dubai</strong> — free zone approvals across DMCC, JAFZA, DAFZA, DIFC, Dubai South, and IFZA. For integrated tax support, our <Link href="/services/corporate-tax-filing-dubai" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium">corporate tax filing Dubai</Link> service works directly from audited financial statements.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                                    <p className="text-muted">
                                        <strong className="text-gray-900">Sharjah</strong> — see our <Link href="/services/audit-firms-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium">audit firms in Sharjah</Link> page for SAIF Zone, Hamriyah Free Zone, and SHAMS-specific coverage.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                                    <p className="text-muted">
                                        <strong className="text-gray-900">Abu Dhabi & Northern Emirates</strong> — available upon request for mainland and free zone entities across Abu Dhabi, Ras Al Khaimah, Fujairah, Umm Al Quwain, and Ajman.
                                    </p>
                                </li>
                            </ul>
                        </section>

                        {/* Audit Quality and Professional Standards */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Audit Quality and Professional Standards</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Audit methodology fully aligned with International Standards on Auditing (ISA)",
                                    "Financial statements prepared in accordance with IFRS as adopted in the UAE",
                                    "Registered with the UAE Ministry of Economy — compliant across all Emirates",
                                    "Approved auditors across multiple UAE free zones in Dubai and Sharjah",
                                    "Senior-led engagements — Chartered Accountants (ACCA, ACA, CPA) on every file",
                                    "Quality control procedures aligned with ISQM 1"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <svg className="h-5 w-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Integrated Compliance */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Integrated Compliance — Audit, Accounting, and Tax Under One Roof</h2>
                            <p className="text-muted leading-relaxed mb-6">
                                Our audit services integrate seamlessly with our full compliance offering. Audit-ready books reduce year-end cost and friction: our <Link href="/services/bookkeeping-services-dubai" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">bookkeeping services Dubai</Link> team ensures your records are clean, current, and correctly coded throughout the year.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Post-audit, our <Link href="/services/tax-advisory" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">Corporate Tax Advisory Services</Link> team uses audited financials as the foundation for corporate tax filings — ensuring complete consistency between your audit opinion and your Federal Tax Authority submission.
                            </p>
                            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                <p className="text-muted leading-relaxed">
                                    For Sharjah clients requiring integrated support, our <Link href="/services/accounting-services-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">accounting services in Sharjah</Link> and <Link href="/services/tax-advisory-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">tax advisory services in Sharjah</Link> teams are available. For technology guidance, see our <Link href="/services/bookkeeping-accounting-software" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">best bookkeeping software</Link> service.
                                </p>
                            </div>
                        </section>

                        {/* Who We Serve */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Who We Serve</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "SMEs and owner-managed businesses",
                                    "Free zone entities for licence renewals",
                                    "Subsidiaries of international groups",
                                    "Family businesses preparing for succession",
                                    "Startups establishing audit relationships",
                                    "Corporates seeking high-quality alternatives"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span className="text-muted">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>


                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Which UAE free zones does Prime Audit Solutions cover?</h3>
                                    <p className="text-sm text-muted leading-relaxed">We cover major free zones across Dubai and Sharjah, including DMCC, JAFZA, DAFZA, Dubai South, IFZA, SAIF Zone, Hamriyah, and SHAMS.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Is an audit mandatory for all UAE companies?</h3>
                                    <p className="text-sm text-muted leading-relaxed">Yes, for virtually all UAE entities. Free zone companies must submit audited financial statements for annual licence renewal. Mainland companies are required to maintain audited accounts, and tax returns must be based on IFRS-compliant audited statements.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">How long does the audit process take?</h3>
                                    <p className="text-sm text-muted leading-relaxed">For most SMEs, the process takes three to six weeks from the date complete records are received. We work to your deadline wherever possible.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Can you handle both the audit and the corporate tax filing?</h3>
                                    <p className="text-sm text-muted leading-relaxed">Yes. Our integrated service covers audit, corporate tax return preparation, and FTA filing — ensuring your audit and tax positions are always aligned.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-dark text-white rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
                            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Looking for reliable support from experienced audit firms in Dubai or Sharjah? Our professional audit team is here to help you meet regulatory requirements.</p>
                            <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors border border-white/20">
                                Contact us today
                            </Link>
                        </div>

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
                                    <span>All UAE Emirates</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Duration</span>
                                    <span>3–6 Weeks (Avg)</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="font-medium text-gray-700">Standard</span>
                                    <span>ISA & IFRS</span>
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
                            <h5 className="font-semibold text-primary-dark mb-3">Service Coverage</h5>
                            <ul className="space-y-2 text-sm text-muted list-disc pl-4">
                                <li>Statutory & External Audit</li>
                                <li>Internal Audit Services</li>
                                <li>Free Zone Audit Reports</li>
                                <li>Forensic Accounting</li>
                                <li>Agreed-Upon Procedures</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5 border border-primary/5">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our experts for tailored advice on your audit requirements.</p>
                            <Link href="/contact" className="mt-4 inline-block px-4 py-2 bg-primary-dark text-white text-sm rounded hover:opacity-90 transition-opacity">Contact us</Link>
                        </div>
                    </aside>
                </div>

                <section className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">Related Services</h2>
                    <p className="text-muted leading-relaxed">
                        Explore our full compliance offering: 
                        <Link href="/services/tax-advisory" className="text-primary-dark font-bold hover:underline mx-1">Corporate Tax Advisory Services</Link> | 
                        <Link href="/services/audit-firms-sharjah" className="text-primary-dark font-bold hover:underline mx-1">audit firms in Sharjah</Link> | 
                        <Link href="/services/bookkeeping-services-dubai" className="text-primary-dark font-bold hover:underline mx-1">bookkeeping services Dubai</Link> | 
                        <Link href="/services/accounting-services-sharjah" className="text-primary-dark font-bold hover:underline mx-1">accounting services in Sharjah</Link> | 
                        <Link href="/services/tax-advisory-sharjah" className="text-primary-dark font-bold hover:underline mx-1">tax advisory services in Sharjah</Link>
                    </p>
                </section>

                {/* Wide CTA */}
                <div className="mt-16">
                    <CTA />
                </div>
            </main>
        </>
    )
}

