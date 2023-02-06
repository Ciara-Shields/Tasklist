package repository;

import entity.Database;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DatabaseRepository extends CrudRepository<Database, Long> {

    List<Database> findByName(String name);
}
