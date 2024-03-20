import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  public helloWordBeanService() {
    let header = new HttpHeaders({
      Authorization: this.basicAuthenticationHeader(),
    });

    return this.http.get<HelloWorldBean>("http://localhost:8080/hello", {
      headers: header,
    });
  }

  private basicAuthenticationHeader() {
    let name = "sai";
    let password = "sai";
    let basicAuthHeaderString = "Basic " + window.btoa(name + ":" + password);
    return basicAuthHeaderString;
  }
}

class HelloWorldBean {
  constructor(public message: string) {}
}
