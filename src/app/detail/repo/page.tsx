'use client'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { repo, languages } from '@/helpers/mocks'

export default function DetailRepo() {
  const repoState = useSelector(({ repo }) => repo)

  useEffect(() => {
  }, [repoState])

  return (
    <div className='w-full p-5 md:w-1/2 md:rounded-md bg-gray-300'>
      <p className='font-bold text-xl'>
        Name:&nbsp;
        <span className='font-normal'>{repo.name}</span>
      </p>

      <p className='font-bold text-xl mt-4'>
        Description:&nbsp;
        <span className='font-normal block'>{repo.description}</span>
      </p>

      <p className='font-bold text-xl mt-4'>
        Stars:&nbsp;
        <span className='font-normal'>{repo.stargazers_count}</span>
      </p>

      <div className='mt-4'>
        <p className='font-bold text-xl mb-2'>
          Languages:
        </p>

        <div className="flex flex-wrap gap-2">
          {languages.map(l => (
            <div
              className='rounded-full p-1 px-2 bg-black text-white'
              key={l}
            >
              {l}
            </div>
          ))}
        </div>
      </div>

      <a
        className='text-xl mt-4 block underline text-blue-500'
        href={repo.html_url}
        target='_blank'
      >
        Page Github
      </a>
    </div>
  )
}
