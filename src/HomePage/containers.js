import React from 'react';
import {
  LandingPage
} from './components';
import LoginPage from '../Auth/LoginPage';
import {
  connect
} from 'react-redux'

const HomePageComponent = ({
  user,
  roles
}) => {
  return !user || user.expired ? < LoginPage / > : < LandingPage / >
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
    roles: state.oidc.roles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
