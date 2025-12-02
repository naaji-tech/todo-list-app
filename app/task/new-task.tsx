import NewTaskForm from "@/components/forms/NewTaskForm";
import { View } from "react-native";

export default function NewTask() {
  return (
    <View className="px-6 pt-8">
      <NewTaskForm />
    </View>
  );
}
