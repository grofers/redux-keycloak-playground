import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import { CounterList } from './CounterList/containers';
import { HomePage } from './HomePage/containers';
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
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/counter' component={CounterList} />
                <Route exact path='/callback' component={CallbackPage} />
              </div>
            </Router>
        </OidcProvider>
      </Provider>
    );
  }
}

export default App;
