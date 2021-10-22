import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
// ----------- STORE IMPORTS -----------
import {
// --- Reducers --
  switchReducer,
  userInfoReducer,
  // --- Middlewares --
  activatePanelMiddleware,
  fetchUserAuthMiddleware,
  fetchUserTokenAuthMiddleware,
} from './app/app';

const reducer = combineReducers({
  // ------------  Reducers -----
  switchReducer,
  userInfoReducer,
});

const composedEnhancer = compose(
  // ------------ Middlewares -----
  applyMiddleware(fetchUserAuthMiddleware),
  applyMiddleware(fetchUserTokenAuthMiddleware),
  applyMiddleware(activatePanelMiddleware),
  // ------------- Logger --------------
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
