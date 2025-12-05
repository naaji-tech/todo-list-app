import { Task } from "@/constants/types";
import { TASK_LIST } from "@/data/placeholder-data";
import { groupTasksByDate } from "@/util/util";
import { Alert } from "react-native";

export default function useTasks() {
  const groupedTasks = groupTasksByDate(TASK_LIST);

  const hasCompleteTasks = groupedTasks.some((group) =>
    group.tasks.some((task) => task.isComplete)
  );

  function updateCompleteStatus(taskId: string, isComplete: boolean) {
    const task = TASK_LIST.find((t) => t.id === taskId);
    if (task) {
      task.isComplete = isComplete;
    }
  }

  function createTask(
    title: string,
    date: string,
    time: string,
    isStarred: boolean,
    isComplete: boolean
  ): Task {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}`;

    const newTask: Task = {
      id,
      title: title,
      dueDate: date,
      time: time,
      isStarred: isStarred,
      isComplete: isComplete,
    };

    console.log(newTask);

    TASK_LIST.push(newTask);
    return newTask;
  }

  function editTask(
    taskId: string,
    title: string,
    date: string,
    time: string,
    isStarred: boolean,
    isComplete: boolean
  ) {
    const taskIndex = TASK_LIST.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      TASK_LIST[taskIndex] = {
        ...TASK_LIST[taskIndex],
        title,
        dueDate: date,
        time,
        isStarred,
        isComplete,
      };
    }
  }

  function deleteTask(taskId: string, setRefreshKey: React.Dispatch<React.SetStateAction<number>>) {
    Alert.alert("Deleting Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          const taskIndex = TASK_LIST.findIndex((t) => t.id === taskId);
          if (taskIndex !== -1) {
            TASK_LIST.splice(taskIndex, 1);
            setRefreshKey((prev) => prev + 1);
          }
        },
      },
    ]);
  }

  return {
    groupedTasks,
    hasCompleteTasks,
    updateCompleteStatus,
    createTask,
    editTask,
    deleteTask,
  };
}
