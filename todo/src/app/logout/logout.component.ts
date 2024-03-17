import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from '../service/login-logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent implements OnInit {
  ngOnInit(): void {
    this.loginLogoutService.loggedInLoggedOut.next(false);
  }

  constructor(private loginLogoutService: LoginLogoutService) {}
}
