import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
  content: string;
  onPress: () => void;
};

export const Button = ({ content, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='bg-primary rounded-md w-full justify-center items-center min-h-[50px]'
    >
      <Text className='text-white font-bold'>{content}</Text>
    </TouchableOpacity>
  );
};
