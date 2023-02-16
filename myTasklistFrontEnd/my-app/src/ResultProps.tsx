// import { useState, ChangeEvent } from "react";
import { Task } from "./types";
import s from "./App.styles";
import { ChangeEvent } from "react";

interface Props {
  task: Task;
  onUpdate: (task: Task) => void;
}

export const ResultProps: React.FC<Props> = ({ task, onUpdate }) => {
  const handleDelete = () => {
    fetch(`api/tasks/${task.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      window.location.reload();
    });
  };

  const handleProgressChangeTo = (e: ChangeEvent<HTMLSelectElement>) => {
    const updatedProgress = e.target.value;
    const payload = JSON.stringify({
      ...task,
      progress: updatedProgress,
    });
    fetch(`api/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: payload,
    })
      .then((res) => {
        onUpdate({ ...task, progress: updatedProgress });
        console.log("HI");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <s.ResultProps>
      ID: {task.id}, Task: {task.taskName}, Priority: {task.priority}, Progress:{" "}
      {task.progress}
      <button onClick={handleDelete}>Delete</button>
      <select
        id="progress"
        value={task.progress}
        onChange={handleProgressChangeTo}
      >
        <option value={"Select Progress"}>Select Progress</option>
        <option value={"Not Started"}>Not Started</option>
        <option value={"In Progress"}>In Progress</option>
        <option value={"Completed"}>Completed</option>
      </select>
    </s.ResultProps>
  );
};
