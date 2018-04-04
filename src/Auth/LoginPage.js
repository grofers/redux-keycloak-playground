import React from "react";
import userManager from "./userManager";
import { Button } from 'antd';

class LoginPage extends React.Component {
  onLoginButtonClick(event) {
    event.preventDefault();
    userManager.signinRedirect();
  }

  render() {
    return (
      <div style={styles.root}>
        <h3>Welcome to Redux Keycloak Playground </h3>
        <p>Please log in to continue</p>
        <Button type="primary" onClick={this.onLoginButtonClick}>Keycloak Login</Button>
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flexShrink: 1
  }
};

export default LoginPage;
