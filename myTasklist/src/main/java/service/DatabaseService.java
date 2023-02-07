package service;

import entity.Database;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;
import repository.DatabaseRepository;

import java.util.ArrayList;

@Service
public class DatabaseService {
    DatabaseRepository databaseRepository;

    @Autowired
    public DatabaseService(DatabaseRepository databaseRepository) {
        this.databaseRepository = databaseRepository;
    }
    public List<Task> getAllTasks() {
        return new ArrayList<>(databaseRepository.findAll());
    }

}
