import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Financial Accounting Solutions for Businesses in the UAE | Prime Audit Solutions',
    description: 'Financial accounting solutions are essential for building financial stability, regulatory compliance, and long-term growth in the UAE’s highly structured business environment.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/core-services'
    }
}

export default function CoreServicesPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/core_services_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Financial Accounting Solutions' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Financial Accounting Solutions for Businesses in the UAE
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Financial accounting solutions are essential for building financial stability, regulatory compliance, and long-term growth in the UAE’s highly structured business environment.
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
                                In today’s complex regulatory and commercial environment, businesses often require specialized expertise beyond standard accounting or audit services. Financial accounting solutions are no longer optional  they are a core compliance and risk-management requirement for businesses operating in the region.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                As regulatory requirements continue to evolve with VAT implementation, corporate tax laws, and enhanced financial reporting standards, businesses can no longer rely on basic bookkeeping practices. They need comprehensive financial accounting solutions that deliver accuracy, transparency, and actionable financial insights.
                            </p>
                            <p className="text-muted leading-relaxed">
                                At Prime Audit Solutions, our financial accounting solutions are designed to support businesses in Dubai and Sharjah through structured, compliant, and audit-ready accounting frameworks. We work closely with startups, SMEs, and established enterprises to ensure their financial records are accurate, up to date, and aligned with UAE regulations, enabling confident decision-making and sustainable business operations.
                            </p>
                        </section>

                        {/* Importance */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Importance of Financial Accounting Solutions in the UAE Regulatory Landscape</h2>
                            <p className="text-muted mb-4">
                                The UAE operates under a well-defined legal and financial framework where regulators, banks, investors, and auditors rely heavily on accurate financial information. Financial accounting solutions are no longer optional  they are a core compliance and risk-management requirement for businesses operating in the region.
                            </p>
                            <p className="text-muted mb-4">
                                Professional financial accounting solutions help businesses comply with the UAE Commercial Companies Law, meet VAT and corporate tax obligations, maintain proper books of accounts, and reduce exposure to penalties or regulatory scrutiny. Accurate accounting records also improve financial credibility, making it easier to secure financing, attract investors, and pass regulatory inspections.
                            </p>
                            <p className="text-muted">
                                Well-maintained accounting data further supports effective <a href="/services/reporting">budgeting and forecasting</a>, enabling businesses to plan cash flow, manage expenses, and prepare for growth using reliable financial information rather than assumptions.
                            </p>
                        </section>

                        {/* Startups, SMEs & Corporates */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Financial Accounting Solutions for Startups, SMEs & Corporates</h2>
                            <p className="text-muted mb-6">
                                Our financial accounting solutions are tailored to meet the needs of businesses at every stage of growth. Startups benefit from structured accounting systems that establish compliance from day one, while SMEs gain better financial visibility and control as operations scale. Large corporates rely on our solutions to maintain consistency, regulatory accuracy, and detailed financial reporting across departments or multiple entities.
                            </p>
                            <p className="text-muted">
                                By implementing standardized accounting frameworks, we help businesses move from fragmented financial data to clear, reliable, and compliant accounting systems that support both daily operations and long-term strategy.
                            </p>
                        </section>

                        {/* Bookkeeping */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Bookkeeping as the Core of Effective Financial Accounting Solutions</h2>
                            <p className="text-muted mb-4">
                                Accurate bookkeeping forms the foundation of all successful financial accounting solutions. Inconsistent or poorly maintained records often result in incorrect VAT filings, cash flow mismatches, audit qualifications, and tax compliance issues. Our approach ensures that every financial transaction is recorded accurately, supported by proper documentation, and maintained in accordance with UAE accounting standards.
                            </p>
                            <p className="text-muted">
                                To enhance efficiency and accuracy, we assist businesses in selecting and implementing the <a href="/services/accounting-services">best bookkeeping software</a> suited to their industry, transaction volume, and reporting requirements. Modern accounting software enables real-time financial tracking, clear audit trails, automated VAT calculations, and secure cloud-based access to financial data.
                            </p>
                        </section>

                        {/* Scope */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Scope of Our Financial Accounting Solutions</h2>
                            <p className="text-muted mb-4">
                                Our comprehensive financial accounting solutions cover all essential accounting and reporting functions required for regulatory compliance and management oversight, including:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-muted mb-6">
                                <li>Daily and monthly accounting support</li>
                                <li>General ledger maintenance</li>
                                <li>Accounts payable and receivable management</li>
                                <li>Bank and credit card reconciliations</li>
                                <li>VAT accounting and reporting</li>
                                <li>Monthly, quarterly, and annual financial statements</li>
                            </ul>
                            <p className="text-muted">
                                All accounting services are delivered by experienced professionals with in-depth knowledge of UAE regulations and industry-specific requirements. Our structured processes ensure that your financial records remain accurate, consistent, and audit-ready throughout the year.
                            </p>
                        </section>

                        {/* Audit-Ready */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit-Ready Financial Accounting Solutions</h2>
                            <p className="text-muted mb-4">
                                Strong financial accounting solutions play a critical role in ensuring smooth audits and compliance reviews. Clean, transparent, and well-organized accounting records reduce audit risks and improve coordination with approved <a href="/services/audit-services">audit firms in Dubai</a>, enabling timely audits and accurate financial disclosures.
                            </p>
                            <p className="text-muted">
                                Audit-ready accounting systems also strengthen relationships with banks, investors, and regulatory authorities by demonstrating financial discipline, transparency, and compliance with UAE standards.
                            </p>
                        </section>

                        {/* Tax Integration */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Financial Accounting Solutions Integrated with Tax Advisory Services</h2>
                            <p className="text-muted mb-4">
                                Accurate financial accounting solutions are essential for effective tax planning and compliance. VAT filings, corporate tax calculations, and regulatory submissions depend entirely on reliable and well-maintained financial data.
                            </p>
                            <p className="text-muted">
                                Our accounting services work seamlessly with professional <a href="/services/tax-advisory">Tax Advisory Services</a>, ensuring accurate tax computations, compliant filings, and reduced exposure to penalties or disputes. This integrated approach allows businesses to manage tax obligations confidently while maintaining complete regulatory alignment.
                            </p>
                        </section>

                        {/* Benefits */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Benefits of Professional Financial Accounting Solutions</h2>
                            <p className="text-muted mb-4">
                                Implementing professional financial accounting solutions provides businesses with significant operational and regulatory advantages, including:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-muted mb-6">
                                <li>Accurate and transparent financial records</li>
                                <li>Compliance with UAE accounting, VAT, and corporate tax regulations</li>
                                <li>Improved cash flow management and financial control</li>
                                <li>Strong internal controls and reduced operational risk</li>
                                <li>Audit-ready accounting systems at all times</li>
                                <li>Better decision-making through clear financial insights</li>
                            </ul>
                            <p className="text-muted">
                                By outsourcing financial accounting solutions to experienced professionals, businesses reduce internal workload, minimize errors, and focus on growth while maintaining full financial confidence.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Financial Accounting Solutions – Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">1. What are financial accounting solutions?</h3>
                                    <p className="text-sm text-muted">Financial accounting solutions include structured accounting systems, accurate bookkeeping, financial reporting, and compliance support that help businesses manage financial performance and meet UAE regulatory requirements.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">2. Are financial accounting solutions mandatory in the UAE?</h3>
                                    <p className="text-sm text-muted">Yes, UAE regulations require businesses to maintain proper accounting records, making professional financial accounting solutions essential for legal and tax compliance.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">3. Do you provide financial accounting solutions in Dubai and Sharjah?</h3>
                                    <p className="text-sm text-muted">Yes, we offer financial accounting solutions in both Dubai and Sharjah, supporting businesses operating across multiple emirates with consistent and compliant reporting.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">4. How do financial accounting solutions support VAT and corporate tax compliance?</h3>
                                    <p className="text-sm text-muted">Accurate financial accounting ensures correct tax calculations, proper documentation, and timely filings, reducing the risk of penalties or regulatory issues.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">5. Can financial accounting solutions help with audits?</h3>
                                    <p className="text-sm text-muted">Yes, well-maintained financial accounting solutions make audits smoother, faster, and more efficient while supporting compliance with approved audit firms.</p>
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
                                    <span>Financial Accounting</span>
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
                                <li>Growing businesses</li>
                                <li>Companies seeking compliance</li>
                                <li>Organizations needing clarity</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our experts for tailored advice on your financial accounting needs.</p>
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
