import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Titan Steel Structures | Metal Building Calculator & Pricing',
  description: 'Design your custom prefabricated metal building with Titan Steel Structures. Get instant pricing on agricultural, commercial, residential, and aviation buildings. American-made, 50-year warranty.',
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titan%20steel%20structures%20logo-y6dkkVGPMuFB8ZzpSGTDzYmelRlLJt.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
