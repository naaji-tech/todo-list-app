import theme from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { clsx } from "clsx";
import { Checkbox } from "expo-checkbox";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Modal, Pressable, Text, useColorScheme, View } from "react-native";

interface ActiveTaskProps {
  taskTitle: string;
  taskDate: string;
  taskTime: string;
  isStarred: boolean;
  isCompleted: boolean;
}

export default function ActiveTask({
  taskTitle,
  taskDate,
  taskTime,
  isStarred,
  isCompleted,
}: ActiveTaskProps) {
  const colorScheme = useColorScheme();
  const [isChecked, setChecked] = useState(isCompleted);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<View>(null);
  const router = useRouter();

  return (
    <View className="flex flex-row w-full items-start justify-between">
      <Pressable
        onPress={() => {
          isCompleted = !isCompleted;
          setChecked(!isChecked);
        }}
      >
        <View className="flex flex-row items-start ml-1 mb-8">
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? theme.colors.checkbox.active : undefined}
          />
          <View className="-mt-1 pl-4">
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
          </View>
        </View>
      </Pressable>
      <View className="flex flex-row items-center gap-4">
        {isStarred && (
          <Ionicons name="star" size={20} color={theme.colors.icons.star} />
        )}
        {!isChecked && (
          <View>
            <Pressable
              ref={buttonRef}
              android_ripple={{
                color: "#b3b3b3",
                foreground: true,
                radius: 22,
                borderless: true,
              }}
              onPress={() => {
                buttonRef.current?.measure(
                  (x, y, width, height, pageX, pageY) => {
                    setMenuPosition({
                      top: pageY,
                      right: width,
                    });
                    setMenuVisible(true);
                  }
                );
              }}
            >
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color={
                  colorScheme === "dark"
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
              />
            </Pressable>

            <Modal
              visible={menuVisible}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setMenuVisible(false)}
            >
              <Pressable
                className="flex-1"
                onPress={() => setMenuVisible(false)}
              >
                <View
                  className="absolute bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden min-w-[140px]"
                  style={{
                    top: menuPosition.top,
                    right: menuPosition.right,
                  }}
                >
                  <Pressable
                    className="flex flex-row items-center px-4 py-3 active:bg-gray-100 dark:active:bg-slate-700"
                    onPress={() => {
                      setMenuVisible(false);
                      console.log("Edit task:", taskTitle);
                      router.push({
                        pathname: "/task/edit-task",
                        params: {
                          taskScreenTitle: "Edit Task",
                          taskTitle: taskTitle,
                          taskDate: taskDate,
                          taskTime: taskTime,
                          isStarred: isStarred.toString(),
                          isCompleted: isCompleted.toString(),
                        },
                      });
                    }}
                  >
                    <Ionicons
                      name="create-outline"
                      size={20}
                      color={
                        colorScheme === "dark"
                          ? theme.colors.dark.text
                          : theme.colors.light.text
                      }
                    />
                    <Text className="ml-3 text-gray-900 dark:text-gray-300 text-base">
                      Edit
                    </Text>
                  </Pressable>

                  <View className="h-[1px] bg-gray-200 dark:bg-slate-700" />

                  <Pressable
                    className="flex flex-row items-center px-4 py-3 active:bg-gray-100 dark:active:bg-slate-700"
                    onPress={() => {
                      setMenuVisible(false);
                      console.log("Delete task:", taskTitle);
                      // Add delete logic here
                    }}
                  >
                    <Ionicons
                      name="trash-outline"
                      size={20}
                      color={theme.colors.icons.delete}
                    />
                    <Text className="ml-3 text-red-600 dark:text-red-500 text-base">
                      Delete
                    </Text>
                  </Pressable>
                </View>
              </Pressable>
            </Modal>
          </View>
        )}
      </View>
    </View>
  );
}
