import { useState } from "react";
import { Task } from "./types";
import s from "./App.styles";

// const handleDelete = () => {
//   fetch("api/tasks/{id}", {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   }).catch((error) => {
//     console.log(error);
//   });
// };
interface Props {
  id: string | null;
  taskName: string | null;
  priority: string | null;
  progress: string | number | readonly string[] | undefined;
}

export const ResultProps: React.FC<Props> = ({
  id,
  taskName,
  priority,
  progress,
}) => {
  const handleDelete = () => {
    fetch(`api/tasks/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleProgressChange = () => {
    fetch(`api/tasks/add`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <s.ResultProps>
      ID: {id}, Task: {taskName}, Priority: {priority}, Progress: {progress}
      <button onClick={handleDelete}>Delete</button>
      <select id="progress" value={progress} onChange={handleProgressChange}>
        <option value={"Select Progress"}>Select Progress</option>
        <option value={"Not Started"}>Not Started</option>
        <option value={"In Progress"}>In Progress</option>
        <option value={"Completed"}>Completed</option>
      </select>
    </s.ResultProps>
  );
};
