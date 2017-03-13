import React, { Component} from 'react';
import { ApolloClient, ApolloProvider } from 'react-apollo';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes/routes';
import configureStore from './store/configureStore';
import './App.css';

const client = new ApolloClient();
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
class App extends Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <Router history={history} routes={routes} />
      </ApolloProvider>
    );
  }
}

export default App;
