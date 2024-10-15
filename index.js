import { Customer } from "./Customer.js";
import { Manager } from "./Employees/Manager.js";
import { Director } from "./Employees/Director.js";
import { AuthenticationSystem } from "./AuthenticationSystem.js";

const director = new Director("Rodrigo", 10000, 1321658413);
director.RegisterPassword("123456");

const manager = new Manager("Rodrigo", 5000, 1321658413);
manager.registerPassword("123");

const customer = new Customer("Lais", 52316854654, "456");

const managerLoggedIn = AuthenticationSystem.login(manager, "123");
const directorLoggedIn = AuthenticationSystem.login(director, "123456");

const customerLoggedIn = AuthenticationSystem.login(customer, "456");

console.log(managerLoggedIn, directorLoggedIn, customerLoggedIn);


