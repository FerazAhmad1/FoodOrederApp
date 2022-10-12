import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.btnfamily}>
      <label>Amount</label>
      <input type="text" defaultValue={1} className={classes.qty} />
      <br />
      <button className={classes.btn}>{props.children}</button>
    </div>
  );
};
export default Button;
