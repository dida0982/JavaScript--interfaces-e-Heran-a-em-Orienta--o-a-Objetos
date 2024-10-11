import { Employees } from "./Employees.js";

export class Manager extends Employees {
  constructor(name, wage, cpf) {
    super(name, wage, cpf);
    this._bonus = 1.1;
    this._password;
  }
  registerPassword(password) {
    this._password = password;
  }
}
