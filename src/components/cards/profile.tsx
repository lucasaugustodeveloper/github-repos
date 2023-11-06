'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(({ user }) => user)

  return (
    <div className="flex flex-wrap justify-center w-full md:max-w-lg p-5 rounded-md bg-gray-100 shadow">
      <Image
        src={user?.avatar_url}
        alt={user?.name}
        width={208}
        height={208}
        className='rounded-full w-52 h-52'
      />
  
      <h1 className='font-bold text-center text-3xl mt-2 w-full'>{user?.name}</h1>
      <h2 className='text-sm text-center mt-2 w-full text-gray-400'>({user?.login})</h2>
  
      {user?.bio && (
        <p className='text-md mt-10 text-justify'>{user?.bio}</p>
      )}
  
      <div className="flex flex-wrap md:flex-none gap-5 md:gap-0 mt-5 w-full">
        <p className="mt-1 w-full md:w-1/2">
          <span className='font-bold'>Public Repos:</span>
          &nbsp;<span>{user?.public_repos}</span>
        </p>
        <p className="mt-1 w-full md:w-1/2">
          <span className='font-bold'>Public Gist:</span>
          &nbsp;<span>{user?.public_gists}</span>
        </p>
        <p className="mt-1 w-full md:w-1/2 md:mt-4">
          <span className='font-bold'>Followers:</span>
          &nbsp;<span>{user?.followers}</span>
        </p>
        <p className="mt-1 w-full md:w-1/2 md:mt-4">
          <span className='font-bold'>Following:</span>
          &nbsp;<span>{user?.following}</span>
        </p>
      </div>
  
      <div className="mt-5 w-full">
        <Link
          href="detail"
          className="text-center md:text-xl uppercase block rounded-full p-2 w-full bg-blue-500 text-white"
        >
          detail
        </Link>
      </div>
    </div>
  )
}

export default Profile
