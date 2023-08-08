import React from "react";
import { Badge, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/Context";

const Header = (props) => {
  const { cartData } = CartContext();
  const cartCtx = cartData;

  return (
    <Navbar
      className="d-flex justify-content-center "
      bg="$pink-300"
      variant="dark"
      style={{ height: 80, backgroundColor: "#1b2b5b" }}
    >
      <Navbar.Brand style={{ width: "50rem", color: "darkred" }}>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Link to="/cart" onClick={props.onShow}>
        <Button style={{ width: "95%", margin: "0 10px" }}>
          <FaShoppingCart color="white" />
          <Badge>{cartCtx.tshirstCartdata.length}</Badge>
        </Button>
      </Link>
    </Navbar>
  );
};

export default Header;