import { parseDateString } from "@/util/util";
import { useState } from "react";
import { Text, View } from "react-native";
import { DatePicker } from "../task/DateTimePicker";
import { TextInputField } from "../task/TextInput";

interface ProfileDetailCardProps {
  title: string;
  info: string;
  setInfo: (value: string) => void;
  isEditable: boolean;
}

export default function ProfileDetailCard({
  title,
  info,
  setInfo,
  isEditable,
}: ProfileDetailCardProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    title === "Birth Date" ? parseDateString(info) : new Date()
  );

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    const formatted = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
    setInfo(formatted);
  };

  return (
    <View className="mt-6">
      <Text className="text-gray-900 dark:text-gray-300 text-xl">{title}</Text>
      {isEditable ? (
        title === "Birth Date" ? (
          <View className="mt-1">
            <DatePicker
              selectedDate={selectedDate}
              setSelectedDate={handleDateChange}
              showDatePicker={showDatePicker}
              setShowDatePicker={setShowDatePicker}
            />
          </View>
        ) : title === "Mobile Number" ? (
          <View className="mt-1">
            <TextInputField
              value={info}
              setValue={setInfo}
              placeholder={title}
              keyboardType="number-pad"
            />
          </View>
        ) : title === "Email" ? (
          <View className="mt-1">
            <TextInputField
              value={info}
              setValue={setInfo}
              placeholder={title}
              keyboardType="email-address"
            />
          </View>
        ) : (
          <View className="mt-1">
            <TextInputField
              value={info}
              setValue={setInfo}
              placeholder={title}
              keyboardType="default"
            />
          </View>
        )
      ) : (
        <Text className="text-gray-700 dark:text-gray-500 text-xl">{info}</Text>
      )}
    </View>
  );
}
