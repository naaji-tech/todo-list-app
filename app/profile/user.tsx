import { TextButton } from "@/components/ui/Button";
import ProfileCard from "@/components/ui/user/ProfileCard";
import ProfileDetailCard from "@/components/ui/user/ProfileDetailCard";
import theme from "@/theme/colors";
import { Alert, ScrollView, View } from "react-native";

export default function Profile() {
  return (
    <ScrollView className="px-7 pt-6">
      <ProfileCard />
      <View className="h-6" />
      <ProfileDetailCard title="Birth Date" info="10/02/2000" />
      <ProfileDetailCard title="Email" info="mohamednaaji@yahoo.com" />
      <ProfileDetailCard title="Mobile Number" info="+94770835948" />
      <ProfileDetailCard title="Location" info="Colombo, Sri Lanka" />
      <View className="h-16" />

      <TextButton
        title="About us"
        onPress={() => {
          Alert.alert("About us", "This is a todo list application.");
        }}
        style={{ marginBottom: 8 }}
      />
      <TextButton
        title="Contact us"
        onPress={() => {
          Alert.alert(
            "Contact us",
            "You can reach us at contact@todolistapp.com."
          );
        }}
        style={{ marginBottom: 8 }}
      />
      <TextButton
        title="Logout"
        onPress={() => {
          Alert.alert("Logout", "You have been logged out.");
        }}
        style={{ color: theme.colors.button.red }}
      />
    </ScrollView>
  );
}
