import { Stack } from "expo-router";
import { LocationProvider } from "../providers/LocationProvider";

export default function Layout() {
  return (
    <LocationProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </LocationProvider>
  );
}
