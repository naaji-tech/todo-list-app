import { TextButton, ThemeButton } from "@/components/ui/Button";
import ProfileCard from "@/components/ui/user/ProfileCard";
import ProfileDetailCard from "@/components/ui/user/ProfileDetailCard";
import theme from "@/constants/colors";
import useProfileUser from "@/hooks/useProfileUser";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";

export default function User() {
  const {
    name,
    dateOfBirth,
    setDateOfBirth,
    email,
    setEmail,
    mobileNumber,
    setMobileNumber,
    location,
    setLocation,
    profileUrl,
    updateProfile,
  } = useProfileUser();

  const [isEditable, setIsEditable] = useState(false);

  const handleSave = () => {
    Alert.alert("Profile Saved", "Your profile changes have been saved.");
    setIsEditable(false);
    updateProfile();
  };

  return (
    <ScrollView className="px-7 pt-6">
      <ProfileCard
        name={name}
        profileUrl={profileUrl}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
      />
      <View className="h-6" />

      <ProfileDetailCard
        title="Birth Date"
        info={dateOfBirth}
        setInfo={setDateOfBirth}
        isEditable={isEditable}
      />
      <ProfileDetailCard
        title="Email"
        info={email}
        setInfo={setEmail}
        isEditable={isEditable}
      />
      <ProfileDetailCard
        title="Mobile Number"
        info={mobileNumber}
        setInfo={setMobileNumber}
        isEditable={isEditable}
      />
      <ProfileDetailCard
        title="Location"
        info={location}
        setInfo={setLocation}
        isEditable={isEditable}
      />

      {isEditable ? (
        <View>
          <View className="h-10" />
          <ThemeButton title="Save" onPress={handleSave} />
        </View>
      ) : (
        <View>
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
        </View>
      )}
    </ScrollView>
  );
}
