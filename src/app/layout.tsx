import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Github Repo',
  description: 'App for visualize repos of user',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />

        <link rel="shortcut icon" href="/assets/icons/favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
