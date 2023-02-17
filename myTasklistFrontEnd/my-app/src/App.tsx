import React, { useEffect, useState } from "react";
import s from "./App.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Task } from "./types";
import { ResultProps } from "./ResultProps";
import { PostTask } from "./components/PostTask";
import myImage from "./JackBlack.jpeg";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState(false);

  const [posty, setPosty] = useState<string | undefined>(undefined);
  const [fetchURL, setFetchURL] = useState("/api/tasks");
  const [render, setRender] = useState("");

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

  const handleUpdate = (task: Task) => {
    const updatedTasks = tasks.map((existingTask) =>
      existingTask.id === task.id ? task : existingTask
    );
    setTasks(updatedTasks);
  };

  return (
    <s.Main>
      <s.h1>Tasklist</s.h1>

      <PostTask onPost={handleTaskAdd} />
      {/* <s.Button> */}
      <s.Button2 onClick={handleShowAll}>Show All</s.Button2>
      <s.Button2 onClick={handleNotStarted}>Not Started</s.Button2>
      <s.Button2 onClick={handleInProgress}>In Progress</s.Button2>
      <s.Button2 onClick={handleCompleted}>Completed</s.Button2>
      <s.Button2 onClick={handleOrderPriority}>Order</s.Button2>
      {/* </s.Button> */}
      {tasks.map((task) => (
        <ResultProps key={task.id} task={task} onUpdate={handleUpdate} />
      ))}
      <s.image src={myImage} alt="" />
    </s.Main>
  );
};
export default App;
