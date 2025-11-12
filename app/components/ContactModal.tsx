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

  useEffect(() => {
    try {
      const seen = localStorage.getItem('contact_modal_shown')
      if (!seen) {
        setTimeout(() => {
          setShow(true)
          localStorage.setItem('contact_modal_shown', '1')
        }, 600)
      }
    } catch (e) {
      // ignore
      setShow(true)
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={() => setShow(false)} />

      <div className="relative bg-surface w-full max-w-2xl mx-4 rounded shadow-xl p-6 z-10">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
          <button onClick={() => setShow(false)} aria-label="Close" className="text-muted">✕</button>
        </div>

        {contentHtml && (
          <div className="mt-3 text-muted text-sm" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        )}

        <div className="mt-4">
          <ContactForm action="https://formspree.io/f/YOUR_FORM_ID" email={email} phone={phone} whatsapp={whatsapp} />
        </div>
      </div>
    </div>
  )
}
