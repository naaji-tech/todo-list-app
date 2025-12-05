import { TextButton, ThemeButton } from "@/components/ui/Button";
import ProfileCard from "@/components/ui/user/ProfileCard";
import ProfileDetailCard from "@/components/ui/user/ProfileDetailCard";
import theme from "@/constants/colors";
import useProfileUser from "@/hooks/useProfileUser";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";

export default function User() {
  const { getUserProfile, updateProfile } = useProfileUser();

  const [isEditable, setIsEditable] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(getUserProfile().dateOfBirth);
  const [email, setEmail] = useState(getUserProfile().email);
  const [location, setLocation] = useState(getUserProfile().location);
  const [mobileNumber, setMobileNumber] = useState(
    getUserProfile().mobileNumber
  );

  const handleSave = () => {
    Alert.alert("Profile Saved", "Your profile changes have been saved.");
    setIsEditable(false);
    updateProfile(
      getUserProfile().name,
      dateOfBirth,
      email,
      mobileNumber,
      location
    );
  };

  const handleCancel = () => {
    setDateOfBirth(getUserProfile().dateOfBirth);
    setEmail(getUserProfile().email);
    setLocation(getUserProfile().location);
    setMobileNumber(getUserProfile().mobileNumber);
  };

  const handlePressAboutUs = () => {
    Alert.alert("About us", "This is a todo list application.");
  };

  const handlePressContactUs = () => {
    Alert.alert("Contact us", "You can reach us at contact@todolistapp.com.");
  };

  const handlePressLogout = () => {
    Alert.alert("Logout", "You have been logged out.");
  };

  return (
    <ScrollView className="px-7 pt-6">
      <ProfileCard
        name={getUserProfile().name}
        profileUrl={getUserProfile().profileUrl}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        onCancel={handleCancel}
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
            onPress={handlePressAboutUs}
            style={{ marginBottom: 8 }}
          />

          <TextButton
            title="Contact us"
            onPress={handlePressContactUs}
            style={{ marginBottom: 8 }}
          />

          <TextButton
            title="Logout"
            onPress={handlePressLogout}
            style={{ color: theme.colors.button.red }}
          />
        </View>
      )}
    </ScrollView>
  );
}
