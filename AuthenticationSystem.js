export class AuthenticationSystem{
    static login(authenticable, password) {
        return authenticable.authenticate(password);
    }
}