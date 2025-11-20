"use client"

import React from 'react'

export interface AssociateDetailProps {
  id: string
  name: string
  content: string
  image?: string
  website?: string
  contact?: string
}

const AssociateDetail: React.FC<{associate: AssociateDetailProps, reverse?: boolean}> = ({ associate, reverse = false }) => {
  return (
    <section id={associate.id} className="py-12">
      <div className={`container mx-auto px-4 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}> 
        <div className="md:w-1/2 w-full">
          <img src={associate.image || '/uploads/accounting-1.jpg'} alt={associate.name} className="w-full h-64 object-cover rounded-md shadow-sm" />
        </div>

        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl font-semibold text-primary-dark mb-3">{associate.name}</h3>
          <p className="text-muted mb-4">{associate.content}</p>

          {/* <div className="flex items-center gap-3">
            {associate.website && (
              <a href={associate.website} target="_blank" rel="noreferrer" className="text-primary1 font-semibold hover:underline">
                Visit website
              </a>
            )}
            {associate.contact && (
              <a href={`mailto:${associate.contact}`} className="btn-primary py-2 px-3 rounded text-on-primary">
                Contact
              </a>
            )}
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default AssociateDetail
