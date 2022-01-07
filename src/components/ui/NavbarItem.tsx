import React from "react";

const li = "li"
const img = "img"


type Props = {
    className?: string
    item: string
    type: typeof li | typeof img
    
  }
  
  const NavbarItem: React.FC<Props> = (props) => (
    <li>{props.item}</li>
  )
  
  export default NavbarItem