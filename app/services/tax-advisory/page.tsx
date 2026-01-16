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
                                Corporate tax filing Dubai has become a critical responsibility for every business operating in the UAE after the introduction of federal corporate tax. What was once a low-tax environment now requires accurate reporting, structured compliance, and proactive financial planning to avoid penalties and ensure long-term stability.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                The new tax framework has transformed how companies operate across Dubai and Sharjah, making Corporate Tax Advisory Services an essential part of business strategy rather than an optional add-on. Companies must now understand taxable income, allowable deductions, transfer pricing rules, and filing deadlines  all under strict Federal Tax Authority (FTA) regulations.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                At Prime Audit Solutions, we deliver practical, compliant, and result-driven Corporate Tax Advisory Services tailored to UAE tax laws. Our support goes far beyond basic tax filing. We help businesses identify risks, optimize tax positions, prepare accurate returns, and build tax-efficient financial structures that align with FTA requirements.
                            </p>
                            <p className="text-muted leading-relaxed">
                                With expert guidance in corporate tax filing Dubai, whether you are a startup, SME, mainland company, or free zone entity, our corporate tax specialists ensure your filings are accurate, compliant, and strategically planned  protecting your profitability while keeping you fully aligned with UAE corporate tax regulations.
                            </p>
                        </section>

                        {/* Understanding Corporate Tax */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Understanding Corporate Tax in the UAE</h2>
                            <p className="text-muted mb-4">
                                The UAE corporate tax framework applies to most mainland and certain free zone businesses, requiring proper registration, accurate income assessment, and timely reporting. Corporate tax filing Dubai is now a mandatory process under Federal Tax Authority (FTA) regulations, making compliance more important than ever.
                            </p>
                            <p className="text-muted mb-4">
                                Misunderstanding tax rules, exemptions, or thresholds can lead to penalties and audits, which is why professional Tax Advisory Services play a vital role. Expert advisors ensure correct filings, proper documentation, and full regulatory compliance.
                            </p>
                            <p className="text-muted">
                                For businesses operating across Dubai and Sharjah, trusted tax advisory services in Sharjah help maintain consistency, reduce risk, and support tax-efficient financial planning.
                            </p>
                        </section>

                        {/* Corporate Tax Advisory Services */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Corporate Tax Advisory Services Designed for UAE Businesses</h2>
                            <p className="text-muted mb-6">
                                Our Corporate Tax Advisory Services are built to help UAE businesses stay compliant, tax-efficient, and fully aligned with corporate tax filing Dubai requirements. We provide UAE-specific tax solutions based on your business structure, industry, and regulatory obligations under the Federal Tax Authority.
                            </p>
                            <p className="text-muted mb-6">
                                Our Tax Advisory Services include tax impact assessments, FTA registration, financial statement reviews, tax planning, free zone compliance, transfer pricing guidance, and ongoing compliance monitoring. These services help businesses reduce risk and maintain accurate, audit-ready tax records.
                            </p>
                            <p className="text-muted">
                                Many clients combine our tax advisory with professional <a href="/" className='underline'>Audit Services</a> to ensure financial accuracy and smooth compliance, making our tax advisory services in Sharjah and Dubai a reliable choice for growing businesses.
                            </p>
                        </section>

                        {/* Corporate Tax Filing */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Corporate Tax Filing in Dubai – Accurate, Timely & Defensible</h2>
                            <p className="text-muted mb-4">
                                Incorrect or delayed filings can expose businesses to penalties, fines, and regulatory scrutiny. Our corporate tax filing Dubai services ensure your tax returns are accurate, timely, and fully compliant with Federal Tax Authority (FTA) regulations, helping you avoid costly mistakes.
                            </p>
                            <p className="text-muted mb-4">
                                We handle the entire tax filing process, including taxable income calculation, review of allowable deductions, verification of financial records, preparation of tax returns, submission through the FTA portal, and post-filing support. By using structured <a href="/services/accounting-services" className='underline'>Bookkeeping and Accounting Software</a>, we ensure your financial data remains accurate, transparent, and ready for tax reporting at all times.
                            </p>
                            <p className="text-muted">
                                Our filings are supported by detailed calculations and proper documentation, giving your business confidence and compliance throughout the UAE corporate tax filing process.
                            </p>
                        </section>

                        {/* Tax Advisory Services in Sharjah */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Tax Advisory Services in Sharjah for Mainland & Free Zone Companies</h2>
                            <p className="text-muted mb-4">
                                Our tax advisory services in Sharjah are designed to support mainland companies, free zone entities, manufacturing and trading businesses, professional service firms, and SMEs operating under the UAE corporate tax framework. Sharjah businesses face unique regulatory and operational requirements, making professional Tax Advisory Services essential for maintaining compliance and minimizing tax risk.
                            </p>
                            <p className="text-muted mb-4">
                                We help Sharjah-based companies clearly understand their corporate tax obligations, available exemptions, and corporate tax filing Dubai requirements, ensuring all filings and records meet Federal Tax Authority (FTA) standards. Our advisors work closely with management teams to integrate tax planning into everyday financial decisions, supporting long-term financial stability.
                            </p>
                            <p className="text-muted">
                                By aligning tax strategy with smart <a href="/services/reporting" className='underline'>Budgeting and Forecasting</a>, businesses in Sharjah gain better control over cash flow, tax liabilities, and future growth  creating a more resilient and compliant financial structure.
                            </p>
                        </section>

                        {/* Tax Planning */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Tax Advisory Services That Go Beyond Compliance</h2>
                            <p className="text-muted mb-4">
                                Effective tax planning is more than just filing returns  it is about building a strong and sustainable financial strategy. With professional Tax Advisory Services, businesses can legally optimize their tax position, improve cash flow, avoid compliance risks, and align financial decisions with long-term goals under the UAE corporate tax framework.
                            </p>
                            <p className="text-muted mb-4">
                                Our tax advisory services in Sharjah and Dubai evaluate your business structure, revenue streams, and operating costs to identify legitimate tax optimization opportunities while ensuring your corporate tax filing Dubai remains fully compliant with Federal Tax Authority regulations. This strategic approach helps reduce tax liabilities and improve financial predictability.
                            </p>
                            <p className="text-muted">
                                Strong <a href="/services/audit-services" className='underline'>Budgeting and Forecasting</a> further strengthen tax planning by allowing businesses to anticipate future tax obligations and manage cash flow more effectively. Many companies also rely on trusted <a href="/" className='underline'>Audit Services</a> in Dubai to support financial accuracy, transparency, and long-term regulatory confidence.
                            </p>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Choose Our Tax Advisory Services?</h2>
                            <p className="text-muted mb-4">
                                Choosing the right tax partner is essential in today's UAE corporate tax environment. Our Tax Advisory Services are designed to help businesses stay compliant, reduce risk, and improve financial efficiency under the latest regulations.
                            </p>
                            <p className="text-muted mb-4">
                                We bring deep expertise in corporate tax filing Dubai, ensuring your tax returns are accurate, timely, and fully aligned with Federal Tax Authority requirements. Our team understands both mainland and free zone structures, allowing us to deliver tailored solutions that match your business model.
                            </p>
                            <p className="text-muted">
                                With dedicated tax advisory services in Sharjah and Dubai, we provide local expertise, proactive tax planning, and continuous compliance support  giving your business the confidence to grow while staying fully tax compliant.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Tax Advisory Services – Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What are Corporate Tax Advisory Services in the UAE?</h3>
                                    <p className="text-sm text-muted">Corporate Tax Advisory Services help businesses register, calculate tax, file returns, and stay compliant with UAE corporate tax laws.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Is corporate tax filing in Dubai mandatory?</h3>
                                    <p className="text-sm text-muted">Yes, corporate tax filing Dubai is required for most mainland companies and certain free zone entities, even if they qualify for exemptions.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How do Tax Advisory Services reduce tax risk?</h3>
                                    <p className="text-sm text-muted">They ensure accurate reporting, correct deductions, proper documentation, and timely filing to avoid penalties and audits.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Why use tax advisory services in Sharjah?</h3>
                                    <p className="text-sm text-muted">Tax advisory services in Sharjah help local businesses meet emirate-specific rules and manage corporate tax efficiently.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How does tax planning support compliance?</h3>
                                    <p className="text-sm text-muted">Tax planning helps forecast liabilities, manage cash flow, and keep businesses aligned with UAE tax regulations.</p>
                                </div>
                            </div>
                        </div>


                        <div>
                        <h2 className="text-2xl font-bold text-primary-dark mb-4">Contact Us</h2>
                        <p className="text-muted mb-4">Ready to simplify your corporate tax compliance and planning? Our expert team is here to support your business with reliable Tax Advisory Services, accurate corporate tax filing Dubai, and professional tax advisory services in Sharjah.</p>
                        <p className="text-muted mb-4"><a href="/contact" className='underline'>Get in touch </a>with us today to discuss your requirements, ensure compliance with UAE corporate tax regulations, and build a smarter, more tax-efficient financial strategy for your business.</p>
                        
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
