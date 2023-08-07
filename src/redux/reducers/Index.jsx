import { combineReducers } from 'redux';
// import {ProductReducer, selectedProductReducer} from './ProductReducer';
import { ProductReducer, selectedProductReducer } from './ProductReducer';

const reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductReducer,
});

export default reducers;