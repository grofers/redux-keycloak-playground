import {
  USER_EXPIRED,
  REDIRECT_SUCCESS,
  USER_FOUND,
  USER_NOT_FOUND,
  SILENT_RENEW_ERROR,
  SESSION_TERMINATED,
  LOADING_USER,
  USER_SIGNED_OUT
} from "redux-oidc";

import jwt_decode from "jwt-decode";

const initialState = {
  user: null,
  isLoadingUser: false,
  roles: null
};

export function oidcReducer(state = initialState, action) {
  switch (action.type) {
    case USER_EXPIRED:
      return Object.assign(
        {},
        {
          ...state
        },
        {
          user: null,
          isLoadingUser: false,
          roles: null
        }
      );
    case SILENT_RENEW_ERROR:
      return Object.assign(
        {},
        {
          ...state
        },
        {
          user: null,
          isLoadingUser: false,
          roles: null
        }
      );
    case SESSION_TERMINATED:
    case USER_NOT_FOUND:
    case USER_SIGNED_OUT:
      return Object.assign(
        {},
        {
          ...state
        },
        {
          user: null,
          isLoadingUser: false,
          roles: null
        }
      );
    case REDIRECT_SUCCESS:
    case USER_FOUND:
      var jwt_token = jwt_decode(action.payload.access_token);
      return Object.assign(
        {},
        {
          ...state
        },
        {
          user: action.payload,
          isLoadingUser: false,
          roles: jwt_token.realm_access.roles
        }
      );
    case LOADING_USER:
      return Object.assign(
        {},
        {
          ...state
        },
        {
          isLoadingUser: true
        }
      );
    default:
      return state;
  }
}
