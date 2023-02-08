package com.thg.accerator.mytasklist.entity;


import jakarta.persistence.*;


@Table(name = "Tasks")
@Entity
public class Tasks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String taskName;
    int priority;

    boolean completed;

    boolean inProgress;


    public Tasks(int id, String taskName, int priority, boolean completed, boolean inProgress ) {
        this.id = id;
        this.taskName = taskName;
        this.priority = priority;
        this.completed = completed;
        this.inProgress = inProgress;
    }

    public Tasks(){

    }
    public int getId() {
        return id;
    }

    private void setId(int id) {
        this.id = id;
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
    public boolean isCompleted() {
        return true;
    }
//    public void setCompleted(boolean completed) {
//        this.completed = completed;
//    }
    public boolean isInProgress() {
        return true;
    }
//    public void setInProgress(boolean inProgress) {
//        this.inProgress = inProgress;
//    }
}
