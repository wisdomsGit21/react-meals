import Card from "../UI/Card";
import { DUMMY_MEALS } from "../data/DUMMY_MEALS";
import classes from "./AvailableMeals.module.css"
import Mealitem from "./MealItem/MealItem";

export default function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map(meal => <Mealitem
        key={meal.id}
        name={meal.name}
        descripton={meal.description}
        price={meal.price}
    />)
    return (
        <section className={classes.meals}>

            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>

        </section>
    )
}