import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Accounting Services in Dubai | Prime Audit Solutions UAE',
    description: 'Prime Audit Solutions provides comprehensive outsourced accounting services in Dubai — from structured bookkeeping and management accounts to IFRS financial statement preparation, payroll management, and strategic CFO-level advisory.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/accounting-services'
    }
}

export default function AccountingServicesPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/accounting_services_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Accounting Services' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Accounting Services in Dubai — Accurate Books, Confident Business Decisions
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Prime Audit Solutions provides comprehensive outsourced accounting services in Dubai — from structured bookkeeping and management accounts to IFRS financial statement preparation, payroll management, and strategic CFO-level advisory.
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
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Your Business Needs More Than Just a Record of Transactions</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Accounting is the financial language of your business. Done well, it provides accurate, timely information that drives better decisions, supports tax compliance, and creates a credible financial picture for banks, investors, and regulatory authorities. Done poorly, it generates costly errors, compliance failures, and year-end surprises that damage both finances and reputation — sometimes irreparably.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Under the UAE's current regulatory environment — with corporate tax firmly in force, VAT compliance actively monitored, and the Federal Tax Authority conducting increasingly systematic audits — the quality of your accounting has never been more consequential. Errors in your books translate directly into errors in your tax filings, VAT returns, and audited financial statements.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Prime Audit Solutions provides comprehensive outsourced accounting services to businesses across Dubai — from startups requiring structured bookkeeping services Dubai to established companies needing full management accounting, IFRS financial statement preparation, and strategic CFO-level support. As a full-service financial accounting solutions provider, we ensure every client has clean, current, audit-ready books at all times.
                            </p>
                        </section>

                        {/* Our Accounting Services */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Our Accounting Services in Dubai</h2>
                            <div className="space-y-6">
                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">1. Outsourced Bookkeeping and General Ledger Management</h3>
                                    <p className="text-muted leading-relaxed">
                                        We maintain your books on a monthly basis — recording all transactions, reconciling bank statements, managing the general ledger, and ensuring your accounts reflect your real financial position at all times. Our <strong>bookkeeping services Dubai</strong> service forms the foundation of every other financial function: payroll, VAT compliance, management reporting, and audit preparation all depend on accurate, current books.
                                    </p>
                                    <p className="text-muted mt-3 italic text-sm">
                                        For clients evaluating or upgrading their accounting technology, our <Link href="/services/bookkeeping-accounting-software" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">bookkeeping and accounting software advisory service</Link> provides independent guidance on platform selection, migration, and staff training.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">2. Management Accounts</h3>
                                    <p className="text-muted leading-relaxed">
                                        Monthly or quarterly management accounts give your leadership team a live, decision-ready view of business performance — including profit and loss statements, balance sheets, and cash flow statements formatted clearly and concisely. We tailor management account packs to your specific KPIs and reporting preferences, giving you the information you actually need to run your business — not a generic set of numbers that takes an hour to interpret.
                                    </p>
                                    <p className="text-muted mt-3 italic text-sm">
                                        Management accounts are available within ten working days of each month end, giving you timely data when it matters most.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">3. Financial Statement Preparation (IFRS)</h3>
                                    <p className="text-muted leading-relaxed">
                                        We prepare year-end financial statements in full compliance with International Financial Reporting Standards (IFRS), suitable for statutory audit, corporate tax filing, and bank or investor submission. Our financial statements are prepared with audit-readiness in mind from the outset — meaning your external audit proceeds faster, with less back-and-forth, and at lower cost.
                                    </p>
                                    <p className="text-muted mt-3">
                                        For clients requiring audited financials for corporate tax purposes, our integrated <Link href="/services/corporate-tax-filing-dubai" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">corporate tax filing Dubai service</Link> prepares and files your UAE corporate tax return directly from our audited financial statements — ensuring complete consistency.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">4. Payroll Accounting and WPS Management</h3>
                                    <p className="text-muted leading-relaxed">
                                        We manage payroll calculations, Wages Protection System (WPS) transfer file generation, leave accruals, end-of-service gratuity provisions, and all related payroll journal entries. Your team is paid correctly and on time, every month, with complete payroll records maintained for audit and regulatory compliance.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">5. Accounts Payable and Receivable Management</h3>
                                    <p className="text-muted leading-relaxed">
                                        We process supplier invoices, manage payment scheduling, record customer invoices, track outstanding receivables, and flag overdue accounts — keeping your working capital in order and your cash flow healthy. Disciplined accounts payable and receivable management is one of the most impactful steps an SME can take to improve cash flow without increasing revenue.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">6. VAT Accounting and Compliance Support</h3>
                                    <p className="text-muted leading-relaxed">
                                        Every transaction is correctly coded for UAE VAT purposes, with input and output tax tracked accurately and consistently. Our VAT-accurate bookkeeping integrates directly with quarterly VAT return preparation by our Corporate Tax Advisory Services team — eliminating double-handling and minimising the risk of coding errors that attract FTA scrutiny.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">7. Part-Time CFO and Financial Advisory</h3>
                                    <p className="text-muted leading-relaxed">
                                        For growing businesses that need strategic financial guidance but are not yet ready to hire a full-time CFO, our part-time CFO service provides access to senior financial expertise on a flexible, cost-effective basis. We advise on cash management, funding strategy, financial controls, budgeting, and business planning — working as a genuine extension of your leadership team, not an external vendor.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Software We Work With */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Accounting Software We Work With</h2>
                            <p className="text-muted mb-6">
                                Our team is proficient in all major accounting platforms used by UAE businesses. For software selection, implementation, and training guidance, visit our dedicated <Link href="/services/bookkeeping-accounting-software" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium">best bookkeeping software page</Link>:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Xero — preferred for SMEs and professional service firms",
                                    "QuickBooks Online — widely used across trading and retail businesses",
                                    "Zoho Books — ideal for businesses already using the Zoho ecosystem",
                                    "Sage Business Cloud — suited to mid-sized businesses with complex payroll needs",
                                    "Oracle NetSuite — for larger enterprises requiring ERP-level functionality"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-gray-100">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span className="text-sm font-medium text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* The Case for Outsourcing */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">The Case for Outsourced Accounting in Dubai</h2>
                            <p className="text-muted leading-relaxed mb-6">
                                Hiring a full-time, qualified accountant in Dubai costs between AED 8,000 and AED 20,000 per month — before visa fees, health insurance, gratuity provisions, and software licences. That is AED 100,000 to AED 240,000 per year, before accounting for recruitment cost, training time, and the ongoing risk of staff turnover disrupting your finance function.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Outsourcing to Prime Audit Solutions gives you access to a supervised team of qualified professionals, the latest cloud accounting technology, and seamless integration with your audit and tax functions — at a predictable, scalable monthly fee. As your business grows, your accounting service grows with it — without the HR complexity of expanding an in-house team.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Dedicated named account manager — you always know who is responsible for your accounts",
                                    "Real-time cloud access — view your financial position 24/7 from any device",
                                    "Tax-ready output — books coded correctly for VAT and corporate tax filing Dubai from day one",
                                    "Audit-ready records — year-end audits proceed faster and at lower cost",
                                    "Scalable service — add management accounts, budgeting, or CFO advisory as you grow",
                                    "Full integration — accounting, audit, and tax under one roof"
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

                        {/* Sharjah Section */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Accounting Services in Sharjah</h2>
                            <p className="text-muted leading-relaxed mb-6">
                                For businesses based in Sharjah, our accounting services in Sharjah team delivers identical service standards across all Sharjah free zones and mainland entities. Whether you operate in SAIF Zone, Hamriyah, SHAMS, or Sharjah mainland, our Sharjah accounting team manages your books with the same rigour and professionalism as our Dubai practice.
                            </p>
                            <p className="text-muted leading-relaxed">
                                For Sharjah clients requiring tax advisory alongside accounting, our <Link href="/services/tax-advisory-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">tax advisory services in Sharjah</Link> service provides integrated VAT and corporate tax support — ensuring your books, VAT returns, and tax filings are always consistent.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: What is the difference between bookkeeping and accounting services?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Bookkeeping covers the day-to-day recording of financial transactions. Accounting goes further — preparing financial statements, management accounts, tax computations, and providing financial analysis and advisory support. We offer both, individually or as a fully integrated service.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: Can you take over from my existing accountant or bookkeeper?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Yes. We manage transitions from in-house bookkeepers, previous accounting firms, and self-managed spreadsheets. We assess the current state of your books, clean up any backlogs, and establish a structured, reliable going-forward process — with no disruption to your business.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: How does outsourced accounting work on a day-to-day basis?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> You share invoices, bank statements, and financial documents with us via a secure shared folder or your accounting software. We process all transactions, reconcile accounts, and provide you with monthly reports and management accounts. Communication is via email, phone, or video call — whichever works best for you.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: Do you provide financial statements for bank loan applications?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Yes. We prepare IFRS-compliant financial statements suitable for bank submission, and can also prepare supporting some cash flow projections and financial models through our <Link href="/services/reporting" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">budgeting and forecasting service</Link>.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: Do you work with businesses in Sharjah as well as Dubai?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Yes. Our Sharjah accounting team serves clients across SAIF Zone, Hamriyah, SHAMS, and Sharjah mainland. Visit our <Link href="/services/accounting-services-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">accounting services in Sharjah page</Link> for details.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-dark text-white rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
                            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Ready to streamline your business finances? Contact our expert team today for a consultation on how our accounting services can support your growth in the UAE.</p>
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
                                    <span>Accounting & Bookkeeping</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai & Sharjah</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Reporting</span>
                                    <span>Monthly / Quarterly</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="font-medium text-gray-700">Standard</span>
                                    <span>IFRS Compliance</span>
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
                                <li>Outsourced Bookkeeping</li>
                                <li>Management Accounts</li>
                                <li>Financial Statements (IFRS)</li>
                                <li>Payroll & WPS Management</li>
                                <li>Payables & Receivables</li>
                                <li>VAT Accounting</li>
                                <li>Part-Time CFO Advisory</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5 border border-primary/5">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our experts for tailored advice on your accounting requirements.</p>
                            <Link href="/contact" className="mt-4 inline-block px-4 py-2 bg-primary-dark text-white text-sm rounded hover:opacity-90 transition-opacity">Contact us</Link>
                        </div>
                    </aside>
                </div>


                <section className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">Related Services</h2>
                    <p className="text-muted leading-relaxed">
                        For a complete compliance solution: 
                        <Link href="/services/bookkeeping-services-dubai" className="text-primary-dark font-bold hover:underline mx-1">bookkeeping services Dubai</Link> | 
                        <Link href="/services/bookkeeping-accounting-software" className="text-primary-dark font-bold hover:underline mx-1">bookkeeping and accounting software</Link> | 
                        <Link href="/services/accounting-services-sharjah" className="text-primary-dark font-bold hover:underline mx-1">accounting services in Sharjah</Link> | 
                        <Link href="/services/tax-advisory-sharjah" className="text-primary-dark font-bold hover:underline mx-1">tax advisory services in Sharjah</Link> | 
                        <Link href="/services/tax-advisory" className="text-primary-dark font-bold hover:underline mx-1">Corporate Tax Advisory Services</Link> | 
                        <Link href="/services/corporate-tax-filing-dubai" className="text-primary-dark font-bold hover:underline mx-1">corporate tax filing Dubai</Link>
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
