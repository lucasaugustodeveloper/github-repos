'use client'
import { useSelector } from 'react-redux'
import { Inter } from 'next/font/google'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export default function LayoutDetail({ children }: {
  children: React.ReactNode
}) {
  const { repo } = useSelector(({ repo }) => repo)

  return (
    <>
      <Header title={repo.name ? repo.name : "Repositories"} />

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
