import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="edit"
        options={{ headerShown: false, presentation: "transparentModal" }}
      />
    </Stack>
  );
}
