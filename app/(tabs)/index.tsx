import ActiveTaskList from "@/components/ui/active/ActiveTaskList";
import { FloatingButton } from "@/components/ui/Button";
import useTasks from "@/hooks/useTasks";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";

export default function Index() {
  const { groupedTasks, updateCompleteStatus } = useTasks();
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

  return (
    <View className="flex-1 bg-gray-300 dark:bg-gray-900">
      <FlatList
        key={refreshKey}
        className="flex-1 px-7 pt-6"
        data={groupedTasks}
        renderItem={({ item }) => {
          return (
            <ActiveTaskList
              date={item.date}
              tasks={item.tasks}
              updateCompleteStatus={updateCompleteStatus}
              setRefreshKey={setRefreshKey}
            />
          );
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
