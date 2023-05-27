export default interface IUser {
  id?: string;
  username: string;
  role: 'user' | 'admin';
  email: string;
  password: string;
  isAdminOrUser(email: string, password: string): Promise<boolean | undefined>;
}