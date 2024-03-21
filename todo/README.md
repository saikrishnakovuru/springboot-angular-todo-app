## HttpInteceptorBasicAuthService

Implemented interseptor to add header to all the http requests!

```typescript
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
```
