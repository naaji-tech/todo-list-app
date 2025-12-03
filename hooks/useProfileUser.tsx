import { USER_PROFILE } from "@/data/placeholder-data";
import { useState } from "react";

export default function useProfileUser() {
  // State for editable fields
  const [name, setName] = useState(USER_PROFILE.name);
  const [dateOfBirth, setDateOfBirth] = useState(USER_PROFILE.dateOfBirth);
  const [email, setEmail] = useState(USER_PROFILE.email);
  const [mobileNumber, setMobileNumber] = useState(USER_PROFILE.mobileNumber);
  const [location, setLocation] = useState(USER_PROFILE.location);

  const profileUrl = USER_PROFILE.profileUrl;

  function updateProfile() {
    USER_PROFILE.name = name;
    USER_PROFILE.dateOfBirth = dateOfBirth;
    USER_PROFILE.email = email;
    USER_PROFILE.mobileNumber = mobileNumber;
    USER_PROFILE.location = location;
  }

  return {
    name,
    setName,
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
  };
}
