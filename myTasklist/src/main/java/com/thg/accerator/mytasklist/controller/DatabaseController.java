package com.thg.accerator.mytasklist.controller;

import com.thg.accerator.mytasklist.service.DatabaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DatabaseController {
	@Autowired
	DatabaseService databaseService;

//	@Autowired
//	public MyTasklistApplication(final DatabaseService databaseService) {
//		this.databaseService = databaseService;


	@GetMapping("/tasks")
	public List getAllTasks(){
		return databaseService.getAllTasks();
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
