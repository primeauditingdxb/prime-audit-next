import MarkdownRenderer from '@/app/components/MarkdownRenderer'
import { getMarkdownSync } from '@/lib/content'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import FeatureList from '@/app/components/FeatureList'
import CTA from '@/app/components/CTA'
import Testimonials from '@/app/components/Testimonials'
import FAQ from '@/app/components/FAQ'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

/* normalize and decode */
function normalizeSlug(s:any) {
  if (s == null) return ''
  try {
    return decodeURIComponent(String(s)).trim().toLowerCase()
  } catch {
    return String(s).trim().toLowerCase()
  }
}

/* extract slug from plain or array */
function pickSlugFrom(obj:any) {
  if (!obj) return ''
  if (typeof obj.slug === 'string') return obj.slug
  if (Array.isArray(obj.slug) && obj.slug.length) return obj.slug[0]
  return ''
}

// import at top of the file

export async function generateMetadata({ params }:any) {
  // resolve same as in the page
  const rawSlug = (params?.slug && (Array.isArray(params.slug) ? params.slug[0] : params.slug)) || ''
  const normSlug = (() => {
    try { return decodeURIComponent(String(rawSlug)).trim().toLowerCase() } catch { return String(rawSlug).trim().toLowerCase() }
  })()

  const data = getMarkdownSync('services')
  const services = Array.isArray(data?.meta?.services) ? data.meta.services : []
  const service = services.find(s => (String(s.slug || s.id)).trim().toLowerCase() === normSlug)

  if (!service) {
    return {
      title: 'Service — Prime Audit Solutions',
      description: data?.meta?.description || 'Prime Audit Solutions services'
    }
  }

  const siteUrl = 'https://primeauditsolutions.com/' 
  const pageUrl = `${siteUrl}/services/${service.slug || service.id}`
  const imageUrl = (service.image && (service.image.startsWith('http') ? service.image : `${siteUrl}${service.image}`)) || `${siteUrl}/images/og-default.png`

  return {
    title: `${service.title} — Prime Audit Solutions`,
    description: service.short || service.content?.slice(0, 150) || data?.meta?.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: `${service.title} — Prime Audit Solutions`,
      description: service.short || undefined,
      url: pageUrl,
      siteName: 'Prime Audit Solutions',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: service.title
        }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} — Prime Audit Solutions`,
      description: service.short,
      images: [imageUrl]
    },
    robots: {
      index: true,
      follow: true,
      nocache: false
    },
    // optional keywords (small benefit)
    keywords: (service.keywords || [service.title, 'audit', 'bookkeeping', 'accounting']).slice(0, 10)
  }
}


/* IMPORTANT: make component async so we can `await params` */
export default async function ServicePage({ params }:any) {
  // unwrap the params Promise-like model that Next/RSC gives
  const resolvedParams = await params
  // now pick slug robustly
  const rawSlug = pickSlugFrom(resolvedParams) || ''
  const normSlug = normalizeSlug(rawSlug)

  const data = getMarkdownSync('services')
  const services = Array.isArray(data?.meta?.services) ? data.meta.services : []
  const whatsapp = data?.meta?.whatsapp || 'https://wa.me/1234567890'

  if (!normSlug) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold">Service not found.</h2>
        <p className="text-sm text-muted mt-2">No service slug provided in the URL.</p>
        <pre className="mt-4 bg-bg p-3 rounded">{JSON.stringify(resolvedParams, null, 2)}</pre>
      </div>
    )
  }

  const service = services.find(s => normalizeSlug(s.slug ?? s.id) === normSlug)

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Service not found.</h2>
        <p className="mb-2">Requested slug (raw): <strong>{rawSlug}</strong></p>
        <p className="mb-2">Normalized slug: <strong>{normSlug}</strong></p>

        <div className="bg-bg p-4 rounded mt-4">
          <p className="font-medium mb-2">Available services (id / slug):</p>
          <ul className="list-disc pl-6">
            {services.map(s => <li key={s.id}>{s.id} — {s.slug}</li>)}
          </ul>
        </div>
      </div>
    )
  }

  // Helpful derived fields
  const contentHtml = service.contentHtml || null
  const description = service.short || ''
  const image = service.image || '/images/placeholder.png'
  const features = Array.isArray(service.features) ? service.features : []

  return (
    <>
      {/* HERO / BANNER */}
      <header
        className="relative h-[420px] md:h-[520px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.45), rgba(2,6,23,0.6)), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-label={`Banner for ${service.title}`}
      >
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ href: '/services', label: 'Services' }, { label: service.title }]} />
          <div className="max-w-4xl mt-8 text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">{service.title}</h1>
            {description && <p className="mt-4 text-white/90 max-w-3xl text-sm md:text-base">{description}</p>}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#details" className="inline-flex items-center px-5 py-3 bg-primary-dark text-white rounded-full shadow hover:opacity-95">Learn more</a>
              <a href="/contact" className="inline-flex items-center px-5 py-3 border border-white/20 rounded-full text-white/95">Contact us</a>
            </div>
          </div>
        </div>
      </header>

      <main id="details" className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - main content */}
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {/* top image */}
            <div className="rounded-lg overflow-hidden shadow-sm">
              <img src={image} alt={service.title} className="w-full h-56 md:h-72 object-cover" loading="lazy" />
            </div>

            {/* title & summary */}
            <h2 className="text-2xl md:text-3xl font-bold mt-6 text-primary-dark">{service.title}</h2>
            {service.tagline && <p className="mt-2 text-muted text-primary-dark">{service.tagline}</p>}

            {/* rich content (markdown if available) */}
            <div className="prose mt-6 max-w-none">
              {contentHtml ? (
                <MarkdownRenderer html={contentHtml} />
              ) : (
                <div>
                  <p className="text-muted">{service.content}</p>
                </div>
              )}
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-primary-dark">What we offer</h3>
                <FeatureList items={features} />
              </div>
            )}

            {/* Testimonials */}
            <div className="mt-10">
              <Testimonials serviceId={service.id || service.slug} />
            </div>

            {/* FAQ */}
            <div className="mt-10">
              <FAQ items={service.faq || [
                { q: 'How quickly can you start?', a: 'We typically onboard within 5–10 business days depending on scope.' },
                { q: 'Do you provide remote support?', a: 'Yes — our team supports clients globally via online meetings and secure access.' }
              ]} />
            </div>
          </article>

          {/* Right column — aside, contact CTA, quick facts */}
          <aside className="space-y-6">
            <div className="sticky top-24 bg-white rounded-xl shadow p-5">
              <h4 className="font-semibold text-primary-dark">Quick facts</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li><strong>Duration:</strong> Custom (from 1 week to ongoing)</li>
                <li><strong>Engagement:</strong> Fixed price · Retainer · Hourly</li>
                <li><strong>Sectors:</strong> SMEs, Startups, Enterprises</li>
              </ul>

              <div className="mt-4">
  <Link
    href="/contact"
    className="block w-full text-center px-4 py-3 bg-primary-dark text-white rounded-lg font-medium"
  >
    Request a proposal
  </Link>

  {/* WhatsApp button replacing "Get an estimate" */}
  <a
    href={whatsapp}
    target="_blank"
    rel="noreferrer"
    className="w-full flex text-center justify-center items-center gap-2  text-white bg-green-600 hover:bg-green-700 px-3 py-3 rounded-lg hover:shadow-lg mt-3"
  >
    <FaWhatsapp className="h-5 w-5" />
    <span className="text-sm font-medium">Contact us on WhatsApp</span>
  </a>
</div>

            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <h5 className="font-semibold text-primary-dark">Related services</h5>
              <ul className="mt-3 space-y-2">
                {services.filter(s => s.slug !== service.slug).slice(0,3).map(s => (
                  <li key={s.id}>
                    <a className="text-primary-dark hover:underline" href={`/services/${s.slug || s.id}`}>{s.title}</a>
                    <p className="text-xs text-muted">{s.short}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-linear-to-r from-primary/10 to-transparent rounded-xl p-5">
              <h5 className="font-semibold text-primary-dark">Have questions?</h5>
              <p className="text-sm text-muted mt-2">Reach out to our experts for tailored advice.</p>
              <a href="/contact" className="mt-4 inline-block px-4 py-2 bg-primary-dark text-white rounded">Contact us</a>
            </div>
          </aside>
        </div>

        {/* Wide CTA */}
        <div className="mt-12">
          <CTA />
        </div>
      </main>
    </>
  )
}

/* generateStaticParams (no change) */
export function generateStaticParams() {
  const data = getMarkdownSync('services')
  const services = Array.isArray(data?.meta?.services) ? data.meta.services : []
  return services.map(s => ({ slug: String(s.slug) }))
}
