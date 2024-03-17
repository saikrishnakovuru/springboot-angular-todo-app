import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginLogoutService } from './login-logout.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  constructor(
    private loginLogoutService: LoginLogoutService,
    private router: Router
  ) {}

  // canActivate(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.loginLogoutService.loggedInLoggedOut.pipe(
  //     map((isLoggedIn) => {
  //       if (isLoggedIn) {
  //         return true;
  //       } else {
  //         this.router.navigate(['/login']);
  //         return false;
  //       }
  //     })
  //   );
  // }
  call: adsf = (name: string) => {
    return name;
  };

  canActivate: CanActivateFn = (
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean => {
    return this.loginLogoutService.loggedInLoggedOut.pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  };
}

interface Test {
  // adsf = (name: string) => string;
  one(value: number): string;
}

type adsf = (name: string) => string;
