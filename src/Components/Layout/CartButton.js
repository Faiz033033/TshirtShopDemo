import React from "react";
import classes from "./CartButton.css";

const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span>Your Cart</span>
      <span className={classes.badge}>5</span>
    </button>
  );
};

export default CartButton;
