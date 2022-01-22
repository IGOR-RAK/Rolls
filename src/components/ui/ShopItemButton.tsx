import React from "react";
import { useActions } from "../../hooks/useActions";
import { IShopItem } from "../../types/shop";


interface IShopItemButton {
    visible:boolean;
    item:IShopItem;
    counter:number
}


const ShopItemButton:React.FC<IShopItemButton> = ({visible,item,counter}) => {
  
const { addProductCartItem, editProductCart, changeTotal } = useActions();

const onAddButtonClick = ()=>{
    addProductCartItem({...item,amount:counter})
    changeTotal (item.price*counter)
}

const onEditButtonClick = ()=>{
    editProductCart({id:item.id, amount:counter})
    changeTotal (item.price*counter)

}


    return ( 
        <>
            {visible ? 
            <button  type="button" onClick={onAddButtonClick} className="card__btn">+ to cart</button>
            :
            <button  type="button" onClick={onEditButtonClick} className="card__btn">+ to cart more</button>
            }		
        </>);
}

export  {ShopItemButton};