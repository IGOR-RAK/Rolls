import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IProductCartItem } from "../../types/product_cart";


interface ICartMoneyInfo{
    cart: IProductCartItem[]
}

const CartMoneyInfo:React.FC<ICartMoneyInfo> = ({cart}) => {
    const {transfer,cost} = useTypedSelector((state) => state.total);      
    return ( 
        <>
            <div className="cart__transfer"><span>Shipping:</span> {transfer===0 ? <span className="cart__free">free</span> : <span>{transfer} $</span>}</div>

            {transfer !==0 && <div className="cart__small"><small>shipping over $40 is free</small></div>}

            {cart.length ?
            <div className="cart__box"><div className="cart__total"><span>Total:</span> <span>{cost+transfer} $</span></div ></div>
            :
            <div className="cart__total"><span>Total:</span> <span>0 $</span>  </div>}
        </>);
}

export  {CartMoneyInfo};