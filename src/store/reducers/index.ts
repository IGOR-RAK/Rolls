import { totalReducer } from './TotalReducer';
import { shopReducer } from './ShopReducer';
import { combineReducers } from "redux";
import {productCartReducer} from "./ProductCartReducer";
import {modalReducer} from "./ModalReducer"


export const rootReducer = combineReducers({  
  shop: shopReducer,
  product_cart: productCartReducer,
  total: totalReducer,
  modal: modalReducer

 
});

export type RootReduser = ReturnType<typeof rootReducer>;