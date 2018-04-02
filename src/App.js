import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import { CounterList } from './CounterList/containers';
import LoginPage from './Auth/LoginPage';
import CallbackPage from './Auth/CallbackPage';
import store from './store';
import userManager from './Auth/userManager';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <OidcProvider store={store} userManager={userManager}>
            <Router>
              <div className="App">
                <Route path='/login' component={LoginPage} />
                <Route path='/counter' component={CounterList} />
                <Route path='/callback' component={CallbackPage} />
              </div>
            </Router>
        </OidcProvider>
      </Provider>
    );
  }
}

export default App;
