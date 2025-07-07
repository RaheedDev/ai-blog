import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AdSenseScript from '@/components/AdSenseScript'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: 'TrendScope - Trending Topics & Insights',
  description: 'Discover the latest trending topics and insights. Stay updated with weekly content on technology, trends, and more.',
  keywords: 'trending topics, technology, insights, trends, news, analysis',
  authors: [{ name: 'TrendScope Team' }],
  openGraph: {
    title: 'TrendScope - Trending Topics & Insights',
    description: 'Discover the latest trending topics and insights',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrendScope - Trending Topics & Insights',
    description: 'Discover the latest trending topics and insights',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <AdSenseScript />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}