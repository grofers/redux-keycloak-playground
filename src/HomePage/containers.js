import React from "react";
import { LandingPage } from "./components";
import LoginPage from "../Auth/LoginPage";
import { connect } from "react-redux";

const Authorization = allowedRoles => {
  return function withAuthorization(WrappedComponent) {
    function mapStateToProps(state) {
      return {
        user: state.oidc.user,
        roles: state.oidc.roles
      };
    }
    function AuthorizedComponent({ user, roles }) {
      return !!user ? <WrappedComponent /> : <h1>Not Allowed</h1>;
    }
    return connect(mapStateToProps)(AuthorizedComponent);
  };
};

export const HomePage = Authorization(["abc"])(LandingPage);
