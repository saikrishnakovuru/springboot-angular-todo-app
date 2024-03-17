import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  public helloWordBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello');
  }
}

class HelloWorldBean {
  constructor(public message: string) {}
}
