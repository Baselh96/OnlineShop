import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar() {
  const [hidenForMenü, setHidenForMenü] = React.useState(true);


  const hidMenu = () => {
    setHidenForMenü(true);
  };

  return (
    <AppBar position="static" style={{ height: "53px" }}>
      <div>
        <div style={{ width: "60%" }}>
          <AiOutlineShoppingCart />
        </div>
        <div >
          <Link to="/" >
            Home
          </Link>
          <Link to="/" >
            <AiOutlineShopping />
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
