import React, { useContext, useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;
  let updateTotalAmount;
  if (action.type === "ADD") {
    const finIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    if (finIndex >= 0) {
      updatedItems = state.items;
      state.items[finIndex].amount =
        state.items[finIndex].amount + action.item.amount;
      console.log(state.items);
    } else {
      updatedItems = state.items.concat(action.item);
    }
    // const updatedItems = state.items.concat(action.item);
    updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    console.log(action.id, state.items);
    const index = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const currentAmount = state.items[index].amount;
    if (currentAmount <= 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      console.log(updatedItems);

      updateTotalAmount = state.totalAmount - state.items[index].price;
      return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };
    } else {
      updatedItems = state.items;
      state.items[index].amount = state.items[index].amount - 1;
      updateTotalAmount = state.totalAmount - state.items[index].price;
      return {
        items: updatedItems,
        totalAmount: updateTotalAmount,
      };
    }
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
