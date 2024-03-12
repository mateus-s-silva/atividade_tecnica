package org.manager.task.service;

import org.manager.task.model.Task;

import java.util.List;

public interface TaskService {
    Task create(Task task);
    List<Task> list();
    Task get(Long id);
    Boolean finish(Long id);
    Task update(Long id, Task task);
    Boolean delete(Long id);
}
