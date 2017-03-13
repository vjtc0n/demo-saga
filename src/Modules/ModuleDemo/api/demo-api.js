/**
 * Created by vjtc0n on 3/10/17.
 */
import 'whatwg-fetch';
import { fetchJson, fetchJsonWithToken } from '../../../backend/common'

export function getPosts() {
  return fetchJson(`/posts?filter[limit]=10`)
}

export default {
  getPosts(){
    return fetchJson(`/posts?filter[limit]=10`)
  },
}
