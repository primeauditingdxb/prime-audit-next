import Breadcrumbs from '@/app/components/Breadcrumbs'
import CTA from '@/app/components/CTA'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Bookkeeping & Accounting Services in Dubai & Sharjah for Businesses',
    description: 'Professional accounting services in Dubai and Sharjah including bookkeeping, accounting software support, and financial compliance for all businesses.',
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
                            Accounting Services in Dubai & Sharjah for Accurate, Compliant, and Scalable Businesses
                        </h1>
                        <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-lg">
                            Professional accounting and bookkeeping services designed specifically for UAE businesses.
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
                                Accounting services in Dubai have evolved far beyond basic transaction recording in the UAE's rapidly changing regulatory environment. With the introduction of VAT, corporate tax, and stricter financial reporting standards, businesses now require strong compliance, financial control, clear visibility, and long-term sustainability to operate successfully.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                At Prime Audit Solutions, we deliver end-to-end accounting and bookkeeping services Dubai businesses can rely on. Our solutions are fully aligned with UAE regulations and designed to support startups, SMEs, and established enterprises with accurate records, timely reporting, and audit-ready financial systems.
                            </p>
                            <p className="text-muted leading-relaxed">
                                We help business owners move from uncertainty to clarity by implementing reliable accounting frameworks that withstand audits, tax reviews, and strategic decision-making allowing you to focus on growth while we manage financial accuracy and compliance.
                            </p>
                        </section>

                        {/* Why Essential */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Professional Accounting Services Are Essential in the UAE</h2>
                            <p className="text-muted mb-4">
                                Accounting services in Dubai are essential for businesses operating under the UAE's structured legal and financial framework, where regulators, banks, investors, and auditors rely heavily on accurate and transparent financial data. Proper accounting is no longer optionalit is a core compliance and risk-management requirement.
                            </p>
                            <p className="text-muted mb-4">
                                Professional bookkeeping services Dubai help businesses comply with the UAE Commercial Companies Law, meet VAT and corporate tax obligations, maintain accurate books of accounts, improve cash flow management, and avoid penalties or regulatory issues. Well-maintained records also make audits and financial reviews smoother and more efficient.
                            </p>
                            <p className="text-muted">
                                Using reliable bookkeeping and accounting software further strengthens financial control by enabling accurate tracking, clear audit trails, and real-time reporting. Businesses that adopt the best bookkeeping software are better prepared for audits, tax filings, and bank financing, while those managing accounting internally without expertise often face delays, errors, and compliance challenges.
                            </p>
                        </section>

                        {/* Accounting Services in Dubai */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Accounting Services in Dubai for Startups, SMEs & Corporates</h2>
                            <p className="text-muted mb-6">
                                Our accounting services in Dubai are designed to support businesses at every stage of growth from early-stage startups to established SMEs and large corporates. We focus on financial accuracy, regulatory compliance, and clear reporting to help businesses operate with confidence in the UAE market.
                            </p>
                            
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Daily and monthly bookkeeping services Dubai</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">General ledger maintenance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Accounts payable and receivable management</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Bank and credit card reconciliation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">VAT accounting and reporting</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Monthly, quarterly, and annual financial statements</span>
                                </li>
                            </ul>
                            
                            <p className="text-muted mt-6">
                                All services are delivered by experienced accountants with in-depth knowledge of UAE regulations and industry-specific requirements. Our structured accounting processes ensure your records are accurate, up to date, and audit-ready.
                            </p>
                            <p className="text-muted mt-4">
                                Clean and reliable accounting records also form the foundation for effective Corporate Tax Advisory Services, as accurate tax calculations and compliant filings depend on well-maintained financial data.
                            </p>
                        </section>

                        {/* Bookkeeping Services */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Bookkeeping Services in Dubai That Eliminate Financial Guesswork</h2>
                            <p className="text-muted mb-4">
                                Accurate bookkeeping is the backbone of effective financial management. Our professional Bookkeeping Services Dubai ensure every transaction is recorded correctly, supported by proper documentation, and maintained in line with UAE compliance requirements.
                            </p>
                            <p className="text-muted mb-4">
                                Poor or inconsistent bookkeeping often results in incorrect VAT returns, cash flow mismatches, audit qualifications, and tax compliance issues. By using reliable bookkeeping and accounting software, we help businesses maintain real-time accuracy, clear audit trails, and better financial control. We also guide clients in selecting the best bookkeeping software suited to their business size and industry.
                            </p>
                            <p className="text-muted">
                                In addition to Dubai, we provide integrated accounting services in Sharjah and complete bookkeeping and accounting services in Sharjah, ensuring businesses across both emirates benefit from compliant, transparent, and well-structured financial records throughout the year.
                            </p>
                        </section>

                        {/* Best Bookkeeping Software */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Using the Best Bookkeeping Software for UAE Compliance</h2>
                            <p className="text-muted mb-4">
                                Modern accounting requires modern tools. To support regulatory accuracy and efficiency, we use the best bookkeeping software and advanced cloud-based bookkeeping and accounting software that fully comply with UAE financial and tax requirements.
                            </p>
                            <p className="text-muted mb-4">
                                Professional accounting software provides real-time financial visibility, reduces manual errors, ensures secure cloud-based data access, automates VAT calculations, and offers scalable systems that grow with your business. These tools play a key role in maintaining compliance and improving day-to-day financial control.
                            </p>
                            <p className="text-muted">
                                Businesses using our accounting services in Sharjah and complete bookkeeping and accounting services in Sharjah also receive support in selecting, implementing, and optimizing the right software for their operational needs. Our technology-driven accounting approach works seamlessly with <a href="/services/tax-advisory" className='underline'>Corporate Tax Advisory Services</a>, ensuring accurate tax calculations, compliant filings, and audit-ready financial records.
                            </p>
                        </section>

                        {/* Accounting Services in Sharjah */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Accounting Services in Sharjah with Local Expertise</h2>
                            <p className="text-muted mb-4">
                                Accounting services in Sharjah require a clear understanding of both mainland and free zone regulations. Our services are tailored to meet these local requirements while remaining fully compliant with UAE federal laws. We support businesses with accurate reporting, structured records, and regulatory-ready financial systems.
                            </p>
                            <p className="text-muted mb-4">
                                We provide specialized bookkeeping and accounting services in Sharjah for trading companies, manufacturing units, service providers, and family-owned businesses. Our Sharjah-focused approach helps businesses maintain financial clarity, control cash flow, and meet authority expectations without operational stress.
                            </p>
                            <p className="text-muted">
                                In addition to Sharjah, our accounting services in Dubai ensure consistency for businesses operating across multiple emirates. Well-maintained accounting records also support smoother audits and compliance reviews, especially when working with trusted <a href="/services/audit-services" className='underline'>audit firms in dubai</a>.
                            </p>
                        </section>

                        {/* VAT Accounting */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">VAT Accounting & Compliance Support</h2>
                            <p className="text-muted">
                                Our VAT accounting support ensures correct VAT registration, accurate calculations, timely return filing, and proper documentation helping businesses stay compliant while avoiding penalties and audit issues.
                            </p>
                        </section>

                        {/* Benefits */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Benefits of Professional Accounting Services</h2>
                            <p className="text-muted mb-4">
                                Using expert accounting services in Sharjah and Dubai provides businesses with the financial clarity and regulatory confidence needed to operate smoothly in the UAE. These services go beyond basic record-keeping and support long-term compliance and growth.
                            </p>
                            <p className="text-muted mb-4">
                                Professional accounting services in Dubai help businesses maintain accurate books, meet VAT and corporate tax requirements, and avoid costly penalties. With structured reporting and real-time financial visibility, management can make informed decisions with confidence.
                            </p>
                            <p className="text-muted">
                                Reliable bookkeeping and accounting services in Sharjah improve cash flow management, strengthen internal controls, and ensure records are audit-ready at all times. By outsourcing accounting to experienced professionals, businesses reduce operational risk, save time, and focus on scaling their operations while staying fully compliant with UAE regulations.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Accounting Services – Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Why are professional accounting services in Sharjah important?</h3>
                                    <p className="text-sm text-muted">Professional accounting services in Sharjah help businesses comply with local mainland and free zone regulations while meeting UAE federal accounting and tax requirements.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do you provide accounting services in Dubai as well?</h3>
                                    <p className="text-sm text-muted">Yes, we offer accounting services in Dubai and Sharjah, supporting businesses operating across multiple emirates with consistent and compliant financial reporting.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">What businesses can use bookkeeping and accounting services in Sharjah?</h3>
                                    <p className="text-sm text-muted">Trading companies, manufacturers, service providers, and family-owned businesses can all benefit from structured bookkeeping and accounting services in Sharjah.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">How do accounting services support VAT compliance?</h3>
                                    <p className="text-sm text-muted">Accounting services ensure accurate VAT calculations, proper documentation, and timely VAT return filing in line with UAE regulations.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can accounting services help with audits?</h3>
                                    <p className="text-sm text-muted">Yes, well-maintained accounting records make audits smoother and support compliance when working with approved audit firms.</p>
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
                                    <span>Accounting & Bookkeeping</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Location</span>
                                    <span>Dubai & Sharjah</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span className="font-medium text-gray-700">Frequency</span>
                                    <span>Daily, Monthly, Quarterly</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="font-medium text-gray-700">Ideal For</span>
                                    <span>Startups, SMEs, Corporates</span>
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
                                <li>Startups setting up systems</li>
                                <li>SMEs needing compliance</li>
                                <li>Growing businesses</li>
                                <li>Companies optimizing taxes</li>
                            </ul>
                        </div>

                        <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5">
                            <h5 className="font-semibold text-primary-dark">Have questions?</h5>
                            <p className="text-sm text-muted mt-2">Reach out to our experts for tailored advice on your accounting requirements.</p>
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
