import React, { useContext, useRef } from "react";
import classes from "./AvailableMeals.module.css";
import Quantity from "../Layout/Quantity";
import Button from "../Layout/Button";
import cartContext from "../../Store/cart-context";
const allMeals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finnest fish veggies",
    price: 22.9,
  },
  {
    id: "m2",
    name: "ScnitZel",
    description: "A german speciality",
    price: 22.9,
  },
  {
    id: "m3",
    name: "barbeque Burger",
    description: "American Raw meaty",
    price: 16.5,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Finnest fish veggies",
    price: 22.9,
  },
];

const AvailableMeals = () => {
  const ctx = useContext(cartContext);
  const inputRef = useRef();
  console.log(inputRef);

  const clickHandler = (id) => {
    const enteredAmount = inputRef.current.value;
    console.log(enteredAmount);
    const found = allMeals.find((meal) => {
      return meal.id === id;
    });
    ctx.addItem(found);
    console.log(ctx.items);
  };
  return (
    <div className={classes.container}>
      {allMeals.map((meal) => {
        return (
          <div className={classes.item} key={meal.id}>
            <ul className={classes.meal}>
              <p>{meal.name}</p>
              <li>{meal.description}</li>
              <li>{meal.price}$</li>
            </ul>
            <Quantity id={meal.id} ref={inputRef} />
            <Button onClick={clickHandler} id={meal.id}>
              +Add
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default AvailableMeals;
