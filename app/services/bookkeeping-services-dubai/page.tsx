import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Bookkeeping Services Dubai | Professional Bookkeeping for UAE Businesses',
    description: 'Professional bookkeeping services in Dubai for SMEs and growing businesses. VAT-ready, cloud-based bookkeeping with monthly reporting and fixed-fee support.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/bookkeeping-services-dubai'
    }
}

export default function BookkeepingServicesDubaiPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/bookkeeping_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Bookkeeping Services Dubai' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Bookkeeping Services in Dubai for UAE Businesses
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Professional bookkeeping services for SMEs and growing businesses. VAT-ready, cloud-based bookkeeping with monthly reporting and fixed-fee support.
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
                                Accurate bookkeeping is the foundation of every financially healthy business. Without clean books, timely reconciliations, and properly recorded transactions, business owners lose visibility over cash flow, tax reporting becomes risky, and financial errors begin to compound.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Prime Audit Solutions LLC provides professional bookkeeping services in Dubai for SMEs, startups, and growing businesses that need reliable financial records, stronger control, and consistent compliance support.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Our bookkeeping services are designed to keep your day-to-day financial records accurate, organised, and always ready for VAT filing, audit review, and management reporting. Whether you need full outsourced bookkeeping or support cleaning up inconsistent records, we help ensure your books remain accurate and usable every month.
                            </p>
                            <p className="text-muted leading-relaxed">
                                If your business also needs deeper financial reporting and month-end analysis, our <Link href="/services/accounting-services" className="underline">Accounting Services in Dubai</Link> provide the next layer of structured financial oversight.
                            </p>
                        </section>

                        {/* Why Bookkeeping Matters */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Bookkeeping Matters for UAE Businesses</h2>
                            <p className="text-muted mb-4">
                                Bookkeeping is more than data entry. It is the financial operating system of your business. Every invoice, payment, expense, payroll entry, and bank movement affects your reporting accuracy, tax position, and financial visibility.
                            </p>
                            <p className="text-muted mb-4">
                                In the UAE, poor bookkeeping can lead to VAT errors, missed deductions, cash flow blind spots, delayed audits, and avoidable compliance penalties. Clean bookkeeping helps business owners stay organised, make faster decisions, and maintain reliable records for tax, audit, and financial reporting.
                            </p>
                            <p className="text-muted">
                                Many businesses improve efficiency by pairing bookkeeping with the right <Link href="/services/accounting-services" className="underline">Bookkeeping &amp; Accounting Software UAE</Link> setup for stronger automation and better reporting workflows.
                            </p>
                        </section>

                        {/* Who This Service Is Best For */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Who This Service Is Best For</h2>
                            <p className="text-muted mb-6">Our bookkeeping services are ideal for:</p>
                            <ul className="space-y-3 text-muted list-disc pl-5 mb-6">
                                <li>Startups needing structured financial recordkeeping from day one</li>
                                <li>SMEs with growing monthly transaction volume</li>
                                <li>Business owners managing books manually or through spreadsheets</li>
                                <li>Companies replacing unreliable freelance bookkeepers</li>
                                <li>Free zone businesses preparing for annual audit requirements</li>
                                <li>Mainland businesses needing VAT-ready bookkeeping support</li>
                                <li>Businesses with overdue or disorganised records needing cleanup</li>
                            </ul>
                            <p className="text-muted">
                                We also support multi-location businesses needing <Link href="/services/bookkeeping-accounting-sharjah" className="underline">Bookkeeping &amp; Accounting in Sharjah</Link> alongside Dubai operations. Whether you need ongoing monthly support or historical cleanup, our bookkeeping team helps restore financial control.
                            </p>
                        </section>

                        {/* Our Bookkeeping Services Include */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Bookkeeping Services Include</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Full-Scope Bookkeeping Services</h3>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Daily, weekly, and monthly transaction recording</li>
                                <li>Accounts payable tracking and supplier scheduling</li>
                                <li>Accounts receivable tracking and invoice follow-up</li>
                                <li>Bank and credit card reconciliation</li>
                                <li>Expense categorisation and petty cash management</li>
                                <li>VAT-compliant bookkeeping and tax coding</li>
                                <li>Payroll journals and WPS entry support</li>
                                <li>Month-end close and trial balance preparation</li>
                                <li>Cloud bookkeeping using Xero, Zoho Books, QuickBooks, or Sage</li>
                                <li>Historical bookkeeping cleanup and catch-up support</li>
                            </ul>
                            <p className="text-muted">Our bookkeeping process ensures your records remain clean, current, and ready for reporting.</p>
                        </section>

                        {/* Bookkeeping for Startups, SMEs & Growing Businesses */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Bookkeeping for Startups, SMEs &amp; Growing Businesses</h2>
                            <p className="text-muted mb-4">We support bookkeeping across a wide range of UAE business types, including:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Startups building finance processes from scratch</li>
                                <li>Trading businesses with high supplier and invoice volume</li>
                                <li>E-commerce businesses with payment gateway reconciliation needs</li>
                                <li>Professional service firms needing clean expense and receivables tracking</li>
                                <li>Real estate and contracting businesses managing vendor-heavy operations</li>
                                <li>Free zone businesses preparing for annual reporting and audit</li>
                            </ul>
                            <p className="text-muted">
                                Each business has different bookkeeping risks. We tailor our process to match your transaction flow and operational needs.
                            </p>
                        </section>

                        {/* Monthly Bookkeeping Process */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Monthly Bookkeeping Process</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">What to Expect Each Month</h3>
                            <ol className="space-y-3 text-muted list-decimal pl-5 mb-4">
                                <li>Collection of invoices, statements, and source documents</li>
                                <li>Recording and classification of transactions</li>
                                <li>Bank and ledger reconciliation</li>
                                <li>VAT review and tax coding checks</li>
                                <li>Trial balance and month-end close</li>
                                <li>Monthly summary report and issue flagging</li>
                            </ol>
                            <p className="text-muted">This monthly cycle keeps your books current, compliant, and decision-ready.</p>
                        </section>

                        {/* Bookkeeping Cleanup */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Bookkeeping Cleanup &amp; Catch-Up Support</h2>
                            <p className="text-muted mb-4">
                                Many businesses come to us with incomplete books, missing reconciliations, and months of unrecorded transactions. Before regular monthly bookkeeping begins, we can clean up historical records, reconstruct ledgers, correct VAT coding issues, and bring your accounts up to date.
                            </p>
                            <p className="text-muted">
                                This is especially valuable for businesses preparing for audit, tax filing, funding review, or internal restructuring. Clean books are also essential before starting <Link href="/services/corporate-tax" className="underline">Corporate Tax Filing Dubai</Link>.
                            </p>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Businesses Choose Prime Audit Solutions</h2>
                            <p className="text-muted mb-4">
                                Businesses choose Prime Audit Solutions because we provide more than bookkeeping support — we provide financial discipline, tax-aware processing, and dependable monthly control.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Clients Trust Us</h3>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>ACCA and CA-supervised bookkeeping support</li>
                                <li>VAT-aware transaction processing</li>
                                <li>Cloud bookkeeping across leading UAE platforms</li>
                                <li>Reliable monthly close process</li>
                                <li>Fixed-fee monthly packages</li>
                                <li>Bilingual support in English and Arabic</li>
                                <li>Seamless handoff to accounting, tax, and audit teams</li>
                            </ul>
                            <p className="text-muted">We deliver bookkeeping that is accurate, consistent, and built for compliance.</p>
                        </section>

                        {/* Client Case Study */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Client Case Study</h2>
                            <p className="text-muted mb-4">
                                A Dubai-based e-commerce company approached Prime Audit Solutions after six months of inconsistent bookkeeping left their VAT returns unsupported and their cash position unclear. Our team reconstructed historical records, reconciled payment gateway activity, corrected VAT classifications, and implemented a structured monthly bookkeeping process.
                            </p>
                            <p className="text-muted">
                                Within one reporting cycle, the client had clean books, improved cash visibility, and reliable monthly reporting.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Is bookkeeping mandatory for small businesses in Dubai?</h3>
                                    <p className="text-sm text-muted">Yes. UAE businesses are expected to maintain financial records for compliance, tax, audit, and reporting purposes.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do you provide bookkeeping for free zone companies?</h3>
                                    <p className="text-sm text-muted">Yes. We support bookkeeping for UAE mainland and free zone companies across all major jurisdictions.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can you clean up overdue bookkeeping?</h3>
                                    <p className="text-sm text-muted">Yes. We provide bookkeeping cleanup and catch-up support for businesses with incomplete or disorganised records.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What software do you use for bookkeeping?</h3>
                                    <p className="text-sm text-muted">We work with Xero, Zoho Books, QuickBooks, and Sage.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How much do bookkeeping services cost in Dubai?</h3>
                                    <p className="text-sm text-muted">Pricing depends on monthly transaction volume, reporting needs, and record quality. We provide fixed-fee quotes after a quick review.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do you also support VAT and accounting?</h3>
                                    <p className="text-sm text-muted">Yes. We provide integrated bookkeeping, accounting, VAT, corporate tax, and audit support.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Get a Free Bookkeeping Quote in 24 Hours</h2>
                            <p className="text-muted mb-4">Contact Prime Audit Solutions LLC for a practical review of your bookkeeping needs and a fixed-fee proposal tailored to your business.</p>
                            <p className="text-muted mb-4"><Link href="/contact" className="underline">Get in touch</Link> with us today. If your records also need year-end review, our <Link href="/services/audit-services" className="underline">Audit Services in Dubai &amp; Sharjah</Link> team can help.</p>
                        </div>

                    </article>

                    {/* Right column — aside */}
                    <aside className="space-y-6">
                        <div className="sticky top-24 bg-white rounded-xl shadow p-6 border border-gray-100">
                            <h4 className="font-semibold text-lg text-primary-dark mb-4">Quick Summary</h4>
                            <ul className="space-y-3 text-sm text-muted">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Service</span>
                                    <span>Bookkeeping</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai &amp; UAE</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Frequency</span>
                                    <span>Monthly</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="font-medium text-gray-700">Ideal For</span>
                                    <span>SMEs &amp; Startups</span>
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
                                <li>Startups &amp; SMEs</li>
                                <li>Free zone businesses</li>
                                <li>Mainland companies</li>
                                <li>E-commerce businesses</li>
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
                            <h5 className="font-semibold text-primary-dark">Need help cleaning up your books?</h5>
                            <p className="text-sm text-muted mt-2">Speak with our team for a practical review of your bookkeeping setup, reporting gaps, and record quality.</p>
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
