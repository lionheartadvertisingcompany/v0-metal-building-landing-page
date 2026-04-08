import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationSchema, LocalBusinessSchema } from '@/components/schema-markup'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://titansteelstructures.com'),
  title: {
    default: 'Titan Steel Structures | Metal Building Calculator & Pricing',
    template: '%s | Titan Steel Structures'
  },
  description: 'Design your custom prefabricated metal building with Titan Steel Structures. Get instant pricing on agricultural, commercial, residential, and aviation buildings. American-made, 50-year warranty.',
  keywords: ['metal buildings', 'steel buildings', 'prefabricated buildings', 'metal building kits', 'steel structures', 'barndominiums', 'steel barns', 'commercial buildings', 'agricultural buildings', 'equestrian facilities', 'aviation hangars', 'metal building calculator', 'building pricing'],
  authors: [{ name: 'Titan Steel Structures' }],
  creator: 'Titan Steel Structures',
  publisher: 'Titan Steel Structures',
  generator: 'v0.app',
  applicationName: 'Titan Steel Building Calculator',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titan%20steel%20structures%20logo-y6dkkVGPMuFB8ZzpSGTDzYmelRlLJt.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://titansteelstructures.com',
    siteName: 'Titan Steel Structures',
    title: 'Titan Steel Structures | Metal Building Calculator & Pricing',
    description: 'Design your custom prefabricated metal building with instant pricing. 50+ years experience, 1,500+ satisfied customers. American-made steel, 50-year warranty.',
    images: [{
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60x75x12-Steel-Retail-Store-in-Utah-scaled-1-IIVgSEOZjWXv5LxkdgQ0wU0muYpL9c.webp',
      width: 1200,
      height: 630,
      alt: 'Titan Steel Structures - Custom Metal Buildings'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Steel Structures | Metal Building Calculator',
    description: 'Design your custom metal building with instant pricing. American-made steel, 50-year warranty.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/60x75x12-Steel-Retail-Store-in-Utah-scaled-1-IIVgSEOZjWXv5LxkdgQ0wU0muYpL9c.webp'],
  },
  alternates: {
    canonical: 'https://titansteelstructures.com'
  },
  category: 'construction',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        {/* AI Crawler Permissions */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* LLM Discovery */}
        <link rel="ai-content" href="/llms.txt" />
        <link rel="ai-content-full" href="/.well-known/llms-full.txt" />
        <link rel="alternate" type="text/plain" href="/ai.txt" title="AI Crawling Permissions" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
