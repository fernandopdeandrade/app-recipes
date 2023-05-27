import * as bcrypt from 'bcryptjs';
import IUser from '../Interfaces/IUsers';
import IResponse from '../Interfaces/IResponse';
import { createToken } from '../utils/JwtToken';
import UserODM from '../Models/UsersODM';
import ILogin from '../Interfaces/ILogin';
import inputLogin from '../Validations/InputLogin';

const infoUserAdmin = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

export default class UserService {
  private model: UserODM;

  constructor() {
    this.model = new UserODM();
  }

  static async isAdminOrUser(email: string, password: string):
  Promise<boolean | undefined> {
    const { email: adminEmail, password: adminPassword } = infoUserAdmin;

    if (email === adminEmail && password === adminPassword) {
      return true;
    }

    return false;
  }

  public async loginUserService(email: string, password: string):
  Promise<IResponse> {
    const resultUser = await this
      .model.loginUserModel({ email } as IUser);
    const error = inputLogin({ email, password } as ILogin);

    if (error || resultUser === null) {
      return UserService.errorResponse(401, 'Invalid email or password 1');
    }

    const passwordCrypt = bcrypt
      .compareSync(password, resultUser?.password as string);

    if (!resultUser || !passwordCrypt) {
      return UserService.errorResponse(401, 'Invalid email or password');
    }

    const { id, role, username } = resultUser;
    const token = await createToken({ id, email, role, username });

    return UserService.successResponse(200, { token });
  }

  public async findAllUserService(): Promise<IResponse> {
    const users = await this.model.findAllUserModel();

    return UserService.successResponse(200, users);
  }

  public async createUserService(user: IUser): Promise<IResponse> {
    const { username, email, password } = user;
    let { role } = user;

    const userExists = await this.model.findUserByEmailModel(email);

    if (userExists) {
      return UserService.errorResponse(409, 'User already exists');
    }

    if (await UserService.isAdminOrUser(email, password)) {
      role = 'admin';
    } else { role = 'user'; }

    const cryptUserPassword = bcrypt.hashSync(password, 10);

    const newUser = await this.model.createUserModel({
      username, role, email, password: cryptUserPassword,
    } as IUser);

    return UserService.successResponse(201, newUser);
  }

  public async findUserByEmailService(email: string): Promise<IResponse> {
    const user = await this.model.findUserByEmailModel(email);

    if (!user) {
      return UserService.errorResponse(404, 'User not found');
    }

    return UserService.successResponse(200, user);
  }

  private static successResponse(status: number, message: unknown): IResponse {
    return { status, message };
  }

  private static errorResponse(status: number, message: unknown): IResponse {
    return { status, message };
  }
}