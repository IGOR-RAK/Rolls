import {ProductCartActionTypes,IProductCartItem,IEditProductCart,ProductCartAction } from "../../types/product_cart";



export const addProductCartItem = (item:IProductCartItem ) => {
 return {type:ProductCartActionTypes.ADD_CART_ITEM, payload:item}
};

export const editProductCart  = (item:IEditProductCart ) => {
    return {type:ProductCartActionTypes.EDIT_CART_ITEM, payload:item}
   };

   export const deleteProductCart  = (id:number ) => {
    return {type:ProductCartActionTypes.DELETE_CART_ITEM, payload:id}
   };


