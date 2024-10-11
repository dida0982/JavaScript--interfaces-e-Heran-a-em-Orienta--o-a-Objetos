import { Account } from "../Account.js";

export class SavingsAccount extends Account {
  constructor(balanceInicial, customer, agency) {
    super(balanceInicial, customer, agency);
  }

  withdraw(value) {
    const rate = 1.01;
    return this._withdraw(value, rate);
  }
}
