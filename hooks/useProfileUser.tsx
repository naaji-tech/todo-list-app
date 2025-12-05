import { UserProfile } from "@/constants/types";
import { USER_PROFILE } from "@/data/placeholder-data";

export default function useProfileUser() {
  function getUserProfile(): UserProfile {
    const userProfile: UserProfile = {
      id: USER_PROFILE.id,
      profileUrl: USER_PROFILE.profileUrl,
      name: USER_PROFILE.name,
      dateOfBirth: USER_PROFILE.dateOfBirth,
      email: USER_PROFILE.email,
      mobileNumber: USER_PROFILE.mobileNumber,
      location: USER_PROFILE.location,
    };
    return userProfile;
  }

  function updateProfile(
    name: string,
    dateOfBirth: string,
    email: string,
    mobileNumber: string,
    location: string
  ) {
    USER_PROFILE.name = name;
    USER_PROFILE.dateOfBirth = dateOfBirth;
    USER_PROFILE.email = email;
    USER_PROFILE.mobileNumber = mobileNumber;
    USER_PROFILE.location = location;
  }

  return {
    getUserProfile,
    updateProfile,
  };
}
