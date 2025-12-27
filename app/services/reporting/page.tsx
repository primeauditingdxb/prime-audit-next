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
                                In a competitive and regulated business environment like the UAE, success depends not only on current performance but on how well a business plans for the future. Budgeting and Forecasting are essential financial processes that help organizations anticipate challenges, manage cash flow, control costs, and make informed strategic decisions.
                            </p>
                            <p className="text-muted leading-relaxed">
                                At Prime Audit Solutions, we provide professional Budgeting and Forecasting services tailored to businesses operating in Dubai and Sharjah. Our approach combines financial accuracy with practical business insight, enabling management teams to plan confidently and respond effectively to changing market conditions.
                            </p>
                        </section>

                        {/* What Is Budgeting and Forecasting */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">What Is Budgeting and Forecasting?</h2>
                            <p className="text-muted mb-4">
                                Although often grouped together, budgeting and forecasting serve different but complementary purposes:
                            </p>
                            <div className="space-y-3">
                                <div className="bg-surface p-4 rounded-lg border border-gray-100">
                                    <p className="text-muted text-sm">Budgeting is the process of creating a detailed financial plan for a specific period, outlining expected income, expenses, and resource allocation.</p>
                                </div>
                                <div className="bg-surface p-4 rounded-lg border border-gray-100">
                                    <p className="text-muted text-sm">Forecasting involves projecting future financial outcomes based on historical data, current trends, and expected business changes.</p>
                                </div>
                            </div>
                            <p className="text-muted mt-4">
                                Together, budgeting and forecasting help businesses translate strategy into numbers and monitor whether they are on track.
                            </p>
                        </section>

                        {/* Why Critical */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Budgeting and Forecasting Are Critical for UAE Businesses</h2>
                            <p className="text-muted mb-4">
                                Many UAE businesses operate in fast-moving markets with fluctuating costs, regulatory requirements, and competitive pressures. Without proper budgeting and forecasting, companies often face:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Cash flow shortages</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Overspending and poor cost control</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Unrealistic growth expectations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Difficulty planning tax obligations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Limited visibility into financial risks</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Professional budgeting and forecasting services help businesses avoid these issues by providing structure, clarity, and forward-looking insight.
                            </p>
                        </section>

                        {/* Key Benefits */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Key Benefits of Budgeting and Forecasting</h2>
                            <p className="text-muted mb-4">Effective budgeting and forecasting allow businesses to:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Predict cash flow requirements accurately</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Plan operational and capital expenses</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Set realistic revenue and profit targets</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Monitor financial performance against plans</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Prepare for tax liabilities and regulatory commitments</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Businesses that consistently apply budgeting and forecasting are better equipped to manage uncertainty and sustain long-term growth.
                            </p>
                        </section>

                        {/* Strategic Decision-Making */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Budgeting and Forecasting for Strategic Decision-Making</h2>
                            <p className="text-muted mb-4">
                                Financial decisions should never be made in isolation. Budgeting and forecasting provide management with a financial roadmap that supports decisions such as:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Business expansion or downsizing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Hiring and resource planning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Pricing strategies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Investment planning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Risk management</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Rather than relying on assumptions, decision-makers can use financial projections grounded in real data.
                            </p>
                        </section>

                        {/* Cash Flow Planning */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Cash Flow Planning Through Budgeting and Forecasting</h2>
                            <p className="text-muted mb-4">
                                Cash flow is one of the most critical aspects of business survival. Even profitable companies can struggle if cash inflows and outflows are not properly planned.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Budgeting and forecasting help businesses:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Anticipate cash shortages in advance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Schedule payments more effectively</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Plan for seasonal fluctuations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Maintain sufficient working capital</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Clear cash flow forecasts reduce financial stress and improve operational stability.
                            </p>
                        </section>

                        {/* Cost Control */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Budgeting and Forecasting for Cost Control</h2>
                            <p className="text-muted mb-4">
                                Uncontrolled expenses are one of the most common reasons for reduced profitability. A structured budgeting process helps businesses:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Set spending limits</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Monitor actual expenses against budget</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Identify cost overruns early</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improve financial discipline across departments</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Forecasting further enhances cost control by highlighting future expense trends and potential pressure points.
                            </p>
                        </section>

                        {/* Supporting Business Growth */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Supporting Business Growth with Budgeting and Forecasting</h2>
                            <p className="text-muted mb-4">
                                Growth without planning often leads to financial strain. Budgeting and forecasting ensure that growth is sustainable by aligning expansion plans with financial capacity.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">For growing businesses, these services help:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Assess funding requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Plan capital investments</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Manage increased operating costs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Evaluate profitability of new initiatives</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Growth decisions supported by accurate forecasts are far more likely to succeed.
                            </p>
                        </section>

                        {/* Role of Accurate Financial Data */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Role of Accurate Financial Data in Budgeting and Forecasting</h2>
                            <p className="text-muted">
                                The quality of budgeting and forecasting depends entirely on the accuracy of underlying financial data. Inconsistent or incomplete data leads to unreliable projections and poor decisions.
                            </p>
                            <p className="text-muted mt-4">
                                Businesses with structured financial systems and integrated <a href="/services/core-services" className='underline'>Financial Accounting Solutions</a> are better positioned to generate accurate budgets and forecasts because their financial data is consistent, validated, and well-organized.
                            </p>
                        </section>

                        {/* Customized Budgeting */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Customized Budgeting and Forecasting for Different Business Types</h2>
                            <p className="text-muted mb-4">
                                There is no one-size-fits-all approach. Budgeting and forecasting requirements vary based on:
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Business size</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Industry</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Revenue model</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Cost structure</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary-dark rounded-full text-sm font-medium">Growth stage</span>
                            </div>
                            <p className="text-muted">
                                A trading company may focus on inventory and margin forecasting, while a service-based business may prioritize manpower costs and recurring revenue projections. Customization ensures that budgets and forecasts remain relevant and actionable.
                            </p>
                        </section>

                        {/* Common Challenges */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Common Budgeting and Forecasting Challenges</h2>
                            <p className="text-muted mb-4">Many businesses struggle with budgeting and forecasting due to:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Manual spreadsheets with errors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Lack of financial expertise</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Unrealistic assumptions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Infrequent updates</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Poor integration with accounting systems</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Professional support addresses these challenges by introducing structured models, realistic assumptions, and consistent review processes.
                            </p>
                        </section>

                        {/* Ongoing Forecasting */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Ongoing Forecasting and Performance Monitoring</h2>
                            <p className="text-muted mb-4">
                                Budgeting and forecasting should not be treated as one-time exercises. Regular updates help businesses:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Adjust plans based on actual performance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Respond to market or regulatory changes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improve forecasting accuracy over time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Maintain alignment with business objectives</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                This continuous approach strengthens financial resilience.
                            </p>
                        </section>

                        {/* Compliance and Planning */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">How Budgeting and Forecasting Support Compliance and Planning</h2>
                            <p className="text-muted mb-4">
                                Beyond internal decision-making, budgeting and forecasting also support:
                            </p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Tax planning and cash allocation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Audit preparedness</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Stakeholder reporting</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Regulatory transparency</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Businesses with disciplined forecasting processes are better prepared for financial reviews and compliance assessments.
                            </p>
                            <p className="text-muted mt-4">
                                Reliable projections are significantly easier to produce when supported by well-designed <a href="/services/core-services" className='underline'>Financial Accounting Solutions</a>, which ensure data integrity across reporting cycles.
                            </p>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Choose Prime Audit Solutions for Budgeting and Forecasting?</h2>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Deep understanding of UAE business environment</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Practical, business-focused financial planning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Customized budgeting and forecasting models</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Clear and easy-to-understand financial outputs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Confidential and reliable service delivery</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-6 font-medium">
                                Our goal is to help businesses plan with confidence, not complexity.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Budgeting and Forecasting – FAQs (UAE)</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How often should budgets be prepared?</h3>
                                    <p className="text-sm text-muted">Budgets are typically prepared annually, with periodic reviews during the year.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How often should forecasts be updated?</h3>
                                    <p className="text-sm text-muted">Forecasts should be updated quarterly or whenever business conditions change.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Is budgeting and forecasting only for large companies?</h3>
                                    <p className="text-sm text-muted">No, SMEs benefit significantly from structured financial planning.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can budgeting and forecasting help manage tax liabilities?</h3>
                                    <p className="text-sm text-muted">Yes, forecasting helps businesses plan for future tax obligations and cash needs.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Are budgeting and forecasting services customized?</h3>
                                    <p className="text-sm text-muted">Yes, all budgets and forecasts are tailored to the specific business model.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Conclusion */}
                        <section className="bg-surface rounded-xl p-6 border border-gray-100">
                            <h2 className="text-xl font-bold text-primary-dark mb-3">Budgeting and Forecasting as a Business Advantage</h2>
                            <p className="text-muted">
                                In today's dynamic UAE market, businesses that plan ahead consistently outperform those that rely on reactive decision-making. Budgeting and Forecasting provide the clarity, discipline, and foresight needed to navigate uncertainty and achieve sustainable growth.
                            </p>
                            <p className="text-muted mt-4">
                                At Prime Audit Solutions, we help businesses turn financial data into actionable plans — empowering leaders to make confident, informed decisions for the future.
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
