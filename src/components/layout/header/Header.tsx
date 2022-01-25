import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import {ShoppingCartOutlined} from '@ant-design/icons';
import { BrowserView, MobileView} from 'react-device-detect';

const Header:React.FC = () => {
  const {cart} = useTypedSelector((state) => state.product_cart); 
  const {isMobileMenu} = useTypedSelector((state) => state.isMobile); 
  const {showMobileMenu} = useActions();


  React.useEffect(
    ()=>{
      if(isMobileMenu){
        document.body.style.overflow = "hidden"
      }
      else { document.body.style.overflow = "auto"}
    },
    [isMobileMenu]
  )
   
  
    return ( 
<>
  <BrowserView>
        <div className="header-container">
          <img src="img/logo/logo.svg" width="92" alt="Roll"/>  
          <div className="header-info">                    
            <div className="header-container__display">Roll delivery</div>
            <p className="header-container__lead">Prompt and delicious</p>
          </div>
        
		    </div>
  </BrowserView>
  <MobileView>
        <div className="header--mobile">
          <img className="header__logo--mobile" src="img/logo/logo.svg" width="40" alt="Roll"/> 
          <div className="header__info--mobile">                      
            <div className="header__display--mobile">Roll delivery</div>
            <p className="header__lead--mobile" >Prompt and delicious</p>
          </div>
        <div>
         
          
          <ShoppingCartOutlined onClick={showMobileMenu} style={{ fontSize: '2rem', color: '#000',margin:'0 20px', position:"relative" }}/>
          {cart.length>0&&<div className="header__counter--mobile" onClick={showMobileMenu}><span>{cart.length}</span></div>}
        
          </div>
		    </div>
  </MobileView>
</>
    
     
    );
}

export  {Header};