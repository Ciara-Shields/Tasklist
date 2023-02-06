package entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "DATABASE")
public class Database {

    private long id;
    private  String name;
    private int priority;

    @Id
    @GeneratedValue(generator ="increment")
    @GenericGenerator(name="increment", strategy ="increment")
    public Long getId() {return id;}

    private void setId(Long id) {this.id = id;}

    public String getName() {return name;}

    public void setName(String name) {this.name = name;}

    public int getPriority() {return priority;}

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
