import { IProductCartState } from "../../types/product_cart";
import {ProductCartActionTypes,ProductCartAction} from "../../types/product_cart"




const initialState:IProductCartState = {
    cart:[ ]
  };

  export const productCartReducer = (
    state = initialState,
    action: ProductCartAction
  ): IProductCartState=> {
    switch (action.type) {
      case ProductCartActionTypes.ADD_CART_ITEM:
       
        return {
          ...state, cart:[...state.cart,action.payload]
          
        };
        
        case ProductCartActionTypes.EDIT_CART_ITEM:       
          return {
          ...state,cart:[...state.cart.map(item =>{
            if (item.id === action.payload.id){
              return {...item,amount:item.amount+action.payload.amount}
             
            }
              return item
            })]
            
        };
        case ProductCartActionTypes.DELETE_CART_ITEM:
             
          return {
            ...state,cart:[...state.cart.filter(item => item.id !== action.payload
              
            )]
            
          };

     
      default:
        return state;
    }
  };