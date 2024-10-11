import { Account } from "../Account.js";

export class SalaryAccount extends Account {
  constructor(customer) {
    super(0, customer, 100);
  }
  withdraw(value) {
    const rate = 1.01;
    return this._sacar(value, rate);
  }
}
