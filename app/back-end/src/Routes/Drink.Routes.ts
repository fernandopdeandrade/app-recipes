import { Router } from 'express';
import DrinksController from '../Controllers/DrinkController';

const routesDrinks = Router();

routesDrinks.get(
    '/drinks',
    (req, res, next) => new DrinksController(req, res, next)
        .findAllDrinkController(),
);

routesDrinks.post(
    '/create/drink',
    (req, res, next) => new DrinksController(req, res, next)
        .createDrinkController(),
);

routesDrinks.get(
    '/drink/:id',
    (req, res, next) => new DrinksController(req, res, next)
        .findDrinkControllerId(),
);

routesDrinks.get(
    '/drink/category/:category',
    (req, res, next) => new DrinksController(req, res, next)
        .findDrinkControllerCategory(),
);

routesDrinks.get(
    '/drink/name/:name',
    (req, res, next) => new DrinksController(req, res, next)
        .findDrinkControllerName(),
);

routesDrinks.get(
    '/drink/letter/:letter',
    (req, res, next) => new DrinksController(req, res, next)
        .findDrinkControllerPrimaryLetter(),
);

export default routesDrinks;