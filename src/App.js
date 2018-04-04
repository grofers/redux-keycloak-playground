import React, { Component } from "react";
import { Provider } from "react-redux";
import { OidcProvider } from "redux-oidc";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import { Authorization } from "./Auth/Authorization";
import store, { history } from "./store";
import userManager from "./Auth/userManager";

import { CounterList } from "./CounterList/containers";
import { LandingPage } from "./HomePage/components";
import LoginPage from "./Auth/LoginPage";
import CallbackPage from "./Auth/CallbackPage";

import "./App.css";
import { Layout } from "antd";
import NavHeader from "./common/NavHeader";

const adminAuthorized = Authorization(["admin"]);

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <OidcProvider store={store} userManager={userManager}>
          <ConnectedRouter history={history}>
            <Layout>
              <NavHeader />
              <Layout>
                <Content
                  style={{
                    background: "#eee",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                  }}
                >
                  <Route
                    exact
                    path="/"
                    component={adminAuthorized(LandingPage)}
                  />
                  <Route
                    exact
                    path="/counter"
                    component={adminAuthorized(CounterList)}
                  />
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/callback" component={CallbackPage} />
                </Content>
              </Layout>
            </Layout>
          </ConnectedRouter>
        </OidcProvider>
      </Provider>
    );
  }
}

export default App;
