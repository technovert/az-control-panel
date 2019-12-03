export class LoginModel {
    public email: string;
    public password: string;
    public rememberMe: boolean;

    constructor(args: any) {
        this.email = args.email || "";
        this.password = args.password || "";
        this.rememberMe = args.rememberMe || false;
    }
}
