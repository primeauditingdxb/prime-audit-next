import './globals.css'
import type { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Prime Audit Solutions',
  description: 'Bookkeeping, auditing and software customization services.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
