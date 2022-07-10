import React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar() {
  //const [hidenForMenü, setHidenForMenü] = React.useState(true);


  return (
    <AppBar position="static" >
      <div className="nav-container">
        <div className="logo" >
          <AiOutlineShopping className="logo-content" />
        </div>
        <div className="links-container">
          <Link to="/" >
            Home
          </Link>
          <Link to="/" >
            <AiOutlineShoppingCart className="link-shop-icon"/> Einkaufwagen
          </Link>
          <Link to="/" >
            Einlogen
          </Link>
          <Link to="/" >
            Auslogen
          </Link>
        </div>  
        </div> 
    </AppBar>
  );
}
