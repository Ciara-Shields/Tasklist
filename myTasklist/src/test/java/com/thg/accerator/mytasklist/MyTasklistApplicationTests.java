//package com.thg.accerator.mytasklist;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//
//@SpringBootTest
//@AutoConfigureMockMvc
//public class MyTasklistApplicationTests {
//
//	@Autowired
//	private MockMvc mockMvc;
//
//	@Test
//	public void testGetEndpoint() throws Exception {
//		mockMvc.perform(MockMvcRequestBuilders.get("/tasks")
//						.contentType(MediaType.APPLICATION_JSON))
//				.andExpect(MockMvcResultMatchers.status().isOk())
//				.andExpect(MockMvcResultMatchers.content().string("Hello World!"));
//	}
//}





package com.thg.accerator.mytasklist;

import com.thg.accerator.mytasklist.controller.TasksController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
@SpringBootTest
class SmokeTest {

	@Autowired
	private TasksController tasksController;

	@Test
	public void contextLoads() throws Exception{
		assertThat(tasksController).isNotNull();
	}

}
