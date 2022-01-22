import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PhoneInput } from "./PhoneInput";
import { CartMoneyInfo } from "./CartMoneyInfo";
import { MemoizedCartItem } from "./CartItem";



const Cart:React.FC = () => {
    const {cart} = useTypedSelector((state) => state.product_cart);    
   
  
    return ( 
        <div className={cart.length>0 ? "cart__container" : "cart__container-empty"} >
        <div className="cart">
            <h5 className="cart__title">Your order</h5>
            {cart.length>0 ? 
            cart.map(el=><MemoizedCartItem el={el} key={el.id}/> )
            :
            <div className="cart__empty"><p className="cart__empty-message"></p>You cart is empty</div>
            }

            <CartMoneyInfo cart={cart} />
            
            {cart.length>0 && <PhoneInput />}

        </div></div>);
}

export  {Cart};