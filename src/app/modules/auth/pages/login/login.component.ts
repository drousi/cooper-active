import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  password : string;
  showMessages: any = {};
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  rememberMe = false;

  constructor(protected router: Router) {}

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;
    console.log('login ..');
  }
}
