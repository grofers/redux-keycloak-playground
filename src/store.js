import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { logger } from 'redux-logger';
import { loadUser } from 'redux-oidc';
import { reducer as oidcReducer } from 'redux-oidc';

import { countersReducer } from './CounterList/reducers';

import userManager from './Auth/userManager';

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
