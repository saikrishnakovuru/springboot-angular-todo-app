import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginLogoutService {
  public loggedInLoggedOut = new BehaviorSubject<boolean>(false);

  constructor() {}
}
