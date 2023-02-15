export {};
// import { ChangeEvent, useState, useRef } from "react";
// import { idText, TypePredicateKind } from "typescript";
// import s from "../App.styles";
// import { Task } from "../types";

// interface Props {
//   onProgress: (task: Task) => void;
// }

// export const TaskProgress: React.FC<Props> = ({ onProgress }) => {
//   // const nameInput = useRef<HTMLInputElement>(null);
//   //   const [tasks, setTasks] = useState<Task[]>([]);

//   const notStarted = () => {
//     fetch("api/tasks/progress/Not%20Started", {
//       method: "GET",
//     })
//       .then((res) => {
//         console.log(res.status);
//         return res.json();
//       })
//       .then((task) => {
//         console.log("hi");
//         onProgress(task);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const inProgress = () => {
//     fetch("api/tasks/progress/In%20Progress", {
//       method: "GET",
//     })
//       .then((res) => {
//         console.log(res.status);
//         return res.json();
//       })
//       .then((task) => {
//         console.log("hi");
//         onProgress(task);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const completed = () => {
//     fetch("api/tasks/progress/Completed", {
//       method: "GET",
//     })
//       .then((res) => {
//         console.log(res.status);
//         return res.json();
//       })
//       .then((task) => {
//         console.log("hi");
//         onProgress(task);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <s.Main>
//       <button onClick={notStarted}>Not Started</button>
//       <button onClick={inProgress}>In Progress</button>
//       <button onClick={completed}>Completed</button>
//     </s.Main>
//   );
// };
