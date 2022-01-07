import { CartAction, CartActionTypes } from "../../types/cart";
import { Dispatch } from "redux";


export const increaseCart = () => {
 return {type:CartActionTypes.INCREASE}
};


export const decreaseCart = () => {
    return {type:CartActionTypes.DECREASE}
   };



   export const increaseCartThunk = () => {
       return (dispatch: Dispatch<CartAction>, getState: () => any) =>{
            dispatch({type:CartActionTypes.INCREASE})
       }
   
   };