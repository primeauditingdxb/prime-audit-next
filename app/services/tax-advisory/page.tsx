import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Corporate Tax Advisory Services in Dubai & Sharjah',
    description: 'Expert corporate tax advisory services in Dubai and Sharjah. Ensure compliance, accurate tax filing, and strategic tax planning for your business',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/tax-advisory'
    }
}

export default function TaxAdvisoryPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/tax_advisory_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Tax Advisory' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Tax Advisory Services in Dubai & Sharjah for Complete Corporate Tax Compliance
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Expert corporate tax advisory services ensuring compliance, accurate filing, and strategic tax planning.
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
                                The introduction of corporate tax in the UAE has transformed the way businesses operate, report, and plan their finances. What was once a low-tax environment now requires structured compliance, accurate reporting, and forward-thinking tax planning. For businesses operating in Dubai and Sharjah, professional Tax Advisory Services are no longer optional — they are essential.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                At Prime Audit Solutions, we provide reliable, practical, and fully compliant Corporate Tax Advisory Services tailored to UAE regulations. Our role goes far beyond tax filing. We help businesses understand their tax obligations, minimize risks, and align financial strategies with Federal Tax Authority (FTA) requirements.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Whether you are a startup, SME, mainland company, or free zone entity, our tax advisory experts help you stay compliant while protecting your profitability.
                            </p>
                        </section>

                        {/* Understanding Corporate Tax */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Understanding Corporate Tax in the UAE</h2>
                            <p className="text-muted mb-4">
                                The UAE corporate tax framework applies to most businesses operating in the country, including mainland companies and certain free zone entities. Corporate tax compliance involves multiple components:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Corporate tax registration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Assessment of taxable income</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Accurate financial reporting</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Timely corporate tax filing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Ongoing compliance and documentation</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4 italic">
                                Without professional guidance, businesses often misinterpret exemptions, thresholds, and filing requirements leading to penalties and audits.
                            </p>
                            <p className="text-muted mt-4">
                                This is where expert Corporate Tax Advisory Services play a critical role.
                            </p>
                        </section>

                        {/* Corporate Tax Advisory Services */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Corporate Tax Advisory Services Designed for UAE Businesses</h2>
                            <p className="text-muted mb-6">
                                Our Corporate Tax Advisory Services are structured to support businesses at every stage of compliance. We don't offer generic advice — we provide UAE-specific tax solutions based on your business structure, industry, and operational model.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Corporate Tax Advisory Services Include:</h3>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Corporate tax impact assessment</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Tax registration with the Federal Tax Authority</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Review of financial statements for tax readiness</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Tax planning and optimization strategies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Free zone tax compliance advisory</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Transfer pricing guidance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Ongoing tax compliance monitoring</span>
                                </li>
                            </ul>
                            
                            <p className="text-muted mt-6">
                                Businesses with structured accounting records find corporate tax compliance smoother, which is why many clients align tax advisory with professional Accounting Services to maintain accuracy throughout the year.
                            </p>
                        </section>

                        {/* Corporate Tax Filing */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Corporate Tax Filing in Dubai – Accurate, Timely & Defensible</h2>
                            <p className="text-muted mb-4">
                                Incorrect or delayed tax filings can expose businesses to penalties, fines, and increased scrutiny from authorities. Our Corporate Tax Filing Dubai services ensure that your tax returns are prepared accurately and submitted on time, in full compliance with FTA regulations.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">We manage the entire tax filing process, including:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Taxable income computation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Review of allowable deductions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Verification of financial records</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Preparation of tax returns</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Submission via the FTA portal</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Post-filing clarification support</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Our tax filings are backed by documented calculations and proper disclosures, making them defensible during audits.
                            </p>
                            <p className="text-muted mt-4">
                                Businesses that undergo regular <a href="/services/audit-services" className='underline'>Audit Services</a> often benefit from smoother tax filing, as financial records are already verified and structured.
                            </p>
                        </section>

                        {/* Tax Advisory Services in Sharjah */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Tax Advisory Services in Sharjah for Mainland & Free Zone Companies</h2>
                            <p className="text-muted mb-4">
                                Sharjah businesses face specific regulatory and operational considerations. Our Tax Advisory Services in Sharjah are tailored to support:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Mainland companies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Free zone entities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Manufacturing and trading businesses</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Professional service firms</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">SMEs and family-owned businesses</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                We help Sharjah-based companies understand their corporate tax obligations, exemptions, and filing requirements while ensuring compliance with UAE laws.
                            </p>
                            <p className="text-muted mt-4">
                                Our advisors work closely with management teams to integrate tax planning into day-to-day financial decision-making.
                            </p>
                        </section>

                        {/* Tax Planning */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Tax Planning That Goes Beyond Compliance</h2>
                            <p className="text-muted mb-4">
                                Tax advisory is not just about filing returns — it's about planning ahead. Strategic tax planning allows businesses to:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Optimize tax positions legally</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improve cash flow management</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Avoid compliance surprises</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Align financial strategies with long-term goals</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Our tax planning services evaluate your business structure, revenue streams, and operational costs to identify legitimate tax optimization opportunities.
                            </p>
                            <p className="text-muted mt-4">
                                Strong Budgeting and Forecasting practices also support effective tax planning by helping businesses anticipate tax liabilities and manage cash flow accordingly.
                            </p>
                        </section>

                        {/* Free Zone Corporate Tax Advisory */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Free Zone Corporate Tax Advisory</h2>
                            <p className="text-muted mb-4">
                                Free zone companies often assume they are fully exempt from corporate tax. In reality, compliance requirements still apply, and eligibility for tax benefits depends on meeting specific conditions.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Our tax advisory team helps free zone entities:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Determine qualifying income status</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Understand exemption criteria</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Maintain required documentation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Ensure ongoing compliance</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Failure to meet free zone conditions can result in unexpected tax liabilities, making professional advisory essential.
                            </p>
                        </section>

                        {/* Tax Risk Assessment */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Tax Risk Assessment & Compliance Review</h2>
                            <p className="text-muted mb-4">
                                Many businesses unknowingly carry tax risks due to improper accounting, incomplete documentation, or incorrect interpretations of tax laws.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Our tax risk assessment services include:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Review of financial and tax records</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Identification of compliance gaps</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Risk mitigation strategies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Recommendations for corrective actions</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Businesses with strong internal controls and structured Financial Accounting Solutions significantly reduce tax exposure and regulatory risks.
                            </p>
                        </section>

                        {/* Ongoing Tax Advisory Support */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Ongoing Tax Advisory Support for UAE Businesses</h2>
                            <p className="text-muted mb-4">
                                Corporate tax compliance is not a one-time activity. Regulations evolve, and business operations change. Our ongoing tax advisory services ensure that your business remains compliant throughout the year.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">We provide:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Continuous advisory support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Updates on regulatory changes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Assistance during audits or inspections</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Clarification on complex tax matters</span>
                                </li>
                            </ul>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Choose Prime Audit Solutions for Tax Advisory Services?</h2>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Deep understanding of UAE corporate tax laws</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Practical, business-focused advice</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Experienced tax professionals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Transparent pricing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Confidential and ethical approach</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-6 font-medium">
                                Our goal is to protect your business from tax risks while helping you operate with confidence.
                            </p>
                        </section>

                        {/* Integration with Other Services */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">How Tax Advisory Integrates with Other Financial Services</h2>
                            <p className="text-muted">
                                Effective tax advisory relies on accurate financial data and structured processes. Businesses that combine tax advisory with professional Accounting Services, regular <a href="/services/audit-services" className='underline'>Audit Services</a>, and reliable Financial Accounting Solutions achieve better compliance and long-term stability.
                            </p>
                            <p className="text-muted mt-4">
                                Tax advisory is most effective when it is part of an integrated financial strategy — not a standalone activity. We are also one of the reputed <a href="/services/audit-services" className='underline'>Audit firms in Dubai</a>.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Tax Advisory Services – Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Is corporate tax applicable to all businesses in Dubai?</h3>
                                    <p className="text-sm text-muted">Most businesses are subject to corporate tax, subject to exemptions and thresholds.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do free zone companies need tax advisory services?</h3>
                                    <p className="text-sm text-muted">Yes, free zone companies must meet specific conditions to qualify for exemptions.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What happens if corporate tax filing is delayed?</h3>
                                    <p className="text-sm text-muted">Late filing can result in penalties and increased scrutiny from the FTA.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can tax advisory services reduce tax legally?</h3>
                                    <p className="text-sm text-muted">Yes, proper planning helps optimize tax while remaining compliant.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How often should businesses review their tax position?</h3>
                                    <p className="text-sm text-muted">Ideally on an ongoing basis, especially when operations or regulations change.</p>
                                </div>
                            </div>
                        </div>

                    </article>

                    {/* Right column — aside */}
                    <aside className="space-y-6">
                        <div className="sticky top-24 bg-white rounded-xl shadow p-6 border border-gray-100">
                            <h4 className="font-semibold text-lg text-primary-dark mb-4">Quick Summary</h4>
                            <ul className="space-y-3 text-sm text-muted">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Service</span>
                                    <span>Tax Advisory & Compliance</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai & Sharjah</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Frequency</span>
                                    <span>Ongoing Support</span>
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
                                <li>Startups & SMEs</li>
                                <li>Mainland companies</li>
                                <li>Free zone entities</li>
                                <li>Growing businesses</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our tax experts for tailored advice on your corporate tax requirements.</p>
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
