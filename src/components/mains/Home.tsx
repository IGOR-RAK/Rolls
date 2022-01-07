import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Home:React.FC = () => {
    const {cart} = useTypedSelector((state) => state.cart);
    const { increaseCart,decreaseCart,increaseCartThunk } = useActions();
    console.log("cart:",cart)
    return ( 
    <>     
     Home
     <button onClick={()=>{increaseCartThunk()}}>ADD</button>
     <button onClick={()=>{decreaseCart()}}>REMOVE</button>
     
    </>);
}

export  {Home};