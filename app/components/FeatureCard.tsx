"use client"

import React from 'react'

interface FeatureCardProps {
  title: string
  description: string
  index?: number
}

const icons = [
  (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>),
  (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>),
  (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 8 4-16 3 8h4" /></svg>)
]

export default function FeatureCard({ title, description, index = 0 }: FeatureCardProps) {
  const icon = icons[index % icons.length]
  return (
    <div className="p-6 bg-surface rounded-lg shadow-sm border border-on-surface transition-all duration-300 ease-out hover:shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-on-primary">{icon}</div>
        <div>
          <h4 className="font-semibold text-primary-dark">{title}</h4>
          <p className="text-muted text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
