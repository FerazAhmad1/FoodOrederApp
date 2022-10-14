import React from "react";
import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cart, setCart] = useState(false);
  const cartHandler = (decision) => {
    setCart(decision);
  };
  return (
    <CartProvider>
      <div>
        {cart && <Cart onClick={cartHandler} />}
        <Header onClick={cartHandler}></Header>
        <AvailableMeals />
      </div>
    </CartProvider>
  );
}

export default App;
