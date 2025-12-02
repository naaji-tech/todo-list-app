import { Text, View } from "react-native";
import CompleteTask from "./CompleteTask";

export default function CompleteTaskList() {
  return (
    <View className="mb-8 ">
      <Text className="text-gray-900 dark:text-gray-300 text-3xl font-bold pb-6">
        Today
      </Text>
      <CompleteTask
        taskTitle="Meeting with manager"
        taskTime="10:00 AM - 11:00 AM"
        isStarred={true}
      />
      <CompleteTask
        taskTitle="Workout session"
        taskTime="4:00 PM - 5:00 PM"
        isStarred={false}
      />
      <CompleteTask
        taskTitle="Go grocery shopping"
        taskTime="2:00 PM - 3:00 PM"
        isStarred={false}
      />
    </View>
  );
}
