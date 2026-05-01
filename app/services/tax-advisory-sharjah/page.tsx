import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tax Advisory Services in Sharjah | Corporate Tax Compliance for Sharjah',
    description: 'Corporate tax advisory services in Sharjah. Expert guidance on FTA compliance for free zone & mainland entities. Prime Audit Solutions LLC.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/tax-advisory-sharjah'
    }
}

export default function TaxAdvisorySharjahPage() {
    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative h-[420px] md:h-[520px] flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.7), rgba(2,6,23,0.8)), url('/images/tax_advisory_sharjah_card.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b' // Fallback color
                }}
            >
                <div className="container mx-auto px-4 relative z-10">
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Tax Advisory Services in Sharjah' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Tax Advisory Services in Sharjah
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Expert corporate tax advisory for Sharjah mainland and free zone businesses. FTA compliance, QFZP eligibility, VAT advisory, and EmaraTax support.
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
                                Sharjah businesses — whether on the mainland or operating from one of the emirate&apos;s thriving free zones — face the same federal corporate tax obligations as any other UAE entity, but with important emirate-specific nuances that a generic UAE tax advisor may overlook.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                From Sharjah free zone tax exemption eligibility to the specific VAT treatment of cross-emirate transactions, Prime Audit Solutions LLC provides specialist tax advisory services in Sharjah that are grounded in both federal UAE tax law and the on-the-ground realities of doing business in the emirate.
                            </p>
                        </section>

                        {/* Corporate Tax in Sharjah */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Corporate Tax in Sharjah — What You Need to Know</h2>
                            <p className="text-muted mb-4">
                                UAE corporate tax is a federal law that applies equally in Sharjah, Dubai, Abu Dhabi, and every other emirate. There is no &apos;Sharjah corporate tax exemption&apos; for mainland businesses — all covered entities with taxable profits above AED 375,000 pay the 9% rate.
                            </p>
                            <p className="text-muted">
                                However, free zone entities in Sharjah (such as SHAMS, SAIF Zone, HFZA, and SRTIP licensees) may qualify for the Qualifying Free Zone Person (QFZP) regime, which allows a 0% rate on qualifying income — provided they meet strict substance, income, and compliance tests.
                            </p>
                        </section>

                        {/* Tax Advisory for Free Zone Businesses */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Tax Advisory for Sharjah Free Zone Businesses</h2>
                            <p className="text-muted mb-4">
                                The QFZP regime is one of the most significant tax planning opportunities for UAE free zone businesses — but it requires careful analysis. Our advisors assess whether your Sharjah free zone entity qualifies for the 0% rate based on your specific activities, income sources, and substance in the UAE.
                            </p>
                            <p className="text-muted">
                                Where QFZP status is achievable, we guide you through the required structuring, documentation, and ongoing compliance obligations. Where it is not achievable or advisable, we develop an alternative tax-efficient strategy tailored to your business model.
                            </p>
                        </section>

                        {/* Our Tax Advisory Services */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Tax Advisory Services for Sharjah Businesses</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Sharjah Tax Advisory Services</h3>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Corporate tax registration and FTA EmaraTax setup for Sharjah entities</li>
                                <li>QFZP eligibility assessment for SHAMS, SAIF Zone, HFZA, and SRTIP companies</li>
                                <li>Taxable income computation and deduction strategy</li>
                                <li>VAT advisory for cross-emirate transactions (Sharjah to Dubai and beyond)</li>
                                <li>Transfer pricing documentation for related-party transactions</li>
                                <li>Tax structuring advice for new Sharjah business setups</li>
                                <li>Corporate tax health-check reviews for existing Sharjah businesses</li>
                                <li>Voluntary disclosure preparation and FTA penalty mitigation</li>
                                <li>Annual CT return preparation and EmaraTax submission</li>
                            </ul>
                        </section>

                        {/* VAT Advisory */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">VAT Advisory in Sharjah — Getting the Nuances Right</h2>
                            <p className="text-muted mb-4">
                                VAT applies uniformly across the UAE at 5%, but Sharjah businesses frequently encounter VAT complexities in areas such as: supplies between Sharjah mainland and free zone entities, the zero-rating of goods exported from Sharjah industrial zones, VAT on cross-border services with clients in other GCC states, and the VAT status of particular industrial or manufacturing activities.
                            </p>
                            <p className="text-muted">
                                Our VAT advisory team provides specific guidance on how these situations affect your quarterly FTA return and your overall VAT liability.
                            </p>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Sharjah Businesses Choose Prime Audit Solutions for Tax Advisory</h2>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Sharjah Tax Advisory Differentiators</h3>
                            <ul className="space-y-2 text-muted list-disc pl-5 mb-4">
                                <li>Specific experience advising SHAMS, SAIF Zone, HFZA, and SRTIP entities on QFZP eligibility</li>
                                <li>ACCA and CA qualified tax advisors with UAE FTA regulation expertise</li>
                                <li>Integrated advisory and filing service — strategy and execution in one team</li>
                                <li>Fixed-fee advisory engagements with no hourly billing surprises</li>
                                <li>Sharjah-specific knowledge of cross-emirate transaction VAT rules</li>
                                <li>Proactive deadline management — we track your FTA obligations so you never miss them</li>
                            </ul>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Does my SHAMS company need to pay corporate tax?</h3>
                                    <p className="text-sm text-muted">SHAMS (Sharjah Media City) entities may qualify for the QFZP regime&apos;s 0% rate on qualifying income if they meet the conditions set by the UAE Corporate Tax Law — including having adequate substance in the UAE, earning income only from qualifying activities with non-UAE persons or other QFZPs, and maintaining compliant financial records. Our advisors will assess your specific situation and provide a clear, written recommendation.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Is VAT advisory in Sharjah different from Dubai?</h3>
                                    <p className="text-sm text-muted">The VAT law is identical across the UAE. However, the practical application differs based on your business activities, the nature of your customers and suppliers, and whether you are operating on the mainland or in a designated zone. Sharjah-specific factors — particularly related to its industrial free zones and manufacturing base — create VAT scenarios that require specific knowledge to navigate correctly.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Book a Sharjah Tax Advisory Consultation</h2>
                            <p className="text-muted mb-4">Whether you are assessing your QFZP eligibility, planning a new Sharjah entity, or reviewing your existing tax position, our advisors provide clear, actionable guidance.</p>
                            <p className="text-muted mb-4">
                                Contact Prime Audit Solutions LLC for a free 30-minute initial consultation. You may also find our{' '}
                                <Link href="/services/tax-advisory" className="underline">Corporate Tax Advisory Services in Dubai</Link>,{' '}
                                <Link href="/services/corporate-tax-filing-dubai" className="underline">Corporate Tax Filing in Dubai</Link>, and{' '}
                                <Link href="/services/audit-firms-sharjah" className="underline">Audit Firms in Sharjah</Link> pages helpful.
                            </p>
                        </div>

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
                                    <span>Sharjah &amp; UAE</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Frequency</span>
                                    <span>Ongoing Support</span>
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
                                <li>SHAMS &amp; SAIF Zone entities</li>
                                <li>Mainland Sharjah companies</li>
                                <li>HFZA &amp; SRTIP licensees</li>
                                <li>New Sharjah business setups</li>
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
                            <h5 className="font-semibold text-primary-dark">Assessing QFZP eligibility?</h5>
                            <p className="text-sm text-muted mt-2">Speak with our Sharjah tax advisors for a clear, written assessment of your free zone tax position and compliance obligations.</p>
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
