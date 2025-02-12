// app/_layout.tsx
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { FONTS } from "./theme";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    [FONTS.heading]: require("../assets/fonts/Raleway-Regular.ttf"),
    [FONTS.headingBold]: require("../assets/fonts/Raleway-Bold.ttf"),
    [FONTS.body]: require("../assets/fonts/Montserrat-Regular.ttf"),
    [FONTS.bodyBold]: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Optionally, render a splash/loading screen here
  }

  return (
    <SafeAreaProvider>
      {/* The Stack defines our routes. "login" is the initial screen */}
      <Stack  screenOptions={{headerShown: false}}/>
    </SafeAreaProvider>
  );
}
