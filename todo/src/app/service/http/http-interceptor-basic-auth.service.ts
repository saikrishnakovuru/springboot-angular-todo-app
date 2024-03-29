import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let name = "sai";
    let password = "sai";
    let basicAuthHeaderString = "Basic " + window.btoa(name + ":" + password);
    request.clone({
      setHeaders: {
        auth: basicAuthHeaderString,
      },
    });

    return next.handle(request);
  }
}
