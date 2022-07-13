import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import { AiOutlineShopping } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


export default function NavBar() {
  //const [hidenForMenü, setHidenForMenü] = React.useState(true);


  return (
    <AppBar position="static" >
      <div className="nav-container">
        <div className="nav-logo" >
          <AiOutlineShopping className="nav-icons" />
        </div>
        <div className="nav-search" >
          search
        </div>
        <div className="nav-links-container">
          <Link to="/" >
            <strong>Home</strong>
          </Link>
          <Link to="/favorite" >
            <strong>Favorites</strong>
          </Link>
          <Link to="/order" >
            <strong>Bestellungen</strong>
          </Link>
          <Link to="/cart" >
            <MdAddShoppingCart className="nav-icons"/>
          </Link>
          <Link to="/login" >
            <strong>Einlogen</strong>
          </Link>
          {false && <Link to="/login" >
            <strong>Auslogen</strong>
          </Link>}
          <Link to="/profil" >
            <FaUserCircle className="nav-icons"/>
          </Link>
        </div>  
        </div> 
    </AppBar>
  );
}
