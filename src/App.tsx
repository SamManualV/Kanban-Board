import "./App.css";
import TaskCard from "./components/TaskCard";
import { tasks, statuses } from "./constants/data";
import { Status, Task } from "./types";

function App() {
  const columns = statuses.map((status: Status) => {
    const tasksInColumn = tasks.filter((task: Task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  });

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
        <div>
          <h1 className="text-3xl p-2 capitalize font-bold text-gray-500">{column.title}</h1>
          {column.tasks.map((task: Task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
