import './globals.css'
import type { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { getMarkdownSync } from '@/lib/content'

export const metadata = {
  title: 'Prime Audit Solutions',
  description: 'Bookkeeping, auditing and software implementation services.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const servicesData = getMarkdownSync('services')
  const services = servicesData.meta?.services || []

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header services={services} />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
