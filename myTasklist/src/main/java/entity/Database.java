package entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "DATABASE")
public class Database {

    @Id
    @GeneratedValue()
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
