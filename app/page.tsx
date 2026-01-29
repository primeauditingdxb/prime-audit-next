// app/page.tsx
import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from './components/MarkdownRenderer'
import Link from 'next/link'
import Card from './components/Card'
import LongCard from './components/LongCard'
import FeatureCard from './components/FeatureCard'
import TestimonialCard from './components/TestimonialCard'
import PartnerLogo from './components/PartnerLogo'
import ContactModal from './components/ContactModal'
import { getMarkdownSync as getContactContent } from '@/lib/content'

const data = getMarkdownSync('home')
const contactData = getContactContent('contact')

export const metadata = {
  title: 'Corporate Tax Advisory Services in UAE | Prime Audit Solutions',
  description: 'Get expert corporate tax advisory services from Prime Audit Solutions. Reliable guidance to optimize tax strategy and ensure full compliance.',
}

export default function HomePage() {
  const banner = data.meta.bannerImage || '/images/office-hero.jpg'
  const contactMeta = contactData?.meta || {}
  const whatsappLink = contactMeta?.whatsapp || ''

  return (
    <>
      {/* === Responsive Hero with overlay === */}
      <section
        className="hero-bg relative min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top', // or just 'center'
          backgroundRepeat: 'no-repeat',
          imageRendering: 'auto', // prevent pixelation hint (limited effect)
        }}
        aria-label={data.meta.title || 'Hero banner'}
      >
        {/* Decorative overlay for contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hidden text for screen readers describing the banner */}
        <span className="sr-only">{data.meta.description || data.meta.title}</span>

        {/* Content container: centered on mobile, left-aligned on md+ */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl md:max-w-2xl lg:max-w-xl">
            <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-snug drop-shadow-lg text-center md:text-left">
              {data.meta.title}
            </h1>

            <div className="mt-4 text-white/90 text-base sm:text-lg md:text-base lg:text-lg text-center md:text-left">
              {/* MarkdownRenderer returns HTML produced from markdown (server-side) */}
              <MarkdownRenderer html={data.contentHtml} />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center sm:items-start justify-center md:justify-start">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-5 py-2 btn-primary rounded-md shadow"
                aria-label="Contact Prime Audit Solutions"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto text-center px-5 py-2 border border-white/30 hover:bg-white hover:text-black rounded-md"
                aria-label="View our services"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-12 md:pt-16">
        <h2 className="text-2xl font-semibold text-primary-dark">ABOUT OUR COMPANY
        </h2>
        <p className="text-muted mt-2 pt-4">
          {data.meta.description}
        </p>
      </section>

      {/* === Services section (unchanged, but spacing adapted) === */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-2xl font-semibold text-primary-dark">Core Services</h2>
        <p className="text-muted mt-2 pt-4">
          We cover a range of services for small and medium businesses.
        </p>

        <div className="mt-5 grid gap-6 grid-cols-1 md:grid-cols-3">
          {(data.meta.cards || []).map((c: any, i: number) => (
            <div key={i} className="flex justify-center">
              <Card
                imageUrl={c.image}
                imageAlt={c.title}
                title={c.title}
                description={c.description}
                buttonText={c.buttonText || 'Learn more'}
                link={c.link}
              />
            </div>
          ))}
        </div>
      </section>


      <section>
        <div className="container mx-auto px-4 py-8 md:py-12 text-muted">
          <h2 className="text-2xl font-semibold text-primary-dark">Trusted Accounting, Audit & Advisory Services in the UAE</h2>
          <p className="text-muted mt-2 pt-4">
            Prime Audit Solutions is a professional accounting and advisory firm supporting businesses across the UAE with accurate financial reporting, regulatory compliance, and strategic financial insight. We work with startups, SMEs, and established enterprises to build reliable financial systems that support sustainable growth in a constantly evolving regulatory environment.
          </p>
          <p>Our approach goes beyond basic accounting by delivering structured solutions that improve financial clarity, strengthen internal controls, and support informed decision-making. From daily accounting to complex regulatory requirements, we help businesses operate with confidence and transparency.</p>

          <div className="mx-auto px-4 py-8 md:py-12 text-muted grid gap-6 grid-cols-1 md:grid-cols-2">


            <div className='p-6 bg-surface rounded-lg shadow-sm border border-on-surface transition-all duration-300 ease-out hover:shadow-2xl'>
              <h3 className="text-2xl font-semibold text-primary-dark">Financial Clarity That Supports Business Growth</h3>
              <p>Accurate financial data is essential for effective planning and long-term success. Our services provide businesses with reliable reporting and financial visibility that support informed <a href="https://primeauditsolutions.com/services/reporting">budgeting and forecasting</a> , allowing management teams to plan cash flow, control costs, and make strategic decisions based on real financial insights rather than assumptions.</p>
            </div>

            <div className='p-6 bg-surface rounded-lg shadow-sm border border-on-surface transition-all duration-300 ease-out hover:shadow-2xl'>
              <h3 className="text-2xl font-semibold text-primary-dark">Technology-Driven Accounting & Bookkeeping Solutions</h3>
              <p>Modern businesses require modern financial systems. We help clients implement and optimize the <a href="/services/accounting-services">best bookkeeping software</a>  to ensure accurate record-keeping, real-time reporting, automated VAT calculations, and secure cloud-based access to financial data. The right technology strengthens compliance, reduces errors, and improves day-to-day financial contro</p>
            </div>

            <div className='p-6 bg-surface rounded-lg shadow-sm border border-on-surface transition-all duration-300 ease-out hover:shadow-2xl'>
              <h4 className="text-2xl font-semibold text-primary-dark">Audit-Ready Financial Records You Can Rely On</h4>
              <p>Maintaining clean and transparent accounting records is critical for audits and regulatory reviews. Our structured accounting processes ensure your financial data is always audit-ready, enabling smooth coordination with approved <a href="/services/audit-services">audit firms in Dubai</a> and reducing delays, queries, and compliance risks during audit engagements.</p>
            </div>

            <div className='p-6 bg-surface rounded-lg shadow-sm border border-on-surface transition-all duration-300 ease-out hover:shadow-2xl'>
              <h4 className="text-2xl font-semibold text-primary-dark">Integrated Accounting & Tax Advisory Support</h4>
              <p>Accurate accounting forms the foundation of effective tax compliance. Our services work seamlessly alongside professional <a href="/services/tax-advisory">Tax Advisory Services</a> , ensuring correct tax calculations, timely filings, and compliance with UAE VAT and corporate tax regulations. This integrated approach helps businesses reduce tax risk while maintaining full regulatory confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* === Why choose us / features === */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-primary-dark">{data.meta.featuresTitle || 'Why businesses choose Prime Audit'}</h3>
          <p className="text-muted mt-2 pt-4">{data.meta.featuresSubtitle || 'Practical, compliant and technology-enabled accounting and audit services tailored for growing organisations.'}</p>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          {(data.meta.features || []).map((f: any, idx: number) => (
            <FeatureCard key={idx} title={f.title} description={f.description} index={idx} />
          ))}
        </div>
      </section>

      {/* === About / Long Cards (optional content from markdown) === */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold text-primary-dark">About Prime Audit</h3>
        <p className="text-muted mt-2 pt-4">We combine accounting expertise with practical software workflows to help small and medium businesses thrive.</p>

        <div className="mt-8">
          {(data.meta.aboutCards || []).map((a: any, i: number) => (
            <LongCard
              key={i}
              title={a.title}
              content={a.content}
              image={a.image}
              tag={a.tag}
              link={a.link}
              reverse={!!(i % 2)}
            />
          ))}
        </div>
      </section>

      {/* === Testimonials === */}
      <section className="container mx-auto px-4 py-12 bg-bg overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-primary-dark">What clients say</h3>
          <p className="text-muted mt-2 pt-4">
            Trusted by businesses for reliable accounting and audit services.
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="flex gap-6 w-max animate-marquee">
            {(data.meta.testimonials || []).map((t: any, i: number) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                author={t.author}
                org={t.org}
              />
            ))}

            {/* Duplicate the list for seamless looping */}
            {(data.meta.testimonials || []).map((t: any, i: number) => (
              <TestimonialCard
                key={`dup-${i}`}
                quote={t.quote}
                author={t.author}
                org={t.org}
              />
            ))}
          </div>
        </div>
      </section>



      {/* === Partners / logos (placeholders) === */}
      <section className="container mx-auto px-4 py-10">
        <h4 className="text-xl font-semibold text-primary-dark text-center">Trusted by</h4>
        <div className="mt-6 flex items-center justify-center gap-8 flex-wrap">
          {(data.meta.partners || []).map((p: any, i: number) => (
            <PartnerLogo key={i} image={p.image} alt={p.alt} />
          ))}
        </div>
      </section>

      {/* === Final CTA === */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="rounded-lg bg-primary p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-on-primary">{data.meta.cta?.title || 'Ready to get started?'}</h3>
              <p className="text-on-primary text-opacity-90 mt-1">{data.meta.cta?.text || 'Contact us for a consultation and tailored proposal.'}</p>
            </div>
            <div className="flex gap-3">
              <Link href={data.meta.cta?.primaryLink || '/contact'} className="btn-primary px-4 py-2 rounded">{data.meta.cta?.primaryText || 'Contact Us'}</Link>
              <Link href={data.meta.cta?.secondaryLink || '/services'} className="px-4 py-2 bg-surface text-text rounded border border-on-surface">{data.meta.cta?.secondaryText || 'View Services'}</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact modal shown on first visit */}
      <ContactModal title={'Contact Us'} contentHtml={contactData.contentHtml || ''} whatsapp={whatsappLink} email={""} phone={''} />
    </>
  )
}
