import React from "react";
import { connect } from "react-redux";

export const Authorization = allowedRoles => {
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
