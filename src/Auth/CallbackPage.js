import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { CallbackComponent } from "redux-oidc";
import userManager from "./userManager";

const CallbackPage = ({ dispatch }) => (
  <CallbackComponent
    userManager={userManager}
    successCallback={(user) => dispatch(push('/'))}
    errorCallback={() => dispatch(push('/')) }
  >
    <div>Something...</div>
  </CallbackComponent>)

function mapStateToProps(state){
  return {}
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CallbackPage);
