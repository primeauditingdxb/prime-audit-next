"use client"

import React from 'react'

interface PartnerLogoProps {
  image: string
  alt?: string
}

export default function PartnerLogo({ image, alt = 'partner' }: PartnerLogoProps) {
  return (
    <img
      src={image}
      alt={alt}
      className="relative inline-block h-[58px] w-[58px] rounded-full object-cover object-center
                 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]
                 transition-all duration-300
                 hover:scale-105 hover:shadow-[0_4px_14px_rgba(0,0,0,0.15)]"
    />
  )
}

