export class Employees{
    constructor(name, wage, cpf){
        this._name = name;
        this._wage = wage;
        this._cpf = cpf;

        this._bonus = 1;
    }

    get password(){
        return this._password;
    }

    RegisterPassword(password){
        this._password = password;
    }
} 