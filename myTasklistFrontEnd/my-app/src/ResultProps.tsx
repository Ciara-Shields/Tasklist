import { useState } from "react";
import { Task } from "./types";
import s from "./App.styles";

interface Props {
  id: string | null;
  taskName: string | null;
  priority: string | null;
  completed: boolean | null;
  inProgress: boolean | null;
}

export const ResultProps: React.FC<Props> = ({
  id,
  taskName,
  priority,
  completed,
  inProgress,
}) => {
  return (
    <s.ResultProps>
      ID: {id}, Task: {taskName}, Priority: {priority}, You done yet?{" "}
      {completed},{inProgress}
    </s.ResultProps>
  );
};
