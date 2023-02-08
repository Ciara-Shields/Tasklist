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

//	@Autowired
//	public MyTasklistApplication(final DatabaseService databaseService) {
//		this.databaseService = databaseService;


	@GetMapping("/tasks")
	public List<Tasks> getAllTasks(){
		return tasksService.getAllTasks();
	}
	@GetMapping("/tasks/{id}")
	private Tasks getTaskById(@PathVariable("id") int id){
		return tasksService.getTasksById(id);
	}

	@PostMapping("/tasks")
	private ResponseEntity createTasks(@RequestBody Tasks tasks) {
		try {
			tasksService.saveOrUpdate(tasks);
		} catch (Exception exception){
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity("New task created with id:" + tasks.getId(), HttpStatus.CREATED);
	}

	@DeleteMapping("/tasks/{id}")
	private  ResponseEntity deleteById(@PathVariable("id") int id) {
		try {
			tasksService.delete(id);
		} catch (Exception exception){
			return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity("New task created with id:" + id, HttpStatus.OK);

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