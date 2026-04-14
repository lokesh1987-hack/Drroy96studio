// app/layout.js
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollBar from '@/components/ui/ScrollBar'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: { default: `${siteConfig.name} | ${siteConfig.studio} — Dermatologist`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ['dermatologist', 'skin specialist', 'PRP hair treatment', 'acne treatment', 'skin brightening', '96 Studio', 'Lanji', 'Chennai', 'aesthetic dermatology'],
  openGraph: { type: 'website', url: siteConfig.url, title: `${siteConfig.name} — ${siteConfig.studio}`, description: siteConfig.description, siteName: siteConfig.studio },
  twitter: { card: 'summary_large_image', title: `${siteConfig.name} — Dermatologist`, description: siteConfig.description },
  robots: { index: true, follow: true },
  metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Physician",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "telephone": siteConfig.phone,
          "medicalSpecialty": "Dermatology",
          "description": siteConfig.description,
          "address": { "@type":"PostalAddress", "addressLocality":"Lanji", "addressRegion":"Madhya Pradesh", "addressCountry":"IN" },
        })}} />
      </head>
      <body className="bg-ivory">
        <ScrollBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <WhatsAppFloat />
        <Footer />
        <Toaster position="top-center" toastOptions={{
          style: { background: '#0f1f5c', color: '#fdfbf7', border: '1px solid rgba(14,165,160,0.3)', borderRadius: '12px', fontFamily: 'Nunito, sans-serif', fontSize: '14px' },
          success: { iconTheme: { primary: '#0ea5a0', secondary: '#fff' } },
        }} />
      </body>
    </html>
  )
}
