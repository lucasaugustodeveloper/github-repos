import Profile from '@/components/cards/profile'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex md:justify-center mt-5 p-2">
        <Profile />
      </main>
    </>
  )
}
