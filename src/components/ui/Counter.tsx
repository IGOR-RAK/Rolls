import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface ICounter {
    class:string,
}

const Counter:React.FC = () => {
    const {cart} = useTypedSelector((state) => state.cart); 
  
    return ( 
    <>     
     <div className="counter">{cart}</div>
     
    </>);
}

export  {Counter};