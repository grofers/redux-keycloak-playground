import { createStore, applyMiddleware, compose} from 'redux';
import { logger } from 'redux-logger';
import { loadUser } from 'redux-oidc';

import { countersReducer } from './CounterList/reducers';

import userManager from './Auth/userManager';

const initialState = {counters: [], abc: 1 };
function appReducer(state = initialState, action){
  return {
    counters: countersReducer(state.counters, action)
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer,
                                 initialState,
                                 composeEnhancers(
                                   applyMiddleware(logger))
                                 );
loadUser(store, userManager);

export default store;
