"use client"

import React from 'react'
import Link from 'next/link'
import { FiExternalLink, FiMail } from 'react-icons/fi'

export interface AssociateSummary {
  id: string
  name: string
  slug: string
  short: string
  image?: string
  website?: string
  contact?: string
}

const AssociateCard: React.FC<{associate: AssociateSummary}> = ({ associate }) => {
  return (
    <article className="bg-surface border border-on-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-36 w-full overflow-hidden bg-muted/5">
        <img src={associate.image || '/uploads/accounting-1.jpg'} alt={associate.name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <h4 className="text-lg font-semibold text-primary-dark mb-1">{associate.name}</h4>
        <p className="text-muted text-sm mb-3">{associate.short}</p>

        <div className="flex items-center justify-between gap-3">
          <Link href={`#${associate.slug}`} className="text-primary1 font-medium text-sm hover:underline">
            View
          </Link>
          <div className="flex items-center gap-2">
            {associate.website && (
              <a href={associate.website} target="_blank" rel="noreferrer" className="text-muted text-sm hover:text-primary1 flex items-center gap-1">
                <FiExternalLink className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </a>
            )}
            {associate.contact && (
              <a href={`mailto:${associate.contact}`} className="btn-primary py-1 px-3 rounded text-on-primary text-sm flex items-center gap-2">
                <FiMail className="h-4 w-4" />
                Contact
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default AssociateCard
