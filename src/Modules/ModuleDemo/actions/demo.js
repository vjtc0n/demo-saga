/**
 * Created by vjtc0n on 3/10/17.
 */
import {
  GET_POSTS,
  REPLACE_POSTS
} from '../constants/constants';


/*export const getPost = (...args) => ({
  type: 'app/getPost',
  args,
})

export const replacePost = (data) => ({
  type: 'app/replacePost',
  payload: data,
})*/

export const getPosts = (...args) => ({
  type: GET_POSTS,
  args,
})

export const replacePosts = (data) => ({
  type: REPLACE_POSTS,
  payload: data,
})
