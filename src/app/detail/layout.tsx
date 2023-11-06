'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export default function LayoutDetail({ children }: {
  children: React.ReactNode
}) {
  const title = localStorage.getItem('title')

  return (
    <>
      <Header title={title ? title : "Repositories"} />

      <main
        className={`
          ${inter.className} flex flex-wrap justify-center mt-10 w-full`
        }
      >
        {children}
      </main>
    </>
  )
}
