import { router } from "expo-router";
import { useEffect } from "react";
import { ImageBackground, Text, View } from "react-native";
import { useSelector } from "react-redux";

import steak from "@/assets/images/steak.jpg";
import { Button } from "@/components/elements/button";
import { RootState } from "@/types/redux";

const App = () => {
  const { userData } = useSelector((state: RootState) => state.user);
  const { tokensData } = useSelector((state: RootState) => state.tokens);

  useEffect(() => {
    console.log("userData", userData);
    console.log("tokensData", tokensData);
  }, []);

  return (
    <View className='h-full w-full'>
      <ImageBackground source={steak} className='h-full w-full'>
        <View
          className='h-full w-full'
          style={{
            backgroundColor: "rgba(0,0,0,.4)"
          }}
        />
        <View className='w-full px-6 items-center justify-center'>
          <View className='flex-col items-center justify-around absolute w-full h-[270px] bg-white bottom-8 rounded-md px-6 py-5'>
            <Text className='text-secondary text-xl font-bold'>
              Satisfy Your Cravings
            </Text>
            <Text className='text-center text-gray-600 leading-5 text-[12px]'>
              Feast your eyes on a collection of culinary delights from local
              restaurants prepared by top chefs. Happy eating 😋
            </Text>
            <Button
              title='Continue'
              onPress={() => router.push("/(auth)/login")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
