import React, { useContext, useState } from "react";

const Cart = React.createContext();

export const CartContext = () => {
  return useContext(Cart);
};

const Context = (props) => {
  const [cartItems, setCartItem] = useState([]);

  const addItemHandler = (item, size) => {
    setCartItem((prevItem) => {
      let existingItemIdx = prevItem.findIndex((ele) => ele.id === item.id);
      let existingItem = prevItem[existingItemIdx];

      let updatedListItem;
      let updatedItem;
      let flag = 0;

      if (existingItem) {
        if (size === "sQuantity") {
          updatedItem = {
            ...existingItem,
            sQuantity: existingItem.sQuantity + 1,
          };
          flag = 1;
        } else if (size === "mQuantity") {
          updatedItem = {
            ...existingItem,
            mQuantity: existingItem.mQuantity + 1,
          };
          flag = 1;
        } else if (size === "lQuantity") {
          updatedItem = {
            ...existingItem,
            lQuantity: existingItem.lQuantity + 1,
          };
          flag = 1;
        }

        updatedListItem = [...prevItem];
        if (flag) updatedListItem[existingItemIdx] = updatedItem;
      } else {
        if (size === "sQuantity") {
          updatedListItem = [
            ...prevItem,
            { ...item, sQuantity: 1, mQuantity: 0, lQuantity: 0 },
          ];
        } else if (size === "mQuantity") {
          updatedListItem = [
            ...prevItem,
            { ...item, sQuantity: 0, mQuantity: 1, lQuantity: 0 },
          ];
        } else if (size === "lQuantity") {
          updatedListItem = [
            ...prevItem,
            { ...item, sQuantity: 0, mQuantity: 0, lQuantity: 1 },
          ];
        }
      }
      return updatedListItem;
    });
  };

  // console.log(upItemlist);

  // const removeTshirt = (item, size) => {
  //   console.log(item, size);
  //   setUpItemlist(() => {
  //     let updateProductList;
  //     let updateProductqty;
  //     if (size === "lQuantity") {
  //       updateProductqty = { ...item, lQuantity: item.lQuantity - 1 };
  //     }
  //   });
  // };

  // const updatedQtyData = {
  //   updatedQty: removeTshirt,
  // };

  const cartData = {
    tshirstCartdata: cartItems,
    addItem: addItemHandler,
  };

  return <Cart.Provider value={{ cartData }}>{props.children}</Cart.Provider>;
};

export default Context;