import { TextInput } from "react-native";

interface TextInputFieldProps {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
}

export function TextInputField({
  value,
  setValue,
  placeholder,
  keyboardType,
}: TextInputFieldProps) {
  return (
    <TextInput
      className="border border-gray-500 px-4 py-4 text-base rounded-xl focus:border-gray-950 dark:focus:border-gray-300 text-gray-900 dark:text-gray-300 placeholder:text-gray-500"
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      keyboardType={keyboardType}
    />
  );
}
