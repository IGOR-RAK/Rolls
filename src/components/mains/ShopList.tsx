import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ShopItemContainer } from "./ShopItem";


const ShopList:React.FC = () => {
    const {shop} = useTypedSelector((state) => state.shop);
    
    return ( 
    <div className="products">   
        <div className="card-container" >

            {shop.map(item=> <ShopItemContainer item={item} key={item.id} />)}
           
            
        </div>
    </div>);
}

export  {ShopList};


