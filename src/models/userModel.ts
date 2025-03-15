export class UserModel {
    name: string;
    email: string;
    password: string;
    token: string | null;

    constructor(name: string, email: string, password: string, token: string | null) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token;
    }
}
