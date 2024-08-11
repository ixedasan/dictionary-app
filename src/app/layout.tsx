import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { Provider } from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dictionary',
  description: 'A comprehensive dictionary application built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
