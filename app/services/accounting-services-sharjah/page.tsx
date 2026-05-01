import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Accounting Services in Sharjah | Reliable Accounting for Sharjah Businesses',
    description: 'Professional accounting services in Sharjah for mainland and free zone businesses. VAT-compliant, IFRS-ready accounting with monthly reporting and fixed-fee support.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/accounting-services-sharjah'
    }
}

export default function AccountingServicesSharjahPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/accounting_services_sharjah_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Accounting Services in Sharjah' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Accounting Services in Sharjah
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Professional accounting for mainland and free zone businesses. VAT-compliant, IFRS-ready accounting with monthly reporting and fixed-fee support.
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
                                Strong accounting is the financial control system behind every successful business. Without accurate financial records, timely reporting, and structured accounting processes, business owners lose visibility over profitability, cash flow, tax exposure, and financial performance.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Prime Audit Solutions LLC provides professional accounting services in Sharjah for mainland companies, free zone businesses, SMEs, and growing enterprises that need reliable reporting, stronger compliance, and better financial decision-making.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Our accounting services are designed for Sharjah businesses that need more than basic bookkeeping. We help businesses maintain accurate ledgers, prepare meaningful monthly reports, stay compliant with VAT and corporate tax requirements, and build financial systems that support growth, audit readiness, and stronger internal control.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Whether you operate in Sharjah mainland, SHAMS, SAIF Zone, HFZA, SRTIP, or another Sharjah free zone, our accounting team provides practical financial support built around UAE compliance requirements and the operational realities of running a business in Sharjah. If your business also needs day-to-day transaction support, our <Link href="/services/bookkeeping-accounting-sharjah" className="underline">Bookkeeping &amp; Accounting in Sharjah</Link> service provides the operational bookkeeping foundation that supports accurate monthly accounting.
                            </p>
                        </section>

                        {/* Why Accounting Matters */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Accounting Matters for Sharjah Businesses</h2>
                            <p className="text-muted mb-4">
                                Accounting is more than recording transactions. It is the framework that helps businesses understand financial performance, manage tax obligations, monitor cash flow, maintain compliance, and make better commercial decisions.
                            </p>
                            <p className="text-muted mb-4">
                                In Sharjah, poor accounting creates more than internal confusion. It increases the risk of VAT errors, weakens audit readiness, affects corporate tax accuracy, and reduces financial visibility at exactly the point where business owners need clarity most. Strong accounting helps Sharjah businesses improve reporting discipline, reduce compliance risk, and make decisions with confidence.
                            </p>
                            <p className="text-muted mb-3">Professional accounting support helps Sharjah businesses:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Maintain accurate financial records</li>
                                <li>Improve visibility over cash flow and profitability</li>
                                <li>Reduce VAT and corporate tax risk</li>
                                <li>Support free zone and mainland compliance</li>
                                <li>Prepare audit-ready financial statements</li>
                                <li>Improve reporting quality for lenders and investors</li>
                                <li>Strengthen internal financial control</li>
                                <li>Support better business planning and growth</li>
                            </ul>
                            <p className="text-muted">
                                Businesses preparing for annual reporting often pair monthly accounting with our <Link href="/services/audit-firms-sharjah" className="underline">Audit Firms in Sharjah</Link> service to ensure year-end compliance runs smoothly.
                            </p>
                        </section>

                        {/* Who This Service Is Best For */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Who This Service Is Best For</h2>
                            <p className="text-muted mb-4">Our accounting services in Sharjah are ideal for:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>SMEs needing monthly financial reporting and compliance support</li>
                                <li>Sharjah mainland companies requiring VAT and CT-ready accounts</li>
                                <li>Free zone businesses preparing for annual audit and licence renewal</li>
                                <li>Growing companies that have outgrown basic bookkeeping</li>
                                <li>Businesses replacing in-house accountants or unreliable freelancers</li>
                                <li>Companies with multiple suppliers, customers, and reporting lines</li>
                                <li>Business owners who need clearer financial visibility and control</li>
                            </ul>
                            <p className="text-muted">
                                Whether you need outsourced accounting support or a structured finance function, our team provides reliable financial oversight designed around your business.
                            </p>
                        </section>

                        {/* Our Services Include */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Accounting Services in Sharjah Include</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Full-Scope Accounting Services</h3>
                            <p className="text-muted mb-4">We provide end-to-end accounting support for Sharjah businesses, including:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>General ledger maintenance and chart of accounts setup</li>
                                <li>Monthly management accounts preparation</li>
                                <li>Profit &amp; loss, balance sheet, and cash flow reporting</li>
                                <li>Accounts payable and receivable management</li>
                                <li>Bank reconciliation and balance validation</li>
                                <li>VAT accounting and FTA-compliant VAT support</li>
                                <li>Corporate tax-ready accounting support</li>
                                <li>Payroll accounting and WPS journal entries</li>
                                <li>Fixed asset register and depreciation schedules</li>
                                <li>Intercompany reconciliation for group entities</li>
                                <li>Year-end financial statements (IFRS-ready)</li>
                                <li>Audit coordination and auditor support</li>
                            </ul>
                            <p className="text-muted">Our accounting process is designed to improve reporting quality, strengthen compliance, and give business owners better financial visibility every month.</p>
                        </section>

                        {/* Sector Coverage */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Accounting for Sharjah SMEs, Trading &amp; Service Businesses</h2>
                            <p className="text-muted mb-4">We provide accounting support across a wide range of Sharjah business sectors, including:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Trading businesses with supplier-heavy and inventory-led operations</li>
                                <li>E-commerce businesses requiring payment reconciliation and margin tracking</li>
                                <li>Professional service firms needing profitability and project reporting</li>
                                <li>Manufacturing businesses with stock, cost, and inventory controls</li>
                                <li>Logistics businesses with operational reporting complexity</li>
                                <li>Free zone entities requiring annual audit-ready reporting</li>
                            </ul>
                            <p className="text-muted">Each sector has different reporting risks and operational priorities. Our accounting process is tailored to how your business actually functions.</p>
                        </section>

                        {/* Monthly Accounting Process */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Monthly Accounting Process</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">What to Expect Each Month</h3>
                            <p className="text-muted mb-4">Our monthly accounting workflow is built to deliver structure, consistency, and useful financial insight.</p>
                            <ol className="space-y-3 text-muted list-decimal pl-5 mb-4">
                                <li>Review of source records and transaction completeness</li>
                                <li>Ledger posting and account classification</li>
                                <li>Bank, supplier, and customer reconciliation</li>
                                <li>VAT review and tax treatment checks</li>
                                <li>Management report preparation</li>
                                <li>Review meeting and financial commentary</li>
                                <li>Month-end close and reporting sign-off</li>
                            </ol>
                            <p className="text-muted">This monthly cycle ensures your accounts remain accurate, timely, and decision-ready throughout the year.</p>
                        </section>

                        {/* Accounting Software */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Accounting Software We Support</h2>
                            <p className="text-muted mb-4">We work with all major UAE-compliant accounting platforms, including:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Xero</li>
                                <li>Zoho Books</li>
                                <li>QuickBooks Online</li>
                                <li>Sage</li>
                                <li>Tally</li>
                            </ul>
                            <p className="text-muted">
                                Whether you already use accounting software or need a better reporting setup, we can optimise, migrate, and manage your accounting system. For software setup and support, see our <Link href="/services/bookkeeping-accounting-software" className="underline">Bookkeeping &amp; Accounting Software UAE</Link> page.
                            </p>
                        </section>

                        {/* Benefits of Outsourced Accounting */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Benefits of Outsourced Accounting in Sharjah</h2>
                            <p className="text-muted mb-4">
                                Outsourcing accounting gives Sharjah businesses access to qualified financial expertise without the cost and operational burden of maintaining a full in-house finance team.
                            </p>
                            <p className="text-muted mb-3">Key benefits include:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Lower cost than full-time in-house finance hiring</li>
                                <li>Access to qualified accountants and structured review</li>
                                <li>Stronger compliance and reporting discipline</li>
                                <li>Reduced single-person dependency risk</li>
                                <li>Easier scaling as the business grows</li>
                                <li>Integrated support across VAT, tax, and audit</li>
                                <li>More consistent reporting and financial visibility</li>
                            </ul>
                            <p className="text-muted">For many SMEs, outsourced accounting is more cost-effective, more reliable, and more scalable than hiring internally too early.</p>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Businesses Choose Prime Audit Solutions</h2>
                            <p className="text-muted mb-4">
                                Businesses choose Prime Audit Solutions because we combine accounting accuracy with commercial understanding and practical UAE compliance expertise.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Clients Trust Us</h3>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>ACCA and CA-qualified accounting professionals</li>
                                <li>IFRS-aware financial reporting</li>
                                <li>VAT and corporate tax-aligned accounting support</li>
                                <li>Experience across Sharjah mainland and free zone entities</li>
                                <li>Fixed-fee monthly support with no hidden costs</li>
                                <li>Cloud-based reporting and digital workflows</li>
                                <li>Bilingual support in English and Arabic</li>
                                <li>Integrated accounting, tax, and audit support</li>
                            </ul>
                            <p className="text-muted">We deliver accounting support that is practical, compliant, and built for better business decisions.</p>
                        </section>

                        {/* Client Case Study */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Client Case Study</h2>
                            <p className="text-muted mb-4">
                                A Sharjah-based trading company approached Prime Audit Solutions after inconsistent reporting left management with no reliable view of margins, supplier liabilities, or monthly cash flow. Our team rebuilt the accounting structure, reconciled historical balances, and implemented a monthly reporting process with clean management accounts and VAT-ready ledgers.
                            </p>
                            <p className="text-muted">
                                Within one reporting cycle, the client had clearer financial visibility, stronger reporting discipline, and significantly improved internal control.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What is included in monthly accounting services?</h3>
                                    <p className="text-sm text-muted">Monthly accounting typically includes reconciliations, ledger review, management accounts, VAT support, reporting, and financial oversight.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do Sharjah free zone companies need accounting support?</h3>
                                    <p className="text-sm text-muted">Yes. Most free zone businesses require accurate accounting to support audit, tax, and licence renewal obligations.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can you support accounting for SHAMS and SAIF Zone companies?</h3>
                                    <p className="text-sm text-muted">Yes. We support accounting for SHAMS, SAIF Zone, HFZA, SRTIP, and mainland Sharjah entities.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What accounting software do you use?</h3>
                                    <p className="text-sm text-muted">We work with Xero, Zoho Books, QuickBooks, Sage, and Tally.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How much do accounting services cost in Sharjah?</h3>
                                    <p className="text-sm text-muted">Pricing depends on reporting needs, transaction volume, and business complexity. Fixed-fee quotes are provided after review.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can you prepare accounts for audit and corporate tax?</h3>
                                    <p className="text-sm text-muted">Yes. Our accounting services are designed to support VAT, audit readiness, and corporate tax compliance.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Get Your Sharjah Accounting Sorted Today</h2>
                            <p className="text-muted mb-4">Contact Prime Audit Solutions LLC for a practical accounting consultation and fixed-fee proposal tailored to your Sharjah business.</p>
                            <p className="text-muted mb-4"><Link href="/contact" className="underline">Get in touch</Link> with us today for a practical review of your current accounting setup, reporting quality, and compliance readiness. If your accounting also needs tax review, our <Link href="/services/tax-advisory" className="underline">Tax Advisory Services in Sharjah</Link> team can help align reporting with corporate tax requirements.</p>
                        </div>

                    </article>

                    {/* Right column — aside */}
                    <aside className="space-y-6">
                        <div className="sticky top-24 bg-white rounded-xl shadow p-6 border border-gray-100">
                            <h4 className="font-semibold text-lg text-primary-dark mb-4">Quick Summary</h4>
                            <ul className="space-y-3 text-sm text-muted">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Service</span>
                                    <span>Accounting</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Sharjah &amp; UAE</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Frequency</span>
                                    <span>Monthly</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="font-medium text-gray-700">Ideal For</span>
                                    <span>SMEs &amp; Free Zones</span>
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
                                    href="https://wa.me/971545660697"
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
                                <li>Mainland companies</li>
                                <li>Free zone entities</li>
                                <li>SMEs &amp; trading firms</li>
                                <li>Growing businesses</li>
                            </ul>
                        </div>

                        <div className="bg-surface rounded-xl p-5 border border-gray-100">
                            <h5 className="font-semibold text-primary-dark mb-3">Contact Us</h5>
                            <ul className="space-y-2 text-sm text-muted">
                                <li>📞 +971 54 566 0697</li>
                                <li>✉️ info@primeauditsolutions.com</li>
                                <li>📍 Al Karama, Dubai, UAE</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5">
                            <h5 className="font-semibold text-primary-dark">Need better accounting in Sharjah?</h5>
                            <p className="text-sm text-muted mt-2">Speak with our team for a practical review of your accounting setup, reporting quality, and compliance readiness.</p>
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
