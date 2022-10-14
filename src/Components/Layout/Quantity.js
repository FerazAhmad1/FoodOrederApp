import React from "react";
import classes from "./Quantity.module.css";

const Quantity = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div>
      <label htmlFor={props.id + "a"}>Amount</label>
      <input id={props.id} ref={ref} type="number" className={classes.qty} />
    </div>
  );
});
export default Quantity;
