import {Component, OnInit} from '@angular/core';

import {Login} from '../login';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public email = '';
    public password = '';
    constructor(private httpClient: HttpClient, private fb: FormBuilder, private router: Router) {}

    ping() {
        this.httpClient.get("http://localhost:8000/authentication_token").subscribe(
            (data) => console.log(data),
            (err) => console.log(err)
        );
    }


    submit() {
        if (
            0 !== this.email.trim().length &&
            0 !== this.password.trim().length
        ) {
            this.httpClient.post<{token: string}>('https://localhost:8000/authentication_token', {
                email: this.email,
                password: this.password,
            }).subscribe((data) => {
                localStorage.setItem('access_token', data.token);
                this.router.navigate(['/']);
            });
        }
    }

    public get loggedIn(): boolean{

        if(localStorage.getItem('access_token') !==  null)
            this.router.navigate(['']);
            return localStorage.getItem('access_token') !==  null;
    }
}
