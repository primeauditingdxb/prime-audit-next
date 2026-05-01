import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Corporate Tax Filing Dubai | FTA-Compliant Tax Returns for UAE Businesses',
    description: 'Corporate tax filing in Dubai made simple. FTA-compliant CT return preparation, EmaraTax filing, deadline management, and penalty risk reduction for UAE businesses.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/corporate-tax-filing-dubai'
    }
}

export default function CorporateTaxFilingDubaiPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/corporate_tax_filing_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Corporate Tax Filing Dubai' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Corporate Tax Filing in Dubai
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            FTA-compliant CT return preparation, EmaraTax filing, deadline management, and penalty risk reduction for UAE businesses.
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
                                Corporate tax filing in Dubai is now one of the most important annual compliance obligations for UAE businesses. Since the introduction of UAE Corporate Tax, businesses across Dubai must calculate taxable income correctly, maintain accurate financial records, assess deductions and exemptions carefully, and file a compliant Corporate Tax Return through the Federal Tax Authority&apos;s EmaraTax portal within the prescribed deadline.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                Prime Audit Solutions LLC provides end-to-end corporate tax filing services in Dubai to help businesses file accurately, reduce compliance risk, and avoid unnecessary penalties. For many businesses, corporate tax filing is not just a year-end submission task. It is the final outcome of how well your accounting records, tax treatment, deductions, and financial reporting have been managed throughout the year.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                A rushed or poorly prepared filing can create avoidable penalties, increase audit risk, and expose your business to FTA scrutiny. Our role is to make sure your return is accurate, defensible, and submitted correctly the first time.
                            </p>
                            <p className="text-muted leading-relaxed">
                                Whether you are a mainland LLC, free zone entity, SME, branch office, or growing UAE business preparing for your first filing cycle, our team manages the full process from tax computation through EmaraTax submission. If your business needs strategic planning before submission, our <Link href="/services/tax-advisory" className="underline">Corporate Tax Advisory Services in Dubai</Link> help ensure your tax position is reviewed and structured correctly before filing begins.
                            </p>
                        </section>

                        {/* Why CT Filing Matters */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Corporate Tax Filing Matters for UAE Businesses</h2>
                            <p className="text-muted mb-4">
                                Corporate tax filing is more than an annual compliance formality. It is the formal declaration of your business&apos;s taxable income, allowable deductions, exemptions, and tax liability to the Federal Tax Authority. It is the point where your accounting records, financial statements, and tax treatment are tested in a formal regulatory submission.
                            </p>
                            <p className="text-muted mb-4">
                                Errors in corporate tax filing can be expensive. Misstated taxable income, unsupported deductions, incomplete disclosures, inaccurate related-party reporting, and late submissions can all trigger FTA penalties, increased scrutiny, and avoidable tax exposure. Even businesses with no corporate tax payable may still be required to file correctly and on time.
                            </p>
                            <p className="text-muted mb-3">Professional corporate tax filing ensures:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>Your return is prepared accurately</li>
                                <li>Deductions and exemptions are reviewed correctly</li>
                                <li>Your filing is supported by compliant records</li>
                                <li>Deadlines are not missed</li>
                                <li>Penalty exposure is reduced</li>
                                <li>Your tax position is more defensible if reviewed later</li>
                            </ul>
                            <p className="text-muted">
                                Businesses preparing for filing often also require <Link href="/services/accounting-services" className="underline">Accounting Services in Dubai</Link> to ensure financial records are complete, accurate, and tax-ready before computation begins.
                            </p>
                        </section>

                        {/* Who Must File */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Who Must File Corporate Tax in Dubai</h2>
                            <p className="text-muted mb-4">Corporate tax filing generally applies to most taxable business structures operating in the UAE, including:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-6">
                                <li>UAE mainland companies</li>
                                <li>Free zone entities (including 0% QFZP filers)</li>
                                <li>Branches of foreign companies operating in the UAE</li>
                                <li>Non-resident persons with a UAE permanent establishment</li>
                                <li>Businesses earning taxable UAE-source income</li>
                                <li>SMEs electing for Small Business Relief</li>
                                <li>Group entities with taxable intercompany structures</li>
                            </ul>
                            <p className="text-muted mb-4">
                                A common misconception is that only tax-paying businesses need to file. In practice, filing obligations may still apply even where tax payable is nil, including for businesses claiming exemptions, reliefs, or 0% free zone treatment.
                            </p>
                            <p className="text-muted">
                                If your records are incomplete before filing, our <Link href="/services/bookkeeping-services-dubai" className="underline">Bookkeeping Services in Dubai</Link> team can help clean and prepare your books before tax computation begins.
                            </p>
                        </section>

                        {/* Our Services Include */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Corporate Tax Filing Services Include</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">End-to-End Corporate Tax Filing Support</h3>
                            <p className="text-muted mb-4">Our corporate tax filing service is designed to manage the full compliance cycle from preparation through final submission. We provide:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>FTA registration and EmaraTax profile review</li>
                                <li>Tax period and financial year validation</li>
                                <li>Taxable income computation under UAE CT rules</li>
                                <li>Deduction and exemption review</li>
                                <li>Small Business Relief assessment</li>
                                <li>Related-party and transfer pricing review</li>
                                <li>CT Return preparation in EmaraTax</li>
                                <li>Supporting schedules and documentation review</li>
                                <li>Pre-submission review and client sign-off</li>
                                <li>Final FTA submission and acknowledgement</li>
                                <li>Tax payment coordination</li>
                                <li>Filing record retention and post-submission support</li>
                            </ul>
                            <p className="text-muted">Our objective is not simply to submit a return. It is to ensure the return is complete, supportable, and prepared in a way that reduces risk if reviewed later.</p>
                        </section>

                        {/* Our Filing Process */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Corporate Tax Filing Process</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">What to Expect From Start to Submission</h3>
                            <p className="text-muted mb-4">Our filing process is structured to minimise errors, reduce delays, and ensure your return is supported at every stage.</p>
                            <ol className="space-y-3 text-muted list-decimal pl-5 mb-4">
                                <li>Review of FTA registration and EmaraTax setup</li>
                                <li>Validation of tax period and financial year</li>
                                <li>Review of financial statements and accounting records</li>
                                <li>Taxable income computation and tax adjustment</li>
                                <li>Review of deductions, exemptions, and reliefs</li>
                                <li>Related-party and transfer pricing review</li>
                                <li>EmaraTax CT Return preparation</li>
                                <li>Internal technical review and client sign-off</li>
                                <li>Final filing submission</li>
                                <li>Tax payment coordination and filing archive retention</li>
                            </ol>
                            <p className="text-muted">This structured process improves filing accuracy, strengthens documentation quality, and reduces compliance risk.</p>
                        </section>

                        {/* Documents Required */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Documents Required for Corporate Tax Filing</h2>
                            <p className="text-muted mb-4">To prepare and file your CT Return accurately, we typically require:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Trade licence and incorporation documents</li>
                                <li>Financial statements</li>
                                <li>Trial balance and general ledger</li>
                                <li>Chart of accounts</li>
                                <li>VAT returns and VAT registration details</li>
                                <li>Fixed asset register</li>
                                <li>Related-party transaction records</li>
                                <li>Loan agreements and financing schedules</li>
                                <li>Shareholder structure and ownership records</li>
                                <li>Expense schedules and supporting documentation</li>
                                <li>Prior tax computations (if applicable)</li>
                            </ul>
                            <p className="text-muted">Complete and accurate documentation improves both filing speed and tax defensibility.</p>
                        </section>

                        {/* Benefits */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Corporate Tax Filing Benefits for UAE Businesses</h2>
                            <p className="text-muted mb-4">Professional corporate tax filing provides far more than submission support. It gives your business:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Lower risk of filing errors</li>
                                <li>Reduced FTA penalty exposure</li>
                                <li>Stronger tax documentation</li>
                                <li>More accurate tax treatment</li>
                                <li>Improved deduction capture</li>
                                <li>Better compliance visibility</li>
                                <li>Cleaner year-end reporting</li>
                                <li>Stronger audit readiness</li>
                                <li>Greater confidence in your tax position</li>
                            </ul>
                            <p className="text-muted">For many businesses, the biggest benefit is not simply filing on time — it is filing correctly with fewer downstream risks.</p>
                        </section>

                        {/* CT Filing for Different Business Types */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Corporate Tax Filing for SMEs, Free Zones &amp; Growing Businesses</h2>
                            <p className="text-muted mb-4">We support corporate tax filing for:</p>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>SMEs filing their first CT Return</li>
                                <li>Free zone businesses assessing QFZP treatment</li>
                                <li>Trading companies with thin-margin tax sensitivity</li>
                                <li>E-commerce businesses with mixed revenue streams</li>
                                <li>Professional service firms requiring clean profit allocation</li>
                                <li>Group entities with related-party transactions</li>
                                <li>Owner-managed businesses with incomplete internal reporting</li>
                            </ul>
                            <p className="text-muted">Each business type has different tax exposures. Our filing process reflects those commercial realities.</p>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Businesses Choose Prime Audit Solutions</h2>
                            <p className="text-muted mb-4">
                                Businesses choose Prime Audit Solutions because we combine practical tax knowledge, strong accounting understanding, and UAE compliance expertise in one filing process.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Clients Trust Us</h3>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>ACCA and CA-qualified tax professionals</li>
                                <li>Strong familiarity with FTA and EmaraTax expectations</li>
                                <li>Practical support for SMEs and complex entities</li>
                                <li>Fixed-fee filing support with no hidden costs</li>
                                <li>Integrated tax, accounting, and audit coordination</li>
                                <li>Bilingual support in English and Arabic</li>
                                <li>Deadline-led compliance process</li>
                                <li>Commercially practical tax support</li>
                            </ul>
                            <p className="text-muted">We deliver filing support that is accurate, efficient, and built to reduce risk.</p>
                        </section>

                        {/* Client Case Study */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Client Case Study</h2>
                            <p className="text-muted mb-4">
                                A Dubai-based professional services company approached Prime Audit Solutions ahead of its first CT filing cycle with incomplete financial records, unclear deductions, and no internal tax process. Our team reviewed their accounting records, corrected classification issues, identified allowable deductions, and completed their CT Return ahead of deadline.
                            </p>
                            <p className="text-muted">
                                The client filed on time, reduced compliance risk, improved documentation quality, and now operates with structured annual tax support and quarterly tax reviews.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Is corporate tax filing mandatory in Dubai?</h3>
                                    <p className="text-sm text-muted">Yes. Most UAE businesses are required to file a corporate tax return annually, even where no tax is payable.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">When is corporate tax filing due in the UAE?</h3>
                                    <p className="text-sm text-muted">Corporate tax returns are generally due within nine months of the end of the relevant financial year.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do free zone companies need to file corporate tax?</h3>
                                    <p className="text-sm text-muted">Yes. Free zone entities must still file a CT Return, even where eligible for 0% QFZP treatment.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What documents are required for CT filing?</h3>
                                    <p className="text-sm text-muted">Typically: financial statements, trial balance, VAT records, fixed asset schedules, related-party records, and supporting documentation.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can I file my own corporate tax return?</h3>
                                    <p className="text-sm text-muted">Technically yes, but professional filing reduces the risk of errors, missed deductions, and FTA penalties.</p>
                                </div>
                                <div className="bg-white p-1 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How much does corporate tax filing cost in Dubai?</h3>
                                    <p className="text-sm text-muted">Pricing depends on business complexity, reporting quality, transaction volume, and tax structure. Fixed-fee quotes are provided after an initial review.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">File Your Corporate Tax Return With Confidence</h2>
                            <p className="text-muted mb-4">Contact Prime Audit Solutions LLC for practical, FTA-compliant corporate tax filing support in Dubai. We provide fixed-fee corporate tax filing support tailored to your business.</p>
                            <p className="text-muted mb-4"><Link href="/contact" className="underline">Get in touch</Link> with us today. If your filing also requires year-end validation, our <Link href="/services/audit-services" className="underline">Audit Services in Dubai &amp; Sharjah</Link> team can support audit-ready financial review before submission.</p>
                        </div>

                    </article>

                    {/* Right column — aside */}
                    <aside className="space-y-6">
                        <div className="sticky top-24 bg-white rounded-xl shadow p-6 border border-gray-100">
                            <h4 className="font-semibold text-lg text-primary-dark mb-4">Quick Summary</h4>
                            <ul className="space-y-3 text-sm text-muted">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Service</span>
                                    <span>CT Return Filing</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai &amp; UAE</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Frequency</span>
                                    <span>Annual</span>
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
                                <li>SMEs &amp; startups</li>
                                <li>Group structures</li>
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
                            <h5 className="font-semibold text-primary-dark">Need help filing your CT return?</h5>
                            <p className="text-sm text-muted mt-2">Speak with our team for a practical review of your filing readiness, tax exposure, and corporate tax deadlines.</p>
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
