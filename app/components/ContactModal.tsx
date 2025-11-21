"use client"

import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm'

interface ContactModalProps {
  title?: string
  contentHtml?: string
  email?: string
  phone?: string
  whatsapp?: string
}

export default function ContactModal({ title = 'Contact Us', contentHtml = '', email, phone, whatsapp }: ContactModalProps) {
  const [show, setShow] = useState(false)
  const [dontShow, setDontShow] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // If the user chose permanent hide, don't show at all.
    try {
      const hidden = localStorage.getItem('contact_modal_hide')
      if (hidden) return
    } catch (e) {
      // ignore localStorage errors
    }

    // If modal was closed during this browsing session (window flag), do not re-open
    // This flag lives only in-memory and will be cleared on full page reload —
    // so the modal will show again on refresh as requested.
    // @ts-ignore
    if ((typeof window !== 'undefined') && (window.__contactModalClosed)) return

    // Show the modal after a short delay.
    const t = setTimeout(() => {
      setShow(true)
      // start enter animation on next tick
      setTimeout(() => setAnimate(true), 10)
    }, 600)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay with fade animation */}
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${animate ? 'bg-black/50 opacity-100' : 'bg-black/0 opacity-0'}`}
        onClick={() => {
          try { if (dontShow) localStorage.setItem('contact_modal_hide', '1') } catch (e) {}
          setAnimate(false)
          setTimeout(() => setShow(false), 220)
        }}
      />

      <div className={`relative bg-surface w-full max-w-2xl mx-4 rounded shadow-xl p-8 z-10 transform transition-all duration-200 ${animate ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
          <button onClick={() => {
            try { if (dontShow) localStorage.setItem('contact_modal_hide', '1') } catch (e) {}
            setAnimate(false)
            setTimeout(() => setShow(false), 220)
          }} aria-label="Close" className="text-primary-dark cursor-pointer transition-all duration-300 ease-in-out hover:scale-108 hover:text-primary hover:drop-shadow-md">✕</button>
        </div>

        {contentHtml && (
          <div className="mt-3 text-muted text-sm" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        )}

        <div className="mt-2">
          <ContactForm action="https://formspree.io/f/mrbreabk" email={email} phone={phone} whatsapp={whatsapp} />

          <label className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4"
              checked={dontShow}
              onChange={(e) => setDontShow(e.target.checked)}
            />
            <span>Don't show again</span>
          </label>
        </div>
      </div>
    </div>
  )
}
