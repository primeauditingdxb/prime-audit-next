import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Bookkeeping & Accounting Software UAE | Setup, Migration & Support',
    description: 'Bookkeeping and accounting software UAE businesses can rely on. Setup, migration, cleanup, automation, and reporting support for Xero, Zoho Books, QuickBooks, Sage, and more.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/bookkeeping-accounting-software'
    }
}

export default function BookkeepingAccountingSoftwarePage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/bookkeeping_accounting_software_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Bookkeeping & Accounting Software UAE' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Bookkeeping and Accounting Software UAE
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Setup, migration, cleanup, automation, and reporting support for Xero, Zoho Books, QuickBooks, Sage, and more.
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
                                The right bookkeeping and accounting software can transform the way a business manages finances. The wrong software can create reporting gaps, reconciliation issues, compliance risks, and wasted time every month.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                For UAE businesses, choosing the right accounting software is not just a convenience decision — it directly affects bookkeeping accuracy, VAT compliance, management reporting, audit readiness, and corporate tax filing. Prime Audit Solutions LLC helps UAE businesses select, implement, optimise, and manage bookkeeping and accounting software that improves financial visibility, reduces manual work, and supports stronger compliance.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Our bookkeeping and accounting software support is designed for UAE startups, SMEs, free zone entities, and growing businesses that need more than just software setup. We help businesses choose the right platform, migrate cleanly, structure reporting correctly, automate finance workflows, and ensure the system supports VAT, corporate tax, and audit requirements from day one.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Whether you are replacing spreadsheets, moving from legacy accounting systems, cleaning up poor software implementation, or choosing software for the first time, our team helps ensure your accounting platform works for the way your business actually operates. If your business also needs hands-on bookkeeping support, our <Link href="/services/bookkeeping-services-dubai" className="underline">Bookkeeping Services in Dubai</Link> team can manage day-to-day records inside your chosen platform.
                            </p>
                        </section>

                        {/* Why Accounting Software Matters */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Accounting Software Matters for UAE Businesses</h2>
                            <p className="text-muted mb-4">
                                Accounting software is no longer optional for serious businesses in the UAE. As VAT, corporate tax, audit expectations, and reporting requirements become more structured, businesses need software that can support compliant financial operations at scale.
                            </p>
                            <p className="text-muted mb-3">The right accounting software helps UAE businesses:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Reduce manual data entry</li>
                                <li>Improve bookkeeping accuracy</li>
                                <li>Automate invoicing and reconciliation</li>
                                <li>Improve cash flow visibility</li>
                                <li>Simplify VAT reporting</li>
                                <li>Support corporate tax-ready accounting</li>
                                <li>Strengthen internal controls</li>
                                <li>Improve audit readiness</li>
                                <li>Generate cleaner management reports</li>
                            </ul>
                            <p className="text-muted mb-4">
                                The wrong software setup creates the opposite: inconsistent ledgers, weak reporting, missed tax controls, duplicated work, and poor financial visibility. For many UAE businesses, the issue is not the software itself — it is choosing the wrong platform, implementing it poorly, or failing to configure it around how the business actually operates.
                            </p>
                            <p className="text-muted">
                                Businesses that already have software but weak reporting often also use our <Link href="/services/accounting-services" className="underline">Accounting Services in Dubai</Link> to improve financial controls and reporting structure.
                            </p>
                        </section>

                        {/* Who This Service Is Best For */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Who This Service Is Best For</h2>
                            <p className="text-muted mb-4">Our bookkeeping and accounting software support is ideal for:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Startups choosing accounting software for the first time</li>
                                <li>SMEs replacing spreadsheets with cloud accounting</li>
                                <li>Growing businesses outgrowing manual finance workflows</li>
                                <li>Companies migrating from Tally or legacy systems</li>
                                <li>Businesses with poor software implementation and unreliable reports</li>
                                <li>Free zone entities needing audit-ready software records</li>
                                <li>Businesses needing better automation, reporting, and finance visibility</li>
                            </ul>
                            <p className="text-muted">
                                Whether you need software selection, setup, migration, cleanup, or optimisation, our team helps ensure your system supports the way your business works.
                            </p>
                        </section>

                        {/* Our Services Include */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Bookkeeping &amp; Accounting Software Services Include</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">End-to-End Software Support</h3>
                            <p className="text-muted mb-4">We provide complete software advisory, implementation, and optimisation support, including:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Accounting software selection and advisory</li>
                                <li>Chart of accounts setup and restructuring</li>
                                <li>Software migration and historical data transfer</li>
                                <li>Opening balance review and reconciliation</li>
                                <li>VAT configuration and tax code setup</li>
                                <li>Invoice, billing, and workflow automation setup</li>
                                <li>Bank feed and reconciliation configuration</li>
                                <li>Management reporting dashboard setup</li>
                                <li>Payroll and expense workflow integration</li>
                                <li>Software cleanup and reporting correction</li>
                                <li>Ongoing software support and optimisation</li>
                            </ul>
                            <p className="text-muted">Our goal is not just to install software. It is to build a finance system that is accurate, efficient, and scalable.</p>
                        </section>

                        {/* Accounting Software We Support */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Accounting Software We Support</h2>
                            <p className="text-muted mb-4">We work with the leading bookkeeping and accounting platforms used across the UAE, including:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Xero</li>
                                <li>Zoho Books</li>
                                <li>QuickBooks Online</li>
                                <li>Sage</li>
                                <li>Tally</li>
                                <li>Odoo (accounting modules)</li>
                            </ul>
                            <p className="text-muted">
                                Each platform has strengths and limitations depending on your business model, reporting needs, transaction volume, and internal workflow. We help businesses choose software based on what they actually need — not just what is popular.
                            </p>
                        </section>

                        {/* How We Help You Choose */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">How We Help You Choose the Right Accounting Software</h2>
                            <p className="text-muted mb-4">
                                Choosing accounting software should not start with brand names. It should start with how your business operates.
                            </p>
                            <p className="text-muted mb-3">We assess:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Business size and transaction volume</li>
                                <li>Reporting complexity</li>
                                <li>VAT and tax requirements</li>
                                <li>Number of users and approval flows</li>
                                <li>Inventory and stock needs</li>
                                <li>Invoicing and receivables process</li>
                                <li>Payroll and expense controls</li>
                                <li>Audit and reporting requirements</li>
                            </ul>
                            <p className="text-muted">This ensures the software matches the business, not the other way around.</p>
                        </section>

                        {/* Software Migration & Cleanup */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Software Migration &amp; Cleanup Support</h2>
                            <p className="text-muted mb-4">
                                Many businesses come to us after poor software implementation, failed migrations, broken ledgers, duplicate transactions, and unreliable reports.
                            </p>
                            <p className="text-muted mb-3">Before optimisation begins, we can:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Clean up software structure</li>
                                <li>Rebuild chart of accounts</li>
                                <li>Correct opening balances</li>
                                <li>Fix VAT coding errors</li>
                                <li>Repair reporting issues</li>
                                <li>Reconcile historical balances</li>
                                <li>Restore clean monthly reporting</li>
                            </ul>
                            <p className="text-muted">
                                This is especially valuable for businesses preparing for audit, tax filing, funding review, or management reporting. If your records also need full tax alignment, our <Link href="/services/tax-advisory" className="underline">Corporate Tax Advisory Services in Dubai</Link> team can review tax treatment and reporting structure before filing.
                            </p>
                        </section>

                        {/* Benefits */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Benefits of the Right Accounting Software Setup</h2>
                            <p className="text-muted mb-4">The right software setup gives UAE businesses more than cleaner books. It provides:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Faster monthly close</li>
                                <li>Better reporting accuracy</li>
                                <li>Improved cash flow visibility</li>
                                <li>Fewer manual errors</li>
                                <li>Stronger VAT compliance</li>
                                <li>Better corporate tax readiness</li>
                                <li>Stronger internal controls</li>
                                <li>Easier audit preparation</li>
                                <li>More scalable financial operations</li>
                            </ul>
                            <p className="text-muted">For many businesses, the biggest benefit is not automation alone — it is better financial control.</p>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Businesses Choose Prime Audit Solutions</h2>
                            <p className="text-muted mb-4">
                                Businesses choose Prime Audit Solutions because we combine software implementation with real accounting, tax, and reporting knowledge.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Clients Trust Us</h3>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>ACCA and CA-supervised implementation support</li>
                                <li>Software setup built around UAE VAT and CT compliance</li>
                                <li>Practical reporting-first implementation approach</li>
                                <li>Fixed-fee setup and migration support</li>
                                <li>Experience across UAE SMEs, free zones, and growing businesses</li>
                                <li>Ongoing bookkeeping, accounting, tax, and audit support</li>
                                <li>Bilingual support in English and Arabic</li>
                            </ul>
                            <p className="text-muted">We do not just implement software. We build usable finance systems.</p>
                        </section>

                        {/* Client Case Study */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Client Case Study</h2>
                            <p className="text-muted mb-4">
                                A UAE trading company approached Prime Audit Solutions after migrating to QuickBooks with duplicate ledgers, incorrect VAT coding, and unreliable reporting. Our team rebuilt the software structure, corrected the chart of accounts, repaired tax coding, and implemented a cleaner reporting workflow.
                            </p>
                            <p className="text-muted">
                                Within one month, the client had reliable monthly reporting, cleaner reconciliations, and significantly improved financial visibility.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What is the best accounting software for UAE businesses?</h3>
                                    <p className="text-sm text-muted">The best software depends on your business size, reporting needs, VAT requirements, and workflow complexity. There is no one-size-fits-all option.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can you migrate from Tally to cloud accounting?</h3>
                                    <p className="text-sm text-muted">Yes. We support migration from Tally and legacy systems to modern cloud platforms.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can you fix poor accounting software setup?</h3>
                                    <p className="text-sm text-muted">Yes. We provide software cleanup, reporting correction, VAT reconfiguration, and migration repair.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Which software do you support?</h3>
                                    <p className="text-sm text-muted">We support Xero, Zoho Books, QuickBooks, Sage, Tally, and selected ERP accounting modules.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do you also provide bookkeeping inside the software?</h3>
                                    <p className="text-sm text-muted">Yes. We provide bookkeeping, accounting, VAT, tax, and reporting support within your accounting system.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How much does accounting software setup cost in the UAE?</h3>
                                    <p className="text-sm text-muted">Pricing depends on platform, complexity, migration scope, and reporting requirements. Fixed-fee proposals are provided after review.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Build a Better Finance System Today</h2>
                            <p className="text-muted mb-4">Contact Prime Audit Solutions LLC for practical accounting software support, migration help, and finance system optimisation across the UAE.</p>
                            <p className="text-muted mb-4"><Link href="/contact" className="underline">Get in touch</Link> with us today for a practical review of your current accounting software, reporting quality, and finance workflow gaps. We provide fixed-fee software setup, migration, and optimisation support tailored to UAE businesses.</p>
                        </div>

                    </article>

                    {/* Right column — aside */}
                    <aside className="space-y-6">
                        <div className="sticky top-24 bg-white rounded-xl shadow p-6 border border-gray-100">
                            <h4 className="font-semibold text-lg text-primary-dark mb-4">Quick Summary</h4>
                            <ul className="space-y-3 text-sm text-muted">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Service</span>
                                    <span>Software Setup &amp; Support</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai &amp; UAE</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Platforms</span>
                                    <span>Xero, Zoho, QB, Sage</span>
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
                                <li>Businesses migrating from Tally</li>
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
                            <h5 className="font-semibold text-primary-dark">Need better accounting software?</h5>
                            <p className="text-sm text-muted mt-2">Speak with our team for a practical review of your current software setup, reporting quality, and finance workflow gaps.</p>
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
