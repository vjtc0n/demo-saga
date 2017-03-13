/**
 * Created by vjtc0n on 3/10/17.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppA from '../Modules/ModuleDemo/UI/React/containers/AppA';
import ContainerA from '../Modules/ModuleDemo/UI/React/containers/containerA';


export default (
  <Route path="/" component={AppA}>
    <IndexRoute component={ContainerA} />
    <Route path="/demo" component={ContainerA} />
  </Route>
);
