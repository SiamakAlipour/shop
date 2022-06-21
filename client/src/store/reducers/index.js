/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import productReducer from './productReducer';
import checkoutReducer from './checkoutReducer';
import messageReducer from './messageReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  product: productReducer,
  checkout: checkoutReducer,
  message: messageReducer,
  auth: authReducer,
});

export default rootReducer;
