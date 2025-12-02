import theme from "@/theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, Text, useColorScheme } from "react-native";

interface TextButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

export function TextButton({ title, onPress, style = {} }: TextButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text
        style={style}
        className="text-gray-900 dark:text-gray-300 text-xl font-bold py-2"
      >
        {title}
      </Text>
    </Pressable>
  );
}

export default function FloatingButton() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Pressable
      android_ripple={{
        color: "#b3b3b3",
        foreground: true,
      }}
      className="flex flex-row gap-2 absolute bottom-6 right-6 bg-blue-200 elevation dark:bg-blue-950 p-5 rounded-2xl"
      onPress={() => {
        router.push({
          pathname: "/task/new-task",
        });
      }}
    >
      <Ionicons
        name="add"
        size={20}
        color={
          colorScheme === "dark"
            ? theme.colors.icons.light
            : theme.colors.icons.dark
        }
      />
      <Text className="text-gray-900 dark:text-gray-300 text-xl text-center">
        New task
      </Text>
    </Pressable>
  );
}
