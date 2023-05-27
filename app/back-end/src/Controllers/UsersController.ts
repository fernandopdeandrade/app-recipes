import { NextFunction, Request, Response } from 'express';
import UsersService from '../Services/UsersService';

class UsersController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private usersService: UsersService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.usersService = new UsersService();
  }

  public async loginUserController() {
    const { email, password } = this.req.body;

    try {
      const user = await this.usersService.loginUserService(email, password);
      return this.res.status(200).json(user);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllUserController() {
    try {
      const users = await this.usersService.findAllUserService();
      return this.res.status(200).json(users);
    } catch (error) {
      this.next(error);
    }
  }

  static async roleAuthorization(_req: Request, res: Response) {
    const { locals: { user: { data: { role } } } } = res;

    return res.status(200).json({ role });
  }

  public async createUserController() {
    const user = this.req.body;

    try {
      const newUser = await this.usersService.createUserService(user);
      return this.res.status(201).json(newUser);
    } catch (error) {
      this.next(error);
    }
  }

  //   public async findUserControllerEmail() {
  //     const { email } = this.req.params;

  //     try {
  //       const user = await this.service.findUserServiceEmail(email);
  //       return this.res.status(200).json(user);
  //     } catch (error) {
  //       this.next(error);
  //     }
  //   }

  //   public async updateUserController() {
  //     const user: IUsers = {
  //       username: this.req.body.username,
  //       role: this.req.body.role,
  //       email: this.req.body.email,
  //       password: this.req.body.password,
  //     };

  //     const { id } = this.req.params;

  //     try {
  //       const updatedUser = await this.service.updateUserService(id, user);
  //       return this.res.status(200).json(updatedUser);
  //     } catch (error) {
  //       this.next(error);
  //     }
  //   }

  //   public async deleteUserController() {
  //     const { id } = this.req.params;

  //     try {
  //       await this.service.deleteUserService(id);
  //       return this.res.status(204).json({ message: 'User deleted' });
  //     } catch (error) {
  //       this.next(error);
  //     }
  //   }
}

export default UsersController;