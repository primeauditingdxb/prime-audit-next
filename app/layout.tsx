import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import { getMarkdownSync } from '@/lib/content'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Prime Audit Solutions',
  description: 'Bookkeeping, auditing and software implementation services.',
  verification: {
    // Google Search Console verification
    google: 'N8ZKsyb6z2dXekXAPuHM9DwrN-_tesqLSpjC94yx6Uo',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const servicesData = getMarkdownSync('services')
  const services = servicesData.meta?.services || []

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (script) */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJHF6JV6');
          `}
        </Script>

        {/* Google Analytics (gtag.js) */}
        <Script
          id="ga-gtag-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-P5986PPBSH"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P5986PPBSH');
          `}
        </Script>
      </head>

      <body className="min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJHF6JV6"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <Header services={services} />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
