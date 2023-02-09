export interface TasksResponse {
  tasks: Task[];
}

export interface Task {
  id: any;
  taskName: string;
  priority: any;
  completed: boolean;
  inProgress: boolean;
}

// export const App: React.FC<
