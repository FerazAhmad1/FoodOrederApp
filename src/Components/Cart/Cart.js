import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  const clickHandler = () => {
    props.onClick(false);
  };
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button onClick={clickHandler} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
