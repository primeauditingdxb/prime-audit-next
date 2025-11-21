"use client"

import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface ContactFormProps {
    endpoint?: string
    action?: string
    email?: string
    phone?: string
    whatsapp?: string
}

export default function ContactForm({ endpoint = 'https://formspree.io/f/mrbreabk', action, email, phone, whatsapp }: ContactFormProps) {
    // support both `action` (legacy) and `endpoint` prop names
    const submitUrl = action ?? endpoint
    const [name, setName] = useState('')
    const [mail, setMail] = useState(email || '')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [submitting, setSubmitting] = useState(false)
    const [succeeded, setSucceeded] = useState(false)

    const computeErrors = () => {
        const e: Record<string, string> = {}
        if (!name.trim()) e.name = 'Please enter your name.'
        if (!mail.trim()) e.email = 'Please enter your email.'
        else if (!/^\S+@\S+\.\S+$/.test(mail)) e.email = 'Please enter a valid email address.'
        if (!message.trim()) e.message = 'Please enter a message.'
        return e
    }

    const validate = (force = false) => {
        const full = computeErrors()
        if (force) {
            setErrors(full)
            return Object.keys(full).length === 0
        }
        // Show only errors for fields the user has touched
        const filtered: Record<string, string> = {}
        Object.keys(full).forEach((k) => {
            if (touched[k]) filtered[k] = full[k]
        })
        setErrors(filtered)
        return Object.keys(full).length === 0
    }

    const onSubmit = async (ev: React.FormEvent) => {
        ev.preventDefault()
        // force full validation on submit so all errors are shown
        if (!validate(true)) return
        setSubmitting(true)
        try {
            const payload = { name, email: mail, message }
            const res = await fetch(submitUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (res.ok) {
                setSucceeded(true)
                setName('')
                setMail('')
                setMessage('')
                setErrors({})
            } else {
                const data = await res.json().catch(() => ({}))
                if (data && data.errors) {
                    const apiErrors: Record<string, string> = {}
                    data.errors.forEach((it: any) => { if (it.field) apiErrors[it.field] = it.message })
                    setErrors(apiErrors)
                } else {
                    setErrors({ form: 'Failed to send message. Please try again later.' })
                }
            }
        } catch (err) {
            setErrors({ form: 'Network error, please try again.' })
        } finally {
            setSubmitting(false)
        }
    }

    if (succeeded) {
        return (
            <div className="rounded-md p-4 bg-green-50 border border-green-200">
                <p className="text-sm font-medium text-green-700">Thanks — your message has been sent. We'll get back to you shortly.</p>
            </div>
        )
    }

    return (
        <div>
            <form className="space-y-4" onSubmit={onSubmit} noValidate>
                {errors.form && <div className="text-sm text-red-600">{errors.form}</div>}
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-medium text-primary-dark" htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value); setTouched(t => ({ ...t, name: true })); validate(); }}
                        onBlur={() => { setTouched(t => ({ ...t, name: true })); validate(); }}
                        className={`mt-1 block w-full border rounded px-3 py-2 ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-400 focus:border-emerald-600'
                            } text-muted focus:outline-none transition-colors`}
                        placeholder="Your name"
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium text-primary-dark" htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={mail}
                        onChange={(e) => { setMail(e.target.value); setTouched(t => ({ ...t, email: true })); validate(); }}
                        onBlur={() => { setTouched(t => ({ ...t, email: true })); validate(); }}
                        className={`mt-1 block w-full border rounded px-3 py-2 ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-400 focus:border-emerald-600'
                            } text-muted focus:outline-none transition-colors`}
                        placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                {/* Message Field */}
                <div>
                    <label className="block text-sm font-medium text-primary-dark" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => { setMessage(e.target.value); setTouched(t => ({ ...t, message: true })); validate(); }}
                        onBlur={() => { setTouched(t => ({ ...t, message: true })); validate(); }}
                        className={`mt-1 block w-full border rounded px-3 py-2 ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-400 focus:border-emerald-600'
                            } text-muted focus:outline-none transition-colors`}
                        rows={4}
                        placeholder="How can we help?"
                    ></textarea>
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                <div>
                    {/** disable when there are validation errors or when submitting; dim visually when disabled */}
                    {
                        (() => {
                            const hasErrors = Object.keys(computeErrors()).length > 0
                            const isDisabled = submitting || hasErrors
                            const classes = `w-full px-4 py-2 btn-primary rounded hover:shadow-lg ${isDisabled ? 'opacity-50' : ''}`
                            return (
                                <button type="submit" className={classes}>
                                    {submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            )
                        })()
                    }
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
                        <a href={whatsapp} target="_blank" rel="noreferrer" className="w-full flex text-center justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-700 px-3 py-2 rounded hover:shadow-lg">
                            <FaWhatsapp className="h-5 w-5" />
                            <span className="text-sm font-medium">Contact us on WhatsApp</span>
                        </a>
                    </div>
                </>
            )}
        </div>
    )
}
