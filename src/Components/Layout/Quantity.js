import React from "react";
import classes from "./Quantity.module.css";

const Quantity = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Quantity;
