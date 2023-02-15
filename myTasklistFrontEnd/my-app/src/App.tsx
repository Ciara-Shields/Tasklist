import React, { useEffect, useState } from "react";
import s from "./App.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Task, TasksResponse } from "./types";
import { ResultProps } from "./ResultProps";
import { PostTask } from "./components/PostTask";
// import { TaskProgress } from "./components/GetByProgress";
// import { Dropdown, Option } from "./components/Dropdown";
// import { PostTask } from "./my-app/src/components/PostTask/PostTask";
// import "./setupProxy";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState<string>("tasks");
  const [posty, setPosty] = useState<string | undefined>(undefined);
  const [fetchURL, setFetchURL] = useState("/api/tasks");
  const [render, setRender] = useState(0);
  // const [error, setError] = useState(false);
  useEffect(() => {
    fetch(fetchURL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch(() => {
        setError(true);
      });
  }, [render, posty, fetchURL]);

  const handleTaskAdd = (task: Task) => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks, task];
      return updatedTasks;
    });
  };
  const handleShowAll = () => {
    setFetchURL("api/tasks");
  };
  const handleNotStarted = () => {
    setFetchURL("api/tasks/progress/Not%20Started");
  };

  const handleInProgress = () => {
    setFetchURL("api/tasks/progress/In%20Progress");
  };
  const handleCompleted = () => {
    setFetchURL("api/tasks/progress/Completed");
  };
  const handleOrderPriority = () => {
    setFetchURL("api/tasks/priority");
  };

  return (
    <s.Main>
      <h1>Tasklist</h1>
      <PostTask onPost={handleTaskAdd} />
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleNotStarted}>Not Started</button>
      <button onClick={handleInProgress}>In Progress</button>
      <button onClick={handleCompleted}>Completed</button>
      <button onClick={handleOrderPriority}>Order</button>

      {tasks.map((task) => (
        <ResultProps
          id={task.id}
          key={task.id}
          taskName={task.taskName}
          priority={task.priority}
          progress={task.progress}
        />
        // <button onClick={handleDelete}>Delete</button>
      ))}
    </s.Main>
  );
};
export default App;
// onPost={handleTaskAdd}
