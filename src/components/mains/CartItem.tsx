import React from "react";
import { useActions } from "../../hooks/useActions";
import { IProductCartItem } from "../../types/product_cart";
import {DeleteOutlined } from '@ant-design/icons';

interface ICartItemContainer {
    el:IProductCartItem
}

interface ICartItem extends ICartItemContainer{   
    
}

const CartItem:React.FC<ICartItem> = ({el}) => {
    const {deleteProductCart, editProductCart,changeTotal} = useActions();
    
    return ( 
        <div  className="cart__item">
                <img  src={el.img} className="cart__img" alt=""/>
                <div className="cart__info">
                <div className="cart__head"><h4 className="cart__title">{el.title} 
               
               
                </h4> <DeleteOutlined onClick={()=>{
                         const value = el.price * el.amount
                         changeTotal(-value)
                         deleteProductCart(el.id)}}/></div>
                <div className="cart__discr">
                <p className="cart__units"><small className="text-muted">{el.set} units</small></p>
                <span>/</span>
                <div>{el.weight} g.</div>
                </div>
                <div className="cart__calc">
                 <div className="cart__counter-wrapper">
                     {el.amount > 1?
                     <div className="cart__counter__control" onClick={()=>{
                         changeTotal(-el.price)
                         editProductCart({id:el.id, amount:-1})}}>-</div>
                     :
                     <div className="cart__counter__control" onClick={()=>{
                         changeTotal(-el.price)
                         deleteProductCart(el.id)}}>-</div>
                     }
                    
                     <div className="cart__counter__current">{el.amount} </div>

                     <div className="cart__counter__control" onClick={()=>{
                         changeTotal(el.price)
                         editProductCart({id:el.id, amount:1})}}>+</div>
                    
                     
                 </div>
                 <div className="cart__price">{el.price} $</div>
                 </div>
            </div>
            </div>
        );
}


export const MemoizedCartItem = React.memo(CartItem);