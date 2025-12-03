import theme from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { ThemeButton } from "../ui/Button";
import ThemedCalender from "../ui/task/Calender";
import TimePicker from "../ui/task/DateTimePicker";
import YesNoSwitch from "../ui/task/Switch";
import { TextInputField } from "../ui/task/TextInput";

interface EditTaskFormProps {
  taskTitle: string;
  taskDate: string;
  taskTime: string;
  isStarred: boolean;
}

export default function EditTaskForm({
  taskTitle,
  taskTime,
  taskDate,
  isStarred,
}: EditTaskFormProps) {
  const [taskName, setTaskName] = useState(taskTitle);

  const [selectedTime, setSelectedTime] = useState(() => {
    const timeMatch = taskTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (timeMatch) {
      let hours = parseInt(timeMatch[1]);
      const minutes = parseInt(timeMatch[2]);
      const period = timeMatch[3].toUpperCase();

      if (period === "PM" && hours !== 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;

      const time = new Date();
      time.setHours(hours, minutes, 0, 0);
      console.log("time", time);
      return time;
    }
    return new Date();
  });

  const [selectedDate, setSelectedDate] = useState(
    new Date(taskDate).toISOString().split("T")[0]
  );

  const [showTimePicker, setShowTimePicker] = useState(false);

  const [isToday, setIsToday] = useState(
    new Date(taskDate).toDateString() === new Date().toDateString()
  );

  const [isImportant, setIsImportant] = useState(isStarred);

  const router = useRouter();

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
          onPress={() => {
            setIsImportant(!isImportant);
          }}
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

        <ThemeButton
          title="Edit Task"
          onPress={() => {
            console.log("Edit task button pressed.");
            router.dismissTo("/");
          }}
        />
      </View>
    </ScrollView>
  );
}
