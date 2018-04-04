import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { logger } from "redux-logger";

/* Auth Related modules */
import { loadUser } from "redux-oidc";
import { oidcReducer } from "./Auth/reducers";
import userManager from "./Auth/userManager";
/* Auth Related modules */

/* Router Related */
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";

/* Router Related */
import { countersReducer } from "./CounterList/reducers";

export const history = createHistory();
const routingMiddleware = routerMiddleware(history);
const appReducer = combineReducers({
  counters: countersReducer,
  oidc: oidcReducer,
  router: routerReducer
});

const middlewares = [routingMiddleware, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);
loadUser(store, userManager);

export default store;
