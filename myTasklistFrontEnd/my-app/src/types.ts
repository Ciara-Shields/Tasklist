export type TasksResponse = Task[];

export interface Task {
  id: string | null;
  taskName: string | null;
  priority: string | null;
  progress: string | number | readonly string[] | undefined;
}

// export const App: React.FC<
