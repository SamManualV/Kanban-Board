import { Priority, Status, Task } from "../types";

export const statuses: Status[] = ["todo", "in-progress", "done"];
export const priorities: Priority[] = ["low", "medium", "high"];

export const tasks: Task[] = [
  {
    title: "Title One",
    id: "ID-1",
    points: 3,
    status: "done",
    priority: "low",
  },
  {
    title: "Title Two",
    id: "ID-2",
    points: 5,
    status: "in-progress",
    priority: "low",
  },
  {
    title: "Title Three",
    id: "ID-3",
    points: 6,
    status: "todo",
    priority: "high",
  },
  {
    title: "Title 4",
    id: "ID-4",
    points: 7,
    status: "in-progress",
    priority: "medium",
  },
  {
    title: "Title 5",
    id: "ID-5",
    points: 5,
    status: "in-progress",
    priority: "low",
  },
  {
    title: "Title 6",
    id: "ID-6",
    points: 6,
    status: "todo",
    priority: "medium",
  },
  {
    title: "Title 7",
    id: "ID-7",
    points: 8,
    status: "in-progress",
    priority: "medium",
  },
  {
    title: "Title 8",
    id: "ID-8",
    points: 6,
    status: "done",
    priority: "high",
  },
];
