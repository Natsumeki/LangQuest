import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Redirect } from 'expo-router';

const Home = () => {

  const {isSignedIn, isLoaded} = useAuth();

  if(!isLoaded){
    return <Text>loaded....</Text>
  }

  if(isSignedIn) {
    return <Redirect href={'/gameScreen'} />;
  } else {
    return <Redirect href={'/sign-up'} />;
  }
}

export default Home