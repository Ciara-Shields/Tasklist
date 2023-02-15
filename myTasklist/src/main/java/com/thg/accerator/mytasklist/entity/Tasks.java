package com.thg.accerator.mytasklist.entity;


import jakarta.persistence.*;


@Table(name = "Tasks")
@Entity
public class Tasks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String taskName;
   @Column(name = "priority")
    int priority;

    String progress;


    public Tasks(long id, String taskName, int priority, String progress ) {
        this.id = id;
        this.taskName = taskName;
        this.priority = priority;
        this.progress = progress;
    }

    public Tasks(){

    }
    public long getId() {
        return id;
    }

    private void setId(long id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public  String getProgress(){return progress;}

    public void setProgress(String progress) {this.progress = progress;}
//    public boolean isCompleted() {
//        return true;
//    }
//    public void setCompleted(boolean completed) {
//        this.completed = completed;
//    }
//    public boolean isInProgress() {
//        return true;
//    }
//    public void setInProgress(boolean inProgress) {
//        this.inProgress = inProgress;
//    }
}
