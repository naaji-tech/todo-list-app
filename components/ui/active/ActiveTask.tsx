import theme from "@/theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { clsx } from "clsx";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import { Pressable, Text, useColorScheme, View } from "react-native";

interface ActiveTaskProps {
  taskTitle: string;
  taskTime: string;
  isStarred: boolean;
  isCompleted: boolean;
}

export default function ActiveTask({
  taskTitle,
  taskTime,
  isStarred,
  isCompleted,
}: ActiveTaskProps) {
  const colorScheme = useColorScheme();
  const [isChecked, setChecked] = useState(isCompleted);

  return (
    <View className="flex flex-row w-full items-start justify-between">
      <View className="flex flex-row items-start ml-1 mb-8">
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? theme.colors.checkbox.active : undefined}
        />
        <Pressable
          onPress={() => setChecked(!isChecked)}
          className="-mt-1 pl-4"
        >
          <Text
            className={clsx(
              `text-gray-900 dark:text-gray-300 text-xl mb-1 ${isChecked ? "line-through text-gray-500 dark:text-gray-600" : ""}`
            )}
          >
            {taskTitle}
          </Text>
          <Text
            className={clsx(
              `text-gray-700 dark:text-gray-400 ${isChecked ? "line-through text-gray-500 dark:text-gray-600" : ""}`
            )}
          >
            {taskTime}
          </Text>
        </Pressable>
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
