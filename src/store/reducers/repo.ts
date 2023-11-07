import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RepoType = {
  name: string
  description: string
  stars: number
  link: string
}

export type StateType = {
  name: string
  repo: RepoType
  languages: Array<string>
}

const initialState: StateType = {
  name: '',
  repo: {
    name: '',
    description: '',
    stars: 0,
    link: '',
  },
  languages: []
}

export const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RepoType>) => {
      const { payload } = action

      return (state = {
        ...state,
        repo: {
          ...payload,
        }
      })
    },
    getNameRepo: (state, action: PayloadAction<string>) => {
      const { payload } = action

      return (state = {
        ...state,
        name: payload
      })
    },
    getLanguages: (state, action: PayloadAction<Array<string>>) => {
      const { payload } = action

      return (state = {
        ...state,
        languages: [ ...payload ]
      })
    },
  }
})

export const { add, getNameRepo, getLanguages } = repoSlice.actions

export default repoSlice.reducer
