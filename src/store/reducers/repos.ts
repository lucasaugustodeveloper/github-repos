import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RepoTypes = {
  name: string
  public: boolean
  stars: number
  forks: number
}

const initialState: RepoTypes[] = []

export const userSlice = createSlice({
  name: 'repos',
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
