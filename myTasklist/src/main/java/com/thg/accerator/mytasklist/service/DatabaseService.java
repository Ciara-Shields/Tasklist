package com.thg.accerator.mytasklist.service;

import com.thg.accerator.mytasklist.entity.Database;
import com.thg.accerator.mytasklist.repository.DatabaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DatabaseService {

    DatabaseRepository databaseRepository;
    @Autowired
    public DatabaseService(DatabaseRepository databaseRepository) {
        this.databaseRepository = databaseRepository;
    }
    public List<Database> getAllTasks() {
        return new ArrayList<>(databaseRepository.findAll());
    }

}
