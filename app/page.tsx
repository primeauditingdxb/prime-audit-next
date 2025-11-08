// app/page.tsx
import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from './components/MarkdownRenderer'
import Link from 'next/link'
import Card from './components/Card'
import LongCard from './components/LongCard'
import FeatureCard from './components/FeatureCard'
import TestimonialCard from './components/TestimonialCard'
import PartnerLogo from './components/PartnerLogo'

const data = getMarkdownSync('home')

export const metadata = {
  title: data.meta.title || 'Prime Audit Solutions',
  description: data.meta.description || 'Trusted bookkeeping, auditing and software customization services.',
}

export default function HomePage() {
  const banner = data.meta.bannerImage || '/images/office-hero.jpg'

  return (
    <>
      {/* === Responsive Hero with overlay === */}
      <section
        className="hero-bg relative"
        style={{
          backgroundImage: `url(${banner})`,
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
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-snug drop-shadow-lg text-center md:text-left">
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
        <p className="text-muted mt-2">
          {data.meta.description}
        </p>
      </section>

      {/* === Services section (unchanged, but spacing adapted) === */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl font-semibold text-primary-dark">Core Services</h2>
        <p className="text-muted mt-2">
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

      {/* === Why choose us / features === */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-primary-dark">{data.meta.featuresTitle || 'Why businesses choose Prime Audit'}</h3>
          <p className="text-muted mt-2">{data.meta.featuresSubtitle || 'Practical, compliant and technology-enabled accounting and audit services tailored for growing organisations.'}</p>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          {(data.meta.features || []).map((f: any, idx: number) => (
            <FeatureCard key={idx} title={f.title} description={f.description} index={idx} />
          ))}
        </div>
      </section>

      {/* === About / Long Cards (optional content from markdown) === */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold text-primary-dark">About Prime Audit</h3>
        <p className="text-muted mt-2">We combine accounting expertise with practical software workflows to help small and medium businesses thrive.</p>

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
      <section className="container mx-auto px-4 py-10 bg-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-primary-dark">What clients say</h3>
          <p className="text-muted mt-2">Trusted by businesses for reliable accounting and audit services.</p>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          {(data.meta.testimonials || []).map((t: any, i: number) => (
            <TestimonialCard key={i} quote={t.quote} author={t.author} org={t.org} />
          ))}
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
    </>
  )
}
