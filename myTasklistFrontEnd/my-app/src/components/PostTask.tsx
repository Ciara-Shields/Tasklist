import { ChangeEvent, useState, useRef } from "react";
import s from "../App.styles";
import { Task } from "../types";

interface Props {
  onPost: (task: string) => void;
}

export const PostTask: React.FC<Props> = ({ onPost }) => {
  const nameInput = useRef<HTMLInputElement>(null);
  //   const [priority, setPriority] = useState<>(" ");
  // const completed = false;

  // const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTaskName(e.target.value);
  // };
  //   const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //     setPriority(e.target.value);
  //   };

  const handleAdd = () => {
    const task = nameInput.current?.value.trim();
    if (task) {
      onPost(task);
    }

    // fetch("api/tasks/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: task,
    // });
  };
  return (
    <s.Main>
      <input type="text" ref={nameInput} placeholder="task" />
      <button aria-label="enter task name" onClick={handleAdd}>
        <span className="material-symbols-outlined">enter task name</span>
      </button>
    </s.Main>
  );
};
