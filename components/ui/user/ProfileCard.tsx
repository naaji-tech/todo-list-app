import theme from "@/constants/colors";
import { Image, Text, useColorScheme, View } from "react-native";
import { IconTextButton } from "../Button";

interface ProfileCardProps {
  name: string;
  profileUrl: string;
  isEditable: boolean;
  setIsEditable: (editable: boolean) => void;
  onCancel?: () => void;
}

export default function ProfileCard({
  name,
  profileUrl,
  isEditable,
  setIsEditable,
  onCancel,
}: ProfileCardProps) {
  const colorScheme = useColorScheme();

  const handleOnPress = () => {
    console.log("User profile edit pressed");
    if (isEditable && onCancel) {
      onCancel();
    }
    setIsEditable(!isEditable);
  };

  return (
    <View className="flex flex-row items-center gap-4">
      <Image source={{ uri: profileUrl }} className="w-12 h-12 rounded-full" />
      <View className="flex flex-col">
        <Text className="text-2xl font-bold text-gray-900 dark:text-gray-300">
          {name}
        </Text>
        <IconTextButton
          onPress={handleOnPress}
          iconName={isEditable ? "close" : "create-outline"}
          iconSize={16}
          iconColor={
            colorScheme === "dark"
              ? isEditable
                ? theme.colors.icons.delete
                : theme.colors.icons.light
              : isEditable
                ? theme.colors.icons.delete
                : theme.colors.icons.dark
          }
          textColor={
            colorScheme === "dark"
              ? isEditable
                ? theme.colors.icons.delete
                : theme.colors.icons.light
              : isEditable
                ? theme.colors.icons.delete
                : theme.colors.icons.dark
          }
          buttonText={isEditable ? "Cancel" : "Edit"}
        />
      </View>
    </View>
  );
}
