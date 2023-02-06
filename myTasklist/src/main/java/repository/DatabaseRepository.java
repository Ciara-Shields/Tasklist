package repository;

import entity.Database;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DatabaseRepository extends JpaRepository<Database, Long> {

    List<Database> findByName(String name);
}
