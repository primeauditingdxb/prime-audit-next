'use client'

import React from 'react'
import Link from 'next/link'

export interface LongCardProps {
  title: string
  content: string
  image: string
  tag?: string
  link?: string
  reverse?: boolean // flip layout (image on right)
}

const LongCard: React.FC<LongCardProps> = ({
  title,
  content,
  image,
  tag = 'ABOUT',
  link = null,
  reverse = false,
}) => {
  return (
    <div
      className={`relative flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
  } w-full my-6 bg-primary-dark shadow-sm border border-on-surface rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]`}
    >
      {/* Image section */}
      <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full rounded-md md:rounded-lg object-cover"
        />
      </div>

      {/* Text section */}
      <div className="p-6 flex flex-col justify-center flex-1">
        {tag && (
          <div className="mb-4 rounded-full bg-accent py-0.5 px-2.5 border border-transparent text-xs text-on-primary transition-all shadow-sm w-fit text-center uppercase">
            {tag}
          </div>
        )}
        <h4 className="mb-3 text-on-primary text-xl font-semibold">{title}</h4>
        <p className="mb-6 text-muted leading-relaxed font-light">{content}</p>

        {link && (
            <Link
            href={link}
            className="text-on-primary font-semibold text-sm hover:underline flex items-center gap-2 w-fit"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default LongCard
