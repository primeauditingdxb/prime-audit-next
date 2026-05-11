import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Budgeting and Forecasting Services in the UAE | Prime Audit Solutions',
    description: 'Prime Audit Solutions provides expert budgeting, forecasting, cash flow modelling, financial modelling, and MIS reporting services for UAE businesses — turning your accounting data into actionable strategic intelligence.',
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
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Budgeting & Forecasting' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Budgeting and Forecasting Services in the UAE — Plan Ahead, Grow with Confidence
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Prime Audit Solutions provides expert budgeting, forecasting, cash flow modelling, financial modelling, and MIS reporting services for UAE businesses — turning your accounting data into actionable strategic intelligence.
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

                        {/* Intro Section */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">The UAE Businesses That Consistently Outperform Are the Ones That Plan</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                In a competitive, fast-moving market like the UAE, the businesses that outperform their peers are not always those with the largest budgets or the most aggressive growth targets. They are the ones that understand their numbers, plan ahead with discipline, and respond to change with confidence rather than panic.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Budgeting and financial forecasting are the analytical tools that make this kind of performance possible.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                A well-constructed budget tells you where your business is going. A rolling forecast tells you whether it is actually getting there — and what adjustments are required to stay on track.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Management reporting translates your financial data into the decisions that drive performance. Prime Audit Solutions provides all three — as standalone services or as part of a fully integrated financial management engagement.
                            </p>
                            <p className="text-muted leading-relaxed">
                                The foundation of accurate forecasting is accurate bookkeeping. Our <Link href="/services/accounting-services" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">bookkeeping services Dubai</Link> team ensures your transaction data is clean, current, and correctly coded throughout the year — so that every forecast we build reflects your real financial position, not a distorted picture built on incomplete records.
                            </p>
                        </section>

                        {/* Our Budgeting and Forecasting Services */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Our Budgeting and Forecasting Services</h2>
                            <div className="space-y-6">
                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">1. Annual Budget Preparation</h3>
                                    <p className="text-muted leading-relaxed">
                                        We work with your management team to build a detailed, driver-based annual budget covering revenue projections by business line and customer segment, cost budgets by department and cost category, headcount and salary planning, capital expenditure schedules, working capital assumptions, and a fully integrated cash flow budget.
                                    </p>
                                    <p className="text-muted mt-3">
                                        The resulting document becomes your financial roadmap for the year — and the benchmark against which actual performance is measured and evaluated every month.
                                    </p>
                                    <p className="text-muted mt-3">
                                        Our budgeting process includes structured management workshops to capture assumptions, challenge projections, and build shared ownership of the plan across the leadership team.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">2. Rolling Forecasts</h3>
                                    <p className="text-muted leading-relaxed">
                                        Unlike a static annual budget — which becomes progressively less relevant as the year unfolds — a rolling forecast is updated monthly or quarterly to reflect actual results and revised forward assumptions.
                                    </p>
                                    <p className="text-muted mt-3">
                                        This gives management a continuously current picture of where the business is heading, rather than comparing performance against a budget set ten months ago under entirely different market conditions.
                                    </p>
                                    <p className="text-muted mt-3">
                                        We build and maintain rolling 12-month forecast models that flex with your business reality. Monthly updates are completed within five working days of each month-end close, giving your leadership team current intelligence when they need it most.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">3. Cash Flow Forecasting</h3>
                                    <p className="text-muted leading-relaxed">
                                        Cash flow is the lifeblood of any business. In the UAE — where customer payment terms can be long, capital requirements significant, and seasonal patterns sharp — cash flow forecasting is especially critical.
                                    </p>
                                    <p className="text-muted mt-3">
                                        An unexpected cash shortfall can damage supplier relationships, delay payroll, and undermine the confidence of banks and investors, even in an otherwise profitable business.
                                    </p>
                                    <p className="text-muted mt-3">
                                        We build both short-term (13-week) and medium-term (12-month) cash flow models tailored to your specific business cycle — giving you the visibility to manage liquidity proactively and plan capital requirements ahead of time.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">4. Financial Modelling</h3>
                                    <p className="text-muted leading-relaxed">
                                        For business plans, investment proposals, bank financing applications, new market entry assessments, or major capital allocation decisions, we build bespoke financial models that present your business case clearly, accurately, and compellingly.
                                    </p>
                                    <p className="text-muted mt-3">
                                        Our models follow best-practice financial modelling standards — clearly structured, fully auditable, and designed to withstand rigorous scrutiny from banks and institutional investors.
                                    </p>
                                    <p className="text-muted mt-3 italic text-sm">
                                        For businesses applying for bank financing, our <Link href="/services/corporate-tax-filing-dubai" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">corporate tax filing Dubai</Link> team can ensure that your financial model's tax assumptions are consistent with your corporate tax position — a detail that bank credit teams increasingly scrutinise.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">5. Management Information System (MIS) Reporting</h3>
                                    <p className="text-muted leading-relaxed">
                                        We design and produce monthly MIS report packs — including the KPIs, variance analyses, segmental performance data, and operational metrics that your management team and board need to run the business effectively.
                                    </p>
                                    <p className="text-muted mt-3">
                                        Our MIS reports are concise, visual, and action-oriented. They are designed to create structured discussion and drive decisions — not to sit unread in an email inbox.
                                    </p>
                                    <p className="text-muted mt-3">
                                        Each MIS pack is tailored to your business: we work with your management team to identify the metrics that matter, design a reporting template that is clear and efficient, and deliver the pack within five working days of each month-end close.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">6. Budget vs. Actual Variance Analysis</h3>
                                    <p className="text-muted leading-relaxed">
                                        Each month, we compare your actual financial performance against your budget and prior year, explaining the key variances in plain language that management can act on immediately.
                                    </p>
                                    <p className="text-muted mt-3">
                                        This discipline of regular, rigorous variance review is one of the most effective management tools available — identifying issues early, reinforcing accountability, and maintaining the link between your plan and your execution throughout the year.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Why Clean Accounting Data Matters */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">The Foundation: Why Clean Accounting Data Matters</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Accurate forecasting and management reporting are only possible when the underlying accounting data is clean, current, and correctly coded.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Forecasts built on inaccurate books produce inaccurate projections — with compounding consequences for every strategic decision made on the basis of those numbers.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Our <Link href="/services/accounting-services" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">bookkeeping services Dubai</Link> and <Link href="/services/accounting-services" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">accounting services</Link> teams ensure your books are always audit-ready, tax-ready, and reporting-ready.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                For businesses with UAE corporate tax obligations, our Corporate Tax Advisory Services team ensures your forecasts properly account for current and deferred tax liabilities — so that your projected net positions reflect your true after-tax financial reality.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                For comprehensive corporate tax support, including transfer pricing and related-party transaction advice, see our <Link href="/services/corporate-tax-filing-dubai" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">corporate tax filing Dubai</Link> page.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                For Sharjah-based businesses, our <Link href="/services/accounting-services-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">accounting services in Sharjah</Link> team provides the same quality accounting foundation — ensuring your Sharjah books support meaningful management reporting and forecasting.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Sharjah clients requiring tax advisory alongside financial planning can access our <Link href="/services/tax-advisory-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">tax advisory services in Sharjah</Link> service for integrated support.
                            </p>
                        </section>

                        {/* Who Benefits Section */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Who Benefits from Budgeting and Forecasting Services in the UAE?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "SME owners who need to understand their financial runway, plan for growth, and manage cash flow proactively",
                                    "CFOs and finance managers presenting forecasts and performance data to boards, investors, or lenders",
                                    "Startups preparing financial projections for investor presentations or bank financing applications",
                                    "Businesses applying for bank facilities requiring detailed, credible cash flow projections",
                                    "Companies experiencing rapid growth who need a robust financial model to stay ahead of the business",
                                    "Boards seeking better, faster management information to support strategic decision-making",
                                    "Businesses transitioning from spreadsheet-based to system-based management reporting"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-muted">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Technology Section */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Technology: From Data to Decision</h2>
                            <p className="text-muted leading-relaxed mb-6">
                                Our financial models and MIS reports are built in Excel, Google Sheets, or directly within your accounting platform — whichever gives your team the most useful and accessible output.
                            </p>
                            <p className="text-muted leading-relaxed">
                                For businesses looking to automate their management reporting, our <Link href="/services/bookkeeping-accounting-software" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">bookkeeping and accounting software advisory</Link> team can identify and implement reporting tools that connect directly to your accounting data, reducing manual effort and improving timeliness.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: What is the difference between a budget and a forecast?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> A budget is a financial plan set at the beginning of a period — typically a year. A forecast is a regularly updated projection of expected performance based on actual results to date and revised forward assumptions. Both serve important but distinct management purposes, and together they create a powerful financial management framework.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: How quickly can you build a financial model?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> A standard three-statement financial model for an SME typically takes five to ten working days from the date we receive complete historical data and management assumptions. More complex models for multi-entity groups or structured bank submissions may take longer — we will confirm timelines at the outset of every engagement.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: Can I use your forecasting service without using your bookkeeping service?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Yes. If you already have well-maintained accounts with another provider, we can build forecasts and MIS reports using your existing financial data. We simply need access to your current books in the format they are maintained.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: How do you ensure the forecast reflects our corporate tax position?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Our budgeting team works with our corporate tax advisors to ensure that tax liabilities — current and deferred — are correctly incorporated into every financial forecast we produce. This ensures your projected net positions always reflect your true after-tax reality.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-dark text-white rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
                            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Ready to plan your business growth? Contact our expert team today for a consultation on how our budgeting and forecasting services can drive your success in the UAE.</p>
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
                                    <span>Budgeting & Forecasting</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai & Sharjah</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Output</span>
                                    <span>Budgets & MIS Reports</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="font-medium text-gray-700">Standard</span>
                                    <span>Best-Practice Models</span>
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
                                <li>Annual Budget Preparation</li>
                                <li>Rolling Forecasts</li>
                                <li>Cash Flow Forecasting</li>
                                <li>Financial Modelling</li>
                                <li>MIS Reporting Packs</li>
                                <li>Variance Analysis</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5 border border-gray-100">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our experts for tailored advice on your financial planning requirements.</p>
                            <Link href="/contact" className="mt-4 inline-block px-4 py-2 bg-primary-dark text-white text-sm rounded hover:opacity-90 transition-opacity">Contact us</Link>
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
