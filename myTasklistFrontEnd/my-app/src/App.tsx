import React, { useEffect, useState } from "react";
import s from "./App.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Task, TasksResponse } from "./types";
import { ResultProps } from "./ResultProps";
import { PostTask } from "./components/PostTask";
// import { Dropdown, Option } from "./components/Dropdown";
// import { PostTask } from "./my-app/src/components/PostTask/PostTask";
// import "./setupProxy";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState<string>("tasks");
  const [posty, setPosty] = useState<string | undefined>(undefined);
  // const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`/api/tasks`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch(() => {
        setError(true);
      });
    // .finally(() => {
    //   setLoadin
    // })
    // .then((response) => {
    //   return response.json();
    // })
    // .then((responseJson: TasksResponse) => {
    //   setTasks(responseJson);
    //   setError(false);
    // })
    // .catch((error) => {
    //   console.log(error);
    //   setError(true);
    // });r
  }, [posty]);

  const handleTaskAdd = (task: Task) => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks, task];
      return updatedTasks;
    });
  };

  // const handleDelete (id){
  //   fetch("api/tasks/{id}", {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // };

  return (
    <s.Main>
      <h1>Tasklist</h1>
      <PostTask onPost={handleTaskAdd} />
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
