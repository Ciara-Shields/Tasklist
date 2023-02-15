package com.thg.accerator.mytasklist.repository;

import com.thg.accerator.mytasklist.entity.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TasksRepository extends JpaRepository<Tasks, Long> {

//    List<Tasks> findByTaskName(String taskName);

//    List<Tasks> findById(long id);

    List<Tasks> findByProgress(String progress);

    List<Tasks> findByPriority (int priority);
}
