/**
 * Created by vjtc0n on 3/10/17.
 */
import {
  GET_POSTS,
  REPLACE_POSTS
} from '../constants/constants';


const initialState = {
  item: {},
  items: []
}

export default function demo (state = initialState, { type, payload }) {
  switch (type) {
    case GET_POSTS:
      return { ...state, item: payload }
    case REPLACE_POSTS:
      return { ...state, items: payload }
    default:
      return state;
  }
}
