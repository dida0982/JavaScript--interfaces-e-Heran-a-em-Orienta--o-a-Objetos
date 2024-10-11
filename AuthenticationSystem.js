export class AuthenticationSystem{
    static login(employees, password) {
        return employees.password == password;
    }
}