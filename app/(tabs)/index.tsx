import ActiveTaskList from "@/components/ui/active/ActiveTaskList";
import FloatingButton from "@/components/ui/Button";
import { TaskGroup } from "@/constants/types";
import { TASK_LIST } from "@/data/placeholder-data";
import { groupTasksByDate } from "@/util/util";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

export default function Index() {
  const taskData = TASK_LIST;

  const [groupedTasks, setGroupedTasks] = useState<TaskGroup[]>([]);

  useEffect(() => {
    const grouped = groupTasksByDate(taskData);
    setGroupedTasks(grouped);
    console.log("Grouped Tasks by Date:", grouped);
  }, [taskData]);

  return (
    <View className="flex-1 bg-gray-300 dark:bg-gray-900">
      <FlatList
        className="flex-1 px-7 pt-6"
        data={groupedTasks}
        renderItem={({ item }) => {
          return <ActiveTaskList date={item.date} tasks={item.tasks} />;
        }}
      />
      <FloatingButton />
    </View>
  );
}
