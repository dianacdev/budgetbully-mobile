import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="new"
        options={{ headerShown: false, presentation: "transparentModal" }}
      />
      <Stack.Screen
        name="edit"
        options={{ headerShown: false, presentation: "transparentModal" }}
      />
    </Stack>
  );
}
