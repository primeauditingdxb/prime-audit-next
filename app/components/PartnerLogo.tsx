"use client"

import React from 'react'

interface PartnerLogoProps {
  image: string
  alt?: string
}

export default function PartnerLogo({ image, alt = 'partner' }: PartnerLogoProps) {
  return <img src={image} alt={alt} className="h-12 object-contain" />
}
