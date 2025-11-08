"use client"

import React from 'react'

export interface ServiceDetailProps {
  id: string
  title: string
  content: string
  image?: string
  features?: string[]
}

const ServiceDetail: React.FC<{service: ServiceDetailProps, reverse?: boolean}> = ({ service, reverse = false }) => {
  return (
    <section id={service.id} className="py-12">
      <div className={`container mx-auto px-4 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}> 
        <div className="md:w-1/2 w-full">
          <img src={service.image || '/uploads/accounting-1.jpg'} alt={service.title} className="w-full h-64 object-cover rounded-md shadow-sm" />
        </div>

        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl font-semibold text-primary-dark mb-3">{service.title}</h3>
          <p className="text-muted mb-4">{service.content}</p>

          {service.features && service.features.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary1 text-xs font-semibold">✓</span>
                  <span className="text-muted text-sm">{f}</span>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </section>
  )
}

export default ServiceDetail
