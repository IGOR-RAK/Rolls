import React from "react";
import NavbarItem from "./NavbarItem";


type Props = {
    className?: string
    items: string[]
  }
  
  const Navbar: React.FC<Props> = (props) => (
    <div className={props.className+"-box"}>
        <ul className={props.className+"-list"}>
            {props.items.map(item => <NavbarItem  item={item} className={props.className} type={"li"}/>)}
        </ul>
        
    </div>
  )
  
  export default Navbar