'use client'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '@/services/api'
import { add } from '@/store/reducers/repos'

import Table from './components/table'

export default function Detail() {
  const dispatch = useDispatch()
  const user = useSelector(({ user }) => user)

  api.get(`users/${user.login}/repos`)
    .then(({ data }) => dispatch(add(data)))

  return <Table />
}
