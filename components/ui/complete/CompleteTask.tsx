import theme from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import { Text, useColorScheme, View } from "react-native";

interface CompleteTaskProps {
  taskTitle: string;
  taskTime: string;
  isStarred: boolean;
}

export default function CompleteTask({
  taskTitle,
  taskTime,
  isStarred,
}: CompleteTaskProps) {
  const colorScheme = useColorScheme();
  const [isChecked] = useState(true);

  return (
    <View className="flex flex-row w-full items-start justify-between">
      <View className="flex flex-row items-start ml-1 mb-8">
        <Checkbox
          value={isChecked}
          color={isChecked ? theme.colors.checkbox.active : undefined}
        />
        <View className="-mt-1 pl-4">
          <Text className="text-xl mb-1 text-gray-500 dark:text-gray-600">
            {taskTitle}
          </Text>
          <Text className="text-gray-500 dark:text-gray-600">{taskTime}</Text>
        </View>
      </View>
      <View className="flex flex-row items-center gap-4">
        {isStarred && (
          <Ionicons name="star" size={20} color={theme.colors.icons.star} />
        )}
        {!isChecked && (
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color={
              colorScheme === "dark"
                ? theme.colors.dark.text
                : theme.colors.light.text
            }
          />
        )}
      </View>
    </View>
  );
}
