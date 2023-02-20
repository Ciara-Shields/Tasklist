package com.thg.accerator.mytasklist.controller;

import com.thg.accerator.mytasklist.entity.Tasks;
import com.thg.accerator.mytasklist.service.TasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TasksController {
	@Autowired
	TasksService tasksService;


	@GetMapping("/tasks")
	public List<Tasks> getAllTasks(){
		return tasksService.getAllTasks();
	}
	@GetMapping("/tasks/{id}")
	public Tasks getTaskById(@PathVariable("id") long id){
		return tasksService.getTasksById(id);
	}
	@GetMapping("/tasks/progress/{progress}")
	public List<Tasks> getTasksByProgress(@PathVariable("progress") String progress)
	{
		return tasksService.getTaskByProgress(progress);
	}

	@GetMapping("/tasks/priority")
	public  List<Tasks> getTaskByPriority() {
		return tasksService.getTaskByPriority();
	}

	@PostMapping("/tasks/add")
	private ResponseEntity createTasks(@RequestBody Tasks tasks) {
		try {
			tasksService.saveOrUpdate(tasks);
		} catch (Exception exception){
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity( tasks, HttpStatus.CREATED);
	}
//
	@PutMapping("/tasks/{id}")
	public ResponseEntity<Long> editTask(@RequestBody Tasks newTask, @PathVariable("id") Long id) {
		Tasks editTask = this.tasksService.getTasksById(id);

		editTask.setProgress(newTask.getProgress());
		this.tasksService.edit(editTask);

		return new ResponseEntity<>(id, HttpStatus.OK);
	}

	@DeleteMapping("/tasks/{id}")
	private  ResponseEntity deleteById(@PathVariable("id") long id) {
		try {
			tasksService.delete(id);
		} catch (Exception exception){
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity( id, HttpStatus.OK);

	}

}
