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
    public Tasks saveOrUpdate(Tasks tasks) {
        return tasksRepository.save(tasks);
    }
    public void delete(long id) {
        tasksRepository.deleteById(id);
    }

    public List<Tasks> getTaskByProgress (String progress){
       return tasksRepository.findByProgress(progress);
    }

//    public Optional <List<Tasks> >getTaskByPriority (int priority){
//        return tasksRepository.findByPriority(priority);
//    }

}
