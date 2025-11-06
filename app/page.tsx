// app/page.tsx
import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from './components/MarkdownRenderer'
import Link from 'next/link'

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
                className="w-full sm:w-auto text-center px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md shadow"
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

      {/* === Services section (unchanged, but spacing adapted) === */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold text-slate-800">Core Services</h2>
        <p className="text-slate-600 mt-2">
          We cover a range of services for small and medium businesses.
        </p>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          {[
            { title: 'Bookkeeping', text: 'Accurate record keeping and financial statements.' },
            { title: 'Auditing', text: 'Compliance and assurance services.' },
            { title: 'Software Customization', text: 'Modifying existing apps to fit your environment.' }
          ].map((c, i) => (
            <div key={i} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-slate-800">{c.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
