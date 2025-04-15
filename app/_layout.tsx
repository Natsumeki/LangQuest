import '../global.css';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { Stack } from 'expo-router';

const clerkApiKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkApiKey) {
  throw new Error('clerk api raktas nerastas');
}

// console.log(clerkApiKey);

export default function Layout() {
  return (
    <ClerkProvider publishableKey={clerkApiKey}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="mainScreen" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: true }} />
        <Stack.Screen name="gameScreen" options={{ headerShown: true }} />
        <Stack.Screen name="optionScreen" options={{ headerShown: true }} />
        <Stack.Screen name="rules" options={{ headerShown: true }} />
        <Stack.Screen name="profileScreen" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}
