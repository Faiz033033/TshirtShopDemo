import React, { Fragment } from "react";
import CartButton from "./CartButton";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
        <header className="header">
        <h1 >Welcome To Sharpner Store</h1>
        <CartButton/>
        </header>
      
    </Fragment>
  );
};

export default Header;
