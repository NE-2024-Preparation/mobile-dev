import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  AntDesign
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false
      }}
    >
      <Tabs.Screen
        name='menu'
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='items-center justify-center gap-22'>
              <AntDesign
                name='home'
                size={25}
                color={focused ? "#f7941d" : "#484848"}
              />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name='food-details'
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='items-center justify-center gap-22'>
              <FontAwesome5
                name='hamburger'
                size={24}
                color={focused ? "#f7941d" : "#484848"}
              />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name='food'
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='items-center justify-center gap-22'>
              <Ionicons
                name='restaurant-outline'
                size={24}
                color={focused ? "#f7941d" : "#484848"}
              />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name='cart'
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='items-center justify-center gap-22'>
              <AntDesign
                name='shoppingcart'
                size={24}
                color={focused ? "#f7941d" : "#484848"}
              />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name='checkout'
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='items-center justify-center gap-22'>
              <MaterialIcons
                name='shopping-cart-checkout'
                size={24}
                color={focused ? "#f7941d" : "#484848"}
              />
            </View>
          )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
