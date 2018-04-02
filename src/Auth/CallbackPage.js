import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import jwt_decode from 'jwt-decode';
import userManager from "./userManager";

class CallbackPage extends React.Component {
  render() {
    console.log("MYPROPS: ", this.props);

    // just redirect to '/' in both cases
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={(user) => console.log(jwt_decode(user.access_token))}
        errorCallback={() => console.log("Error") }
      >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

export default connect()(CallbackPage);
