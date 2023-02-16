package com.thg.accerator.mytasklist.service;

import com.thg.accerator.mytasklist.entity.Tasks;
import com.thg.accerator.mytasklist.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TasksService {
    @Autowired
    TasksRepository tasksRepository;
//    @Autowired
    public TasksService(TasksRepository tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    public List<Tasks> getAllTasks() {
        return new ArrayList<>(tasksRepository.findAll());
    }

    public Tasks getTasksById(long id) {
//        Tasks task = (Tasks) this.tasksRepository.findById(id);
        Optional<Tasks> task = this.tasksRepository.findById(id);
        return task.orElse(null);
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

    public List<Tasks> getTaskByPriority (){
        return tasksRepository.findByOrderByPriority();
    }
    public void edit(Tasks tasks){
        this.tasksRepository.save(tasks);
    }
}
