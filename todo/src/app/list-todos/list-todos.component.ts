import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Todo } from '../service/data/todo';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent implements OnInit {
  public todos: Todo[];
  public recordDeletedMessage: string;

  // = [
  //   new Todo(1, 'Spring Security', false, new Date()),
  //   new Todo(2, 'Angular', false, new Date()),
  //   new Todo(3, 'React', false, new Date()),
  // ];

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.todoDataService
      .getAllTodos('sai')
      .pipe(map((todos) => (this.todos = todos)))
      .subscribe();
  }

  public onUpdate(id: number): void {
    this.router.navigate(['todos', id]);
  }

  public onDelete(id: number): void {
    this.todoDataService.deleteTodoById('sai', id).subscribe((response) => {
      this.recordDeletedMessage = 'Successfully deleted Todo with id ' + id;
      setTimeout(() => {
        this.recordDeletedMessage = '';
      }, 3000);
      this.refresh();
    });
  }

  public addNewTodo() {
    this.router.navigate(['/todos/new']);
  }
}
