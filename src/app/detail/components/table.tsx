'use client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TableBody from './tableBody'
import TableHead from './tableHead'

const tableHead = [
  {
    id: '2f14b546-fb66-55cc-9f3b-68841ad0bd83',
    label: 'Name',
    icon: true,
    accessor: 'name',
    sortable: true,
  },
  {
    id: '3c96db5c-0c5e-5287-b6ca-c2bee5aab112',
    label: 'Public',
    icon: true,
    accessor: 'private',
    sortable: true,
  },
  {
    id: '34ec6f03-0d9b-5467-9f2e-f45711665f2a',
    label: 'Stars',
    icon: true,
    accessor: 'stargazers_count',
    sortable: true,
  },
  {
    id: 'e95ee753-d69f-59e1-ad56-e2d6d74ec9b8',
    label: 'Forks',
    icon: true,
    accessor: 'forks_count',
    sortable: true,
  },
  {
    id: 'b443295f-950c-5ae0-bbfe-94b4e3d5ba29',
    label: 'Actions',
    icon: false,
    accessor: undefined,
    sortable: false,
  },
]

export default function Table() {
  const repos = useSelector(({ repos }) => repos)

  const [tableData, setTableData] = useState<{
    node_id: string
    name: string
    private: boolean
    stargazers_count: number
    forks_count: number
    full_name: string
  }[]>([])

  const handleSorting = (sortField: string | null, sortOrder: string) => {
    if (sortField) {
      const sorted = [...repos].sort((a, b) => {
        if (a[sortField]  === null) return 1
        if (b[sortField]  === null) return -1

        if(a[sortField] === null && b[sortField] === null) return 0

        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true
          }) * (sortOrder === 'asc' ? 1 : -1)
        )
      })

      setTableData(sorted)
    }
  }

  useEffect(() => {
    if (repos.length) {
      setTableData(repos)
    }
  }, [repos])

  return (
    <div
      className="relative w-full overflow-x-auto shadow-md sm:rounded-lg md:w-4/5"
    >
      <table className="w-full text-sm text-left text-gray-400">
        <TableHead columns={tableHead} handleSorting={handleSorting} />

        <TableBody repos={tableData} />
      </table>
    </div>
  )
}
