import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootEl
);

if (module.hot) {
  module.hot.accept();
}
