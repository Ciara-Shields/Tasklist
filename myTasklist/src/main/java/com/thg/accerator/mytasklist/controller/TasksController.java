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

	@GetMapping("/tasks/priority/{priority}")
	public  List<Tasks> getTaskByPriority(@PathVariable("priority") int priority) {
		return tasksService.getTaskByPriority(priority);
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
//	@PutMapping("/tasks/{id}")
//
//	}

	@DeleteMapping("/tasks/{id}")
	private  ResponseEntity deleteById(@PathVariable("id") long id) {
		try {
			tasksService.delete(id);
		} catch (Exception exception){
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity( id, HttpStatus.OK);

	}

//	@GetMapping("/hello")
//	public String sayHello(@RequestParam(value = "myName") String name){
//		return String.format("Hello %s!", name);
//	}
//	@Override
//	public void  run(String... args) throws Exception{
//		log.info("delete anything that exists");
//		databaseRepository.deleteAll();
//		log.info("inserting data");
//		databaseRepository.save(new Database());
//		databaseRepository.save(new Database());
//		log.info("reading data");
//		for(Database db: databaseRepository.findAll()){
//			log.info();
//		}
//	}

}
