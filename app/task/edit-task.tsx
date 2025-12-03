import EditTaskForm from "@/components/forms/EditTaskForm";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function EditTask() {
  const params = useLocalSearchParams();

  return (
    <View className="px-6 pt-8">
      <EditTaskForm 
        taskTitle={Array.isArray(params.taskTitle) ? params.taskTitle[0] : params.taskTitle || ''} 
        taskDate={Array.isArray(params.taskDate) ? params.taskDate[0] : params.taskDate || ''} 
        taskTime={Array.isArray(params.taskTime) ? params.taskTime[0] : params.taskTime || ''} 
        isStarred={(Array.isArray(params.isStarred) ? params.isStarred[0] : params.isStarred) === 'true'} 
      />
    </View>
  );
}
