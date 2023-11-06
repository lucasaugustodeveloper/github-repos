import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RepoTypes = {
  name: string
  description: boolean
  stars: number
  languages: string[]
  link: string
}

const initialState: RepoTypes[] = []

export const userSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RepoTypes[]>) => {
      const { payload } = action

      return (state = [
        ...payload,
      ])
    },
  }
})

export const { add } = userSlice.actions

export default userSlice.reducer
