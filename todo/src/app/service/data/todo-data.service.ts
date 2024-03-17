import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  public getAllTodos(username: string) {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
  }

  public deleteTodoById(username: string, id: number) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  public getTodoById(username: string, id: number) {
    return this.http.get<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  public updateTodoById(username: string, id: number, todo: Todo) {
    console.log(todo.targetDate);
    return this.http.put<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo
    );
  }

  public saveNewTodo(username: string, todo: Todo) {
    return this.http.post<Todo>(
      `http://localhost:8080/users/${username}/todos`,
      todo
    );
  }
}
