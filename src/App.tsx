import { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import { tasks as initialTasks, statuses } from "./constants/data";
import { Status, Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns = statuses.map((status: Status) => {
    const tasksInColumn = tasks.filter((task: Task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  });

  const updateTaskPoints = (task: Task, points: number) => {
    const updatedTasks = tasks.map((t: Task) => (t.id === task.id ? { ...t, points } : t));
    setTasks(updatedTasks);
  };

  return (
    <div className="flex divide-x">
      {columns.map((column, index) => (
        <div key={index}>
          <div className="flex justify-between items-center p-2 text-3xl font-bold text-gray-500">
            <h1 className="capitalize">{column.title}</h1>
            {column.tasks.reduce((total, task) => total + task.points, 0)}
          </div>
          {column.tasks.map((task: Task) => (
            <TaskCard task={task} key={task.id} updateTaskPoints={updateTaskPoints} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
