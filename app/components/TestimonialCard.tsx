"use client"

import React from 'react'

interface TestimonialCardProps {
  quote: string
  author?: string
  org?: string
}

export default function TestimonialCard({ quote, author, org }: TestimonialCardProps) {
  return (
    <blockquote className="p-6 bg-surface rounded-lg shadow-sm border border-on-surface">
      <p className="text-muted">{quote}</p>
      <cite className="block mt-4 text-sm text-text">{author}{org ? `, ${org}` : ''}</cite>
    </blockquote>
  )
}
