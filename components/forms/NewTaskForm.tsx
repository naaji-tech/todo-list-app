import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function NewTaskForm() {
  const [taskName, setTaskName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (event: any, date?: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <View className="flex flex-col gap-6">
      <View className="flex flex-col gap-2">
        <Text className="text-gray-900 dark:text-gray-300 text-xl">Task</Text>
        <TextInput
          className="border border-gray-500 px-4 py-4 text-base rounded-xl focus:border-gray-300 text-gray-900 dark:text-gray-300"
          placeholder="Enter the task"
          value={taskName}
          onChangeText={setTaskName}
        />
      </View>

      <View className="flex flex-col gap-4">
        <Text className="text-gray-900 dark:text-gray-300 text-xl">Time</Text>
        <DateTimePicker
          value={selectedDate}
          mode="time"
          display="default"
          onChange={onChange}
        />
      </View>

      <View className="flex flex-col gap-4">
        <Text className="text-gray-900 dark:text-gray-300 text-xl">Today</Text>
        <TextInput placeholder="Enter the task" />
      </View>
    </View>
  );
}
