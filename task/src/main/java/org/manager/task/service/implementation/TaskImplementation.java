package org.manager.task.service.implementation;


import org.manager.task.model.Task;
import org.manager.task.service.TaskService;
import org.manager.task.taskRepository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;



@Service
@Transactional
public class TaskImplementation implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task create(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public List<Task> list() {
        return taskRepository.findAll();
    }

    @Override
    public Task get(Long id) {
        return taskRepository.findById(id).orElseThrow(()
                -> new EntityNotFoundException("Task not found")
        );
    }

    @Override
    public Boolean finish(Long id) {
        Task task = taskRepository.getById(id);
        task.setSituacao(true);

        return Boolean.TRUE;
    }

    @Override
    public Task update( Long id ,Task task) {
        Task tarefa = taskRepository.getById(id);
        tarefa.setTitulo(task.getTitulo());
        tarefa.setSituacao(task.getSituacao());
        tarefa.setDeadline(task.getDeadline());
        tarefa.setResponsavel(task.getResponsavel());
        tarefa.setDescricao(task.getDescricao());
        return taskRepository.save(tarefa);
    }

    @Override
    public Boolean delete(Long id) {
        taskRepository.deleteById(id);
        return Boolean.TRUE;
    }
}
