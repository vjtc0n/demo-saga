// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import requests from './common'
import demo from '../Modules/ModuleDemo/reducers/demo'

const rootReducer = combineReducers({
  routing,
  requests,
  demo
});

export default rootReducer;
