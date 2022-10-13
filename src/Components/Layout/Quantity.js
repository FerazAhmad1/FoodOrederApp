import React from "react";
import classes from "./Quantity.module.css";
import Button from "./Button";

const Quantity = (props) => {
  return (
    <div>
      <label>Amount</label>
      <input type="text" defaultValue={1} className={classes.qty} />
      <br />
      <Button>+Add</Button>
    </div>
  );
};
export default Quantity;
