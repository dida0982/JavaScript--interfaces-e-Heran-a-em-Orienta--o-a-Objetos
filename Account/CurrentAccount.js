import { Account } from "./Account.js";

export class CurrentAccount extends Account {
  static numeroDeAccounts = 0;
  constructor(customer, agency) {
    super(0, customer, agency);
    CurrentAccount.numeroDeAccounts += 1;
  }

  withdraw(value) {
    let rate = 1.1;
    return this._withdraw(value, rate);
  }
}
