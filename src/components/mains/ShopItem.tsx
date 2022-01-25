import React from "react";
import { Counter } from "../ui/ItemCounter";
import { IShopItem } from "../../types/shop";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ShopItemButton } from "../ui/ShopItemButton";
import { BrowserView, MobileView} from 'react-device-detect';


interface IItemContainer {
    item:IShopItem
}

interface IItem extends IItemContainer{   
    visible:boolean
}

const ShopItemContainer:React.FC<IItemContainer> = ({item}) => {
    const {cart} = useTypedSelector((state) => state.product_cart);
    const [visible, setVisible] = React.useState(true)

    React.useEffect(()=>{
        if(cart.length > 0){            
            const find = cart.find(elem=>elem.id === item.id) || null              
            if(find){setVisible(false)} else {(setVisible(true))}
        } else {setVisible(true)}
    },[cart])
    
    return  <MemoizedShopItem 
    item={item}    
    visible={visible}/>        
}

export  {ShopItemContainer};

const ShopItem:React.FC<IItem> = ({item,visible}) => {  

    const [counter,setCounter] = React.useState(1)
 
    const increase = ()=>{setCounter(s=>s+1)}

    const decrease = ()=>{
        if(counter>1){setCounter(s=>s-1)}
       }

   
    return ( 
       <>
       <BrowserView className="card">
           
        <img className="card__img" src={item.img} alt=""/>
	    <div className="card__body ">
			<h4 className="card__title">{item.title}</h4>
            <p className="card__units"><small className="text-muted">{item.set} units</small></p>

			<div className="card__details-wrapper">
                
                <Counter counter={counter} increase={increase} decrease={decrease} />

                <div className="card__price">
                    <div className="card__price__weight">{item.weight}g.</div>
                    <div className="card__price__currency">{item.price} $</div>
                </div>
			</div>

            <ShopItemButton visible={visible} item={item} counter={counter} />            
     
     </div>
       </BrowserView>
       <MobileView className="card">
             
        <img className="card__img" src={item.img} alt=""/>
	    <div className="card__body ">
			<h4 className="card__title--mobile">{item.title}</h4>
            <p className="card__units"><small className="text-muted">{item.set} units</small></p>

			<div className="card__details-wrapper">
                
                <Counter counter={counter} increase={increase} decrease={decrease} />

                <div className="card__price">
                    <div className="card__price__weight">{item.weight}g.</div>
                    <div className="card__price__currency--mobile">{item.price} $</div>
                </div>
			</div>

            <ShopItemButton visible={visible} item={item} counter={counter} />
            
    
     </div>
       </MobileView>
     
     </>
    );
}


export const MemoizedShopItem = React.memo(ShopItem);