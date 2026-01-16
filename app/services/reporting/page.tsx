import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Budgeting and Forecasting Services in Dubai & Sharjah',
    description: 'Accurate budgeting and forecasting services in Dubai and Sharjah to improve cash flow planning, cost control, and informed financial decisions',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/reporting'
    }
}

export default function ReportingPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/reporting_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Reporting' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Budgeting and Forecasting Services in Dubai & Sharjah for Smarter Financial Planning
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Professional budgeting and forecasting services to help businesses plan confidently and respond effectively to changing market conditions.
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
                                Budgeting and forecasting play a critical role in helping businesses succeed in the UAE's competitive and highly regulated environment. Long-term success depends not only on current performance but also on how effectively a business plans for the future. Strong budgeting and forecasting processes allow organizations to anticipate challenges, manage cash flow, control costs, and make informed strategic decisions.
                            </p>
                            <p className="text-muted leading-relaxed">
                                At Prime Audit Solutions, we deliver professional budgeting and forecasting services supported by reliable financial accounting solutions for businesses operating in Dubai and Sharjah. Our approach combines financial accuracy with practical business insight, enabling management teams to plan with confidence, improve financial control, and respond effectively to changing market conditions.
                            </p>
                        </section>

                        {/* What Is Budgeting and Forecasting */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">What Is Budgeting and Forecasting?</h2>
                            <p className="text-muted mb-4">
                                Budgeting and forecasting are closely related financial processes that serve different but complementary purposes within effective financial accounting solutions.
                            </p>
                            <p className="text-muted mb-4">
                                Budgeting focuses on creating a detailed financial plan for a defined period by outlining expected income, expenses, and resource allocation. It provides a clear financial roadmap that helps businesses control costs and align spending with strategic goals.
                            </p>
                            <p className="text-muted mb-4">
                                Forecasting, on the other hand, involves projecting future financial outcomes using historical data, current performance, and expected business changes. It allows management to anticipate trends, adjust strategies, and respond proactively to market conditions.
                            </p>
                            <p className="text-muted">
                                Together, budgeting and forecasting help businesses translate strategy into measurable financial targets and monitor performance against those plans, forming a critical part of strong financial accounting solutions.
                            </p>
                        </section>

                        {/* Why Critical */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Budgeting and Forecasting for UAE Businesses</h2>
                            <p className="text-muted mb-4">
                                Budgeting and forecasting are critical financial planning tools for businesses operating in the UAE's fast-paced and regulated market. Rising costs, changing regulations, and competitive pressure make structured financial planning essential for sustainable growth.
                            </p>
                            <p className="text-muted mb-4">
                                Without proper budgeting and forecasting, businesses often face cash flow shortages, poor cost control, unrealistic growth expectations, difficulty planning tax obligations, and limited visibility into financial risks.
                            </p>
                            <p className="text-muted">
                                Professional budgeting and forecasting services, supported by strong financial accounting solutions, provide clarity and forward-looking insight. They help businesses manage cash flow effectively, control expenses, anticipate tax liabilities, and make confident strategic decisions that support long-term stability.
                            </p>
                        </section>


                        {/* Strategic Decision-Making */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Budgeting and Forecasting for Strategic Decision-Making</h2>
                            <p className="text-muted mb-4">
                                Budgeting and forecasting play a vital role in helping management make informed and confident business decisions. By providing a clear financial roadmap, these processes support strategic planning for business expansion or downsizing, hiring and resource allocation, pricing strategies, investment planning, and risk management.
                            </p>
                            <p className="text-muted">
                                Instead of relying on assumptions, decision-makers can use data-driven financial projections that reflect real performance and future expectations. When combined with professional financial accounting solutions, budgeting and forecasting also align closely with tax planning and compliance, working seamlessly alongside <a href="/services/tax-advisory" className='underline'>Tax Advisory Services</a> to help businesses anticipate liabilities and make well-balanced strategic decisions.
                            </p>
                        </section>

                        {/* Cost Control */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Budgeting and Forecasting for Cost Control</h2>
                            <p className="text-muted mb-4">
                                Effective budgeting and forecasting are essential for controlling costs and protecting profitability. A structured budgeting process helps businesses set clear spending limits, monitor actual expenses against budgets, identify cost overruns early, and improve financial discipline across departments.
                            </p>
                            <p className="text-muted">
                                Forecasting further strengthens cost control by highlighting future expense trends and potential pressure points before they impact cash flow. When supported by accurate records and periodic reviews such as <a href="/services/audit-services" className='underline'>Audit Services</a>, businesses gain greater confidence in their financial controls and reporting accuracy.
                            </p>
                        </section>

                        {/* Supporting Business Growth */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Supporting Business Growth with Budgeting and Forecasting</h2>
                            <p className="text-muted mb-4">
                                Growth without financial planning often leads to cash flow strain and operational risk. Budgeting and forecasting ensure growth is sustainable by aligning expansion plans with a business's financial capacity and long-term objectives.
                            </p>
                            <p className="text-muted">
                                For growing organizations, these services help assess funding requirements, plan capital investments, manage rising operating costs, and evaluate the profitability of new initiatives. When combined with reliable <a href="/services/accounting-services" className='underline'>bookkeeping and accounting services in Sharjah</a>, businesses benefit from accurate data, realistic projections, and well-informed growth decisions that are far more likely to succeed.
                            </p>
                        </section>

                        {/* Benefits */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Benefits of Budgeting and Forecasting</h2>
                            <p className="text-muted mb-4">
                                Professional budgeting and forecasting provide UAE businesses with the financial clarity needed to plan confidently and grow sustainably. These processes help management gain better control over finances while preparing for future opportunities and challenges.
                            </p>
                            <p className="text-muted mb-4">
                                Effective budgeting and forecasting improve cash flow management, control operational costs, and reduce financial risks. They support informed decision-making by providing realistic financial projections based on accurate data rather than assumptions.
                            </p>
                            <p className="text-muted">
                                When integrated with strong financial accounting solutions, budgeting and forecasting enhance overall financial discipline, improve profitability, and ensure businesses remain agile in a competitive and regulated UAE market.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Budgeting and Forecasting – Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What is the purpose of budgeting and forecasting?</h3>
                                    <p className="text-sm text-muted">Budgeting and forecasting help businesses plan finances, control costs, manage cash flow, and make informed strategic decisions.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How do budgeting and forecasting support business growth?</h3>
                                    <p className="text-sm text-muted">They ensure growth plans are aligned with financial capacity, helping businesses invest, expand, and scale sustainably.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Are budgeting and forecasting useful for small businesses in the UAE?</h3>
                                    <p className="text-sm text-muted">Yes, they help SMEs manage expenses, anticipate risks, and maintain financial stability in a competitive market.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How often should budgeting and forecasting be updated?</h3>
                                    <p className="text-sm text-muted">Budgets are usually set annually, while forecasts should be reviewed quarterly or when business conditions change.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How do budgeting and forecasting improve financial control?</h3>
                                    <p className="text-sm text-muted">They provide visibility into spending, future costs, and potential risks, allowing proactive financial management.</p>
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
                                    <span>Budgeting & Forecasting</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai & Sharjah</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Frequency</span>
                                    <span>Annual Budgets, Quarterly Forecasts</span>
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
                                <li>Growing businesses</li>
                                <li>Companies planning expansion</li>
                                <li>Businesses managing cash flow</li>
                                <li>Organizations seeking clarity</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our experts for tailored advice on your budgeting and forecasting needs.</p>
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
