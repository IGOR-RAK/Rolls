import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { PhoneInput } from "./PhoneInput";
import { CartMoneyInfo } from "./CartMoneyInfo";
import { MemoizedCartItem } from "./CartItem";
import { BrowserView, MobileView} from 'react-device-detect';
import {CloseCircleOutlined } from '@ant-design/icons';


const Cart:React.FC = () => {
    const {cart} = useTypedSelector((state) => state.product_cart); 
    const {hideMobileMenu} = useActions();  
    const {isMobileMenu} = useTypedSelector((state) => state.isMobile); 
   

    return ( 
        <>
        <BrowserView className={cart.length>0 ? "cart__container" : "cart__container-empty"}>            
                <div className="cart">
                    <h5 className="cart__title">Your order</h5>
                    {cart.length>0 ? 
                    cart.map(el=><MemoizedCartItem el={el} key={el.id}/> )
                    :
                    <div className="cart__empty"><p className="cart__empty-message"></p>You cart is empty</div>
                    }

                    <CartMoneyInfo cart={cart} />
                    
                    {cart.length>0 && <PhoneInput />}               
            </div>
        </BrowserView>
        <MobileView className={isMobileMenu?"cart--mobile active": "cart--mobile"}>
            
            
                <div className="cart__head--mobile">
                        <h5 className="cart__title">Your order</h5>
                        <CloseCircleOutlined onClick={hideMobileMenu} style={{fontSize:"1.5rem"}}/>
                </div>
                
                {cart.length>0 ? 
                cart.map(el=><MemoizedCartItem el={el} key={el.id}/> )
                :
                <div className="cart__empty"><p className="cart__empty-message"></p>You cart is empty</div>
                }

                
                <CartMoneyInfo cart={cart} />           
                {cart.length>0 && <PhoneInput />}

               
           
        </MobileView>
        </>
        
        );
}

export  {Cart};