import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Shehzad bin Rehman',
  description: "Portfolio of Shehzad Bin Rehman — a versatile graphic designer, social media strategist, and freelancer helping brands grow through creativity and digital marketing.",

  generator: '#',
  icons: {
    icon: [
      {
        url: 'ShehzadIcon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'ShehzadIcon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'ShehzadIcon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
