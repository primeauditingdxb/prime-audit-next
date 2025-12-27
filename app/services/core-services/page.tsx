import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Financial Accounting Solutions for UAE Businesses',
    description: 'Reliable financial accounting solutions for UAE businesses. Ensure accurate records, compliance, audit readiness, and informed decision-making.',
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
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Core Services' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Financial Accounting Solutions for Businesses in Dubai & Sharjah
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Reliable financial accounting solutions ensuring accuracy, compliance, and clarity at every stage of operation.
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
                                Strong financial management begins with accurate accounting. In the UAE's structured regulatory environment, businesses require more than basic bookkeeping — they need reliable Financial Accounting Solutions that ensure accuracy, compliance, and clarity at every stage of operation.
                            </p>
                            <p className="text-muted leading-relaxed">
                                At Prime Audit Solutions, our financial accounting solutions are designed to support businesses in Dubai and Sharjah with structured accounting frameworks that align with regulatory requirements while delivering meaningful financial insights for management.
                            </p>
                        </section>

                        {/* What Are Financial Accounting Solutions */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">What Are Financial Accounting Solutions?</h2>
                            <p className="text-muted mb-4">
                                Financial accounting solutions encompass the systems, processes, and controls used to record, classify, summarize, and report financial transactions. These solutions ensure that financial data is accurate, consistent, and compliant with applicable accounting standards and UAE regulations.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Effective financial accounting solutions provide businesses with:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Accurate financial records</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Clear financial statements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Reliable data for decision-making</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Regulatory and audit readiness</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Long-term financial stability</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4 italic">
                                Without a structured accounting foundation, businesses face increased risks of errors, non-compliance, and poor financial visibility.
                            </p>
                        </section>

                        {/* Importance */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Importance of Financial Accounting Solutions in the UAE</h2>
                            <p className="text-muted mb-4">
                                Businesses operating in Dubai and Sharjah must adhere to strict financial and regulatory standards. Inaccurate or inconsistent accounting records can lead to penalties, audit issues, and loss of stakeholder confidence.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Professional financial accounting solutions help businesses:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Maintain compliance with UAE laws</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Meet audit and regulatory requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Support tax calculations and filings</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improve financial transparency</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Strengthen internal controls</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                A strong accounting framework is essential for both operational efficiency and regulatory confidence.
                            </p>
                        </section>

                        {/* Core Components */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Core Components of Financial Accounting Solutions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Transaction Recording and Classification</h3>
                                    <p className="text-sm text-muted">All financial transactions must be recorded accurately and categorized correctly to ensure reliable reporting.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Financial Statement Preparation</h3>
                                    <p className="text-sm text-muted">Structured accounting enables the preparation of balance sheets, income statements, and cash flow statements that reflect true financial performance.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Reconciliations and Controls</h3>
                                    <p className="text-sm text-muted">Regular reconciliations help detect errors early and ensure consistency across financial records.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Documentation and Audit Trails</h3>
                                    <p className="text-sm text-muted">Well-maintained documentation supports audits, reviews, and regulatory inspections.</p>
                                </div>
                            </div>
                        </section>

                        {/* Foundation for Planning */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Financial Accounting Solutions as a Foundation for Planning</h2>
                            <p className="text-muted">
                                Accurate accounting is not only about historical reporting — it plays a vital role in financial planning and performance evaluation. Reliable financial data allows management to plan with confidence and assess future opportunities.
                            </p>
                            <p className="text-muted mt-4">
                                Businesses with structured financial accounting frameworks are better positioned to implement effective <a href="/services/reporting">Budgeting And Forecasting</a>, as forecasts and budgets rely heavily on accurate historical data.
                            </p>
                        </section>

                        {/* Supporting Business Decision-Making */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Supporting Business Decision-Making</h2>
                            <p className="text-muted mb-4">
                                Management decisions should be based on facts, not assumptions. Financial accounting solutions provide real-time visibility into:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Profitability</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Cash flow position</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Cost structures</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Financial risks</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                This visibility empowers leadership to make informed decisions related to pricing, expansion, investment, and cost management.
                            </p>
                        </section>

                        {/* SMEs and Growing Businesses */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Financial Accounting Solutions for SMEs and Growing Businesses</h2>
                            <p className="text-muted mb-4">
                                Small and medium-sized enterprises often underestimate the importance of structured accounting. However, SMEs benefit significantly from professional financial accounting solutions by gaining:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Better control over finances</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improved cash flow management</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Clear financial reporting</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Easier access to financing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Reduced compliance risk</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                As businesses grow, scalable accounting solutions ensure continuity and accuracy without disruption.
                            </p>
                        </section>

                        {/* Reducing Financial and Compliance Risks */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Reducing Financial and Compliance Risks</h2>
                            <p className="text-muted mb-4">
                                Weak accounting practices expose businesses to financial and regulatory risks. Inconsistent records, missing documentation, or delayed reconciliations can result in audit issues and compliance penalties.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Structured financial accounting solutions help mitigate these risks by:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Ensuring accuracy and consistency</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Strengthening internal controls</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Maintaining clear audit trails</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Supporting regulatory compliance</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                This proactive approach reduces surprises and builds financial resilience.
                            </p>
                        </section>

                        {/* Integration with Performance Monitoring */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Integration with Performance Monitoring</h2>
                            <p className="text-muted">
                                Financial accounting solutions also support ongoing performance monitoring. By comparing actual results against planned figures, businesses can identify deviations early and take corrective action.
                            </p>
                            <p className="text-muted mt-4">
                                This comparison becomes meaningful only when supported by accurate accounting data and aligned <a href="/services/reporting">Budgeting And Forecasting</a>  processes.
                            </p>
                        </section>

                        {/* Technology */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Technology and Financial Accounting Solutions</h2>
                            <p className="text-muted mb-4">
                                Modern accounting solutions leverage technology to improve accuracy, efficiency, and security. Digital accounting systems allow businesses to:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Automate transaction processing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Reduce manual errors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Generate real-time reports</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Maintain secure financial records</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Technology-enabled accounting enhances transparency and simplifies financial management.
                            </p>
                        </section>

                        {/* Customised Solutions */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Customised Financial Accounting Solutions for Different Industries</h2>
                            <p className="text-muted mb-4">
                                Different industries have different accounting requirements. A trading business requires detailed inventory tracking, while a service-based company focuses on revenue recognition and cost allocation.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">We tailor financial accounting solutions based on:</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Industry type</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Business size</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Operational complexity</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Regulatory requirements</span>
                            </div>
                            <p className="text-muted">
                                This customization ensures relevance and effectiveness.
                            </p>
                        </section>

                        {/* Support Audits and Reviews */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">How Financial Accounting Solutions Support Audits and Reviews</h2>
                            <p className="text-muted mb-4">
                                Audits and financial reviews are smoother when accounting systems are structured and well-maintained. Clear records reduce audit queries and speed up verification processes.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Businesses with strong financial accounting solutions experience:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Faster audit completion</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Fewer audit observations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improved auditor confidence</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Better regulatory outcomes</span>
                                </li>
                            </ul>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Choose Prime Audit Solutions for Financial Accounting Solutions?</h2>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Experienced accounting professionals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Deep understanding of UAE regulations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Structured and scalable accounting frameworks</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Confidential and reliable service</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Practical, business-focused approach</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-6 font-medium">
                                Our financial accounting solutions are designed to support both compliance and growth.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Financial Accounting Solutions - FAQ's</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Are financial accounting solutions mandatory in the UAE?</h3>
                                    <p className="text-sm text-muted">While not always mandatory, structured accounting is essential for compliance and audits.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do SMEs need professional financial accounting solutions?</h3>
                                    <p className="text-sm text-muted">Yes, SMEs benefit from improved control, transparency, and planning.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How often should financial records be updated?</h3>
                                    <p className="text-sm text-muted">Financial records should be updated regularly, ideally on a monthly basis.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can financial accounting solutions reduce audit risks?</h3>
                                    <p className="text-sm text-muted">Yes, accurate records significantly reduce audit issues and compliance risks.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Are financial accounting solutions scalable?</h3>
                                    <p className="text-sm text-muted">Yes, they can be adapted as the business grows.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Conclusion */}
                        <section className="bg-surface rounded-xl p-6 border border-gray-100">
                            <h2 className="text-xl font-bold text-primary-dark mb-3">Financial Accounting Solutions as a Business Backbone</h2>
                            <p className="text-muted">
                                In today's competitive UAE market, businesses cannot afford weak financial foundations. Financial Accounting Solutions provide the structure, accuracy, and clarity required to operate confidently, comply with regulations, and plan for sustainable growth.
                            </p>
                            <p className="text-muted mt-4">
                                At Prime Audit Solutions, we help businesses build accounting systems that support transparency, efficiency, and informed decision-making — forming the backbone of long-term financial success.
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
                                    <span>All Business Sizes</span>
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
                                <li>SMEs and startups</li>
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
