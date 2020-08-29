import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string;
  error: string = '';
  message: string = '';
  submitted: boolean = false;
  constructor(public authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password).then(
      (res) => {
        console.log(res);
        this.error = '';
        this.message = 'Your account has been created';
      },
      (err) => {
        console.log(err);
        this.error = err.message;
        this.message = '';
      }
    );
  }
}
