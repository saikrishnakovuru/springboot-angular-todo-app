import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../service/data/todo';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  public loggedInPersonName: string;
  public message: string;
  public todos: Todo[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private welcomeDataService: WelcomeDataService,
    private todoDataService: TodoDataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loggedInPersonName = params['name'];
    });
  }

  public goToTodosPage(): void {
    this.router.navigate(['/todos']);
  }

  public getWelcomeMessage(): void {
    this.welcomeDataService
      .helloWordBeanService()
      .pipe(
        map((value) => {
          console.log(value.message);
          this.message = value.message;
        })
      )
      .subscribe();

    this.todoDataService
      .getAllTodos('sai')
      .pipe(
        map((todos) => {
          console.log(todos);
          this.todos = todos;
        })
      )
      .subscribe();
  }
}
