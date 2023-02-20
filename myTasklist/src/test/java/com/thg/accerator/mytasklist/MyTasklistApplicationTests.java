package com.thg.accerator.mytasklist;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thg.accerator.mytasklist.entity.Tasks;
import com.thg.accerator.mytasklist.service.TasksService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


//@SpringBootTest
//@WebMvcTest(TasksController.class)
@AutoConfigureMockMvc
@SpringBootTest
public class MyTasklistApplicationTests {

	@MockBean
	TasksService tasksService;
	@Autowired
	@SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
	private MockMvc mockMvc;

	private ObjectMapper objectMapper = new ObjectMapper();
	@Test
	public void testGetAll() throws Exception {
//		when(tasksService.getAllTasks()).thenReturn(List.of(new Tasks(0, "egg", 0, "Not Started")));

		MvcResult result = mockMvc.perform(get("/tasks"))
				.andExpect(status().isOk())
				.andReturn();
		String stringResult = result.getResponse().getContentAsString();

		List taskList = objectMapper.readValue(stringResult, List.class);
		System.out.println(result.getResponse().getContentAsString());
		Assertions.assertThat(taskList).hasSize(0);
	}

	@Test
	public void postTest() throws Exception{

		Tasks myTask = new Tasks(0, "egg", 9, "Not Started");

		String json = objectMapper.writeValueAsString(myTask);

		MvcResult result = mockMvc.perform(

				post("/tasks/add")
						.contentType(MediaType.APPLICATION_JSON)
						.content(json)
				)
				.andExpect(status().isCreated())
				.andReturn();

	}
}



