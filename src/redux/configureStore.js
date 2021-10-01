import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
// ----------- PRODUCTS IMPORTS -----------
import {
  // --- Reducers --

  // --- Middlewares --

} from './cart/products';


const reducer = combineReducers({
  // ------------ Products Reducers -----
});

const composedEnhancer = compose(
  // ------------ Products Middlewares -----

  // ------------- Logger --------------
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
