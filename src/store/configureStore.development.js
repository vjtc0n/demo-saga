import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
import SagaManager from '../sagas/saga-manager'
import rootSaga from '../sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://extension.remotedev.io/docs/API/Arguments.html
  }) :
  compose;
/* eslint-enable no-underscore-dangle */
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, router, logger)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  
  SagaManager.startSagas(sagaMiddleware, [rootSaga]);
  

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  
    module.hot.accept('../sagas', () => {
      // cancel old sagas then start new sagas
      const nextRootSaga = require('../sagas').default;
      SagaManager.cancelSagas(store);
      SagaManager.startSagas(sagaMiddleware, [nextRootSaga])
    
    })
  }

  return store;
}
