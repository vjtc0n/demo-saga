/**
 * Created by vjtc0n on 3/8/17.
 */
import { fork } from 'redux-saga/effects'

/*import asyncAuthWatchers from './auth'
import asyncTagFetchWatchers from './tag'
import asyncPostFetchWatchers from './post'

import asyncSellPostFetchWatchers from './sellpost'
import asyncServicePointFetchWatchers from './service-point'
import asyncNewsPostFetchWatchers from './newspost'
import asyncUserFetchWatchers from './user'*/

import asyncTestFetchWatchers from '../Modules/ModuleDemo/sagas/demo'

// saga must be a function like generator of other functions
const rootSaga = function* () {
  yield [
    // ...asyncNoteFetchWatchers.map(watcher => fork(watcher)),
    // we can use single generator, but we should use a collection for later usage
    // watchIncrementAsync(),
    /*...asyncAuthWatchers.map(watcher => fork(watcher)),
    ...asyncTagFetchWatchers.map(watcher => fork(watcher)),
    ...asyncPostFetchWatchers.map(watcher => fork(watcher)),
    
    // make watcher for better groups of functions
    ...asyncSellPostFetchWatchers.map(watcher => fork(watcher)),
    ...asyncServicePointFetchWatchers.map(watcher => fork(watcher)),
    ...asyncNewsPostFetchWatchers.map(watcher => fork(watcher)),
    ...asyncUserFetchWatchers.map(watcher => fork(watcher)),*/
    ...asyncTestFetchWatchers.map(watcher => fork(watcher))
  ]
}

export default rootSaga
