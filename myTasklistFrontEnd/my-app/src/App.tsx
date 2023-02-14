import React, { useEffect, useState } from "react";
import s from "./App.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Task, TasksResponse } from "./types";
import { ResultProps } from "./ResultProps";
import { PostTask } from "./components/PostTask";
import { Dropdown, Option } from "./components/Dropdown";
// import { PostTask } from "./my-app/src/components/PostTask/PostTask";
// import "./setupProxy";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState<string>("tasks");
  // const [posty, setPosty] = useState<string | undefined>(undefined);
  // const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`/api/${query}`, {
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
    // });
  }, [query]);

  const handleTaskAdd = (task: Task) => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks, task];
      return updatedTasks;
    });
  };
  return (
    <s.Main>
      <h1>Tasklist</h1>
      <PostTask onPost={handleTaskAdd} />
      {tasks.map((task) => (
        <ResultProps
          id={task.id}
          taskName={task.taskName}
          priority={task.priority}
          completed={task.completed}
          inProgress={task.inProgress}
        />
      ))}
      <Dropdown
        formLabel="Choose a service"
        buttonText="Send form"
        onChange={handleSelect}
        action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see options" />
        <Option value="Option 1" />
        <Option value="Option 2" />
        <Option value="Option 3" />
      </Dropdown>
    </s.Main>
  );
};
export default App;
// onPost={handleTaskAdd}
