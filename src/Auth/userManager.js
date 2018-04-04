import { createUserManager } from "redux-oidc";

const userManagerConfig = {
  client_id: "ui-test",
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ""
  }/callback`,
  response_type: "token id_token",
  scope: "openid",
  authority: "http://localhost:4300/auth/realms/google-auth-test/",
  filterProtocolClaims: false,
  loadUserInfo: true
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
