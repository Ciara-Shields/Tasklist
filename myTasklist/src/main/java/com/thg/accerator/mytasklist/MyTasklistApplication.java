package com.thg.accerator.mytasklist;

import entity.Database;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import repository.DatabaseRepository;
import service.DatabaseService;

import java.util.ArrayList;

@SpringBootApplication
@RestController
public class MyTasklistApplication {

	private final DatabaseService databaseService;

	@Autowired
	public MyTasklistApplication(DatabaseService databaseService) {
		this.databaseService = databaseService;
	}

//	implements CommandLineRunner

//	private static final Logger log = LoggerFactory.getLogger(MyTasklistApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(MyTasklistApplication.class, args);
	}

	@GetMapping("/tasklist")
	public ArrayList<Database> getAllTasks(){
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
