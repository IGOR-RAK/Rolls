import React from "react";
import { BrowserView, MobileView} from 'react-device-detect';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ShopItemContainer } from "./ShopItem";


const ShopList:React.FC = () => {
    const {shop} = useTypedSelector((state) => state.shop);
    
    return ( 

 <><BrowserView>
 <div className="products">   
        <div className="card-container" >

            {shop.map(item=> <ShopItemContainer item={item} key={item.id} />)}
           
            
        </div>
    </div>
</BrowserView>
<MobileView className="products__mobile">
  
        <div className="card-container--mobile" >

            {shop.map(item=> <ShopItemContainer item={item} key={item.id} />)}
           
            
       
     </div>
</MobileView></>

    
    
    
    
    
    );
}

export  {ShopList};


