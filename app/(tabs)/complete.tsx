import { FloatingButton } from "@/components/ui/Button";
import CompleteTaskList from "@/components/ui/complete/CompleteTaskList";
import theme from "@/constants/colors";
import useTasks from "@/hooks/useTasks";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Complete() {
  const { groupedTasks, hasCompleteTasks } = useTasks();
  const [refreshKey, setRefreshKey] = useState(0);

  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      setRefreshKey((prev) => prev + 1);
    }, [])
  );

  const handleFloatingButtonPress = () => {
    router.push({
      pathname: "/task/new-task",
    });
  };

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
        key={refreshKey}
        className="flex-1 px-7 pt-6"
        data={groupedTasks}
        renderItem={({ item }) => {
          return <CompleteTaskList date={item.date} tasks={item.tasks} />;
        }}
      />
      <FloatingButton
        buttonText="New task"
        icon="add"
        iconSize={20}
        onPress={handleFloatingButtonPress}
      />
    </View>
  );
}
