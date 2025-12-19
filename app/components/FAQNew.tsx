'use client'
import { useState } from 'react'

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items = [] }: FAQProps) {
  return (
    <div className="bg-white border rounded-lg p-4">
      <h4 className="font-semibold text-xl text-primary-dark">Frequently asked questions</h4>
      <div className="mt-3 space-y-2">
        {items.map((q, i) => <FAQItem key={i} q={q} />)}
      </div>
    </div>
  )
}

function FAQItem({ q }: { q: FAQItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b last:border-b-0 pb-3">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-center justify-between gap-3">
        <span className="font-medium text-text">{q.q}</span>
        <span className="text-muted">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="mt-2 text-sm text-muted">{q.a}</div>}
    </div>
  )
}

