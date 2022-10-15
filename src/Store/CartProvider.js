import React, { useContext, useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, disPatch] = useReducer(cartReducer, defaultCartState);
  const ctx = useContext(CartContext);
  const addItemToCartHandler = (meal) => {
    console.log(meal);
    disPatch({ type: "ADD", item: meal });
  };
  const removeItemFromCartHandler = (id) => {
    disPatch({ type: "REMOVE", id: id });
  };

  const initialContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={initialContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
