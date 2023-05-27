import ILogin from '../Interfaces/ILogin';
import loginSchema from './LoginSchema';

const inputLogin = (user: ILogin) => {
  const { error } = loginSchema.validate(user);
  if (error) {
    return error;
  }
  return null;
};

export default inputLogin;