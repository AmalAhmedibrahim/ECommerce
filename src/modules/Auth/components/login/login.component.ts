import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/modules/Shared/models/user';
import { AlertifyService } from 'src/modules/Shared/services/alertify.service';
import { ConfigService } from 'src/modules/Shared/services/config.service';
import { TokenService } from 'src/modules/Shared/services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  submitFlag: boolean = false;
  emailValidationPattern: string;
  rememberMe: boolean = false;


  constructor(protected authService: AuthService, protected router: Router, private alertifyService: AlertifyService, private tokenService: TokenService) {
    this.user = { password: '', email: '' };
    this.emailValidationPattern = ConfigService.EmailValidationPattern;
  }

  ngOnInit() {
  }
  submit(form: NgForm) {
    this.submitFlag = true;
    if (form.valid) {
      this.authService.login(this.user).subscribe(res => {

        this.alertifyService.success("Login Successfully");
        if (this.rememberMe == true) {
          this.tokenService.setUserToken(res["token"]);
          this.tokenService.setUserName(res["name"]);
        }
        this.router.navigate([`/items`]);
      }, err => {
        this.alertifyService.error("Unexpected error happend. Please try again");
      });
    }
  }

}
