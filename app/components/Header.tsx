"use client";
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-slate-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-600 text-white rounded flex items-center justify-center font-bold">PA</div>
          <div>
            <div className="text-lg font-semibold">Prime Audit Solutions</div>
            <div className="text-xs text-gray-500">Accounting • Bookkeeping • Software</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/associates">Associates</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md border">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          {open && (
            <div className="absolute right-4 mt-2 w-48 bg-white shadow-lg rounded">
              <Link href="/" className="block px-4 py-2">Home</Link>
              <Link href="/about" className="block px-4 py-2">About</Link>
              <Link href="/services" className="block px-4 py-2">Services</Link>
              <Link href="/associates" className="block px-4 py-2">Associates</Link>
              <Link href="/gallery" className="block px-4 py-2">Gallery</Link>
              <Link href="/contact" className="block px-4 py-2">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
