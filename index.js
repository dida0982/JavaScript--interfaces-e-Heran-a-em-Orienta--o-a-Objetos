import { Customer } from "./Customer.js";
import { Manager } from "./Employees/Manager.js";
import { Director } from "./Employees/Director.js";
import { AuthenticationSystem } from "./AuthenticationSystem.js";

const director = new Director("Rodrigo", 10000, 1321658413);
const manager = new Manager("Rodrigo", 10000, 1321658413);

const loggedIn = AuthenticationSystem.login(director, "123456789");

console.log(loggedIn);
