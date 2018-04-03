import React from 'react';
import { connect } from 'react-redux'

const LandingPageComponent = ({
  user,
  roles
}) => (
  <div>
    <h1>Welcome { user.profile.name } </h1>
    <h2>Roles</h2>
    <ul>
      { roles.map((role) => <li>{ role }</li>) }
    </ul>
  </div>
);


const mapStateToProps = (state) => ({
    user: state.oidc.user,
    roles: state.oidc.roles
  });

export const LandingPage = connect(
    mapStateToProps
  )(LandingPageComponent);
