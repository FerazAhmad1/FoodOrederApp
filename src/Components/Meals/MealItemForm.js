import React, { useRef, useState, useContext } from "react";
import classes from "./MealItemForm.module.css";

import Quantity from "../Layout/Quantity";
import cartContext from "../../Store/cart-context";

const MealItemForm = (props) => {
  const ctx = useContext(cartContext);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enterdAmount;

    if (
      enteredAmountNumber === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    ctx.addItem({
      id: props.Meal.id,
      name: props.Meal.name,
      amount: enteredAmountNumber,
      price: props.Meal.price,
    });
  };
  return (
    <form action="" className={classes.form} onSubmit={submitHandler}>
      <Quantity
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>please enter a valid amount</p>}
    </form>
  );
};
export default MealItemForm;
