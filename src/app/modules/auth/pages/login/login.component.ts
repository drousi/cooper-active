import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email : string;
  password : string;
  error: string="";
  message: string="";
  submitted: boolean = false;

  constructor(protected router: Router, public authService: AuthService) {}

  login(): void {
    this.authService.login(this.email,this.password).then(
      (res) => {
        console.log(res.message);
        this.message = res.message;
        this.router.navigate(['dashboard']);
      },
      (err) => {
        console.error(err.message);
        this.error = err.message;
      }
    );
  }
}
