package com.thg.accerator.mytasklist.repository;

import com.thg.accerator.mytasklist.entity.Database;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface DatabaseRepository extends JpaRepository<Database, Long> {

//    List<Database> findByName(String taskName);
}