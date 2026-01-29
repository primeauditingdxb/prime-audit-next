import Link from 'next/link'
import LongCard from '../components/LongCard'
import FaqAccordion from '../components/FaqAccordion'

export const metadata = {
    title: 'About — Prime Audit Solutions',
    description: 'About Prime Audit Solutions: bookkeeping, auditing and software implementation.',
}

export default function AboutPage() {
    const banner = '/images/banner-new.png'
    const bannerTitle = 'About Us'
    const bannerDescription = 'About Prime Audit Solutions: expertise in bookkeeping, auditing and software implementation.'

    const mainTitle = 'About Prime Audit Solutions'

    const faqs = [
        { q: "What services do you offer?", a: "We offer bookkeeping, auditing, and software implementation to help businesses maintain accurate records and streamline workflows." },
        { q: "How do you onboard new clients?", a: "We begin with a discovery call to understand needs, then propose a tailored plan including timelines and deliverables." },
        { q: "Can you integrate with existing accounting software?", a: "Yes — we integrate and customize common accounting and ERP systems to fit your processes." }
    ]

    return (
        <>
            <section
                className="about-bg relative"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
                aria-label={bannerTitle}
            >
                {/* Decorative overlay for contrast */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Hidden text for screen readers describing the banner */}
                <span className="sr-only">{bannerDescription}</span>

                {/* Content container: centered on mobile, left-aligned on md+ */}
                <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
                    <div className="max-w-3xl md:max-w-2xl lg:max-w-xl">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-snug drop-shadow-lg text-center md:text-left">
                            {bannerTitle}
                        </h1>

                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold text-primary-dark">{mainTitle}</h2>
                <div className="mt-4 text-muted pt-4 pb-8 space-y-4">
                    At Prime Audit Solutions LLC, we empower businesses with clarity, confidence, and innovative financial solutions that support sustainable growth. As a trusted partner to SMEs in the UAE, we provide audit, accounting, and specialized <a href="/services/tax-advisory">Corporate Tax Advisory Services</a> to help organizations navigate regulatory requirements with accuracy and transparency. Our experienced professionals deliver tailored support backed by industry insight and technical expertise. Alongside our core financial services, we offer custom software solutions that streamline operations, improve financial management, and drive measurable business efficiency all delivered with integrity, precision, and a client-first approach.
                </div>

                <LongCard
                    title="Who we are"
                    content={
                        <>
                            Prime Audit Solutions LLC is a trusted professional services firm dedicated to supporting small and medium-sized businesses with comprehensive financial and technology-driven solutions. We specialize in tax advisory, audit services, and accounting, delivering accuracy, transparency, and strategic insight to help clients succeed in a competitive market. As part of our commitment to quality and compliance, we work in alignment with approved
                            {' '}
                            <Link href="/services/audit-services" className="text-primary1 hover:underline">
                                audit firms in Dubai
                            </Link>{' '}
                            , ensuring audit-ready records and regulatory confidence. Driven by innovation, we also develop custom software solutions tailored to modern business operations. Our team of experienced professionals is focused on integrity, reliability, and client success, working closely with clients to deliver solutions aligned with their goals and long-term vision. We take a proactive approach to financial management, helping businesses anticipate risks and opportunities. Our solutions are designed to improve efficiency, control, and decision-making. We emphasize clear communication and transparency at every stage of engagement. Our expertise spans multiple industries across the UAE market.
                            Above all, we are committed to building long-term partnerships based on trust and performance.
                        </>
                    }
                    image="/images/dedicated_expterts_card.png"
                    tag="ABOUT"
                    // link="#"
                    reverse={false}
                    transition={false}
                />

                <LongCard
                    title="What we do"
                    content={
                        <>
                            <p>At Prime Audit Solutions LLC, we provide a comprehensive suite of financial and technological services designed to support the growth and efficiency of small and medium-sized businesses. Our Tax Advisory Services help clients navigate complex regulations through strategic planning, compliance support, and expert guidance that ensures informed decision-making and optimized tax outcomes.</p>
                            <p>Through our Audit Services, we deliver transparent, accurate, and reliable audit engagements that strengthen financial integrity and reinforce trust by ensuring compliance with applicable standards. We also offer a full range of Accounting Services, including professional
                                {' '}
                                <Link href="/services/accounting-services" className="text-primary1 hover:underline">
                                    bookkeeping services Dubai
                                </Link>{' '}
                                , delivering precise record-keeping, organized financial reporting, and streamlined operational support to help businesses maintain clarity and control over their finances.</p>
                            <p>In addition to our financial expertise, we provide custom software solutions tailored to the specific needs of each business we serve. These technology-driven tools enhance workflow efficiency, improve financial management, and support smarter, data-driven business operations.</p>
                        </>
                    }
                    image="/images/tailored_processes_card.png"
                    tag="ABOUT"
                    // link="#"
                    reverse={true}
                    transition={false}
                />

                <LongCard
                    title="How Do We Help?"
                    content={
                        <>
                            <p>At Prime Audit Solutions LLC, we help businesses strengthen their financial foundation, improve operational efficiency, and make smarter decisions with confidence. Through our expert tax advisory, we guide clients in planning effectively, staying compliant, and reducing unnecessary financial burdens.</p>

                            <p>
                                Our audit services provide the transparency and assurance needed to build trust with stakeholders while identifying opportunities for better financial management. With our accounting services and structured
                                {' '}
                                <Link href="/services/core-services" className="text-primary1 hover:underline">
                                    financial accounting solutions
                                </Link>{' '}
                                , we ensure businesses maintain accurate records, organized reporting, and reliable data that supports informed
                                {' '}
                                <Link href="/services/reporting" className="text-primary1 hover:underline">
                                    budgeting and forecasting.
                                </Link>{' '}

                            </p>
                            <p>
                                Beyond traditional financial services, we support businesses with custom software solutions that streamline processes, reduce manual errors, and enhance productivity. By combining professional expertise with innovative technology, we equip small and medium-sized businesses with the tools and insights they need to operate efficiently, stay compliant, and focus on sustainable growth.
                            </p>
                        </>
                    }
                    image="/images/audit_services_card.png"
                    tag="ABOUT"
                    // link="#"
                    reverse={false}
                    transition={false}
                />

                {/* === FAQ accordion === */}
                {faqs.length > 0 && (
                    <section className="container mx-auto px-4 py-10">
                        <h3 className="text-2xl font-semibold text-primary-dark">Frequently asked questions</h3>
                        <p className="text-muted mt-2 pt-4">Answers to common questions about our services and process.</p>
                        <div className="mt-6">
                            <FaqAccordion items={faqs} />
                        </div>
                    </section>
                )}

            </div>
        </>
    )
}
