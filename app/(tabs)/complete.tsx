import FloatingButton from "@/components/ui/Button";
import CompleteTaskList from "@/components/ui/complete/CompleteTaskList";
import theme from "@/constants/colors";
import { TaskGroup } from "@/constants/types";
import { TASK_LIST } from "@/data/placeholder-data";
import { groupTasksByDate } from "@/util/util";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Complete() {
  const taskData = TASK_LIST;

  const [groupedTasks, setGroupedTasks] = useState<TaskGroup[]>([]);

  const hasCompleteTasks = TASK_LIST.some((task) => task.isComplete);

  useEffect(() => {
    const grouped = groupTasksByDate(taskData);
    setGroupedTasks(grouped);
    console.log("Grouped Tasks by Date:", grouped);
  }, [taskData]);

  if (!hasCompleteTasks) {
    return (
      <View className="flex-1 bg-gray-300 dark:bg-gray-900 justify-center items-center px-7 gap-2">
        <Ionicons
          name="checkmark-done-circle-outline"
          size={100}
          color={theme.colors.icons.gray}
        />
        <Text className="text-gray-500 text-xl">No completed tasks</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-300 dark:bg-gray-900">
      <FlatList
        className="flex-1 px-7 pt-6"
        data={groupedTasks}
        renderItem={({ item }) => {
          return <CompleteTaskList date={item.date} tasks={item.tasks} />;
        }}
      />
      <FloatingButton />
    </View>
  );
}
