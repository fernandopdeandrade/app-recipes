import express = require('express');
import cors = require('cors');
import ErrorHandler from './Middlewares/ErrorHandler';
import routesUser from './Routes/Users.Routes';
import routesDrinks from './Routes/Drink.Routes';
import routesMeals from './Routes/Meal.Routes';
import routesDrinksCategory from './Routes/DrinkCategory.Routes';
import routesMealsCategory from './Routes/MealCategory.Routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/images', express.static(`${__dirname}/../public/images`));

app.use(routesUser);
app.use(routesDrinks);
app.use(routesMeals);
app.use(routesDrinksCategory);
app.use(routesMealsCategory);

app.use(ErrorHandler.handle);

export default app;
