import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "../../Store/cart-context";

const Cart = (props) => {
  const ctx = useContext(cartContext);
  const totalAmount = ` $${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length;
  console.log(ctx);

  const cartclickHandler = (event, id) => {
    if (event.target.value === "+") {
      const index = ctx.items.findIndex((item) => {
        return item.id === id;
      });
      let meal = { ...ctx.items[index], amount: 1 };
      ctx.addItem(meal);
    }

    if (event.target.value === "-") {
      ctx.removeItem(id);
    }
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <div className={classes.total}>
          <li>{item.name}</li>
          <li>{item.amount}</li>
          <li>{item.price}</li>
          <div>
            <input
              type="button"
              value="-"
              onClick={(event) => {
                cartclickHandler(event, item.id);
              }}
            />
            <input
              type="button"
              value="+"
              onClick={(event) => {
                cartclickHandler(event, item.id);
              }}
            />
          </div>
        </div>
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
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={clickHandler} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
