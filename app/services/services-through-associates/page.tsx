import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Services Through Associates in the UAE | Prime Audit Solutions',
    description: 'Services through associates allow companies to access a broader range of professional solutions through trusted networks while maintaining consistency, compliance, and quality.',
    alternates: {
        canonical: 'https://primeauditsolutions.com/services/services-through-associates'
    }
}

export default function ServicesThroughAssociatesPage() {
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
                    <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: 'Services Through Associates' }]} />
                    <div className="max-w-4xl mt-8 text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            Services Through Associates in the UAE
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            In today’s complex regulatory and commercial environment, businesses often require specialized expertise beyond standard accounting or audit services.
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
                                Services through associates allow companies to access a broader range of professional solutions through trusted networks while maintaining consistency, compliance, and quality.
                            </p>
                            <p className="text-muted leading-relaxed">
                                At Prime Audit Solutions, our services through associates are designed to support businesses in Dubai and across the UAE by connecting them with carefully selected professional firms. These associates operate under strict quality standards and regulatory frameworks, ensuring businesses receive reliable, compliant, and industry-aligned support without the burden of managing multiple service providers independently.
                            </p>
                        </section>

                        {/* Why Services Through Associates Are Important */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Services Through Associates Are Important for UAE Businesses</h2>
                            <p className="text-muted mb-4">
                                The UAE’s regulatory landscape continues to evolve with new compliance requirements, sector-specific regulations, and increased scrutiny from authorities. Businesses often need specialized support in areas such as financial planning, audits, taxation, and systems implementation. Services through associates provide access to niche expertise while maintaining a centralized, coordinated approach.
                            </p>
                            <p className="text-muted mb-4">
                                By leveraging professional associates, businesses benefit from deeper technical knowledge, faster execution, and reduced compliance risk. This model ensures that complex requirements are handled by specialists while Prime Audit Solutions oversees coordination, quality control, and regulatory alignment.
                            </p>
                            <p className="text-muted">
                                Reliable financial data generated through structured accounting also strengthens planning initiatives such as <a href="/services/reporting">budgeting and forecasting</a> , enabling businesses to make informed decisions supported by accurate and timely insights.
                            </p>
                        </section>

                        {/* Scope of Services */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Scope of Services Through Associates</h2>
                            <p className="text-muted mb-6">
                                Our services through associates cover a wide range of professional and advisory solutions required by businesses operating in the UAE. These services are delivered by qualified professionals with proven industry experience and deep knowledge of local regulations.
                            </p>
                            <p className="text-muted mb-4">
                                Through our associate network, we support businesses with:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 text-muted mb-6">
                                <li>Specialized accounting and financial reporting support</li>
                                <li>Audit coordination and regulatory compliance services</li>
                                <li>Tax structuring and advisory solutions</li>
                                <li>Financial system implementation and optimization</li>
                                <li>Business advisory and compliance support</li>
                            </ul>
                            <p className="text-muted">
                                Each service is delivered under defined engagement standards to ensure consistency, confidentiality, and regulatory compliance.
                            </p>
                        </section>

                        {/* Technology-Driven Support */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Technology-Driven Support Through Professional Associates</h2>
                            <p className="text-muted mb-4">
                                Modern financial and compliance services rely heavily on technology. Through our associate network, we help businesses select, implement, and optimize the <a href="/services/accounting-services">best bookkeeping software </a> and accounting systems suited to their operational needs.</p>
                            <p className="text-muted">
                                The right software enables real-time financial visibility, secure data access, automated reporting, and strong audit trails. When supported by professional associates, businesses benefit from accurate system setup, proper configuration, and ongoing optimization aligned with UAE compliance requirements.
                            </p>
                        </section>

                        {/* Audit Coordination */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Audit Coordination Through Trusted Associates</h2>
                            <p className="text-muted mb-4">
                                Audit readiness is a critical requirement for many businesses operating in the UAE. Through our services through associates, we coordinate audit engagements with approved <a href="/services/audit-services">audit firms in Dubai</a>, ensuring smooth communication, accurate documentation, and timely completion of audits.
                            </p>
                            <p className="text-muted">
                                Our structured approach reduces audit disruptions, minimizes queries, and ensures that financial records meet regulatory and professional standards. This coordinated audit support is especially valuable for businesses dealing with statutory audits, internal audits, or regulatory reviews.
                            </p>
                        </section>

                        {/* Tax Support */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Tax Support Through Associate-Led Advisory Services</h2>
                            <p className="text-muted mb-4">
                                Tax compliance in the UAE requires accurate data, proper interpretation of regulations, and timely filings. Through our associate network, we provide access to professional <a href="/services/tax-advisory"> Tax Advisory Services</a> that support VAT compliance, corporate tax planning, and regulatory filings.
                            </p>
                            <p className="text-muted">
                                By integrating accounting accuracy with tax expertise, our services through associates help businesses reduce tax risks, avoid penalties, and maintain full compliance with UAE tax laws. This coordinated approach ensures tax decisions are based on reliable financial information and regulatory best practices.
                            </p>
                        </section>

                        {/* Benefits */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Benefits of Using Services Through Associates</h2>
                            <p className="text-muted mb-4">
                                Choosing services through associates offers businesses significant operational and compliance advantages, including:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 text-muted mb-6">
                                <li>Access to specialized professional expertise</li>
                                <li>Consistent quality and regulatory alignment</li>
                                <li>Reduced compliance and operational risk</li>
                                <li>Streamlined coordination through a single point of contact</li>
                                <li>Faster execution of complex assignments</li>
                                <li>Improved confidence in audits, tax filings, and financial reviews</li>
                            </ul>
                            <p className="text-muted">
                                By working through a trusted associate network, businesses can focus on growth while ensuring critical functions are handled by qualified professionals.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Services Through Associates – Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">1. What are services through associates?</h3>
                                    <p className="text-sm text-muted">Services through associates involve delivering specialized professional solutions through trusted partner firms while maintaining coordination, quality control, and regulatory compliance.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">2. Why should businesses use services through associates in the UAE?</h3>
                                    <p className="text-sm text-muted">This approach allows businesses to access expert knowledge for complex requirements while reducing compliance risk and operational burden.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">3. Do you manage coordination with associate firms?</h3>
                                    <p className="text-sm text-muted">Yes, Prime Audit Solutions oversees coordination, communication, and service quality to ensure consistency and regulatory alignment.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">4. Are services through associates compliant with UAE regulations?</h3>
                                    <p className="text-sm text-muted">Yes, all associate services are delivered in line with UAE regulatory requirements and professional standards.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">5. Can services through associates support audits and tax compliance?</h3>
                                    <p className="text-sm text-muted">Absolutely. Our associate network includes audit and tax professionals who support compliant audits, accurate filings, and regulatory readiness.</p>
                                </div>
                            </div>
                        </div>

                    </article>

                    {/* Right column — aside */}
                    <aside className="space-y-6">
                        <div className="sticky top-24 bg-white rounded-xl shadow p-6 border border-gray-100">
                            <h4 className="font-semibold text-lg text-primary-dark mb-4">Quick Summary</h4>
                            <ul className="space-y-3 text-sm text-muted">
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Service</span>
                                    <span>Services Through Associates</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai & UAE</span>
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
                                <li>Startups & SMEs</li>
                                <li>Mainland companies</li>
                                <li>Free zone entities</li>
                                <li>Growing businesses</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our team at Prime Audit Solutions for more information.</p>
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
