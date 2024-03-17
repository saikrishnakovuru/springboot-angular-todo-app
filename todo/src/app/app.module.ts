import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
