import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { CartContext } from "../context/Context";

const ListItem = (props) => {
  const { cartData } = CartContext();
  const cartCtx = cartData;


  const lButtonHandler = () => {
    props.onData(props.item, "lQuantity");

    putDataFunction(
      { ...props.item, lQuantity: Number(props.item.lQuantity) - 1 },
      props.item.ckey
    );

    cartDataFunction({
      name: props.item.name,
      descr: props.item.descr,
      id: props.item.id,
      price: props.item.price,
      lQuantity: 1,
      mQuantity: 0,
      sQuantity: 0,
    });

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

    putDataFunction(
      { ...props.item, mQuantity: Number(props.item.mQuantity) - 1 },
      props.item.ckey
    );

    cartDataFunction({
      name: props.item.name,
      descr: props.item.descr,
      id: props.item.id,
      price: props.item.price,
      lQuantity: 0,
      mQuantity: 1,
      sQuantity: 0,
    });

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

    putDataFunction(
      { ...props.item, sQuantity: Number(props.item.sQuantity) - 1 },
      props.item.ckey
    );

    cartDataFunction({
      name: props.item.name,
      descr: props.item.descr,
      id: props.item.id,
      price: props.item.price,
      lQuantity: 0,
      mQuantity: 0,
      sQuantity: 1,
    });

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

  const putDataFunction = (obj, id) => {
    fetch(
      `https://react-http-11-08-2023-default-rtdb.firebaseio.com/product/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(obj),
      }
    );
  };

  const cartDataFunction = (obj) => {
    let existingItemIdx = cartCtx.tshirstCartdata.findIndex(
      (ele) => ele.id === obj.id
    );
    if (existingItemIdx === -1) {
      fetch(
        `https://react-http-11-08-2023-default-rtdb.firebaseio.com/cartData.json`,
        {
          method: "POST",
          body: JSON.stringify(obj),
        }
      );
    }
  };

  const fireFunction = (item, size) => {
    console.log(item, size);
    let findEle = cartData.tshirstCartdata.find((ele) => ele.id === item.id);

    console.log(findEle);

    // if (findEle !== undefined) {
    if (size === "lQuantity" && findEle) {
      putCartFunction(
        { ...findEle, lQuantity: Number(findEle.lQuantity) + 1 },
        findEle.ckey
      );
    } else if (size === "mQuantity" && findEle) {
      putCartFunction(
        { ...findEle, mQuantity: Number(findEle.mQuantity) + 1 },
        findEle.ckey
      );
    } else if (size === "sQuantity" && findEle) {
      putCartFunction(
        { ...findEle, sQuantity: Number(findEle.sQuantity) + 1 },
        findEle.ckey
      );
    }
    // }
  };

  const putCartFunction = (obj, id) => {
    console.log(obj, id);
    fetch(
      `https://react-http-11-08-2023-default-rtdb.firebaseio.com/cartData/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(obj),
      }
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
                onClick={() => {
                  lButtonHandler();
                  fireFunction(props.item, "lQuantity");
                }}
              >
                Buy Large({props.item.lQuantity})
              </Button>
            </Col>
            <Col md={2}>
              <Button
                disabled={props.item.mQuantity === 0}
                onClick={() => {
                  mButtonHandler();
                  fireFunction(props.item, "mQuantity");
                }}
              >
                Buy Medium({props.item.mQuantity})
              </Button>
            </Col>
            <Col md={2}>
              <Button
                disabled={props.item.sQuantity === 0}
                onClick={() => {
                  sButtonHandler();
                  fireFunction(props.item, "sQuantity");
                }}
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