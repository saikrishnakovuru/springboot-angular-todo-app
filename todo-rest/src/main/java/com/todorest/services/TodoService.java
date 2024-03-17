package com.todorest.services;

import com.todorest.entity.Todo;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class TodoService {
  private final List<Todo> todosList;
  private int id = 0;

  public TodoService() {
    this.todosList = new ArrayList<>();

    todosList.addAll(
        Arrays.asList(
            new Todo(++id, "Sai", "Java", false, LocalDate.now()),
            new Todo(++id, "Uj", "Angular", false, LocalDate.now()),
            new Todo(++id, "Pb", "React", false, LocalDate.now()),
            new Todo(++id, "Sai", "AWS", false, LocalDate.now())));
  }

  private Optional<Todo> getTodoBySpecificId(Long id) {
    return todosList.stream()
        .filter(todo -> todo.getId() == id)
        .findFirst();
  }

  public List<Todo> getAllTodos(String username) {
    return todosList;
  }

  public Todo deleteById(Long id) {
    Optional<Todo> optionalTodo = getTodoBySpecificId(id);

    optionalTodo.ifPresent(todo -> todosList.remove(todo));
    return optionalTodo.orElse(null);
  }

  public Todo getTodoById(Long id) {
    return getTodoBySpecificId(id).orElse(null);
  }

  public Todo save(Todo todo) {
    // return todosList
    // .stream()
    // .filter(t -> t.getId() == todo.getId())
    // .peek(t -> todosList.set(todosList.indexOf(t), todo))
    // .findFirst()
    // .get();

    return todosList
        .stream()
        .filter(t -> t.getId() == todo.getId())
        .findFirst()
        .map(existingTodo -> {
          todo.setDone(todo.getTargetDate().isBefore(LocalDate.now()) ? true : false);
          todosList.set(todosList.indexOf(existingTodo), todo);
          return todo;
        })
        .orElseGet(() -> {
          todo.setId(++id);
          todo.setDone(todo.getTargetDate().isBefore(LocalDate.now()) ? true : false);
          todosList.add(todo);
          return todo;
        });
  }

}