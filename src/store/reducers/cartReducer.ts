import { CartState,CartAction,CartActionTypes} from "../../types/cart";




const initialState:CartState = {
  cart:0
};

export const cartReducer = (
  state = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.INCREASE:
      return {
        ...state,
        cart: state.cart+=1
      };
    case CartActionTypes.DECREASE:
     return {
        ...state,
        cart: state.cart-=1
        };
   
    default:
      return state;
  }
};