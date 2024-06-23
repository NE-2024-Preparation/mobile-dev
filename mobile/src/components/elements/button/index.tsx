import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export const Button = (props: ButtonProps) => {
  const { title, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      className='bg-primary rounded-md w-full justify-center items-center min-h-[50px]'
      {...props}
    >
      <Text className='text-white font-bold'>{title}</Text>
    </TouchableOpacity>
  );
};
