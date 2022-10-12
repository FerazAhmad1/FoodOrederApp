import React from "react";
import classes from "./AvailableMeals.module.css";
import Button from "../Layout/Button";

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
  return (
    <div className={classes.container}>
      {allMeals.map((meal) => {
        return (
          <div className={classes.item}>
            <ul className={classes.meal}>
              <p>{meal.name}</p>
              <li>{meal.description}</li>
              <li>{meal.price}$</li>
            </ul>
            <Button>+add</Button>
          </div>
        );
      })}
    </div>
  );
};
export default AvailableMeals;
