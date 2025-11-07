"use client"

import React from 'react'

interface PartnerLogoProps {
  image: string
  alt?: string
}

export default function PartnerLogo({ image, alt = 'partner' }: PartnerLogoProps) {
//   return <img src={image} alt={alt} className="h-12 object-contain" />
  return <img
        src={image} alt={alt}
        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
      />
}
