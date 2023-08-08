import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { CartContext } from "../context/Context";

const ListItem = (props) => {
  const { cartData } = CartContext();
  const cartCtx = cartData;

  const lButtonHandler = () => {
    props.onData(props.item, "lQuantity");

    cartCtx.addItem(
      {
        name: props.item.name,
        descr: props.item.descr,
        id: props.item.id,
        price: props.item.price,
      },
      "lQuantity"
    );
  };
  const mButtonHandler = () => {
    props.onData(props.item, "mQuantity");
    cartCtx.addItem(
      {
        name: props.item.name,
        descr: props.item.descr,
        id: props.item.id,
        price: props.item.price,
      },
      "mQuantity"
    );
  };
  const sButtonHandler = () => {
    props.onData(props.item, "sQuantity");
    cartCtx.addItem(
      {
        name: props.item.name,
        descr: props.item.descr,
        id: props.item.id,
        price: props.item.price,
      },
      "sQuantity"
    );
  };

  return (
    <ListGroup className="container">
      <div>
        <ListGroup.Item>
          <Row>
            <Col md={2}>
              <span>{props.item.name}</span>
            </Col>
            <Col md={2}>
              <span>{props.item.descr}</span>
            </Col>
            <Col md={2}>
              <span>RS.{props.item.price}/-</span>
            </Col>
            <Col md={2}>
              <Button
                disabled={props.item.lQuantity === 0}
                onClick={lButtonHandler}
              >
                Buy Large({props.item.lQuantity})
              </Button>
            </Col>
            <Col md={2}>
              <Button
                disabled={props.item.mQuantity === 0}
                onClick={mButtonHandler}
              >
                Buy Medium({props.item.mQuantity})
              </Button>
            </Col>
            <Col md={2}>
              <Button
                disabled={props.item.sQuantity === 0}
                onClick={sButtonHandler}
              >
                Buy Small({props.item.sQuantity})
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </div>
    </ListGroup>
  );
};

export default ListItem;