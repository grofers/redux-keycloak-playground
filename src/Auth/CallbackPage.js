import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { CallbackComponent } from "redux-oidc";
import userManager from "./userManager";
import { message } from "antd";

const success = (user, dispatch) => {
  message.success("Welcome " + user.profile.name);
  dispatch(push("/"));
};
const CallbackPage = ({ dispatch }) => (
  <CallbackComponent
    userManager={userManager}
    successCallback={user => success(user, dispatch)}
    errorCallback={() => dispatch(push("/"))}
  >
    <div>Something...</div>
  </CallbackComponent>
);

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CallbackPage);
