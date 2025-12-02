import FloatingButton from "@/components/ui/Button";
import CompleteTaskList from "@/components/ui/complete/CompleteTaskList";
import { ScrollView, View } from "react-native";

export default function Complete() {
  return (
    <>
      <ScrollView className="flex-1 px-7 pt-6 bg-gray-300 dark:bg-gray-900">
        <CompleteTaskList />
        <CompleteTaskList />
        <CompleteTaskList />
        <CompleteTaskList />
        <View className="h-16" />
      </ScrollView>
      <FloatingButton />
    </>
  );
}
