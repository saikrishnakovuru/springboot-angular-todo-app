package com.todorest.controllers;

import com.todorest.entity.HelloWorldBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class HelloWorldController {



  @GetMapping("/hello")
  public HelloWorldBean sayHello() {
    return new HelloWorldBean("Hello World !!");
  }

  @GetMapping("/test")
  public HelloWorldBean test() {
    throw new RuntimeException("No such record");
  }


}
