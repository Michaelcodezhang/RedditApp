import {
  RECEIVE_POSTS, REQUEST_POSTS, INVALIDATE_SUBREDDIT, SELECT_SUBREDDIT
} from './type'

export function selectSubreddit (subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit (subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export function requestPosts (subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export function receivePosts (subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// 用sagas替代下面的thunk解决方法

// function fetchPosts (subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`http://www.reddit.com/r/${subreddit}.json`)
//       .then(response => {
//         console.log(response)
//         return response.json()
//       })
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }
//
// function shouldFetchPosts (state, subreddit) {
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   } else if (state.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }
//
// export function fetchPostsIfNeeded (subreddit) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }
