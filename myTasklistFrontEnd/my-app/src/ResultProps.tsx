// import { useState, ChangeEvent } from "react";
import { Task } from "./types";
import s from "./App.styles";
import { ChangeEvent, useState } from "react";

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

  const [hide, setHide] = useState(false);
  const [hide2, setHide2] = useState(false);

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

  const handlePriorityChangeTo = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedPriority = e.target.value;
    const payload = JSON.stringify({
      ...task,
      priority: updatedPriority,
    });
    fetch(`api/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: payload,
    })
      .then((res) => {
        onUpdate({ ...task, priority: updatedPriority });
        console.log("HI");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <s.ResultProps>
      <s.text>
        Task: {task.taskName}, Priority: {task.priority}, Progress:{" "}
        {task.progress}
      </s.text>

      <s.Button onClick={handleDelete}>Delete</s.Button>

      {hide && (
        <s.select
          id="progress"
          value={task.progress}
          onChange={handleProgressChangeTo}
        >
          <option value={"Select Progress"}>Select Progress</option>
          <option value={"Not Started"}>Not Started</option>
          <option value={"In Progress"}>In Progress</option>
          <option value={"Completed"}>Completed</option>
        </s.select>
      )}
      <s.Button onClick={() => setHide(!hide)}>Update Progress</s.Button>
      {hide2 && (
        <s.Input
          id="priority"
          value={task.priority}
          placeholder={"Priority"}
          onChange={handlePriorityChangeTo}
        />
      )}
      <s.Button onClick={() => setHide2(!hide2)}>Update Priority</s.Button>
    </s.ResultProps>
  );
};
