import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";

const Layout = () => {
    return ( 
    <>
      <header className="header">
        <Header/>        
      </header> 
        <Outlet/>
      <footer className="footer">
        <p><span>GitHub Link:</span>  https://github.com/IGOR-RAK/Rolls</p>
        <p>2022 Igor Rak</p>
        </footer>
    </>);
}

export  {Layout};