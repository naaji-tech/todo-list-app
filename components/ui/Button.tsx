import theme from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { ComponentProps } from "react";
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
interface IconTextButtonProps {
  iconName: ComponentProps<typeof Ionicons>["name"];
  iconSize: number;
  iconColor: string;
  textColor: string;
  buttonText: string;
  onPress: () => void;
}

interface FloatingButtonProps {
  icon: ComponentProps<typeof Ionicons>["name"];
  iconSize: number;
  buttonText: string;
  onPress: () => void;
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

export function FloatingButton({
  icon,
  iconSize,
  buttonText,
  onPress,
}: FloatingButtonProps) {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      android_ripple={{
        color: "#b3b3b3",
        foreground: true,
      }}
      className="flex flex-row gap-2 absolute bottom-6 right-6 bg-slate-400 elevation dark:bg-slate-600 p-5 rounded-2xl overflow-hidden"
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={iconSize}
        color={
          colorScheme === "dark"
            ? theme.colors.icons.light
            : theme.colors.icons.dark
        }
      />
      <Text className="text-gray-900 dark:text-gray-300 text-xl text-center">
        {buttonText}
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

export function IconTextButton({
  iconName,
  iconSize,
  iconColor,
  textColor,
  buttonText,
  onPress,
}: IconTextButtonProps) {
  return (
    <Pressable
      className="flex flex-row gap-1 pt-2 self-start"
      onPress={onPress}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
      <Text className="text-base" style={{ color: textColor }}>
        {buttonText}
      </Text>
    </Pressable>
  );
}
