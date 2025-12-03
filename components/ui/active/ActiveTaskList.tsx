import { Task } from "@/constants/types";
import { formatDate } from "@/util/util";
import { FlatList, Text, View } from "react-native";
import ActiveTask from "./ActiveTask";

type ActiveTaskListProps = {
  date: string;
  tasks: Task[];
};

export default function ActiveTaskList({ date, tasks }: ActiveTaskListProps) {
  return (
    <View className="mb-8 ">
      <Text className="text-gray-900 dark:text-gray-300 text-3xl font-bold pb-6">
        {formatDate(date)}
      </Text>

      <FlatList
        data={tasks}
        renderItem={({ item }) => {
          return (
            <ActiveTask
              taskTitle={item.title}
              taskDate={date}
              taskTime={item.time}
              isStarred={item.isStarred}
              isCompleted={item.isComplete}
            />
          );
        }}
      />
    </View>
  );
}
