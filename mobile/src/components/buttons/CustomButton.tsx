import { TouchableOpacity, Text } from "react-native";

type CustomButtonProps = {
  content: string;
  onPress: () => void;
};

const CustomButton = ({ content, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='bg-primary rounded-md w-full justify-center items-center min-h-[50px]'
    >
      <Text className='text-white font-bold'>{content}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
