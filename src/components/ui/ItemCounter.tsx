import React from "react";

interface ICounter  {
    counter:number;
    increase():void;
    decrease():void;
}


const Counter:React.FC<ICounter> = ({counter,increase,decrease}) => {
    
    return ( 
    <>     
     <div className="card__counter-wrapper">
                    <div className="card__counter__control" onClick={decrease} >-</div>
                    <div className="card__counter__current" ><span>{counter}</span></div>
                    <div className="card__counter__control" onClick={increase}>+</div>
     </div>
     
    </>);
}

export  {Counter};