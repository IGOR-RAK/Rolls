import {   
    NavLink,Outlet
  } from "react-router-dom";
import { Counter } from "../ui/Counter";




const Layout = () => {
    return ( 
    <>
      <header className="header">
        <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
        <NavLink to="/contacts" className={({isActive}) => isActive ? 'active-link' : ''}>Contacts</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : ''}>About Us</NavLink>
        <Counter/>
      </header> 
      <main className="main">
        <Outlet/>
      </main>
      <footer className="footer">2021 Igor Rak</footer>
      
      
      
      
      
      </>);
}

export  {Layout};