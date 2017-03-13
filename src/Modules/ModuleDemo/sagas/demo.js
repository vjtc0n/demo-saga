/**
 * Created by vjtc0n on 3/10/17.
 */
import { takeLatest, takeEvery } from 'redux-saga/effects'

import * as api from '../api/demo-api'
import { invokeCallback } from '../../../actions/common'
import { replacePosts } from '../actions/demo'

import {
  createRequestSaga
} from '../../../sagas/common'

import {
  GET_POSTS
} from '../constants/constants';


/*const requestGetPostAsync = createRequestSaga({
  request: api.getPost,
  key: 'getPost',
  success: [
    (data) => replacePost(data),
    (data, {args:[id, callback]}) => invokeCallback(callback, data),
  ],
  failure: [
    (data, {args:[id, callback, error]}) => invokeCallback(error, data),
  ]
})*/

const requestGetPostsAsync = createRequestSaga({
  request: api.getPosts,
  key: 'getPosts',
  success: [
    (data) => replacePosts(data),
    (data, {args:[callback]}) => invokeCallback(callback, data)
  ],
})

// root saga reducer
export default [
  // watcher for schedule, define term here
  function* asyncTestFetchWatchers() {
    // use takeLatest instead of take every, so double click in short time will not trigger more fork
    yield [
      takeLatest(GET_POSTS, requestGetPostsAsync)
    ]
  }
]
