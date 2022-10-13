import React from "react";
import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div>
      <Cart />
      <Header></Header>
      <AvailableMeals />
    </div>
  );
}

export default App;
