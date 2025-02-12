// app/(tabs)/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import { COLORS } from "../theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.mainColorOne },
        tabBarActiveTintColor: COLORS.paragraphColor,
        tabBarInactiveTintColor: COLORS.inactiveColor,
      }}
    >
      {/* The names below correspond to the files in this folder */}
      <Tabs.Screen name="dashboard" options={{ title: "Home" }} />
      <Tabs.Screen name="vitals" options={{ title: "Profile" }} />
      <Tabs.Screen name="lifestyle" options={{ title: "Settings" }} />
    </Tabs>
  );
}
