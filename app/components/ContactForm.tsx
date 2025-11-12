"use client"

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface ContactFormProps {
  action?: string
  email?: string
  phone?: string
  whatsapp?: string
}

export default function ContactForm({ action = 'https://formspree.io/f/YOUR_FORM_ID', email, phone, whatsapp }: ContactFormProps) {
  return (
    <div>
  <form className="space-y-4" action={action} method="POST">
        <div>
          <label className="block text-sm font-medium text-primary-dark">Name</label>
          <input name="name" required className="mt-1 block w-full border rounded px-3 py-2 text-muted" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-dark">Email</label>
          <input name="email" type="email" required className="mt-1 block w-full border rounded px-3 py-2 text-muted" placeholder="you@example.com" defaultValue={email} />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary-dark">Message</label>
          <textarea name="message" required className="mt-1 block w-full border rounded px-3 py-2 text-muted" rows={5} placeholder="How can we help?"></textarea>
        </div>
        <div>
          <button type="submit" className="w-full px-4 py-2 btn-primary rounded cursor-pointer">Send Message</button>
        </div>
      </form>

      {/* separator and WhatsApp contact */}
      {whatsapp && (
        <>
          <div className="my-3 flex items-center">
            <span className="flex-1 h-px bg-on-surface/20" />
            <span className="px-3 text-sm text-muted">or</span>
            <span className="flex-1 h-px bg-on-surface/20" />
          </div>

          <div>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="w-full flex text-center justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded">
              <FaWhatsapp className="h-5 w-5" />
              <span className="text-sm font-medium">Contact us on WhatsApp</span>
            </a>
          </div>
        </>
      )}
    </div>
  )
}
