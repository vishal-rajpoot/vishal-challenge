import "./App.css";
import Registeration from "./components/Registeration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoToMenu from "./components/GoToMenu";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import data from "./data/feeds.json";
import Thankyou from "./components/Thankyou";
import Login from "./components/Login";

function App() {
  const [cartItems, setCartitems] = useState([]);
  const { productItems } = data;

  const handleAddProduct = (product) => {
    const Productlist = cartItems.find((item) => item.id === product.id);
    console.log(Productlist);
    if (Productlist) {
      setCartitems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...Productlist, quantity: Productlist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartitems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  
  const handleRemoveProduct = (product) => {
    const Productlist = cartItems.find((item) => item.id === product.id);
    if (Productlist.quantity === 1) {
      setCartitems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartitems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...Productlist, quantity: Productlist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="*" element={<GoToMenu />} />
          <Route path="/vishal-challenge" element={<Registeration />} />
          <Route path="/vishal-challenge/gotomenu" element={<GoToMenu />} />
          <Route
            path="/vishal-challenge/registeration/products"
            element={
              <Products
                productItems={productItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            }
          />
          <Route
            path="/vishal-challenge/cart"
            element={
              <Cart
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/vishal-challenge/cart/thankyou"
            element={<Thankyou />}
          />
          <Route path="/vishal-challenge/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
