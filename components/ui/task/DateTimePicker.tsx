import theme from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Pressable, Text, View } from "react-native";

interface TimePickerProps {
  selectedTime: Date;
  setSelectedTime: (date: Date) => void;
  showTimePicker: boolean;
  setShowTimePicker: (show: boolean) => void;
}

interface DatePickerProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  showDatePicker: boolean;
  setShowDatePicker: (show: boolean) => void;
}

export default function TimePicker({
  selectedTime,
  setSelectedTime,
  showTimePicker,
  setShowTimePicker,
}: TimePickerProps) {
  const onChange = (event: any, date?: Date) => {
    if (date) {
      setSelectedTime(date);
    }
    setShowTimePicker(false);
  };

  return (
    <>
      <Pressable
        android_ripple={{
          color: "#b3b3b3",
          foreground: true,
        }}
        onPress={() => {
          setShowTimePicker(true);
        }}
        className="flex flex-row items-center justify-start overflow-hidden rounded-xl  border border-gray-500"
      >
        <Ionicons
          className="px-4"
          name="time-outline"
          size={20}
          color={theme.colors.dark.text}
        />
        <Text className="text-gray-900 dark:text-gray-300 py-4 text-base">
          {selectedTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </Pressable>

      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
}

export function DatePicker({
  selectedDate,
  setSelectedDate,
  showDatePicker,
  setShowDatePicker,
}: DatePickerProps) {
  const onChange = (event: any, date?: Date) => {
    if (date) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  return (
    <View>
      <Pressable
        android_ripple={{
          color: "#b3b3b3",
          foreground: true,
        }}
        onPress={() => {
          setShowDatePicker(true);
        }}
        className="flex flex-row items-center justify-start overflow-hidden rounded-xl border border-gray-500"
      >
        <Ionicons
          className="px-4"
          name="calendar-outline"
          size={20}
          color={theme.colors.dark.text}
        />
        <Text className="text-gray-900 dark:text-gray-300 py-4 text-base">
          {selectedDate.toLocaleDateString("en-GB")}
        </Text>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
