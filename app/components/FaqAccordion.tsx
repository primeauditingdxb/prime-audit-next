"use client"

import React, { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {items.map((it, i) => {
        const open = i === openIndex
        return (
          <div key={i} className="mb-3 border border-on-surface rounded-lg overflow-hidden">
            <button
              className={`w-full text-left px-4 py-3 flex items-center justify-between bg-surface text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary`}
              onClick={() => toggle(i)}
              aria-expanded={open}
            >
              <span className="font-medium">{it.q}</span>
              <svg
                className={`h-5 w-5 transform transition-transform ${open ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`${open ? 'block' : 'hidden'} px-4 py-3 bg-white text-muted`}>{it.a}</div>
          </div>
        )
      })}
    </div>
  )
}
