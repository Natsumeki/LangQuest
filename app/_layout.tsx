import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="gameScreen" options={{ headerShown: true }}/>
      <Stack.Screen name="optionScreen" options={{ headerShown: true }}/>
      <Stack.Screen name="rules" options={{ headerShown: true }}/>
      <Stack.Screen name="profileScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
