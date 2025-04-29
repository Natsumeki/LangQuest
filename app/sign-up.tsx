import React, { useCallback, useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { useSSO, useUser } from '@clerk/clerk-expo';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function Page() {
  useWarmUpBrowser();

  const { user } = useUser();

  const { startSSOFlow } = useSSO();

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
        strategy: 'oauth_google',
        redirectUrl: AuthSession.makeRedirectUri({ path: '/mainScreen', scheme: 'japanapp' }),
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.push('/mainScreen');
        console.log(user);
      } else {
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  console.log(user);

  return (
    <View className="space-y-4">
      {/* Google Sign-in Button */}
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center rounded-full bg-pink-900 px-6 py-3">
        <Text className="text-center text-white">Sign in with Google</Text>
      </TouchableOpacity>

      {/* Guest Login Button */}
      <TouchableOpacity
        onPress={() => router.push('/mainScreen')}
        className="flex-row items-center rounded-full bg-gray-800 px-6 py-3">
        <Text className="text-center text-white">Prisijungti kaip svečias</Text>
      </TouchableOpacity>
    </View>
  );
}
