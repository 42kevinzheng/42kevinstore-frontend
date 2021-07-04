import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { productsReducer, selectedProductsReducer, cartReducer,userSigninReducer,
  userRegisterReducer,orderCreateReducer,orderDetailsReducer,orderPayReducer,orderMineListReducer,
  userDetailsReducer,
 } from "./products";
import thunk from 'redux-thunk';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'PayPal',
  },
};

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,  
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
