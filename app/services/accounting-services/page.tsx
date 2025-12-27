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
                                In the UAE's rapidly evolving regulatory environment, accounting is no longer just about recording transactions. It is about compliance, control, visibility, and long-term sustainability. With the introduction of VAT, corporate tax, and stricter financial reporting expectations, professional Accounting Services in Dubai and Sharjah have become a critical business requirement.
                            </p>
                            <p className="text-muted leading-relaxed mb-6">
                                At Prime Audit Solutions, we provide end-to-end accounting and bookkeeping services designed specifically for UAE businesses. Our solutions are practical, regulation-aligned, and built to support growth whether you're a startup, SME, or an established enterprise.
                            </p>
                            <p className="text-muted leading-relaxed">
                                We help business owners move from uncertainty to clarity by delivering reliable accounting systems that stand up to audits, tax reviews, and strategic decision-making.
                            </p>
                        </section>

                        {/* Why Essential */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Why Professional Accounting Services Are Essential in the UAE</h2>
                            <p className="text-muted mb-4">
                                UAE businesses operate under a structured legal and financial framework that requires proper maintenance of accounting records. Regulatory authorities, banks, investors, and auditors all rely on accurate financial data.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Professional accounting services help businesses:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Comply with UAE Commercial Companies Law</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Meet VAT and corporate tax requirements</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Maintain accurate books of accounts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improve cash flow management</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Avoid penalties and regulatory issues</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Support audits and financial reviews</span>
                                </li>
                            </ul>
                            <p className="text-muted text-sm mt-4 italic">
                                Businesses that attempt to manage accounting internally without expertise often face issues during Audit Services, tax filing, or bank financing.
                            </p>
                        </section>

                        {/* Accounting Services in Dubai */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Accounting Services in Dubai for Startups, SMEs & Corporates</h2>
                            <p className="text-muted mb-6">
                                Our Accounting Services in Dubai are designed to support businesses at every stage of growth. From early-stage startups to established companies, we ensure financial accuracy and compliance.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Core Accounting Services We Provide</h3>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Daily and monthly bookkeeping</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">General ledger maintenance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Accounts payable and receivable</span>
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
                                Each service is delivered by experienced accountants who understand UAE regulations and industry-specific requirements.
                            </p>
                            <p className="text-muted mt-4">
                                Clean accounting records also form the foundation for accurate <a href="/services/tax-advisory" className='underline'>Corporate Tax Advisory Services</a>, as tax calculations depend on reliable financial data.
                            </p>
                        </section>

                        {/* Bookkeeping Services */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Bookkeeping Services in Dubai That Eliminate Financial Guesswork</h2>
                            <p className="text-muted mb-4">
                                Accurate bookkeeping is the backbone of effective financial management. Our professional Bookkeeping Services Dubai ensure that every transaction is recorded correctly and supported by proper documentation.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Poor bookkeeping often leads to:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Incorrect VAT returns</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Cash flow mismatches</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Audit qualifications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Tax compliance issues</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Our bookkeeping services help businesses maintain transparency and financial discipline throughout the year.
                            </p>
                        </section>

                        {/* Best Bookkeeping Software */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Using the Best Bookkeeping Software for UAE Compliance</h2>
                            <p className="text-muted mb-4">
                                Modern accounting requires modern tools. We use the Best Bookkeeping Software and advanced cloud-based <a href="https://primeauditsolutions.com/services/accounting-services" className='underline'>Bookkeeping and Accounting Software</a> that comply with UAE regulatory requirements.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Benefits of Professional Accounting Software</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Real-time financial visibility</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Reduced manual errors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Secure cloud-based data access</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Automated VAT calculations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Scalable systems for business growth</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                We also assist businesses in selecting, implementing, and optimizing accounting software based on their operational needs.
                            </p>
                        </section>

                        {/* Accounting Services in Sharjah */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Accounting Services in Sharjah with Local Expertise</h2>
                            <p className="text-muted mb-4">
                                Sharjah businesses operate under distinct mainland and free zone regulations. Our Accounting Services in Sharjah are customized to meet these requirements while maintaining compliance with federal laws.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">We also provide specialized Bookkeeping and Accounting Services in Sharjah for:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Trading companies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Manufacturing units</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Service providers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Family-owned businesses</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Our Sharjah-focused accounting services help businesses maintain financial clarity while meeting regulatory expectations.
                            </p>
                        </section>

                        {/* VAT Accounting */}
                        <section className="bg-surface rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">VAT Accounting & Compliance Support</h2>
                            <p className="text-muted mb-4">
                                VAT compliance is a critical component of accounting in the UAE. Errors in VAT accounting can result in penalties and audits.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Our VAT-related accounting services include:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">VAT transaction recording</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">VAT reconciliation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">VAT return preparation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Support during VAT audits</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Accurate VAT accounting also supports smoother <a href="/services/tax-advisory" className='underline'>Tax Advisory Services</a>, as VAT data often impacts corporate tax calculations.
                            </p>
                        </section>

                        {/* Outsourced vs In-House */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Outsourced Accounting vs In-House Accounting</h2>
                            <p className="text-muted mb-4">
                                Many UAE businesses choose to outsource accounting rather than maintain an in-house team.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Benefits of Outsourced Accounting Services</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Lower operational costs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Access to experienced professionals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Reduced compliance risk</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Scalable service models</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">No dependency on individual staff members</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                Outsourced accounting allows business owners to focus on growth while professionals handle financial accuracy.
                            </p>
                        </section>

                        {/* Audit Readiness */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Accounting That Supports Audit Readiness</h2>
                            <p className="text-muted">
                                One of the most common challenges businesses face during audits is incomplete or inaccurate financial records. Our accounting services ensure that your books are always audit-ready.
                            </p>
                            <p className="text-muted mt-4">
                                Businesses with structured accounting systems experience smoother Audit Services, fewer audit observations, and faster completion timelines.
                            </p>
                        </section>

                        {/* Corporate Tax Compliance */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Role of Accounting in Corporate Tax Compliance</h2>
                            <p className="text-muted mb-4">
                                Corporate tax compliance relies heavily on accurate accounting data. Misclassified expenses, missing records, or incorrect income recognition can lead to incorrect tax filings.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Our accounting services ensure:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Accurate taxable income calculations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Proper expense classification</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Clear audit trails</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Compliance-ready financial statements</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                This directly supports effective Corporate Tax Filing in Dubai and ongoing tax compliance.
                            </p>
                        </section>

                        {/* Integration with Corporate Tax */}
                        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Integration with Corporate Tax Compliance and Advisory</h2>
                            <p className="text-muted mb-4">
                                Accounting data is not maintained only for statutory record-keeping it plays a central role in corporate tax compliance and planning. Accurate financial records form the foundation of effective <a href="/services/tax-advisory" className='underline'>Corporate Tax Advisory Services</a>, allowing businesses to calculate taxable income correctly, identify allowable deductions, and avoid compliance gaps. Well-maintained accounts also support reliable <a href="/services/tax-advisory" className='underline'>Tax Advisory Services</a>, especially when businesses require ongoing guidance on regulatory changes or tax optimization strategies.
                            </p>
                            <p className="text-muted mb-4">
                                For companies operating outside Dubai, structured accounting is essential for compliant <a href="/services/tax-advisory" className='underline'>Tax Advisory Services in Sharjah</a> and Sharjah, where local regulatory requirements must align with federal tax laws. Additionally, error-free accounting records ensure smooth and accurate <a href="/services/tax-advisory" className='underline'>Corporate Tax Filing Dubai</a>, reducing the risk of penalties, late submissions, or audit queries. Without accurate accounting, corporate tax compliance becomes unreliable and financially risky.
                            </p>
                        </section>

                        {/* Our Accounting Process */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-6">Our Accounting Process</h2>
                            <p className="text-muted mb-6">We follow a structured, transparent approach:</p>
                            
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Business assessment and understanding</h4>
                                        <p className="text-sm text-muted">We analyze your business model, industry requirements, and compliance needs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Accounting system setup or review</h4>
                                        <p className="text-sm text-muted">We establish or optimize your accounting systems for efficiency and compliance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Data collection and transaction recording</h4>
                                        <p className="text-sm text-muted">We ensure all transactions are accurately recorded and properly documented.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Monthly reconciliation and reporting</h4>
                                        <p className="text-sm text-muted">We provide regular financial reports and reconciliations for better visibility.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        5
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">Ongoing compliance and advisory support</h4>
                                        <p className="text-sm text-muted">We offer continuous support to maintain compliance and optimize financial performance.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted text-sm mt-6 italic">Each client receives personalized attention based on business size and complexity.</p>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6">Why Choose Prime Audit Solutions for Accounting Services?</h2>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Experienced and qualified accountants</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Strong knowledge of UAE regulations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Use of the best bookkeeping software</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Transparent pricing with no hidden costs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Dedicated client support</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-6 font-medium">
                                We don't just maintain accounts — we help businesses understand their financial position clearly.
                            </p>
                        </section>

                        {/* Who Can Benefit */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Who Can Benefit from Our Accounting Services?</h2>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Startups setting up financial systems</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">SMEs needing compliance support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Growing businesses preparing for audits</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Companies planning tax optimization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Businesses seeking financial clarity</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4 italic font-medium">
                                Accounting is not an expense, it's an investment in business stability.
                            </p>
                        </section>

                        {/* FAQ */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-primary-dark mb-4">Accounting Services – Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Are accounting services mandatory in Dubai?</h3>
                                    <p className="text-sm text-muted">Yes, UAE law requires businesses to maintain proper accounting records.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do small businesses need professional accounting services?</h3>
                                    <p className="text-sm text-muted">Yes, SMEs benefit from compliance, accuracy, and better cash flow management.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Which bookkeeping software is best for UAE businesses?</h3>
                                    <p className="text-sm text-muted">Cloud-based, VAT-compliant bookkeeping and accounting software is ideal.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Can accounting services help during audits?</h3>
                                    <p className="text-sm text-muted">Absolutely. Clean accounts significantly reduce audit risks and delays.</p>
                                </div>
                                <div className="bg-white p-5 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-gray-800 mb-2">Do you provide accounting services in Sharjah?</h3>
                                    <p className="text-sm text-muted">Yes, we offer full accounting and bookkeeping services in Sharjah.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Conclusion */}
                        <section className="bg-surface rounded-xl p-6 border border-gray-100">
                            <h2 className="text-xl font-bold text-primary-dark mb-3">Accounting as a Long-Term Business Strategy</h2>
                            <p className="text-muted mb-4">
                                Accounting should not be treated as a yearly task or compliance burden. When managed correctly, it becomes a strategic tool that supports decision-making, tax planning, and growth.
                            </p>
                            <p className="font-semibold text-gray-800 mb-2">Businesses that invest in professional accounting services gain:</p>
                            <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Financial clarity</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Regulatory confidence</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Improved profitability</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">✓</span>
                                    <span className="text-muted">Long-term stability</span>
                                </li>
                            </ul>
                            <p className="text-muted mt-4">
                                At Prime Audit Solutions, we help businesses build accounting systems that support today's compliance needs and tomorrow's growth.
                            </p>
                        </section>

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
