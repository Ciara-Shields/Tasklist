import React, { useEffect, useState } from "react";
import s from "./App.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Task, TasksResponse } from "./types";

export const App = () => {
  const [task, setTask] = useState<Task[]>([]);
  // const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:8080/tasks`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson: TasksResponse) => {
        setTask(responseJson.tasks);
      });
  });
  return (
    <s.Main>
      <h1>Tasklist</h1>
      {task.map((tt) =>)}
    </s.Main>
  );
};

export default App;
