import { Router } from 'express';
import DrinksCategoryController from '../Controllers/DrinkCategoryController';

const routesDrinksCategory = Router();

routesDrinksCategory.get(
    '/drinks-category',
    (req, res, next) => new DrinksCategoryController(req, res, next)
        .findAllDrinkCategoryController(),
);

routesDrinksCategory.post(
    '/create/drink-category',
    (req, res, next) => new DrinksCategoryController(req, res, next)
        .createDrinkCategoryController(),
);

routesDrinksCategory.get(
    '/drink-category/:id',
    (req, res, next) => new DrinksCategoryController(req, res, next)
        .findDrinkCategoryControllerId(),
);

export default routesDrinksCategory;