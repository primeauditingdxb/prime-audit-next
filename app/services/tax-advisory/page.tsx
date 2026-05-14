import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tax Advisory Services in Dubai, UAE | Prime Audit Solutions',
    description: 'Looking for professional tax advisory services in Dubai? Prime Audit Solutions provides corporate tax planning, VAT advisory, FTA compliance, and strategic tax guidance for businesses across the UAE. Book a free consultation today.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/tax-advisory'
    }
}

export default function TaxAdvisoryPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/tax_advisory_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Tax Advisory' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Tax Advisory Services in Dubai, UAE
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Expert corporate tax planning, VAT advisory, FTA compliance, and strategic tax guidance for businesses across the UAE.
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
                            <p className="text-muted leading-relaxed mb-6">
                                The UAE's tax environment has changed significantly. Corporate Tax is now in force, VAT compliance is actively enforced by the Federal Tax Authority (FTA), and businesses that get it wrong face real financial and legal consequences.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                If you are looking for reliable tax advisory services in Dubai, Prime Audit Solutions gives you the expertise, the local knowledge, and the hands-on support to stay compliant, reduce your tax burden, and make confident financial decisions.
                            </p>
                            <p className="text-muted leading-relaxed">
                                We work with businesses at every stage — from new companies navigating their first VAT return to established groups managing corporate tax filings, transfer pricing requirements, and cross-border structures. Whatever your size or sector, our advisors bring practical UAE tax expertise to every engagement.
                            </p>
                        </section>

                        {/* What We Cover Section */}
                        <section>
                            <h2 className="text-2xl md:text-4xl font-bold text-primary-dark mb-6">Tax Advisory Services in Dubai — What We Cover</h2>
                            <p className="text-muted mb-8 leading-relaxed">
                                Our practice covers every major tax discipline relevant to businesses operating in the UAE. There are no generalists here — each area is handled by advisors with direct, practitioner-level experience of UAE tax law and FTA procedures.
                            </p>

                            <div className="space-y-10">
                                {/* Corporate Tax Advisory */}
                                <div className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-primary-dark mb-4">Corporate Tax Advisory</h3>
                                    <p className="text-muted mb-4 leading-relaxed">
                                        Since Corporate Tax was introduced at 9% on taxable income above AED 375,000, every business in the UAE has needed to reassess its tax position. We help you register with the FTA, determine taxable income correctly, apply every available exemption and relief, and submit accurate returns by your deadline.
                                    </p>
                                    <p className="text-muted mb-6 leading-relaxed">
                                        We advise on qualifying free zone income conditions, transfer pricing documentation, related-party transaction policies, group tax treatment, and small business relief eligibility. If you are a free zone entity claiming the 0% qualifying income rate, we assess your eligibility, document the position, and ensure it holds up under FTA scrutiny.
                                    </p>
                                    <Link href="/services/tax-advisory" className="text-primary-dark font-bold hover:underline transition-all underline-offset-4">
                                        For full details, see our Corporate Tax Advisory Services in Dubai →
                                    </Link>
                                </div>

                                {/* VAT Advisory */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-primary-dark mb-4">VAT Advisory</h3>
                                    <p className="text-muted mb-4 leading-relaxed">
                                        VAT has been part of the UAE business landscape since 2018, but compliance errors remain one of the most common reasons businesses face FTA penalties.
                                    </p>
                                    <p className="text-muted mb-4 leading-relaxed">
                                        Our advisors handle VAT registration and deregistration, return preparation and filing, input tax recovery, correct classification of exempt and zero-rated supplies, voluntary disclosures, and VAT refund applications.
                                    </p>
                                    <p className="text-muted leading-relaxed">
                                        We also support businesses that have fallen behind on filings and need to regularise their position before the FTA takes action — acting quickly in these situations is always less costly than waiting.
                                    </p>
                                </div>

                                {/* Tax Planning and Business Structuring */}
                                <div className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-primary-dark mb-4">Tax Planning and Business Structuring</h3>
                                    <p className="text-muted mb-4 leading-relaxed">
                                        How your business is structured has a direct impact on your tax position. Our advisors help you understand the tax implications of key decisions — whether that is setting up in a free zone versus the mainland, restructuring ownership, entering a joint venture, or expanding into new markets.
                                    </p>
                                    <p className="text-muted leading-relaxed">
                                        We build strategies that are tax-efficient, commercially practical, and durable as UAE law continues to evolve.
                                    </p>
                                </div>

                                {/* FTA Compliance and Audit Support */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-primary-dark mb-4">FTA Compliance and Audit Support</h3>
                                    <p className="text-muted mb-4 leading-relaxed">
                                        Receiving an FTA audit notice or penalty assessment is stressful. With the right advisors, it is manageable.
                                    </p>
                                    <p className="text-muted leading-relaxed">
                                        We support businesses through audit preparation and representation, voluntary disclosures, penalty reconsideration applications, and formal appeal proceedings. Our team handles FTA correspondence on your behalf and ensures every document is in order before any submission is made.
                                    </p>
                                </div>

                                {/* Tax Health Check */}
                                <div className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-primary-dark mb-4">Tax Health Check</h3>
                                    <p className="text-muted mb-4 leading-relaxed">
                                        Many businesses have never had their tax position independently reviewed. Our tax health check is a structured assessment of your existing filings, financial records, and compliance processes — designed to identify errors, gaps, and missed reliefs before the FTA does.
                                    </p>
                                    <p className="text-muted leading-relaxed">
                                        You receive a clear written report with prioritised recommendations and a practical action plan.
                                    </p>
                                </div>

                                {/* Excise Tax Compliance */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold text-primary-dark mb-4">Excise Tax Compliance</h3>
                                    <p className="text-muted mb-4 leading-relaxed">
                                        If your business imports, produces, or stockpiles tobacco, carbonated beverages, energy drinks, or electronic cigarettes, Excise Tax rules apply.
                                    </p>
                                    <p className="text-muted leading-relaxed">
                                        We manage registration, return preparation, warehousing obligations, and designated zone compliance — keeping your operations on the right side of FTA requirements.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Foundation Section */}
                        <section className="bg-primary/5 rounded-3xl p-8 md:p-10 border border-primary/10 shadow-inner">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Accurate Books Are the Foundation of Tax Compliance</h2>
                            <p className="text-muted mb-4 leading-relaxed">
                                Most tax errors we encounter in practice do not come from a lack of tax knowledge. They come from poorly maintained books, misclassified transactions, and financial records that make correct filing impossible.
                            </p>
                            <p className="text-muted mb-6 leading-relaxed">
                                When your bookkeeping is clean and current, every tax submission — whether a VAT return or a corporate tax filing — becomes straightforward.
                            </p>
                            <p className="text-muted mb-8 leading-relaxed">
                                At Prime Audit Solutions, our tax advisory services are fully integrated with our accounting practice. You do not need to brief multiple firms or reconcile conflicting records. Everything flows from one place.
                            </p>
                            <Link href="/services/bookkeeping-services-dubai" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all font-bold group">
                                Explore our professional Bookkeeping Services in Dubai
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </section>

                        {/* Sharjah Section */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Tax Advisory Services in Sharjah</h2>
                            <p className="text-muted mb-6 leading-relaxed">
                                Businesses operating in Sharjah are subject to the same federal tax obligations as those in Dubai. However, the practical environment is often different — many Sharjah businesses are based in free zones such as SAIF Zone, Hamriyah Free Zone, or Sharjah Media City, each with its own licensing conditions and implications for corporate tax qualifying status.
                            </p>
                            <p className="text-muted mb-8 leading-relaxed">
                                Our tax advisory services in Sharjah are delivered by advisors with direct knowledge of the emirate's business landscape. The service standard is identical to what our Dubai clients receive — proactive, technically precise, and always commercially aware.
                            </p>
                            <Link href="/services/tax-advisory-sharjah" className="text-primary-dark font-bold hover:underline underline-offset-4 transition-all">
                                Learn more about our Tax Advisory Services in Sharjah and how we support Sharjah-based businesses →
                            </Link>
                        </section>

                        {/* Corporate Tax Filing Section */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Corporate Tax Filing in Dubai</h2>
                            <p className="text-muted mb-4 leading-relaxed">
                                Filing your Corporate Tax return is a legal obligation with real financial consequences if handled incorrectly or late.
                            </p>
                            <p className="text-muted mb-4 leading-relaxed">
                                The FTA requires accurate returns based on properly determined taxable income, with all applicable reliefs and adjustments documented in accordance with UAE Corporate Tax law.
                            </p>
                            <p className="text-muted mb-6 leading-relaxed">
                                We manage the entire process — reviewing your financial statements, applying every eligible deduction and relief, preparing the return, and submitting it within the required timeframe.
                            </p>
                            <p className="text-muted mb-8 leading-relaxed">
                                For businesses with errors in prior filings, we also manage voluntary disclosures to correct the position before the FTA acts.
                            </p>
                            <Link href="/services/corporate-tax-filing-dubai" className="text-primary-dark font-bold hover:underline underline-offset-4 transition-all">
                                See how we handle Corporate Tax Filing in Dubai — from assessment to submission →
                            </Link>
                        </section>

                        {/* Why Choose Us Section */}
                        <section className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                            <h2 className="text-2xl md:text-4xl font-bold text-primary-dark mb-8 text-center">Why Businesses in the UAE Choose Prime Audit Solutions</h2>
                            <p className="text-muted mb-12 text-center max-w-3xl mx-auto leading-relaxed text-lg">
                                We have supported hundreds of businesses across Dubai, Sharjah, Abu Dhabi, and the other emirates — from sole traders to large group entities with complex cross-border structures.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-lg font-bold text-primary-dark flex items-center gap-2">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        UAE Tax Law — In Practice, Not Just Theory
                                    </h4>
                                    <p className="text-muted leading-relaxed text-sm">
                                        Our advisors have handled real FTA audits, transfer pricing disputes, and complex voluntary disclosures. We apply practical, tested experience to your situation — not generic templates based on textbook tax law.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-lg font-bold text-primary-dark flex items-center gap-2">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        Proactive by Default
                                    </h4>
                                    <p className="text-muted leading-relaxed text-sm">
                                        We monitor FTA announcements, legislative updates, and upcoming deadlines on your behalf. You are informed before issues arise, not after penalties land.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-lg font-bold text-primary-dark flex items-center gap-2">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        One Dedicated Advisor for Your Business
                                    </h4>
                                    <p className="text-muted leading-relaxed text-sm">
                                        You will always deal with a named advisor who knows your business, your history, and your industry. There is no re-briefing, no rotating team, and no lost context between calls.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-lg font-bold text-primary-dark flex items-center gap-2">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        Full Compliance Under One Roof
                                    </h4>
                                    <p className="text-muted leading-relaxed text-sm">
                                        Bookkeeping, VAT, corporate tax, audit support — all handled by one firm. Your records, filings, and financial statements stay aligned, and there are no gaps between advisors.
                                    </p>
                                </div>
                                <div className="md:col-span-2 space-y-4 pt-6 border-t border-gray-100">
                                    <h4 className="text-lg font-bold text-primary-dark flex items-center gap-2">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        Serving Businesses Across All Seven Emirates
                                    </h4>
                                    <p className="text-muted leading-relaxed text-sm">
                                        We are active in Dubai, Sharjah, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Wherever your business is based, you get the same level of expertise.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section className="mt-20">
                            <h2 className="text-2xl md:text-4xl font-bold text-primary-dark mb-10 text-center">Tax Advisory Services in Dubai — Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        q: "Which businesses need tax advisory services in the UAE?",
                                        a: "Any business subject to Corporate Tax, VAT, or Excise Tax should have access to professional tax advice — including mainland companies, free zone entities, branches of foreign firms, and businesses with cross-border transactions or group structures.\n\nEven businesses that are currently compliant benefit from advisory to ensure they are not overpaying or missing available reliefs."
                                    },
                                    {
                                        q: "What is the UAE Corporate Tax rate?",
                                        a: "The UAE applies 0% on taxable income up to AED 375,000 and 9% on income above that threshold.\n\nQualifying Free Zone Persons may be eligible for 0% on qualifying income, subject to meeting specific conditions under UAE law.\n\nOur advisors assess your exact rate and structure your position accordingly."
                                    },
                                    {
                                        q: "When must a business register for Corporate Tax?",
                                        a: "All businesses subject to UAE Corporate Tax must register with the FTA before their first tax return is due. The deadline is tied to your financial year-end.\n\nWe advise on your specific registration deadline and manage the full process on your behalf."
                                    },
                                    {
                                        q: "Can a free zone company qualify for 0% Corporate Tax?",
                                        a: "Yes — but only if the entity qualifies as a Qualifying Free Zone Person and the income in question meets the UAE's definition of qualifying income. The conditions are specific and require active management.\n\nWe assess your eligibility, advise on maintaining QFZP status, and ensure the documentation is in place to support the position."
                                    },
                                    {
                                        q: "What should we do if we receive an FTA audit notice or penalty?",
                                        a: "Do not respond without professional guidance. Many FTA findings and penalties can be reduced or successfully challenged through properly prepared reconsideration requests or appeals.\n\nWe advise on the right response strategy from the outset, prepare all required documentation, and represent your business throughout the process."
                                    },
                                    {
                                        q: "Do you provide tax advisory services in Sharjah?",
                                        a: "Yes. Our Sharjah advisors serve businesses across the emirate, including those in SAIF Zone, Hamriyah Free Zone, Shams, and mainland Sharjah. The federal tax framework applies equally in Sharjah, and our service standard is the same as in Dubai."
                                    },
                                    {
                                        q: "How does bookkeeping affect tax compliance?",
                                        a: "Accurate tax filings depend entirely on accurate financial records. Poorly maintained books are the root cause of most VAT and Corporate Tax errors we see in practice.\n\nOur integrated bookkeeping and tax advisory services ensure your records and filings are always aligned, making compliance reliable rather than stressful."
                                    }
                                ].map((faq, index) => (
                                    <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                        <div className="p-6 md:p-8">
                                            <h3 className="text-lg font-bold text-primary-dark mb-4">{faq.q}</h3>
                                            <div className="text-muted text-sm md:text-base leading-relaxed whitespace-pre-line">
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Related Services */}
                        <section className="bg-surface rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Related Services from Prime Audit Solutions</h2>
                            <p className="text-muted mb-8 leading-relaxed">
                                If you are exploring tax advisory, these related services may also be relevant to your business:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Link href="/services/tax-advisory" className="flex flex-col p-6 bg-white rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                                    <span className="font-bold text-primary-dark group-hover:text-primary mb-2 transition-colors">Corporate Tax Advisory Services</span>
                                    <span className="text-sm text-muted">Strategic corporate tax planning and guidance for UAE businesses</span>
                                </Link>
                                <Link href="/services/corporate-tax-filing-dubai" className="flex flex-col p-6 bg-white rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                                    <span className="font-bold text-primary-dark group-hover:text-primary mb-2 transition-colors">Corporate Tax Filing in Dubai</span>
                                    <span className="text-sm text-muted">End-to-end corporate tax return preparation and FTA submission</span>
                                </Link>
                                <Link href="/services/tax-advisory-sharjah" className="flex flex-col p-6 bg-white rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                                    <span className="font-bold text-primary-dark group-hover:text-primary mb-2 transition-colors">Tax Advisory Services in Sharjah</span>
                                    <span className="text-sm text-muted">Localised tax advisory for businesses operating in Sharjah</span>
                                </Link>
                                <Link href="/services/bookkeeping-services-dubai" className="flex flex-col p-6 bg-white rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-all group">
                                    <span className="font-bold text-primary-dark group-hover:text-primary mb-2 transition-colors">Bookkeeping Services in Dubai</span>
                                    <span className="text-sm text-muted">Accurate, compliant bookkeeping as the foundation for tax compliance</span>
                                </Link>
                            </div>
                        </section>

                        {/* Final CTA Section */}
                        <section className="bg-primary-dark text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110" />
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-extrabold mb-8">Get Expert Tax Advisory Services in Dubai Today</h2>
                                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                                    Whether you need to register for Corporate Tax, resolve a VAT compliance issue, prepare for an FTA audit, or review your overall tax structure, Prime Audit Solutions has the experience and the people to help.
                                </p>
                                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                                    We serve businesses across Dubai, Sharjah, and the wider UAE — with practical expertise, clear communication, and a commitment to getting every detail right.
                                </p>
                                <p className="text-white font-bold mb-10 text-xl leading-relaxed">
                                    Contact us today for a free initial consultation. We will assess your current tax position, identify any risks or opportunities, and recommend a clear plan of action — with no obligation.
                                </p>
                                <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-primary text-white rounded-full shadow-lg hover:bg-primary-light transition-all font-bold text-lg group">
                                    Book Your Free Consultation
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </section>

                    </article>

                    {/* Right column — aside */}
                    <aside className="space-y-6">
                        <div className="sticky top-24 bg-white rounded-xl shadow p-6 border border-gray-100">
                            <h4 className="font-semibold text-lg text-primary-dark mb-4">Quick Summary</h4>
                            <ul className="space-y-3 text-sm text-muted">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Service</span>
                                    <span>Tax Advisory</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai & Sharjah</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Specialization</span>
                                    <span>FTA Compliance</span>
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

                        <div className="bg-surface rounded-xl p-5 border border-gray-100 shadow-sm">
                            <h5 className="font-semibold text-primary-dark mb-3">Key Tax Areas</h5>
                            <ul className="space-y-2 text-sm text-muted list-disc pl-4">
                                <li>Corporate Tax Advisory</li>
                                <li>VAT Compliance</li>
                                <li>FTA Audit Representation</li>
                                <li>Tax Planning</li>
                                <li>Excise Tax</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5 border border-primary/10">
                            <h5 className="font-semibold text-primary-dark">Free Consultation</h5>
                            <p className="text-sm text-muted mt-2">Assess your tax position with a professional advisor today.</p>
                            <Link href="/contact" className="mt-4 inline-block px-4 py-2 bg-primary-dark text-white text-sm rounded hover:opacity-90 transition-opacity">Book now</Link>
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
