import { Image, Text, View } from "react-native";
import { EditTextButton } from "../Button";

interface ProfileCardProps {
  name: string;
  profileUrl: string;
  isEditable: boolean;
  setIsEditable: (editable: boolean) => void;
}

export default function ProfileCard({ name, profileUrl, isEditable, setIsEditable }: ProfileCardProps) {
  return (
    <View className="flex flex-row items-center gap-4">
      <Image source={{ uri: profileUrl }} className="w-12 h-12 rounded-full" />
      <View className="flex flex-col">
        <Text className="text-2xl font-bold text-gray-900 dark:text-gray-300">
          {name}
        </Text>
        <EditTextButton isEditable={isEditable} setIsEditable={setIsEditable} />
      </View>
    </View>
  );
}
