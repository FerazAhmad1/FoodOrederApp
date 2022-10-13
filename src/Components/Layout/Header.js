import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import Summary from "./Summary";

const Header = (props) => {
  const clickHandler = () => {
    console.log("yes");
    props.onClick(true);
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button onClick={clickHandler}>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt=" A table full of delicius food " />
      </div>
      <Summary></Summary>
      {props.children}
    </Fragment>
  );
};
export default Header;
