package com.todorest.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.todorest.entity.Todo;
import com.todorest.services.TodoService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class TodoController {

  private TodoService todoService;

  public TodoController(TodoService todoService) {
    this.todoService = todoService;
  }

  @GetMapping("/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {
    return todoService.getAllTodos(username);
  }

  @DeleteMapping("/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodoById(@PathVariable String username, @PathVariable Long id) {
    Todo todo = todoService.deleteById(id);
    if (todo != null)
      return ResponseEntity.ok().build();

    return ResponseEntity.notFound().build();
  }

  @GetMapping("/users/{username}/todos/{id}")
  public Todo getTodoById(@PathVariable String username, @PathVariable Long id) {
    Todo todo = todoService.getTodoById(id);
    if (todo != null)
      return todo;
    throw new RuntimeException("No such Todo with searched ID found");
  }

  @PutMapping("/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodoById(@PathVariable String username, @PathVariable Long id,
      @RequestBody Todo todo) {
    System.out.println(todo.getTargetDate());
    Todo updateTodo = todoService.save(todo);
    return ResponseEntity.ok(updateTodo);
  }

  @PostMapping("/users/{username}/todos")
  public ResponseEntity<Void> saveNewTodo(@PathVariable String username, @RequestBody Todo todo) {
    Todo createdTodo = todoService.save(todo);
    createdTodo.setUserName(username);

    URI uri = ServletUriComponentsBuilder
        .fromCurrentRequest()
        .path("{/id}")
        .buildAndExpand(createdTodo.getId())
        .toUri();
    return ResponseEntity.created(uri).build();
  }

}
