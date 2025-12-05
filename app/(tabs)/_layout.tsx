import CustomHeader from "@/components/ui/CustomHeader";
import theme from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TapLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // Header Styles
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
        headerLeft: () => <CustomHeader />,
        headerTitle: "",

        // Tab Bar Styles
        tabBarStyle: {
          height: 70,
          paddingTop: 8,
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.dark.bg
              : theme.colors.light.bg,
          // iOS shadow
          shadowColor:
            colorScheme === "dark"
              ? theme.colors.dark.text
              : theme.colors.light.text,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.2,
          shadowRadius: 6,
          // Android elevation
          elevation: 10,
          // optional: border top to blend with shadow
          borderTopWidth: 0,
        },
        tabBarActiveTintColor:
          colorScheme === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text,
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Active",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={`list-circle${focused ? "" : "-outline"}`}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="complete"
        options={{
          title: "Complete",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={`checkmark-circle${focused ? "" : "-outline"}`}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
