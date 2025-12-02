import theme from "@/theme/colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

export default function TaskLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor:
              colorScheme === "dark"
                ? theme.colors.dark.bg
                : theme.colors.light.bg,
          },
          headerTintColor:
            colorScheme === "dark"
              ? theme.colors.dark.text
              : theme.colors.light.text,
          headerShadowVisible: false,
          headerTitle: "New Task",
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          contentStyle: {
            backgroundColor:
              colorScheme === "dark"
                ? theme.colors.dark.bg
                : theme.colors.light.bg,
          },
        }}
      >
        <Stack.Screen name="new-task" />
      </Stack>
    </>
  );
}
