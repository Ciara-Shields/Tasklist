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
  const completed = false;
  const inProgress = true;

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };
  const handlePriorityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
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
      completed,
      inProgress,
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
  };
  // const handleTaskAdd = (task: string) => {
  //   setTask((tasks) => {
  //     const updatedTasks = [...tasks, task];
  //     return updatedTasks;
  //   });
  // };
  return (
    <s.Main>
      {/* <input type="text" ref={nameInput} placeholder="task" />
      <button aria-label="enter task name" onClick={handleAdd}>
        <span className="material-symbols-outlined">enter task name</span>
      </button> */}
      <s.ResultProps>
        <h2> task name </h2>
        <input id="taskName" value={taskName} onChange={handleTaskChange} />
        <input id="priority" value={priority} onChange={handlePriorityChange} />
        <button onClick={handleAdd}>Add</button>
        {/* <button className={"completedButton"} onClick={handleCompletedChange}> */}
        {/* Complete this bitch */}
        {/* </button> */}
      </s.ResultProps>
    </s.Main>
  );
};
