export class RegisterModel {
  confirmPassword: string;
  constructor(
    username: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    email: string,
    age?: number) {
  }
}
