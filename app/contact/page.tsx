import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from '../components/MarkdownRenderer'
import ContactForm from '@/app/components/ContactForm'
import { FaBuilding, FaMapMarkerAlt, FaEnvelope, FaPhone, FaMobileAlt, FaWhatsapp, FaHeadset } from 'react-icons/fa'

export default function ContactPage() {
    const data = getMarkdownSync('contact')
    const meta = data.meta || {}
    const email: string = meta.email || 'info@primeaudit.example'
    const phone: string = meta.phone || '+91 1122334455'
    const landline: string = meta.landline || '+91 1122334455'
    const address: string = meta.address || 'Kerala, India'
    const mapLink: string = meta.map_link || ''
    const whatsapp = meta.whatsapp || ''
    const address2: string[] = meta.address2 || []
    const mapLink2: string = meta.map_link2 || ''

    return (
        <>
            {/* HERO / BANNER */}
            <header
                className="relative flex items-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.75), rgba(2,6,23,0.85)), url('/images/contact-hero.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1e293b',
                    minHeight: '280px',
                }}
            >
                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
                            {data.meta.title || 'Contact Us'}
                        </h1>
                        <div className="mt-4 text-white/80 text-sm md:text-base max-w-xl">
                            <MarkdownRenderer html={data.contentHtml} />
                        </div>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* ── LEFT: Contact Form ── */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                        <h2 className="text-xl font-bold text-primary-dark mb-1">Send Us a Message</h2>
                        <p className="text-sm text-muted mb-6">Fill out the form and our team will get back to you within 24 hours.</p>
                        <ContactForm email={''} phone={''} whatsapp={whatsapp} />
                    </div>

                    {/* ── RIGHT: Contact Details ── */}
                    <div className="space-y-6">

                        {/* Office Addresses */}
                        <div className="bg-surface rounded-2xl border border-gray-100 p-6">
                            <h3 className="text-lg font-semibold text-primary-dark mb-4 flex items-center gap-2">
                                <FaBuilding className="text-primary1" /> Our Offices
                            </h3>
                            <div className="space-y-5">

                                {/* UAE */}
                                {Array.isArray(address) && address.length > 0 && (
                                    <div className="flex items-start gap-3">
                                        <FaMapMarkerAlt className="text-primary1 mt-1 shrink-0" size={15} />
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">UAE</p>
                                            {mapLink ? (
                                                <a href={mapLink} target="_blank" rel="noreferrer" className="text-primary1 hover:underline text-sm leading-relaxed">
                                                    {address.join(', ')}
                                                </a>
                                            ) : (
                                                <p className="text-sm text-muted leading-relaxed">{address.join(', ')}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* India */}
                                {address2?.length > 0 && (
                                    <div className="flex items-start gap-3">
                                        <FaMapMarkerAlt className="text-primary1 mt-1 shrink-0" size={15} />
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">India</p>
                                            {mapLink2 ? (
                                                <a href={mapLink2} target="_blank" rel="noreferrer" className="text-primary1 hover:underline text-sm leading-relaxed">
                                                    {address2.join(', ')}
                                                </a>
                                            ) : (
                                                <p className="text-sm text-muted leading-relaxed">{address2.join(', ')}</p>
                                            )}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* Contact Info Card */}
                        <div className="bg-surface rounded-2xl border border-gray-100 p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-primary-dark mb-2 flex items-center gap-2">
                                <FaHeadset className="text-primary1" /> Get in Touch
                            </h3>

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <FaEnvelope className="text-primary1 mt-1 shrink-0" size={15} />
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
                                    <a href={`mailto:${email}`} className="text-primary1 hover:underline text-sm">
                                        {email}
                                    </a>
                                </div>
                            </div>

                            {/* Landline */}
                            <div className="flex items-start gap-3">
                                <FaPhone className="text-primary1 mt-1 shrink-0" size={15} />
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Landline</p>
                                    {Array.isArray(landline) ? (
                                        landline.map((num, index) => (
                                            <div key={index}>
                                                <a
                                                    className="text-primary1 hover:underline text-sm"
                                                    href={`tel:${num.replace(/\s+/g, '')}`}
                                                    aria-label={`Call ${num}`}
                                                >
                                                    {num}
                                                </a>
                                            </div>
                                        ))
                                    ) : (
                                        <a
                                            className="text-primary1 hover:underline text-sm"
                                            href={`tel:${landline.replace(/\s+/g, '')}`}
                                            aria-label={`Call ${landline}`}
                                        >
                                            {landline}
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <FaMobileAlt className="text-primary1 mt-1 shrink-0" size={15} />
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Phone</p>
                                    {Array.isArray(phone) ? (
                                        phone.map((num, index) => (
                                            <div key={index}>
                                                <a
                                                    className="text-primary1 hover:underline text-sm"
                                                    href={`tel:${num.replace(/\s+/g, '')}`}
                                                    aria-label={`Call ${num}`}
                                                >
                                                    {num}
                                                </a>
                                            </div>
                                        ))
                                    ) : (
                                        <a
                                            className="text-primary1 hover:underline text-sm"
                                            href={`tel:${phone.replace(/\s+/g, '')}`}
                                            aria-label={`Call ${phone}`}
                                        >
                                            {phone}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Quick CTA highlight */}
                        <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6">
                            <h4 className="font-semibold text-primary-dark">Need a quick response?</h4>
                            <p className="text-sm text-muted mt-1 mb-4">
                                Our team typically responds within one business day. For urgent matters, reach us directly by phone or WhatsApp.
                            </p>
                            {whatsapp && (
                                <a
                                    href={whatsapp}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                                >
                                    <FaWhatsapp size={16} />
                                    Chat on WhatsApp
                                </a>
                            )}
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
