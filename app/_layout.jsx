import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import "./global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="ExtraInfo" />
      </Stack>
    </Provider>
  );
}
