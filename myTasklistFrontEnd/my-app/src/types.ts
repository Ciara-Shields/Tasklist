export type TasksResponse = Task[];

export interface Task {
  id: string | null;
  taskName: string | null;
  priority: string | number | readonly string[] | undefined;
  progress: string | number | readonly string[] | undefined;
}

// export const App: React.FC<
