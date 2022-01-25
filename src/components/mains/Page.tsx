import React from "react";
import { BrowserView, MobileView} from 'react-device-detect';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ShopList } from "./ShopList";
import { Cart } from "./Cart";
import { Modal } from "../ui/Modal";

const Page:React.FC = () => {
    const {visible} = useTypedSelector((state) => state.modal);
    const {isMobileMenu} = useTypedSelector((state) => state.isMobile);
    
    return ( 
        <>
        <BrowserView>
            <main className="main">
                <div className="main__container">  
                <ShopList/>
                <Cart/>
                {visible&&<Modal/>}
                </div>
            </main>
        </BrowserView>
        <MobileView className="main__mobile">        
               
                <ShopList/>
                <Cart/>
                {visible&&<Modal/>}
                          
        </MobileView>
        </>
    )
}

export  {Page};