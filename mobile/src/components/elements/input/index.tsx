import React from "react";
import {
  TextInput as DefaultTextInput,
  Text,
  TextInputProps as DefaultTextInputProps,
  View
} from "react-native";

import { useThemeColor } from "@/hooks";

type TextInputProps = DefaultTextInputProps & {
  type?: string;
  error?: string;
  icon?: React.ReactNode;
};

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    inputMode = "text",
    className = "",
    placeholder = "",
    error = "",
    icon
  } = props;
  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("text");

  return (
    <View className='flex my-2'>
      <View
        className={`flex flex-row items-center justify-between h-[50px] border w-full rounded-md border-third overflow-hidden px-4 ${className}`}
        style={{
          backgroundColor
        }}
      >
        {icon}
        <DefaultTextInput
          onChangeText={() => {}}
          inputMode={inputMode}
          placeholder={placeholder}
          className='flex-1 px-3 items-center'
          style={{
            color: textColor
          }}
          autoCapitalize='none'
          {...props}
        />
      </View>
      {error && <Text className='text-red-500 text-xs pl-3'>{error}</Text>}
    </View>
  );
};
