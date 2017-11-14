import {take, fork, call, put } from 'redux-saga/effects'
import {RECEIVE_POSTS, REQUEST_POSTS} from '../actions/type'
import {receivePosts} from '../actions/action'

function * fetchPosts (subreddit) {
  const data = yield call(fetch, `http://www.reddit.com/r/${subreddit}.json`)
  const json = yield data.json()
  console.log('1')
  console.log(json)
  yield put(receivePosts(subreddit, json))
}

function * watchFetchRequests () {
  while (true) {
    const action = yield take(REQUEST_POSTS)
    console.log('2')
    yield fork(fetchPosts, action.subreddit)
  }
}

export default function * rootSaga () {
  yield watchFetchRequests()
}
