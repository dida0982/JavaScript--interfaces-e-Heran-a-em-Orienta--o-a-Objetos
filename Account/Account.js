export class Account {
  constructor(balanceInicial, customer, agency) {
        if(this.constructor == Account){
          throw new Error("You should not instantiate an object of type account directly, as this is an abstract class.");
        }
    this._balance = balanceInicial;
    this._customer = customer;
    this._agency = agency;
  }
  
  set customer(newValue) {
    if (newValue instanceof Customer) {
      this._customer = newValue;
    }
  }

  get customer() {
    return this._customer;
  }

  get balance() {
    return this._balance;
  }

  withdraw(value) {
    throw new Error("The method of withdrawing from the account is abstract");
  }

  _withdraw(value, rate) {
    const valueSacado = rate * value;
    if (this._balance >= valueSacado) {
      this._balance -= valueSacado;
      return valueSacado;
    }

    return 0;
  }

  deposit(value) {
    this._balance += value;
  }

  transfer(value, Account) {
    const valueSacado = this.withdraw(value);
    Account.deposit(valueSacado);
  }
}
