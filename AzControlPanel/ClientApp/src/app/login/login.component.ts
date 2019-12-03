import { Component, OnInit } from '@angular/core';
import { LoginModel } from './models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private loginModel: LoginModel;

    constructor() {
        this.loginModel = new LoginModel({});
    }

    ngOnInit() {
    }

    signIn = () => {
    }
}
