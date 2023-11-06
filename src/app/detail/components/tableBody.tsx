'use client'
import { useDispatch } from 'react-redux'
import Link from "next/link"
import { add } from '@/store/reducers/repo'

import { api } from "@/services/api"

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
    api.get(`repos/${fullName}`)
      .then(({ data }) => dispatch(add(data)))
  }

  return (
    <tbody>
      {repos.map(repo => (
        <tr
          className="border-b bg-gray-800"
          key={repo.node_id}
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium whitespace-nowrap text-white"
          >
            {repo.name}
          </th>
          <td className="px-6 py-4">{repo.private ? 'true' : 'false'}</td>
          <td className="px-6 py-4">{repo.stargazers_count}</td>
          <td className="px-6 py-4">{repo.forks_count}</td>
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
      ))}
    </tbody>
  )
}
