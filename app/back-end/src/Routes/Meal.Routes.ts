import { Router } from 'express';
import MealsController from '../Controllers/MealController';

const routesMeals = Router();

routesMeals.get(
  '/meals',
  (req, res, next) => new MealsController(req, res, next)
    .findAllMealsController(),
);

routesMeals.post(
  '/create/meal',
  (req, res, next) => new MealsController(req, res, next)
    .createMealController(),
);

routesMeals.get(
  '/meal/:id',
  (req, res, next) => new MealsController(req, res, next)
    .findMealControllerId(),
);

routesMeals.get(
  '/meal/category/:category',
  (req, res, next) => new MealsController(req, res, next)
    .findMealControllerCategory(),
);

routesMeals.get(
  '/meal/name/:name',
  (req, res, next) => new MealsController(req, res, next)
    .findMealControllerName(),
);

routesMeals.get(
  '/meal/letter/:letter',
  (req, res, next) => new MealsController(req, res, next)
    .findMealControllerPrimaryLetter(),
);

export default routesMeals;