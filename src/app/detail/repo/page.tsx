'use client'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { add, getLanguages } from '@/store/reducers/repo'
import { api } from '@/services/api'
import Loading from '@/app/detail/components/spinner'

export default function DetailRepo() {
  const dispatch = useDispatch()
  const { name, repo, languages } = useSelector(({ repo }) => repo)

  useEffect(() => {
    api.get(`repos/${name}`)
      .then(({ data }) => dispatch(add(data)))
    api.get(`repos/${name}/languages`)
      .then(({ data }) => dispatch(getLanguages(Object.keys(data))))
  }, [dispatch, name])

  return (
    <div className={
        `w-full p-5 md:w-1/2 md:rounded-md bg-gray-300
        ${(!repo && !languages) ? 'flex justify-center' : ''}`
      }
    >
      {(repo.name && languages.length) ? (
        <>
          <p className='font-bold text-xl'>
            Name:&nbsp;
            <span className='font-normal'>{repo.name ?? ''}</span>
          </p>

          <p className='font-bold text-xl mt-4'>
            Description:&nbsp;
            <span className='font-normal block'>{repo.description ?? ''}</span>
          </p>

          <p className='font-bold text-xl mt-4'>
            Stars:&nbsp;
            <span className='font-normal'>{repo.stargazers_count ?? ''}</span>
          </p>

          <div className='mt-4'>
            <p className='font-bold text-xl mb-2'>
              Languages:
            </p>

            <div className="flex flex-wrap gap-2">
              {languages.map((l: string) => (
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
            href={repo.html_url ?? '#'}
            target='_blank'
          >
            Page Github
          </a>
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}
