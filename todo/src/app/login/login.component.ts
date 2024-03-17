import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginLogoutService } from '../service/login-logout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  name: String;
  password: string;
  isUserNamePasswordInValid: boolean = false;
  errorMessage: string = 'Please enter valid userName and password';

  constructor(
    private router: Router,
    private loginLogoutService: LoginLogoutService
  ) {}

  ngOnInit() {}

  public onLogin(): void {
    if (this.name === 'sai' && this.password === 'sai') {
      this.isUserNamePasswordInValid = false;
      this.loginLogoutService.loggedInLoggedOut.next(true);
      this.router.navigate(['welcome', this.name]);
    } else {
      this.isUserNamePasswordInValid = true;
    }
    // this.isUserNamePasswordInValid =
    //   this.name === 'sai' && this.password === 'sai' ? false : true;

    // if (!this.isUserNamePasswordInValid) {
    //   this.loginLogoutService.loggedInLoggedOut.next(true);
    //   this.router.navigate(['welcome', this.name]);
    // }
  }
}
