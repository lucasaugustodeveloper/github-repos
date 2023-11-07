import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RepoType = {
  name: string
  description: boolean
  stars: number
  languages: string[]
  link: string
}

export type StateType = {
  name: string
  repo: RepoType | null
  languages: Array<string> | null
}

const initialState: StateType = {
  name: '',
  repo: null,
  languages: null
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
