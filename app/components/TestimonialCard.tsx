"use client"

import React from 'react'

interface TestimonialCardProps {
  quote: string
  author?: string
  org?: string
}

export default function TestimonialCard({ quote, author, org }: TestimonialCardProps) {
  return (
    <blockquote className="p-5 bg-surface rounded-lg shadow-md border border-on-surface w-80 sm:w-96 shrink-0 flex flex-col h-full min-h-[180px]">
      <p className="text-muted whitespace-normal wrap-break-word grow">{quote}</p>
      <cite className="block mt-4 text-sm text-text whitespace-normal wrap-break-word ">{author}{org ? `, ${org}` : ''}</cite>
    </blockquote>
  )
}