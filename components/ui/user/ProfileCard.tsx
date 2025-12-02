import { Image, Text, View } from "react-native";
import EditButton from "./EditButton";

export default function ProfileCard() {
  return (
    <View className="flex flex-row items-center gap-4">
      <Image
        source={require("@/assets/app-images/profile-pic.jpeg")}
        className="w-12 h-12 rounded-full"
      />
      <View className="flex flex-col">
        <Text className="text-2xl font-bold text-gray-900 dark:text-gray-300">
          Mohamed Naaji
        </Text>
        <EditButton />
      </View>
    </View>
  );
}
