import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import Breadcrumbs from './components/breadcrumbs'
import { generateStructuredData } from './utils/structuredData'
import { ThemeProvider } from './components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CorporateHub® - Making business run smoother',
  description: 'CorporateHub® offers consultation, training, tuning, data sync & migration, deployment, and support services for businesses using Odoo.',
  metadataBase: new URL('https://corporatehub.eu'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateStructuredData({});

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-x-auto">
            <Breadcrumbs />
          </div>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

