import React, { useEffect, useState } from "react";
import s from "./App.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Task, TasksResponse } from "./types";
import { ResultProps } from "./ResultProps";
import { PostTask } from "./components/PostTask";
// import { PostTask } from "./my-app/src/components/PostTask/PostTask";
// import "./setupProxy";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState(false);
  const [posty, setPosty] = useState<string | undefined>(undefined);
  // const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`/api/tasks`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson: TasksResponse) => {
        setTasks(responseJson);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [posty]);
  return (
    <s.Main>
      <h1>Tasklist</h1>
      <PostTask onPost={setPosty} />
      {tasks.map((task) => (
        <ResultProps
          id={task.id}
          taskName={task.taskName}
          priority={task.priority}
          completed={task.completed}
          inProgress={task.inProgress}
        />
      ))}
    </s.Main>
  );
};
export default App;
