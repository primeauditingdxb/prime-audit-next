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
                                Audit firms in Dubai play a critical role in ensuring financial transparency, regulatory compliance, and business credibility in the UAE's highly regulated environment. Whether required by free zone authorities, banks, investors, or internal governance policies, professional audit firms in Sharjah and Dubai help protect businesses from financial, legal, and reputational risks.
                            </p>
                            <p className="text-muted leading-relaxed">
                                At Prime Audit Solutions, we are among the trusted audit firms in Dubai and audit firms in Sharjah, delivering independent, accurate, and regulation-compliant audit services across the UAE. Our audits go beyond statutory compliance, providing management with meaningful financial insights that support better decision-making, stronger internal controls, and long-term business stability.
                            </p>
                        </section>

                        {/* Why Essential */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Audit Services Are Essential for UAE Businesses</h2>
                            <p className="text-muted mb-4">
                                Professional audit firms in Dubai and Sharjah play a key role in helping businesses maintain financial accuracy, regulatory compliance, and operational transparency. While audited financial statements are often a legal requirement, audits also add real business value by identifying risks, inefficiencies, and internal control gaps.
                            </p>
                            <p className="text-muted mb-4">
                                Audit services help companies meet regulatory and free zone requirements, build trust with banks and investors, detect errors or irregularities, improve financial discipline, and support long-term growth. Without structured audits, businesses may face difficulties during financing, regulatory reviews, or ownership transitions.
                            </p>
                        </section>

                        {/* Comprehensive Services */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Comprehensive Audit Services Tailored to UAE Regulations</h2>
                            <p className="text-muted mb-8">
                                Leading audit firms in Dubai and audit firms in Sharjah must operate in line with both International Standards on Auditing (ISA) and UAE regulatory requirements. Our audit services are fully compliant with these standards and are customized based on the size, structure, and risk profile of each business.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Statutory Audit Services</h3>
                                    <p className="text-sm text-muted">Statutory audits are mandatory for many UAE free zones, regulated entities, and businesses seeking financing. These audits verify the accuracy and fairness of financial statements and ensure compliance with applicable laws and regulations.</p>
                                </div>
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Internal Audit Services</h3>
                                    <p className="text-sm text-muted">Internal audits evaluate internal controls, operational efficiency, and risk management systems. They help businesses identify weaknesses early and improve governance.</p>
                                </div>
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Compliance Audits</h3>
                                    <p className="text-sm text-muted">Compliance audits review whether a company follows UAE laws, internal policies, and regulatory guidelines  especially important for businesses operating across multiple jurisdictions.</p>
                                </div>
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Free Zone Audit Reports</h3>
                                    <p className="text-sm text-muted">Most free zones require annual audited financial statements. We prepare audit reports that meet free zone authority submission and compliance standards.</p>
                                </div>
                                <div className="bg-surface p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Special Purpose Audits</h3>
                                    <p className="text-sm text-muted">These audits are designed for specific needs such as mergers, acquisitions, restructuring, or management reviews, providing clarity and financial assurance during critical business decisions.</p>
                                </div>
                            </div>
                        </section>

                        {/* Industry Experience */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit Firms in Dubai with Industry-Specific Experience</h2>
                            <p className="text-muted mb-4">
                                As one of the trusted audit firms in Dubai and audit firms in Sharjah, we provide audit services across a wide range of industries, including trading and distribution, manufacturing, real estate and construction, professional services, retail and e-commerce, and logistics and transportation. Each sector has unique financial and regulatory challenges, which is why our audits are tailored to industry-specific risks and reporting requirements.
                            </p>
                            <p className="text-muted">
                                Our experienced auditors apply targeted audit procedures to ensure accuracy, compliance, and meaningful financial insights. We also align audit findings with related compliance areas such as <a href="/services/tax-advisory" className='underline'>Corporate Tax Filing in Dubai</a>, helping businesses maintain consistent, audit-ready financial records while meeting UAE tax and regulatory obligations.
                            </p>
                        </section>

                         {/* Sharjah Focus */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit Firms in Sharjah Supporting Mainland & Free Zone Businesses</h2>
                            <p className="text-muted mb-4">
                                Audit firms in Sharjah play a vital role in helping businesses meet emirate-specific regulatory and financial reporting requirements. Sharjah-based companies operate under distinct mainland and free zone frameworks, making professional audit support essential for compliance and credibility.
                            </p>
                            <p className="text-muted">
                                As one of the experienced audit firms in Sharjah, we provide reliable and regulation-compliant audit services for both mainland and free zone entities, helping businesses maintain accurate financial records, meet authority requirements, and operate with confidence in the UAE market.
                            </p>
                        </section>

                        {/* Methodology */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Our Audit Methodology</h2>
                            <p className="text-muted mb-6">
                                As one of the experienced audit firms in Dubai and audit firms in Sharjah, we follow a structured and transparent audit methodology designed to ensure accuracy, consistency, and minimal business disruption. We begin by developing a deep understanding of your business model, industry risks, and regulatory environment.
                            </p>
                            <p className="text-muted mb-6">
                                Next, we evaluate internal controls by reviewing accounting systems, financial processes, and documentation practices. This is followed by detailed substantive testing, where transactions, balances, and supporting records are verified to ensure compliance with UAE regulations.
                            </p>
                            <p className="text-muted">
                                The process concludes with a clear and professional audit report that includes key findings, observations, and actionable recommendations. This approach helps businesses maintain reliable financial reporting while meeting the standards expected from leading audit firms across Dubai and Sharjah.
                            </p>
                        </section>

                         {/* Accounting & Bookkeeping Importance */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Importance of Strong Accounting Systems in Audit Readiness</h2>
                            <p className="text-muted mb-6">
                                Audit results rely heavily on the quality and accuracy of financial records. Businesses that use professional <a href="/services/accounting-services" className='underline'>Accounting Services in Dubai</a> benefit from structured bookkeeping, clear documentation, and fewer audit queries, leading to faster and smoother audit completion.
                            </p>
                            <p className="text-muted mb-6">
                                Likewise, companies supported by reliable Accounting Services in Sharjah gain from localized compliance expertise and well-organized financial data, which significantly improves audit efficiency and overall financial transparency.
                            </p>

                            <h3 className="text-xl font-bold text-primary-dark mb-3">Role of Bookkeeping in Successful Audits</h3>
                            <p className="text-muted mb-4">
                                Inconsistent or incomplete bookkeeping is one of the most common reasons for audit delays. Professional Bookkeeping Services Dubai ensure that all transactions are recorded accurately and supported by proper documentation, making audits faster and more reliable.
                            </p>
                            <p className="text-muted">
                                Strong bookkeeping reduces audit observations, improves financial accuracy, strengthens auditor confidence, and minimizes regulatory risk. When combined with effective <a href="/services/reporting" className='underline'>Budgeting and Forecasting</a>, businesses gain better control over cash flow, financial planning, and audit readiness.
                            </p>
                        </section>

                        {/* Technology */}
                         <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                             <h2 className="text-2xl font-bold text-primary-dark mb-4">Technology and Audit Efficiency</h2>
                             <p className="text-muted mb-4">
                                Modern audits depend heavily on digital systems. Businesses that use reliable bookkeeping and compliant accounting software allow auditors to access accurate financial data quickly, reducing audit time, minimizing errors, and improving overall audit efficiency.
                             </p>
                             <p className="text-muted">
                                The right accounting software also provides clear audit trails, automated reconciliations, secure data storage, and faster financial verification. Choosing the <a href="/services/accounting-services" className='underline'>best bookkeeping software</a> helps businesses maintain transparent records, strengthen audit readiness, and stay compliant with UAE financial and regulatory requirements.
                             </p>
                        </section>

                        {/* Challenges */}
                        <section>
                             <h2 className="text-2xl font-bold text-primary-dark mb-4">Common Audit Challenges Faced by UAE Businesses</h2>
                             <p className="text-muted mb-4">
                                Many UAE businesses face audit challenges due to poor bookkeeping, incomplete documentation, weak internal controls, lack of financial transparency, and non-compliance with regulations. These issues often lead to delays, audit observations, and increased regulatory risk.
                             </p>
                             <p className="text-muted">
                                Working with professional audit firms in Dubai and audit firms in Sharjah helps businesses identify and resolve these problems early, ensuring smoother audits, stronger compliance, and greater financial credibility.
                             </p>
                        </section>

                        {/* Long Term Value */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">How Audit Services Add Long-Term Business Value</h2>
                            <p className="text-muted mb-4">
                                Audits are more than a compliance requirement  they are a strategic business tool. When conducted by experienced audit firms in Dubai or Sharjah, audits help companies improve financial governance, strengthen internal controls, and enhance management accountability.
                            </p>
                            <p className="text-muted">
                                Professional audit services also build confidence with investors and lenders, support better decision-making, and prepare businesses for growth, expansion, or restructuring. Companies that treat audits as part of their long-term strategy gain stronger financial stability and greater operational clarity over time.
                            </p>
                        </section>


                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Choose Our Audit Services?</h2>
                            <p className="text-muted mb-4">
                                Choosing the right audit partner is critical for compliance, transparency, and business credibility. As one of the trusted audit firms in Dubai and Sharjah, we deliver independent, accurate, and regulation-compliant audits tailored to your business structure and industry.
                            </p>
                            <p className="text-muted">
                                Our team combines technical expertise with a practical understanding of UAE regulations, free zone requirements, and reporting standards. This allows us to provide clear audit reports, meaningful financial insights, and reliable compliance support helping your business operate with confidence and long-term stability.
                            </p>
                        </section>



                         {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit Services – Frequently Asked Questions (UAE)</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What do audit firms in Dubai do?</h3>
                                    <p className="text-sm text-muted">Audit firms in Dubai review and verify financial statements to ensure accuracy, compliance, and regulatory acceptance.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Are audit firms in Sharjah required for free zone companies?</h3>
                                    <p className="text-sm text-muted">Yes, most Sharjah free zones require audited financial statements from approved audit firms in Sharjah.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Why are audits important for UAE businesses?</h3>
                                    <p className="text-sm text-muted">Audits improve financial transparency, support compliance, and build trust with banks, investors, and authorities.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How often should a business be audited?</h3>
                                    <p className="text-sm text-muted">Most UAE companies must complete an audit annually, depending on their license and regulatory requirements.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How do professional audit services reduce business risk?</h3>
                                    <p className="text-sm text-muted">They identify errors, control gaps, and compliance issues early, helping businesses avoid penalties and financial problems.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                        <h2 className="text-2xl font-bold text-primary-dark mb-4">Contact Us</h2>
                        <p className="text-muted mb-4">Looking for reliable support from experienced audit firms in Dubai or Sharjah? Our professional audit team is here to help you meet regulatory requirements, maintain financial accuracy, and strengthen business credibility.</p>
                        <p className="text-muted mb-4"><a href="/contact" className='underline'>Contact us today </a>to discuss your audit needs and get expert guidance tailored to your business.</p>
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
