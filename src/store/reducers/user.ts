import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserTypes = {
  avatar_url: string
  name: string
  login: string
  bio: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
}

const initialState: UserTypes = {
  avatar_url: '',
  name: '',
  login: '',
  bio: '',
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<UserTypes>) => {
      const { payload } = action

      return (state = {
        ...state,
        ...payload,
      })
    },
  }
})

export const { add } = userSlice.actions

export default userSlice.reducer
