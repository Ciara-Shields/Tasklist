export {};
// import { useEffect, useState } from "react";
// import { Task, TasksResponse } from ".././types";
// import s from ".././App.styles";
// import { ResultProps } from ".././ResultProps";
// interface Props {
//   task: Task;
// }

// export const AllTasks = () => {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`/api/tasks`, {
//       method: "GET",
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((responseJson: TasksResponse) => {
//         setTasks(responseJson);
//         setError(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setError(true);
//       });
//     //   .finally(() => {
//     //     setLoading(false);
//     //   })
//   }, []);

//   return (
//     <s.Wrapper>
//       <h1>Tasklist</h1>
//       {tasks.map((task) => {
//         return (
//           <ResultProps
//             task={task}
//             // id={task.id}
//             // taskName={task.taskName}
//             // priority={task.priority}
//             // completed={task.completed}
//             // inProgress={task.inProgress}
//           />
//         );
//       })}
//     </s.Wrapper>
//   );
// };
