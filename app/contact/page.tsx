import { getMarkdownSync } from '@/lib/content'
import MarkdownRenderer from '../components/MarkdownRenderer'
import ContactForm from '@/app/components/ContactForm'

export default function ContactPage() {
    const data = getMarkdownSync('contact')
    const meta = data.meta || {}
    const email: string = meta.email || 'info@primeaudit.example'
    const phone: string = meta.phone || '+91 1122334455'
    const address: string = meta.address || 'Kerala, India'
    const mapLink: string = meta.map_link || ''
    const whatsapp = meta.whatsapp || ''

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-semibold text-primary-dark">{data.meta.title}</h2>
            <div className="mt-2 text-muted"><MarkdownRenderer html={data.contentHtml} /></div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactForm action="https://formspree.io/f/YOUR_FORM_ID" email={''} phone={''} whatsapp={whatsapp} />

                <div>
                    <h4 className="font-semibold text-primary-dark">Office</h4>
                    {mapLink ? (
                        <a href={mapLink} target="_blank" rel="noreferrer" className="text-primary1 hover:underline" aria-label={`Open ${address} in maps`}>{address}</a>
                    ) : (
                        <span>{address}</span>
                    )}
                    <p className="text-muted mt-2">Email: <a href={`mailto:${email}`} className="text-primary1">{email || 'info@primeaudit.example'}</a></p>
                    <p className="text-muted mt-2">
                        Phone: <a className="text-primary1 hover:underline" href={`tel:${phone.replace(/\s+/g, '')}`} aria-label={`Call ${phone}`}>{phone}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
