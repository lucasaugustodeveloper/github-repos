import userSlice from './user'
import reposSlice from './repos'
import repoSlice from './repo'

const reducers = {
  user: userSlice,
  repos: reposSlice,
  repo: repoSlice,
}

export default reducers
