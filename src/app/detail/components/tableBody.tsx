'use client'
import { useDispatch } from 'react-redux'
import Link from "next/link"
import { getNameRepo } from '@/store/reducers/repo'
import Loading from './spinner'

export type TableBody = {
  repos: Array<{
    node_id: string
    name: string
    private: boolean
    stargazers_count: number
    forks_count: number
    full_name: string
  }>
}

export default function TableBody({ repos }: TableBody) {
  const dispatch = useDispatch()

  const getRepo = (fullName: string) => {
    dispatch(getNameRepo(fullName))
  }

  return (
    <tbody>
      {repos.length ?
        repos.map((repo, index) => (
          <tr
            className={`border-b ${(index % 2 !== 0) ? 'bg-gray-700' : 'bg-gray-900'}`}
            key={repo.node_id}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              {repo.name ?? ''}
            </th>
            <td className="px-6 py-4">{repo.private ? 'true' : 'false'}</td>
            <td className="px-6 py-4">{repo.stargazers_count ?? 0}</td>
            <td className="px-6 py-4">{repo.forks_count ?? 0}</td>
            <td className="px-6 py-4 text-right">
              <Link
                href={`detail/repo`}
                className="font-medium text-blue-500 hover:underline"
                onClick={() => getRepo(repo.full_name)}
              >
                detail
              </Link>
            </td>
          </tr>
        ))
        : (
          <tr>
            <td colSpan={5} align='center' className='py-5'>
              <Loading />
            </td>
          </tr>
        )
      }
    </tbody>
  )
}
