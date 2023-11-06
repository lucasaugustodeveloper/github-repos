'use client'
import { useSelector } from 'react-redux'
import Profile from '@/components/cards/profile'
import Header from '@/components/header'

export default function Home() {
  const userState = useSelector(({ user }) => user)

  return (
    <>
      <Header />

      {!userState.avatar_url ? null : (
        <main className="flex md:justify-center mt-5 p-2">
          <Profile />
        </main>
      )}
    </>
  )
}
