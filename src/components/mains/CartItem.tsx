import React from "react";
import { BrowserView, MobileView} from 'react-device-detect';
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
   
    const deleteItem = ()=>{
        const value = el.price * el.amount
        changeTotal(-value)
        deleteProductCart(el.id)}
    const decreaseItem = ()=>{
        changeTotal(-el.price)
        editProductCart({id:el.id, amount:-1})}
    const increaseItem = ()=>{
        changeTotal(el.price)
        editProductCart({id:el.id, amount:1})}
       
    
    return ( 
        <>
        <BrowserView className="cart__item">
        
            <img  src={el.img} className="cart__img" alt=""/>
                <div className="cart__info">
                <div className="cart__head">
                    <h4 className="cart__input-title">{el.title}</h4 > <span className="cart__icon"><DeleteOutlined onClick={deleteItem}/></span></div>
                <div className="cart__discr">
                <p className="cart__units"><small className="text-muted">{el.set} units</small></p>
                <span>/</span>
            <div>{el.weight} g.</div>
            </div>
            <div className="cart__calc">
             <div className="cart__counter-wrapper">
            {el.amount > 1?
            <div className="cart__counter__control" onClick={decreaseItem}>-</div>
                     :
            <div className="cart__counter__control" onClick={deleteItem}>-</div>
            }
                    
            <div className="cart__counter__current">{el.amount} </div>

            <div className="cart__counter__control" onClick={increaseItem}>+</div>
                    
                     
            </div>
            <div className="cart__price">{el.price} $</div>
                 
            </div>
            </div>
        </BrowserView>
        <MobileView className= "cart__item--mobile"> 
            <div className="cart__head--mobile">
                <img  src={el.img} width="80"  className="cart__img" alt=""/>
                <div className="cart__info--mobile">
                    <div className="cart__head">
                        <h4 className="cart__item-title--mobile">{el.title}</h4 >
                        <span className="cart__icon"><DeleteOutlined onClick={deleteItem}/></span>
                    </div>               
                    <div className="cart__calc--mobile">                 
                        <div className="cart__price--mobile">{el.price} $</div>
                    </div>                
                </div>
            </div>
            <div className="cart__footer--mobile" >
            <div className="cart__counter-wrapper--mobile">
                     {el.amount > 1?
                     <div className="cart__counter__control--mobile" onClick={decreaseItem}>-</div>
                     :
                     <div className="cart__counter__control--mobile" onClick={deleteItem}>-</div>
                     }
                    
                     <div className="cart__counter__current--mobile"> <span>{el.amount}</span> </div>

                     <div className="cart__counter__control--mobile" onClick={increaseItem}>+</div>
            </div>     
            </div>
                   
        </MobileView>
        
            </>
        );
}


export const MemoizedCartItem = React.memo(CartItem);