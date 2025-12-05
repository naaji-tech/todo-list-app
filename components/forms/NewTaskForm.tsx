import theme from "@/constants/colors";
import useTasks from "@/hooks/useTasks";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { ThemeButton } from "../ui/Button";
import ThemedCalender from "../ui/task/Calender";
import TimePicker from "../ui/task/DateTimePicker";
import YesNoSwitch from "../ui/task/Switch";
import { TextInputField } from "../ui/task/TextInput";

export default function NewTaskForm() {
  const [taskName, setTaskName] = useState("");
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isToday, setIsToday] = useState(true);
  const [isImportant, setIsImportant] = useState(false);

  const router = useRouter();
  const { createTask } = useTasks();

  const handleCreateTask = () => {
    console.log("Create task button pressed.");

    createTask(
      taskName,
      selectedDate,
      selectedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isImportant,
      false
    );

    router.dismissTo("/");
  };

  const handleSetImportantPress = () => {
    setIsImportant(!isImportant);
  };

  return (
    <ScrollView>
      <View className="flex flex-col gap-6">
        <View className="flex flex-col gap-2">
          <Text className="text-gray-900 dark:text-gray-300 text-xl">Task</Text>
          <TextInputField
            placeholder="Enter the task"
            value={taskName}
            setValue={setTaskName}
          />
        </View>

        <View className="flex flex-col gap-4">
          <Text className="text-gray-900 dark:text-gray-300 text-xl">Time</Text>
          <TimePicker
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            showTimePicker={showTimePicker}
            setShowTimePicker={setShowTimePicker}
          />
        </View>

        <View className="flex flex-col gap-4">
          <Text className="text-gray-900 dark:text-gray-300 text-xl">
            Today
          </Text>
          <YesNoSwitch isToday={isToday} setIsToday={setIsToday} />
          {!isToday && (
            <ThemedCalender
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          )}
        </View>

        <Pressable
          onPress={handleSetImportantPress}
          className="flex flex-row items-center justify-center self-start gap-2 py-2"
        >
          <Ionicons
            name={isImportant ? "star" : "star-outline"}
            size={18}
            color={
              isImportant ? theme.colors.icons.star : theme.colors.icons.light
            }
          />
          <Text className="text-gray-900 dark:text-gray-300 text-xl">
            Mark as important
          </Text>
        </Pressable>

        <ThemeButton title="Create Task" onPress={handleCreateTask} />
      </View>
    </ScrollView>
  );
}
