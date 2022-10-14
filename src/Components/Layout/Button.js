import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const clickHandler = (event) => {
    event.preventDefault();
    props.onClick(props.id);
  };
  return (
    <div>
      <button className={classes.btn} onClick={clickHandler}>
        {props.children}
      </button>
    </div>
  );
};
export default Button;
