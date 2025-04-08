import '../global.css';
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="gameScreen" options={{ headerShown: true }}/>
      <Stack.Screen name="optionScreen" options={{ headerShown: true }}/>
      <Stack.Screen name="rules" options={{ headerShown: true }}/>
      <Stack.Screen name="profileScreen" options={{ headerShown: false }} />
    </Stack>
    </ClerkProvider>
  );
  
}
