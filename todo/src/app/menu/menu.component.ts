import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from '../service/login-logout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  isLoginOrLogout: boolean;

  constructor(private loginLogoutService: LoginLogoutService) {}

  ngOnInit() {
    this.loginLogoutService.loggedInLoggedOut.subscribe(
      (value) => (this.isLoginOrLogout = value)
    );
  }
}
