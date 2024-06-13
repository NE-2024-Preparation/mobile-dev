import { Foundation } from "@expo/vector-icons";
import { View, Text, Image, ImageSourcePropType } from "react-native";

type FeaturedFoodProps = {
  name: string;
  image: ImageSourcePropType | undefined;
};

const FeaturedFood = ({ name, image }: FeaturedFoodProps) => {
  return (
    <View className='h-[100px] py-3 px-2 flex-row items-center justify-between mt-3 w-full rounded-md bg-white'>
      <View className='flex-row'>
        <View className='h-full w-[75px] rounded-full overflow-hidden'>
          <Image source={image} alt='' className='h-full w-full' />
        </View>
        <View className='flex-col h-full justify-center ml-4'>
          <Text className='text-secondary font-bold'>{name}</Text>
          <Text className='mt-2 text-xs text-third'>Fast Food</Text>
          <Text className='mt-2 text-xs text-third'>🍕 58 Calories</Text>
        </View>
      </View>
      <View className='flex-col items-end justify-between h-full py-1'>
        <Foundation name='heart' size={18} color='#f7941d' />
        <Text className='text-secondary font-bold text-xs'>$50.00</Text>
      </View>
    </View>
  );
};

export default FeaturedFood;
