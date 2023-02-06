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

@SpringBootApplication
@RestController
public class MyTasklistApplication {

//	implements CommandLineRunner

//	private static final Logger log = LoggerFactory.getLogger(MyTasklistApplication.class);
//
//	private final DatabaseRepository databaseRepository;
//
//	@Autowired
//	public MyTasklistApplication(DatabaseRepository databaseRepository) {this.databaseRepository = databaseRepository;}

	public static void main(String[] args) {
		SpringApplication.run(MyTasklistApplication.class, args);
	}

	@GetMapping("/urMa")
	public String urMa(){
		return "I Heart Ur Ma";
	}

	@GetMapping("/hello")
	public String sayHello(@RequestParam(value = "myName") String name){
		return String.format("Hello %s!", name);
	}
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
