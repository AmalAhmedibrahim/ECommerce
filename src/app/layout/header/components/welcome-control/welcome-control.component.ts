import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/modules/Shared/services/token.service';

@Component({
  selector: 'app-welcome-control',
  templateUrl: './welcome-control.component.html',
  styleUrls: ['./welcome-control.component.scss']
})
export class WelcomeControlComponent implements OnInit {
  isAuthorized: boolean;
  userName: string;

  constructor(private tokenService: TokenService) {

    tokenService.isAuthenticated()
      .subscribe(
        data => {


          this.isAuthorized = data;
        });

    this.userName = this.tokenService.getUserName();
  }

  ngOnInit() {
  }

}
