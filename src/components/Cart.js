import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { CartContext } from "../context/Context";
import Modal from "./UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const { cartData } = CartContext();
  const cartCtx = cartData;

  console.log(cartCtx.tshirstCartdata);

  const hasSomeItem = cartCtx.tshirstCartdata.length > 0;

  const totalCartAmount = cartCtx.tshirstCartdata.reduce(
    (acc, curr) =>
      acc +
      Number(curr.price) * (curr.sQuantity + curr.mQuantity + curr.lQuantity),
    0
  );

  const cartItem = (
    <ListGroup>
      <div>
        {cartCtx.tshirstCartdata.map((prod) => (
          <ListGroup.Item key={prod.id}>
            <Row>
              <Col style={{ fontWeight: "bolder" }}>
                <span>{prod.name}</span>
                <div style={{ color: "red" }}>Rs.{prod.price} /-</div>
              </Col>
              <Col>S x {prod.sQuantity}</Col>
              <Col>M x {prod.mQuantity}</Col>
              <Col>L x {prod.lQuantity}</Col>
              <Col style={{ fontWeight: "bolder" }}>
                Rs.
                {Number(prod.price) *
                  (prod.sQuantity + prod.mQuantity + prod.lQuantity)}
                /-
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </div>
    </ListGroup>
  );

  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs.{totalCartAmount}/-</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasSomeItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;