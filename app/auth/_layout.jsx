import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="ForgetPassword" />
      <Stack.Screen name="OtpVaildation" />
      <Stack.Screen name="register" />

      {/* <Stack.Screen name="ExtraInfo" /> */}
    </Stack>
  );
}
