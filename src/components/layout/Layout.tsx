import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";

const Layout = () => {
    return ( 
    <>
      <header className="header">
        <Header/>        
      </header> 
        <Outlet/>
      <footer className="footer">2021 Igor Rak</footer>
    </>);
}

export  {Layout};