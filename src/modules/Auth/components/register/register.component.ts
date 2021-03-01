import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { User } from './../../../Shared/models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from 'src/modules/Shared/services/config.service';
import { AlertifyService } from 'src/modules/Shared/services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  emailValidationPattern: string;
  passwordValidationPattern: string;
  emailIsExsist: boolean = false;
  submitFlag: boolean = false;

  constructor(protected authService: AuthService, protected router: Router, private alertifyService: AlertifyService) {
    this.user = { name: '', password: '', email: '', rePassword: '' };
    this.emailValidationPattern = ConfigService.EmailValidationPattern;
    this.passwordValidationPattern = ConfigService.PasswordValidationPattern;
  }

  ngOnInit() {
  }
  submit(form: NgForm) {

    this.submitFlag = true;
    if (form.valid) {
      this.emailIsExsist = false;
      this.authService.register(this.user).subscribe(res => {
        this.alertifyService.success("Registered Successfully");
        localStorage.setItem('token', res["token"]);
        localStorage.setItem('name', res["name"]);
        this.router.navigate([`/items`]);
      }, err => {
        console.log(err);
        if (err.error.error == "Email already Exist") {
          this.emailIsExsist = true;
          this.alertifyService.error(err.error.error);

        } else {
          this.alertifyService.error("Unexpected error happend. Please try again");

        }

      });
    }

  }
}
