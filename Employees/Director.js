import { Employees } from "./Employees.js";

export class Director extends Employees {
  constructor(name, wage, cpf) {
    super(name, wage, cpf);
    this._bonus = 2;
  }
}
