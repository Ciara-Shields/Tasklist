package com.thg.accerator.mytasklist.service;

import com.thg.accerator.mytasklist.entity.Database;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.thg.accerator.mytasklist.repository.DatabaseRepository;

import java.util.List;

@Service
public class DatabaseService {
    DatabaseRepository databaseRepository;

    public DatabaseService(DatabaseRepository databaseRepository) {
        this.databaseRepository = databaseRepository;
    }
    public List<Database> getAllTasks() {
        return new List<>(databaseRepository.findAll());
    }

}
