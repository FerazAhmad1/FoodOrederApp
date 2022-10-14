import React, { Fragment, useContext } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import Summary from "./Summary";
import cartContext from "../../Store/cart-context";

const Header = (props) => {
  const ctx = useContext(cartContext);

  // const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  const clickHandler = () => {
    props.onClick(true);
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button onClick={clickHandler}>
          Your Cart <span>{0}</span>
        </button>
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
