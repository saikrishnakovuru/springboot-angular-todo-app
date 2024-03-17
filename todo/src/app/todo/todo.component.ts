import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TodoImpl } from '../service/data/todo';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  public todo: TodoImpl;
  public id: number;

  public description: string;
  public targetDate: Date;

  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (+params['id']) {
        this.id = +params['id'];
      } else {
        this.id = null;
      }
    });
    if (this.id) {
      this.todoDataService
        .getTodoById('sai', this.id)
        .pipe(map((todo) => (this.todo = todo)))
        .subscribe();
    }
  }

  public onUpdate(form: NgForm): void {
    if (this.todo) {
      this.todoDataService
        .updateTodoById('sai', this.id, this.todo)
        .subscribe((data) => this.router.navigate(['/todos']));
    } else {
      this.todo = new TodoImpl();
      this.todo.description = this.description;
      this.todo.targetDate = this.targetDate;

      this.todoDataService
        .saveNewTodo('sai', this.todo)
        .subscribe((data) => this.router.navigate(['/todos']));
    }
  }
}
