package com.todorest.entity;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Todo {
  private int id;
  private String userName;
  private String description;
  private boolean done;
  private LocalDate targetDate;
}
