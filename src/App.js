import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { CartContext } from "./context/Context";

function App() {
  const [itemList, setItemList] = useState([]);
  const [cartShows, setCartShows] = useState(false);
  const {
    cartData: { setCartItem },
  } = CartContext();

  const dataHandler = (input) => {
    setItemList((prevState) => {
      return [...prevState, input];
    });
  };

  const updateQTY = (item, size) => {
    // console.log(item, size);

    if (item) {
      setItemList((prevItem) => {
        let existingItemIdx = prevItem.findIndex((ele) => ele.id === item.id);
        let existingItem = prevItem[existingItemIdx];

        let updatedListItem;
        let updatedItem;
        let flag = 0;

        if (existingItem) {
          if (size === "lQuantity") {
            updatedItem = {
              ...existingItem,
              lQuantity:
                existingItem.lQuantity > 0 ? existingItem.lQuantity - 1 : 0,
            };
            flag = 1;
          } else if (size === "mQuantity") {
            updatedItem = {
              ...existingItem,
              mQuantity:
                existingItem.mQuantity > 0 ? existingItem.mQuantity - 1 : 0,
            };
            flag = 1;
          } else if (size === "sQuantity") {
            updatedItem = {
              ...existingItem,
              sQuantity:
                existingItem.sQuantity > 0 ? existingItem.sQuantity - 1 : 0,
            };
            flag = 1;
          }
          updatedListItem = [...prevItem];
          if (flag) updatedListItem[existingItemIdx] = updatedItem;
        }
        return updatedListItem;
      });
    }
  };

  const hideCarthandler = () => {
    setCartShows(false);
  };

  const showCarthandler = () => {
    setCartShows(true);
  };

  const datafetchfunction = useCallback(() => {
    fetch(
      "https://react-http-11-08-2023-default-rtdb.firebaseio.com/product.json"
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        let dataSet = [];
        for (const key in data) {
          dataSet.push({
            ckey: key,
            ...data[key],
          });
        }
        setItemList(dataSet);
      });

    fetch(
      "https://react-http-11-08-2023-default-rtdb.firebaseio.com/cartData.json"
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        let dataSet = [];
        for (const key in data) {
          dataSet.push({
            ckey: key,
            ...data[key],
          });
        }
        console.log(dataSet);
        setCartItem(dataSet);
      });
  }, [setCartItem]);


  useEffect(() => {
    datafetchfunction();
  }, [datafetchfunction]);

  return (
    <BrowserRouter>
      <Header onShow={showCarthandler}></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              itemlist={itemList}
              onSaveData={dataHandler}
              onData={updateQTY}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={cartShows && <Cart onClose={hideCarthandler} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;