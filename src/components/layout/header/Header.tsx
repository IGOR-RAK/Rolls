import React from "react";


const Header:React.FC = () => {
   
  
    return ( 
    <>     
     <div className="header-container">
			<img src="img/logo/logo.svg" width="92" alt="Roll"/>
      <div>
			<div className="header-container__display">Roll delivery</div>
			<p className="header-container__lead">Prompt and delicious</p>
      </div>
		</div>
     
    </>);
}

export  {Header};