import { Text, View } from "react-native";

interface ProfileDetailCardProps {
  title: string;
  info: string;
};

export default function ProfileDetailCard({ title, info }: ProfileDetailCardProps) {
  return (
    <View className="mt-6">
      <Text className="text-gray-900 dark:text-gray-300 text-xl">{title}</Text>
      <Text className="text-gray-700 dark:text-gray-500 text-xl">{info}</Text>
    </View>
  );
}