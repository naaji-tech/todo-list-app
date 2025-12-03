import theme from "@/constants/colors";
import { useColorScheme } from "react-native";
import { Calendar } from "react-native-calendars";

interface CalenderProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

export default function ThemedCalender({
  selectedDate,
  setSelectedDate,
}: CalenderProps) {
  const colorScheme = useColorScheme();

  return (
    <Calendar
      key={colorScheme}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        paddingBottom: 20,
      }}
      theme={{
        backgroundColor:
          colorScheme === "dark"
            ? theme.calender.dark.backgroundColor
            : theme.calender.light.backgroundColor,
        calendarBackground:
          colorScheme === "dark"
            ? theme.calender.dark.calendarBackground
            : theme.calender.light.calendarBackground,
        textSectionTitleColor:
          colorScheme === "dark"
            ? theme.calender.dark.textSectionTitleColor
            : theme.calender.light.textSectionTitleColor,
        selectedDayBackgroundColor:
          colorScheme === "dark"
            ? theme.calender.dark.selectedDayBackgroundColor
            : theme.calender.light.selectedDayBackgroundColor,
        selectedDayTextColor:
          colorScheme === "dark"
            ? theme.calender.dark.selectedDayTextColor
            : theme.calender.light.selectedDayTextColor,
        todayTextColor:
          colorScheme === "dark"
            ? theme.calender.dark.todayTextColor
            : theme.calender.light.todayTextColor,
        dayTextColor:
          colorScheme === "dark"
            ? theme.calender.dark.dayTextColor
            : theme.calender.light.dayTextColor,
        textDisabledColor:
          colorScheme === "dark"
            ? theme.calender.dark.textDisabledColor
            : theme.calender.light.textDisabledColor,
        monthTextColor:
          colorScheme === "dark"
            ? theme.calender.dark.monthTextColor
            : theme.calender.light.monthTextColor,
      }}
      markedDates={{
        [selectedDate]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: "#00adf5",
        },
      }}
      current={selectedDate}
      minDate={new Date().toISOString().split("T")[0]}
      onDayPress={(day) => {
        console.log("selected day", day.dateString);
        setSelectedDate(day.dateString);
      }}
    />
  );
}
