export interface CartState {
    cart: number;
  
 }
 
 export enum CartActionTypes {
   INCREASE = "INCREASE",
   DECREASE = "DECREASE",
   
 }
 
 export interface increaseCart {
   type: CartActionTypes.INCREASE;
 }
 
 export interface decreaseCart {
   type: CartActionTypes.DECREASE;
 }
 

 
 export type CartAction =
   | increaseCart
   | decreaseCart
 