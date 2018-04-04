import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import './App.css';
import { CounterList } from './CounterList/containers';
import { HomePage } from './HomePage/containers';
import LoginPage from './Auth/LoginPage';
import CallbackPage from './Auth/CallbackPage';
import store, { history } from './store';
import userManager from './Auth/userManager';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <OidcProvider store={store} userManager={userManager}>
            <ConnectedRouter history={history} >
              <div className="App">
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/counter' component={CounterList} />
                <Route exact path='/callback' component={CallbackPage} />
              </div>
            </ConnectedRouter>
        </OidcProvider>
      </Provider>
    );
  }
}

export default App;
