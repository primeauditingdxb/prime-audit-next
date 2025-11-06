import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from './components/MarkdownRenderer'
import Link from 'next/link'

export default function HomePage() {
  const data = getMarkdownSync('home')
  const banner = data.meta.bannerImage || '/images/office-hero.jpg'

  return (
    <>
      {/* === Hero section with overlay === */}
      <section
        className="relative h-[70vh] flex items-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
              {data.meta.title}
            </h1>
            <div className="mt-4 text-shadow-lg text-lg leading-relaxed">
              <MarkdownRenderer html={data.contentHtml} />
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black rounded"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === Services section === */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-slate-800">Core Services</h2>
        <p className="text-slate-600 mt-2">
          We cover a range of services for small and medium businesses.
        </p>
        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          {[
            { title: 'Bookkeeping', text: 'Accurate record keeping and financial statements.' },
            { title: 'Auditing', text: 'Compliance and assurance services.' },
            { title: 'Software Customization', text: 'Modifying existing apps to fit your environment.' },
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
