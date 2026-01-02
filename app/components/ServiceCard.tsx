"use client"

import React from 'react'
import Link from 'next/link'

export interface ServiceSummary {
  id: string
  title: string
  slug: string
  short: string
  image?: string
}

const ServiceCard: React.FC<{service: ServiceSummary}> = ({ service }) => {
  return (
    <article className="bg-surface border border-on-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-44 w-full overflow-hidden bg-muted/10">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-primary-dark mb-2">{service.title}</h3>
        <p className="text-muted mb-4 text-sm">{service.short}</p>

        <div className="flex items-center justify-between">
          <Link href={`/services/${service.slug}`} className="text-primary1 font-semibold text-sm hover:underline">
            Learn more
          </Link>
          <Link href={`/contact`} className="btn-primary py-2 px-3 rounded text-on-primary text-sm">
            Enquire
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ServiceCard
