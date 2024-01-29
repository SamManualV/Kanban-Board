import { FC } from "react";
import { Task } from "../types";
import { HighPriorityIcon, LowPriorityIcon, MediumPriorityIcon } from "../assets/svg";

type TaskCardType = {
  task: Task;
};

const TaskCard: FC<TaskCardType> = ({ task }) => {
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50 w-56">
      <div className="text-base font-base py-2">{task.title}</div>
      <div className="flex justify-between py-2 text-gray-500 text-sm">
        <div className="flex gap-2">
          <div>{task.id}</div>
          <div>{task.priority}</div>
          {task.priority === "high" && <HighPriorityIcon />}
          {task.priority === "low" && <LowPriorityIcon />}
          {task.priority === "medium" && <MediumPriorityIcon />}
        </div>
        <div>{task.points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
