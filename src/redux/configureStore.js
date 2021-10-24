import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
// ----------- STORE IMPORTS -----------
import {
// --- Reducers --
  switchReducer,
  userInfoReducer,
  businessReducer,
  // --- Middlewares --
  activatePanelMiddleware,
  fetchUserAuthMiddleware,
  fetchUserTokenAuthMiddleware,
  loadBusinessFetchMiddleware,
} from './app/app';

const reducer = combineReducers({
  // ------------  Reducers -----
  switchReducer,
  userInfoReducer,
  businessReducer,
});

const composedEnhancer = compose(
  // ------------ Middlewares -----
  applyMiddleware(fetchUserAuthMiddleware),
  applyMiddleware(fetchUserTokenAuthMiddleware),
  applyMiddleware(activatePanelMiddleware),
  applyMiddleware(loadBusinessFetchMiddleware),
  // ------------- Logger --------------
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
