import theme from "@/theme/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, useColorScheme, View } from "react-native";

export default function CustomHeader() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <View className="flex flex-row items-center justify-between w-full px-6">
      <View className="flex flex-row items-center gap-4">
        <Image
          source={require("@/assets/app-images/profile-pic.jpeg")}
          className="w-12 h-12 rounded-full"
        />
        <Text className="text-2xl font-bold text-gray-900 dark:text-gray-300">
          Mohamed Naaji
        </Text>
      </View>
      <Pressable
        android_ripple={{
          color: "#b3b3b3",
          foreground: true,
          radius: 22,
          borderless: true,
        }}
        onPress={() => {
          router.push({
            pathname: "/profile/user",
          });
        }}
      >
        <Ionicons
          name="menu"
          size={28}
          color={
            colorScheme === "dark"
              ? theme.colors.dark.text
              : theme.colors.light.text
          }
        />
      </Pressable>
    </View>
  );
}
