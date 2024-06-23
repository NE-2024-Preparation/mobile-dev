import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='login'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='signup'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
