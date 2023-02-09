import { useState } from "react";
import { Task } from "./types";
import s from "./App.styles";

interface Props {
  id: any;
  taskName: string;
  priority: any;
  completed: boolean;
  inProgress: boolean;
}

export const ResultProps: React.FC<Props> = ({
  id,
  taskName,
  priority,
  completed,
  inProgress,
}) => {
  return <s.Main></s.Main>;
};
