import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ShopList } from "./ShopList";
import { Cart } from "./Cart";
import { Modal } from "../ui/Modal";

const Page:React.FC = () => {
    const {showModal} = useTypedSelector((state) => state.modal);
    
    return ( 
        <main className="main">
            <div className="main__container">  
             <ShopList/>
             <Cart/>
             {showModal&&<Modal/>}
             </div>
        </main>);
}

export  {Page};