import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Userdash = (props) => {
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");
  const [price, setPrice] = useState("");
  const [large, setLarge] = useState("");
  const [medium, setMedium] = useState("");
  const [small, setSmall] = useState("");

  const postDataFuction = (obj) => {
    fetch(
      "https://react-http-11-08-2023-default-rtdb.firebaseio.com/product.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
      }
    );
  };

  const onDataCollector = (e) => {
    e.preventDefault();
    const itemlist = {
      name: name,
      descr: descr,
      price: price,
      lQuantity: large,
      mQuantity: medium,
      sQuantity: small,
      id: Math.random().toString(),
    };
    props.onSaveData(itemlist);
    postDataFuction(itemlist);
  };

  return (
    <div className="container">
      <form className="form-control" onSubmit={onDataCollector}>
        <Row>
          <Col md={2}>
            <label>T-Shirt Name</label>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <label>Decription</label>
            <input
              value={descr}
              type="text"
              onChange={(e) => setDescr(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <label>Price</label>
            <input
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <label>Large</label>
            <input
              value={large}
              type="number"
              onChange={(e) => setLarge(e.target.value)}
            />
          </Col>
          <Col md={2} xs={0}>
            <label>Medium</label>
            <input
              value={medium}
              type="number"
              onChange={(e) => setMedium(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <label>Small</label>
            <input
              value={small}
              type="number"
              onChange={(e) => setSmall(e.target.value)}
            />
          </Col>
          <Button type="submit">Add Product</Button>
        </Row>
      </form>
    </div>
  );
};

export default Userdash;