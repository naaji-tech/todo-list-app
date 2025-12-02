import { Text, View } from "react-native";
import ActiveTask from "./ActiveTask";

export default function ActiveTaskList() {
  return (
    <View className="mb-8 ">
      <Text className="text-gray-900 dark:text-gray-300 text-3xl font-bold pb-6">
        Today
      </Text>
      <ActiveTask
        taskTitle="Meeting with manager"
        taskTime="10:00 AM - 11:00 AM"
        isStarred={true}
        isCompleted={false}
      />
      <ActiveTask
        taskTitle="Workout session"
        taskTime="4:00 PM - 5:00 PM"
        isStarred={false}
        isCompleted={false}
      />
      <ActiveTask
        taskTitle="Go grocery shopping"
        taskTime="2:00 PM - 3:00 PM"
        isStarred={false}
        isCompleted={true}
      />
    </View>
  );
}
