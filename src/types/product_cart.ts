


export interface IProductCartItem {
  id:number;
  img:string;
  title:string;
  set:number;
  weight:number;
  price:number;
  amount:number
}


export interface IProductCartState {
  cart: IProductCartItem [];
}

export type IEditProductCart = {
  amount:number;
  id:number
}





export enum ProductCartActionTypes {
    ADD_CART_ITEM = "ADD_CART_ITEM",
    EDIT_CART_ITEM = "EDIT_CART_ITEM",
    DELETE_CART_ITEM  = "DELETE_CART_ITEM"
    
  }
  
  export interface addNewProductCartItem {
    type: ProductCartActionTypes.ADD_CART_ITEM;
    payload: IProductCartItem
    
  
  }
  
  export interface editProductCartItem {
    type: ProductCartActionTypes.EDIT_CART_ITEM;
    payload: IEditProductCart;
    
  }

  export interface deleteProductCartItem {
    type: ProductCartActionTypes.DELETE_CART_ITEM;
    payload:number
  }
  
 
  
  export type ProductCartAction =
    | addNewProductCartItem
    | editProductCartItem
    | deleteProductCartItem
  