import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";


const Modal:React.FC = () => {
    const [message,setMessage] = useState("Your order has been sent")
    const {hideModal} = useActions();
    useEffect(
        ()=>{
                setTimeout(()=>{setMessage("Bye-bye")},2000)
                setTimeout(()=>{
                    hideModal();
                    document.location.reload();
                },3000)
                
        },[]
    )
    
    return ( 
        <div className="modal">
            <div className="modal__box">
                <p>{message}</p>
            </div>
        </div>);
}

export  {Modal};