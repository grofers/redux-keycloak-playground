import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { logger } from 'redux-logger';

/* Auth Related modules */
import { loadUser } from 'redux-oidc';
import { oidcReducer } from './Auth/reducers';
import userManager from './Auth/userManager';
/* Auth Related modules */

import { countersReducer } from './CounterList/reducers';


const appReducer = combineReducers({
    counters: countersReducer,
    oidc: oidcReducer
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer,
                                 {},
                                 composeEnhancers(
                                   applyMiddleware(logger))
                                 );
loadUser(store, userManager);

export default store;
