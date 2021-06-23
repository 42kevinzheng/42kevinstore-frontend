import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { productsReducer, selectedProductsReducer } from "./products";
import thunk from 'redux-thunk';

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(thunk))
);



export default store;
