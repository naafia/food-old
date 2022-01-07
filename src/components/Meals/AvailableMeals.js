import { useEffect,useState } from 'react';

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
const [meals, setMealsFn] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      // const response = await fetch('https://react-http-77b09-default-rtdb.firebaseio.com/meals.json');
      const response = await fetch('https://react-customhook-388f8-default-rtdb.firebaseio.com/cart.json');
      // const response = await fetch('./Ameals.json');
      const responseData = response.json; //parse data it is a promise of object
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMealsFn(loadedMeals);   
      // console.log(loadedMeals);
      console.log(responseData);
      console.log(response);
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
