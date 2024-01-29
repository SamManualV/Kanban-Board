import { FC } from "react";
import { HighPriorityIcon, LowPriorityIcon, MediumPriorityIcon } from "../assets/svg";
import { Task } from "../types";

type TaskCardType = {
  task: Task;
  updateTaskPoints: (task: Task, points: number) => void;
};

const TaskCard: FC<TaskCardType> = ({ task, updateTaskPoints }) => {
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50 w-56">
      <div className="text-base font-base py-2">{task.title}</div>
      <div className="flex justify-between py-2 text-gray-500 text-sm">
        <div className="flex gap-2">
          <div>{task.id}</div>
          {task.priority === "high" && <HighPriorityIcon />}
          {task.priority === "low" && <LowPriorityIcon />}
          {task.priority === "medium" && <MediumPriorityIcon />}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => updateTaskPoints(task, task.points - 1)}>-</button>
          <h1 className="font-bold">{task.points}</h1>
          <button onClick={() => updateTaskPoints(task, task.points + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
