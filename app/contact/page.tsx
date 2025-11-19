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
                    {/* <h4 className="font-semibold text-primary-dark">Office</h4> */}
                    <div className="flex text-muted mt-2">
                        <span className="text-muted mr-2">Office:</span>
                        <div>
                            {Array.isArray(address)
                                ? address.map((addr, index) => (
                                    mapLink ? (
                                        <div key={index} className="hover:underline">
                                            <a
                                                href={mapLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-primary1"
                                                aria-label={`View ${addr} on map`}
                                            >
                                                {addr}
                                            </a>
                                        </div>
                                    ) : (
                                        <div key={index} className="text-primary1">
                                            {addr}
                                        </div>
                                    )
                                ))
                                : mapLink ? (
                                    <div className="hover:underline">
                                        <a
                                            href={mapLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-primary1"
                                            aria-label={`View ${address} on map`}
                                        >
                                            {address}
                                        </a>
                                    </div>
                                ) : (
                                    <div className="text-primary1">{address}</div>
                                )}
                        </div>
                    </div>
                    <p className="text-muted mt-2">Email: <a href={`mailto:${email}`} className="text-primary1">{email || 'info@primeaudit.example'}</a></p>
                    <div className="flex text-muted mt-2">
                        <span className="text-muted mr-2">Phone:</span>
                        <div>
                            {Array.isArray(phone)
                                ? phone.map((num, index) => (
                                    <div key={index} className="hover:underline">
                                        <a
                                            className="text-primary1"
                                            href={`tel:${num.replace(/\s+/g, '')}`}
                                            aria-label={`Call ${num}`}
                                        >
                                            {num}
                                        </a>
                                    </div>
                                ))
                                : (
                                    <div className="hover:underline">
                                        <a
                                            className="text-primary1"
                                            href={`tel:${phone.replace(/\s+/g, '')}`}
                                            aria-label={`Call ${phone}`}
                                        >
                                            {phone}
                                        </a>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
