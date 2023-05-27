import { Router } from 'express';
import UsersController from '../Controllers/UsersController';
import loginValidMiddleware from '../Middlewares/LoginValidMiddleware';
import TokenValidation from '../Middlewares/LoginValidToken';

const routesUser = Router();

routesUser.get(
  '/user/all',
  (req, res, next) => new UsersController(req, res, next)
    .findAllUserController(),
);

routesUser.post(
  '/login',
  loginValidMiddleware,
  (req, res, next) => new UsersController(req, res, next)
    .loginUserController(),
);

routesUser.get(
  '/login/role',
  TokenValidation,
  (req, res) => UsersController.roleAuthorization(req, res),
);

routesUser.post(
  '/register',
  (req, res, next) => new UsersController(req, res, next)
    .createUserController(),
);

export default routesUser;