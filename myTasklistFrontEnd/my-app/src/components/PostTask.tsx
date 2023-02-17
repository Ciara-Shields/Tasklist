import { ChangeEvent, useState } from "react";
import s from "../App.styles";
import { Task } from "../types";

interface Props {
  onPost: (task: Task) => void;
}

export const PostTask: React.FC<Props> = ({ onPost }) => {
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

  return (
    <s.Main>
      <s.h2> Create Task </s.h2>
      <s.Input
        id="taskName"
        value={taskName}
        placeholder={"Enter Task"}
        onChange={handleTaskChange}
      />
      <s.Input
        id="priority"
        value={priority}
        placeholder={"Enter Priority"}
        onChange={handlePriorityChange}
      />
      <s.select id="progress" value={progress} onChange={handleProgressChange}>
        <option value={"Select Progress"}>Select Progress</option>
        <option value={"Not Started"}>Not Started</option>
        <option value={"In Progress"}>In Progress</option>
        <option value={"Completed"}>Completed</option>
      </s.select>
      <s.Button3 onClick={handleAdd}>Add</s.Button3>
    </s.Main>
  );
};
