export type TasksResponse = Task[];

export interface Task {
  id: string | null;
  taskName: string | null;
  priority: string | null;
  completed: boolean | null;
  inProgress: boolean | null;
}

// export const App: React.FC<
