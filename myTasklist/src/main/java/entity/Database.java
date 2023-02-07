package entity;


import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;


@Table(name = "DATABASE")
//@Entity
public class Database {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String taskName;
    int priority;

    public Database(int taskID, String taskName, int priority ) {
        this.id = taskID;
        this.taskName = taskName;
        this.priority = priority;
    }

    public Database(){

    }
    public Long getId() {
        return id;
    }

    private void setId(Long taskID) {
        this.id = taskID;
    }

    public String getName() {
        return taskName;
    }

    public void setName(String taskName) {
        this.taskName = taskName;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
