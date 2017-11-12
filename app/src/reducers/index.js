import {combineReducers} from 'redux'
import {selectedSubreddit, postsBySubreddit} from './reducers'

const rootReducers = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducers
