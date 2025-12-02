import theme from "@/theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, useColorScheme } from "react-native";

export default function EditButton() {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      className="flex flex-row gap-1 pt-2 self-start"
      onPress={() => {
        console.log("User profile edit clicked");
      }}
    >
      <Ionicons
        name="create-outline"
        size={16}
        color={
          colorScheme === "dark"
            ? theme.colors.icons.light
            : theme.colors.icons.dark
        }
      />
      <Text className="text-gray-900 dark:text-gray-300 text-base">Edit</Text>
    </Pressable>
  );
}
