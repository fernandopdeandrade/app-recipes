import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IUser from '../Interfaces/IUsers';

class UserODM extends AbstractODM<IUser> {
  constructor() {
    const userSchema = new Schema<IUser>({
      username: { type: String, required: true },
      role: { type: String, required: false },
      email: { type: String, required: true },
      password: { type: String, required: true },
    });
    super(userSchema, 'users');
  }

  public async loginUserModel(user: IUser): Promise<IUser | null> {
    const result = this.model.findOne({ email: user.email });
    return result;
  }         

  public async createUserModel(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }

  public async findAllUserModel(): Promise<IUser[]> {
    return this.model.find({});
  }

  public async findUserByEmailModel(email: string): Promise<IUser | null> {
    return this.model.findOne({ email });
  }
}

export default UserODM;