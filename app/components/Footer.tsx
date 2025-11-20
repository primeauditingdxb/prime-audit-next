import { getMarkdownSync } from '@/lib/content'
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    const data = getMarkdownSync('footer')
    const meta = data.meta || {}
    const email: string = meta.email || 'info@primeaudit.example'
    const phone: string = meta.phone || '+91 1122334455'
    const landline: string = meta.landline || '+91 1122334455'
    const address: string = meta.address || 'Kerala, India'
    const mapLink: string = meta.map_link || ''
    const social = meta.social || {}
    const developer = (meta.developer || {}) as { name?: string; url?: string }

    return (
        <footer className="bg-surface text-on-surface mt-12">
            <div className="w-full bg-surface shadow-[0_-2px_8px_-2px_rgba(0,0,0,0.2)]">
                <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="font-semibold text-primary-dark">Prime Audit Solutions LLC</h3>
                        <p className="text-sm text-muted mt-2">Accounting • Auditing • Bookkeeping • Software</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-primary-dark">Contact</h4>
                        <p className="text-sm text-muted font-medium mt-2">
                            Email: <a className="text-primary1 hover:underline" href={`mailto:${email}`} aria-label={`Email ${email}`}>{email}</a>
                        </p>

                        <div className="flex text-sm text-muted mt-2">
                            <span className="font-medium text-muted mr-2">Landline:</span>
                            <div>
                                {Array.isArray(landline)
                                    ? landline.map((num, index) => (
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
                                                href={`tel:${landline.replace(/\s+/g, '')}`}
                                                aria-label={`Call ${landline}`}
                                            >
                                                {landline}
                                            </a>
                                        </div>
                                    )}
                            </div>
                        </div>

                        <div className="flex text-sm text-muted mt-2">
                            <span className="font-medium mr-2">Phone:</span>
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

                    <div>
                        <h4 className="font-semibold text-primary-dark">Address</h4>
                        <p className="text-sm text-muted mt-2">
                            {mapLink ? (
                                <a href={mapLink} target="_blank" rel="noreferrer" className="text-primary1 hover:underline" aria-label={`Open ${address} in maps`}>{address}</a>
                            ) : (
                                <span>{address}</span>
                            )}
                        </p>

                        {/* Social icons */}
                        <div className="mt-4 flex items-center gap-3">
                            {social.facebook && (
                                <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-muted hover:text-primary1">
                                    <FaFacebookF className="h-5 w-5" />
                                </a>
                            )}

                            {social.whatsapp && (
                                <a href={social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-muted hover:text-primary1">
                                    <FaWhatsapp className="h-5 w-5" />
                                </a>
                            )}

                            {social.instagram && (
                                <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted hover:text-primary1">
                                    <FaInstagram className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-on-surface py-4 text-center text-sm text-primary-dark">
                © {new Date().getFullYear()} Prime Audit Solutions. All rights reserved.{' '}
                {developer?.name && (
                    <span className="block mt-1 text-muted">
                        Designed and developed by{' '}
                        {developer.url ? (
                            <a href={developer.url} target="_blank" rel="noreferrer" className="text-muted hover:text-primary1">{developer.name}</a>
                        ) : (
                            <span className="text-muted">{developer.name}</span>
                        )}
                    </span>
                )}
            </div>
        </footer>
    )
}
