package org.manager.task.controller;


import org.manager.task.model.Response;
import org.manager.task.model.Task;
import org.manager.task.service.implementation.TaskImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

import static java.time.LocalDateTime.now;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskImplementation taskService;

    @GetMapping("/list")
    public ResponseEntity<Response> getTasks() {

        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("tasks", taskService.list()))
                        .message("Tarefas recuperadas")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build()
        );
    }



    @PostMapping("/save")
    public ResponseEntity<Response> saveTask(@RequestBody @Valid Task task) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("task", taskService.create(task)))
                        .message("Tarefa criada")
                        .status(HttpStatus.CREATED)
                        .statusCode(HttpStatus.CREATED.value())
                        .build()
        );
    }

    @PutMapping("/finish/{id}")
    public ResponseEntity<Response> finishTask(@PathVariable("id") Long id){
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("finish", taskService.finish(id)))
                        .message("Tarefa finalizada")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build()
        );
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Response> editTask(@RequestBody Task task, @PathVariable("id") Long id){
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("finish", taskService.update(id,task)))
                        .message("Tarefa finalizada")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build()
        );
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Response> getTask(@PathVariable("id") Long id) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("task", taskService.get(id)))
                        .message("Tarefa recuperada")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build()
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Response> deleteTask(@PathVariable("id") Long id) {
        return ResponseEntity.ok(
                Response.builder()
                        .timeStamp(now())
                        .data(Map.of("deleted", taskService.delete(id)))
                        .message("Tarefa deletada")
                        .status(HttpStatus.OK)
                        .statusCode(HttpStatus.OK.value())
                        .build()
        );
    }
}

