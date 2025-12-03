import { Task } from "@/constants/types";
import { formatDate } from "@/util/util";
import { FlatList, Text, View } from "react-native";
import CompleteTask from "./CompleteTask";

interface CompleteTaskListProps {
  date: string;
  tasks: Task[];
}

export default function CompleteTaskList({
  date,
  tasks,
}: CompleteTaskListProps) {
  const hasCompleteTasks = tasks.some((task) => task.isComplete);

  if (!hasCompleteTasks) {
    return null;
  }

  return (
    <View className="mb-8 ">
      <Text className="text-gray-900 dark:text-gray-300 text-3xl font-bold pb-6">
        {formatDate(date)}
      </Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => {
          if (item.isComplete === false) return null;
          return (
            <CompleteTask
              taskTitle={item.title}
              taskTime={item.time}
              isStarred={item.isStarred}
            />
          );
        }}
      />
    </View>
  );
}
