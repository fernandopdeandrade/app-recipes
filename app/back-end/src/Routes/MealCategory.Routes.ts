import { Router } from 'express';
import MealsCategoryController from '../Controllers/MealCategoryController';

const routesMealsCategory = Router();

routesMealsCategory.get(
    '/meals-category',
    (req, res, next) => new MealsCategoryController(req, res, next)
        .findAllMealsCategoryController(),
);

routesMealsCategory.post(
    '/create/meal-category',
    (req, res, next) => new MealsCategoryController(req, res, next)
        .createMealCategoryController(),
);

routesMealsCategory.get(
    '/meal-category/:id',
    (req, res, next) => new MealsCategoryController(req, res, next)
        .findMealCategoryControllerId(),
);

export default routesMealsCategory;