import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'; 
import React from 'react';
import { useRouter } from 'expo-router'; 
import backgroundimage from '../assets/images/bg.jpg';
import iconse from '../assets/images/icone.png'; 
import { useUser } from '@clerk/clerk-expo';

const MainScreen = () => {
  const router = useRouter(); 

  const navigateTolevelScreen = () => {
    router.push('/levelsScreen');
  };
 
  const navigateToGame = () => {
    router.push('/gameScreen');
  };

  
  // const navigateToOption = () => {
  //   router.push('/optionScreen');
  // };

  
  const navigateToRules = () => {
    router.push('/rulesScreen');
  };
  const navigateToScreen = () => {
    router.push('/profileScreen');
  };

  const { user } = useUser();

  console.log(user);

  return (
    <ImageBackground
      source={backgroundimage}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
      {/* Start Game Button */}
      <TouchableOpacity
        onPress={navigateTolevelScreen}
        style={{
          marginBottom: 20,
          height: 64,
          width: 256,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 32,
          backgroundColor: 'red',
          padding: 16,
          shadowColor: 'blue',
          shadowOpacity: 0.5,
          shadowRadius: 10,
        }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
          Start Game
        </Text>
      </TouchableOpacity>

      {/* Option Button */}
      <TouchableOpacity
        // onPress={navigateToOption}
        style={{
          marginBottom: 20,
          height: 64,
          width: 256,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 32,
          backgroundColor: 'red',
          padding: 16,
          shadowColor: 'blue',
          shadowOpacity: 0.5,
          shadowRadius: 10,
        }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
          Option
        </Text>
      </TouchableOpacity>

      {/* Rules Button */}
      <TouchableOpacity
        onPress={navigateToRules}
        style={{
          marginBottom: 20,
          height: 64,
          width: 256,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 32,
          backgroundColor: 'red',
          padding: 16,
          shadowColor: 'blue',
          shadowOpacity: 0.5,
          shadowRadius: 10,
        }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
          Rules
        </Text>
      </TouchableOpacity>

      {/* Image icon in top-right corner */}
      <TouchableOpacity
        onPress={navigateToScreen}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 40, 
          height: 40, 
        }}>
        <Image
          source={iconse} 
          style={{
            width: 40, 
            height: 40, 
          }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default MainScreen;
