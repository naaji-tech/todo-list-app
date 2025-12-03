import { Task } from "@/constants/types";

export function groupTasksByDate(tasks: Task[]) {
  const grouped: Record<string, Task[]> = {};

  tasks.forEach((task) => {
    const date = task.dueDate || "No Date";
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(task);
  });

  return Object.entries(grouped).map(([date, tasks]) => ({ date, tasks }));
}

export function formatDate(date: string) {
  const dateObj = new Date(date);

  const now = new Date();
  now.setHours(0, 0, 0, 0);
  dateObj.setHours(0, 0, 0, 0);

  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (dateObj.getTime() === now.getTime()) {
    return "Today";
  } else if (dateObj.getTime() === tomorrow.getTime()) {
    return "Tomorrow";
  } else {
    return dateObj.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
}

export function parseDateString(dateStr: string) {
  if (!dateStr) return new Date();
  const [day, month, year] = dateStr.split("/");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}
