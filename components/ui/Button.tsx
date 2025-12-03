import theme from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { clsx } from "clsx";
import { useRouter } from "expo-router";
import { Pressable, Text, useColorScheme } from "react-native";

interface TextButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

interface ThemedButtonProps {
  title: string;
  onPress: () => void;
}

interface EditButtonProps {
  isEditable: boolean;
  setIsEditable: (editable: boolean) => void;
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
      className="flex flex-row gap-2 absolute bottom-6 right-6 bg-slate-400 elevation dark:bg-slate-600 p-5 rounded-2xl overflow-hidden"
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

export function ThemeButton({ title, onPress }: ThemedButtonProps) {
  return (
    <Pressable
      android_ripple={{
        color: "#b3b3b3",
        foreground: true,
      }}
      onPress={onPress}
      className="px-4 py-4 bg-slate-400 dark:bg-slate-600 rounded-xl overflow-hidden"
    >
      <Text className="text-gray-900 dark:text-gray-300 text-xl text-center">
        {title}
      </Text>
    </Pressable>
  );
}

export function EditTextButton({ isEditable, setIsEditable }: EditButtonProps) {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      className="flex flex-row gap-1 pt-2 self-start"
      onPress={() => {
        console.log("User profile edit pressed");
        setIsEditable(!isEditable);
      }}
    >
      <Ionicons
        name={`${isEditable ? "close" : "create-outline"}`}
        size={16}
        color={
          colorScheme === "dark"
            ? isEditable
              ? theme.colors.icons.delete
              : theme.colors.icons.light
            : isEditable
              ? theme.colors.icons.delete
              : theme.colors.icons.dark
        }
      />
      <Text
        className={clsx(
          `${isEditable ? "text-red-600" : "text-gray-900 dark:text-gray-300 "} text-base`
        )}
      >
        {isEditable ? "Cancel" : "Edit"}
      </Text>
    </Pressable>
  );
}
