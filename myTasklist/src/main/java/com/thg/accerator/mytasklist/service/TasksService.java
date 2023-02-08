package com.thg.accerator.mytasklist.service;

import com.thg.accerator.mytasklist.entity.Tasks;
import com.thg.accerator.mytasklist.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TasksService {
    @Autowired
    TasksRepository tasksRepository;
    @Autowired
    public TasksService(TasksRepository tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    public List<Tasks> getAllTasks() {
        return new ArrayList<>(tasksRepository.findAll());
    }

    public Tasks getTasksById(int id) {
        return tasksRepository.findById(id).get(id);
    }

}
