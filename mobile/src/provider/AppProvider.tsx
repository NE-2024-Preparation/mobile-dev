import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  useColorScheme
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { useThemeColor } from "@/hooks";
import { persistor, store } from "@/redux/store";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider(props: AppProviderProps) {
  const { children } = props;
  const colorScheme = useColorScheme();
  const color = useThemeColor("background");
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <SafeAreaView
              className='h-full w-full'
              style={{ backgroundColor: color }}
            >
              {children}
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
}
