import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Financial Accounting Solutions in the UAE | Prime Audit Solutions',
    description: 'Prime Audit Solutions delivers expert financial accounting solutions across the UAE — IFRS financial statements, general ledger management, consolidation accounting, and more supervised by Chartered Accountants.',
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
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Financial Accounting' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Financial Accounting Solutions in the UAE
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Prime Audit Solutions delivers expert financial accounting solutions across the UAE — IFRS financial statements, general ledger management, consolidation accounting, management reporting, fixed asset registers, and free zone accounting, supervised by Chartered Accountants with deep IFRS expertise.
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
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">What UAE Businesses Need from Financial Accounting Today</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Financial accounting is no longer simply a compliance exercise.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                In the UAE — with corporate tax now in force, VAT firmly established, and the Federal Tax Authority applying increasingly systematic scrutiny to financial submissions — the quality of your financial accounting directly affects your tax position, your borrowing capacity, your audit cost, and your ability to make sound strategic decisions.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Under the UAE corporate tax law, taxable income is calculated starting from the accounting profit reported in your IFRS financial statements.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                This means that errors or weaknesses in your financial accounting translate directly into errors in your corporate tax return — and potential exposure to FTA penalties.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                The FTA's VAT audit procedures now routinely cross-reference VAT return data against financial statements: businesses whose VAT returns do not reconcile to their accounts face additional scrutiny and material penalty risk.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                At Prime Audit Solutions, we provide financial accounting solutions that are technically rigorous, commercially relevant, and fully aligned with IFRS and UAE regulatory requirements.
                            </p>
                            <p className="text-muted leading-relaxed">
                                For businesses requiring integrated tax support, our <Link href="/services/tax-advisory" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">Corporate Tax Advisory Services</Link> and <Link href="/services/corporate-tax-filing-dubai" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">corporate tax filing Dubai</Link> services work directly from our financial accounting outputs — ensuring complete consistency across every regulatory submission.
                            </p>
                        </section>

                        {/* Our Financial Accounting Solutions */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Our Financial Accounting Solutions</h2>
                            <div className="space-y-6">
                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">1. IFRS-Compliant Financial Statement Preparation</h3>
                                    <p className="text-muted leading-relaxed">
                                        We prepare complete sets of financial statements in full accordance with International Financial Reporting Standards — including the statement of financial position (balance sheet), statement of profit or loss and other comprehensive income, statement of changes in equity, statement of cash flows, and all required notes and disclosures.
                                    </p>
                                    <p className="text-muted mt-3">
                                        Our financial statements are prepared to the standard required for statutory audit, corporate tax filing, and bank or investor submission.
                                    </p>
                                    <p className="text-muted mt-3">
                                        For businesses in Sharjah, our <Link href="/services/accounting-services-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">accounting services in Sharjah</Link> team prepares financial statements to the same IFRS standard — ensuring Sharjah mainland and free zone entities meet both regulatory requirements and audit requirements for their <Link href="/services/audit-firms-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">annual audit firms in Sharjah</Link> engagement.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">2. General Ledger Management and Chart of Accounts Design</h3>
                                    <p className="text-muted leading-relaxed">
                                        The quality of your financial reporting is ultimately determined by the quality of your general ledger.
                                    </p>
                                    <p className="text-muted mt-3">
                                        We design and maintain a chart of accounts that is correctly structured for your business — supporting accurate financial reporting, meaningful management analysis, and correct VAT coding from day one.
                                    </p>
                                    <p className="text-muted mt-3">
                                        We manage all month-end journals, accruals, prepayments, depreciation, intercompany transactions, and closing entries to ensure your trial balance is always accurate and complete.
                                    </p>
                                    <p className="text-muted mt-3">
                                        For businesses seeking cloud-based general ledger management, our <Link href="/services/bookkeeping-accounting-software" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">bookkeeping and accounting software advisory</Link> team identifies and implements the <Link href="/services/bookkeeping-accounting-software" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">best bookkeeping software</Link> solution for your specific needs and complexity.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">3. Consolidation Accounting for Group Structures</h3>
                                    <p className="text-muted leading-relaxed">
                                        For businesses operating through multiple entities — whether UAE mainland companies, free zone entities, or offshore holding structures — we prepare consolidated financial statements that eliminate inter-company balances and present the group's financial position as a single, coherent whole.
                                    </p>
                                    <p className="text-muted mt-3">
                                        Consolidation accounting is increasingly important for groups subject to UAE corporate tax, where group relief provisions, related-party rules, and transfer pricing requirements all depend on a clear and accurate picture of the group structure.
                                    </p>
                                    <p className="text-muted mt-3">
                                        For groups with cross-emirate structures — including entities in both Dubai and Sharjah — our integrated <Link href="/services/accounting-services-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">accounting services in Sharjah</Link> and Dubai accounting teams work together to prepare consolidated statements that capture the full group position.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">4. Management Accounting and Reporting</h3>
                                    <p className="text-muted leading-relaxed">
                                        Beyond statutory financial statements, we produce management accounting outputs that give your leadership team real-time visibility into operational and financial performance.
                                    </p>
                                    <p className="text-muted mt-3">
                                        This includes segmental profit and loss reporting, product or service margin analysis, cost centre analysis, departmental budget comparisons, and variance explanations that translate raw financial data into actionable business intelligence.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">5. Fixed Asset Register Management</h3>
                                    <p className="text-muted leading-relaxed">
                                        We maintain complete, current fixed asset registers — recording additions, disposals, impairments, revaluations, and depreciation charges in accordance with IAS 16 (Property, Plant and Equipment) and IAS 38 (Intangible Assets).
                                    </p>
                                    <p className="text-muted mt-3">
                                        Accurate fixed asset records are essential for both IFRS-compliant financial statements and UAE corporate tax depreciation calculations, where the tax written-down value of assets must be tracked separately from the IFRS carrying amount.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">6. Financial Accounting for Free Zone Entities</h3>
                                    <p className="text-muted leading-relaxed">
                                        Free zone entities in the UAE operate under specific accounting and audit requirements that vary by zone.
                                    </p>
                                    <p className="text-muted mt-3">
                                        Our team has extensive experience preparing financial statements for entities across all major UAE free zones — including DMCC, JAFZA, DAFZA, SAIF Zone, Hamriyah, SHAMS, and IFZA — ensuring compliance with both IFRS and the specific financial statement format and disclosure requirements of each zone authority.
                                    </p>
                                    <p className="text-muted mt-3">
                                        For Sharjah free zone entities, our <Link href="/services/accounting-services-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">accounting services in Sharjah</Link> team works alongside our <Link href="/services/audit-firms-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">audit firms in Sharjah</Link> practice to deliver fully integrated accounting and audit services — streamlining the annual submission process and reducing year-end costs.
                                    </p>
                                </div>

                                <div className="bg-surface p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">7. Transition to IFRS</h3>
                                    <p className="text-muted leading-relaxed">
                                        For businesses transitioning to IFRS for the first time — whether because of UAE corporate tax requirements, new audit mandates from free zone authorities, or investor demands — we manage the full transition process.
                                    </p>
                                    <p className="text-muted mt-3">
                                        This includes opening balance sheet preparation under IFRS 1, accounting policy selection and documentation, identification and measurement of transition adjustments, and preparation of restated comparative financial statements.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Why Quality Matters Section */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Financial Accounting Quality Matters More Than Ever in the UAE</h2>
                            <p className="text-muted leading-relaxed mb-4">
                                The UAE corporate tax regime requires taxable income to be calculated starting from accounting profit as reported in IFRS financial statements.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Errors in your financial accounting therefore translate directly into errors in your corporate tax return — and potential penalties from the Federal Tax Authority.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Our <Link href="/services/corporate-tax-filing-dubai" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">corporate tax filing Dubai</Link> team prepares and files your corporate tax return directly from our financial accounting outputs, ensuring complete consistency and minimising the risk of FTA challenge.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Similarly, the FTA's VAT audit procedures now routinely cross-reference quarterly VAT return data against annual financial statements.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Businesses whose VAT returns do not reconcile to their accounts face additional scrutiny and material penalty risk.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Our VAT-aligned bookkeeping and <Link href="/services/tax-advisory" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">Corporate Tax Advisory Services</Link> advisory services ensure that your VAT returns, financial statements, and corporate tax filings are always consistent and reconcilable.
                            </p>
                            <p className="text-muted leading-relaxed">
                                For Sharjah businesses, our <Link href="/services/tax-advisory-sharjah" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">tax advisory services in Sharjah</Link> team provides dedicated VAT and corporate tax advisory support — working from the same financial accounting data to ensure complete regulatory consistency across all filings.
                            </p>
                        </section>

                        {/* Standards & Credentials Section */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Our Financial Accounting Standards and Credentials</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "All financial statements prepared in full accordance with IFRS as adopted in the UAE",
                                    "Supervised by Chartered Accountants (ACCA, ACA, CPA) with deep IFRS specialisation",
                                    "Compliant with UAE Ministry of Economy and all free zone reporting requirements",
                                    "Corporate tax-aligned — financial statements prepared with corporate tax implications considered",
                                    "Audit-ready from day one — reducing year-end audit cost and friction",
                                    "Multi-sector experience: trading, manufacturing, hospitality, real estate, technology, etc."
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
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">The Technology Foundation</h2>
                            <p className="text-muted leading-relaxed mb-6">
                                Our financial accounting services are delivered on leading cloud platforms — including Xero, QuickBooks Online, Zoho Books, Sage, and Oracle NetSuite.
                            </p>
                            <p className="text-muted leading-relaxed">
                                For businesses evaluating their technology infrastructure, our <Link href="/services/bookkeeping-accounting-software" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">bookkeeping and accounting software advisory</Link> team provides independent guidance on identifying the <Link href="/services/bookkeeping-accounting-software" className="underline decoration-primary/30 hover:decoration-primary text-primary-dark font-medium transition-all">best bookkeeping software</Link> option for your business size, complexity, and reporting requirements.
                            </p>
                        </section>

                        {/* FAQ Section */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: Are all UAE businesses required to prepare IFRS financial statements?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Most UAE businesses are required to prepare financial statements in accordance with IFRS. Free zone authorities typically mandate IFRS compliance as a condition of the annual audit. The UAE corporate tax law also requires taxable income to be derived from IFRS-based accounts. Businesses that have historically prepared accounts on a non-IFRS basis should transition urgently.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: What is the difference between financial accounting and management accounting?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Financial accounting produces the statutory financial statements required for audit, tax filing, and regulatory compliance — these are externally facing documents prepared to a formal standard. Management accounting produces internal reports — such as management accounts, KPI dashboards, and variance analyses — designed to support business decisions. We provide both, seamlessly integrated.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: Can you prepare consolidated financial statements for a UAE group?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Yes. We prepare consolidated financial statements for groups of all sizes — from simple two-entity structures to complex multi-tier groups with UAE and offshore entities. We handle all inter-company eliminations, minority interest calculations, and group-level disclosures required under IFRS 10.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                    <h3 className="font-bold text-gray-800 mb-2">Q: How does your financial accounting integrate with corporate tax filing?</h3>
                                    <p className="text-sm text-muted leading-relaxed"><strong>A:</strong> Our financial accounting outputs form the direct input for our corporate tax filing service. Because the same team prepares both the financial statements and the corporate tax return, there is complete consistency between accounting profit and taxable income — minimising the risk of FTA challenge.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-dark text-white rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Financial Accounting</h2>
                            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Ensure your business remains compliant, audit-ready, and strategically informed with our expert financial accounting solutions in the UAE.</p>
                            <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors border border-white/20">
                                Contact our specialists
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
                                    <span>Financial Accounting</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai & Sharjah</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Standard</span>
                                    <span>IFRS Compliance</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="font-medium text-gray-700">Expertise</span>
                                    <span>Chartered Accountants</span>
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
                                <li>IFRS Financial Statements</li>
                                <li>General Ledger Management</li>
                                <li>Consolidation Accounting</li>
                                <li>Management Reporting</li>
                                <li>Fixed Asset Registers</li>
                                <li>Free Zone Accounting</li>
                                <li>IFRS Transition Support</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5 border border-gray-100">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our experts for tailored advice on your financial accounting requirements.</p>
                            <Link href="/contact" className="mt-4 inline-block px-4 py-2 bg-primary-dark text-white text-sm rounded hover:opacity-90 transition-opacity">Contact us</Link>
                        </div>
                    </aside>
                </div>

                <section className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">Related Services</h2>
                    <p className="text-muted leading-relaxed">
                        A complete financial accounting and compliance solution: 
                        <Link href="/services/bookkeeping-services-dubai" className="text-primary-dark font-bold hover:underline mx-1">bookkeeping services Dubai</Link> | 
                        <Link href="/services/accounting-services-sharjah" className="text-primary-dark font-bold hover:underline mx-1">accounting services in Sharjah</Link> | 
                        <Link href="/services/audit-firms-sharjah" className="text-primary-dark font-bold hover:underline mx-1">audit firms in Sharjah</Link> | 
                        <Link href="/services/tax-advisory" className="text-primary-dark font-bold hover:underline mx-1">Corporate Tax Advisory Services</Link> | 
                        <Link href="/services/corporate-tax-filing-dubai" className="text-primary-dark font-bold hover:underline mx-1">corporate tax filing Dubai</Link> | 
                        <Link href="/services/tax-advisory-sharjah" className="text-primary-dark font-bold hover:underline mx-1">tax advisory services in Sharjah</Link> | 
                        <Link href="/services/bookkeeping-accounting-software" className="text-primary-dark font-bold hover:underline mx-1">best bookkeeping software</Link>
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
