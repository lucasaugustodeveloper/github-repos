'use client'

type TableBody = {
  columns: Array<{
    id: string
    label: string
    icon: boolean
    accessor?: string
  }>
  repos: Array<{
    id: number
    name: string
    private: boolean
    stargazers_count: number
    forks_count: number
  }>
}

export default function TableBody({ repos }: TableBody) {
  return (
    <tbody>
      {repos.map(repo => (
        <tr
          className="border-b bg-gray-800"
          key={repo.id}
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
            <a
              href="#"
              className="font-medium text-blue-500 hover:underline"
            >
              detail
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
