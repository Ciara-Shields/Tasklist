import { ChangeEvent, useState, useRef } from "react";
import { idText, TypePredicateKind } from "typescript";
import s from "../App.styles";
import { Task } from "../types";

interface Props {
  onPost: (task: Task) => void;
}

export const PostTask: React.FC<Props> = ({ onPost }) => {
  // const nameInput = useRef<HTMLInputElement>(null);
  const [priority, setPriority] = useState("");
  const [taskName, setTaskName] = useState("");
  const [progress, setProgress] = useState("Select Progress");

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };
  const handlePriorityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
  };

  const handleProgressChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProgress(e.target.value);
  };

  // const handleCompletedChange = () => {
  //   if (task.inprogress = false) {
  //     create a put request to update this component (task) based on its id
  //     change the button to be ticked
  //   }
  // };

  const handleAdd = () => {
    const payload = JSON.stringify({
      taskName,
      priority,
      progress,
    });

    fetch("api/tasks/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    })
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((task) => {
        console.log("hi");
        onPost(task);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(progress);
  };
  // const handleTaskAdd = (task: string) => {
  //   setTask((tasks) => {
  //     const updatedTasks = [...tasks, task];
  //     return updatedTasks;
  //   });
  // };

  // const notStarted = () => {
  //   const payload = JSON.stringify({
  //     taskName,
  //     priority,
  //     progress,
  //   });

  //   fetch("api/tasks/progress/Not%20Started", {
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       console.log(res.status);
  //       return res.json();
  //     })
  //     .then((task) => {
  //       console.log("hi");
  //       onPost(task);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   console.log(progress);
  // };

  return (
    <s.Main>
      {/* <button onClick={notStarted}>not started</button> */}
      {/* <input type="text" ref={nameInput} placeholder="task" />
      <button aria-label="enter task name" onClick={handleAdd}>
        <span className="material-symbols-outlined">enter task name</span>
      </button> */}
      {/* <s.ResultProps> */}
      <h2> Create Task </h2>
      <input
        id="taskName"
        value={taskName}
        placeholder={"Task"}
        onChange={handleTaskChange}
      />
      <input
        id="priority"
        value={priority}
        placeholder={"Priority"}
        onChange={handlePriorityChange}
      />
      <select id="progress" value={progress} onChange={handleProgressChange}>
        <option value={"Select Progress"}>Select Progress</option>
        <option value={"Not Started"}>Not Started</option>
        <option value={"In Progress"}>In Progress</option>
        <option value={"Completed"}>Completed</option>
      </select>
      <button onClick={handleAdd}>Add</button>
      {/* <button className={"completedButton"} onClick={handleCompletedChange}> */}
      {/* Complete this bitch */}
      {/* </button> */}
      {/* </s.ResultProps> */}
      {/* <button onClick={handleDelete}>Delete</button> */}
    </s.Main>
  );
};
