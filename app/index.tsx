import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'; // Added Image import
import React from 'react';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import backgroundimage from '../assets/images/bg.jpg';
import iconse from '../assets/images/icone.png'; // Import the image to use as the icon

const Home = () => {
  const router = useRouter(); // Initialize useRouter hook

  // Navigate to the 'gameScreen' when the button is pressed
  const navigateToGame = () => {
    router.push('/gameScreen');
  };

  // Navigate to the 'optionScreen' when the button is pressed
  const navigateToOption = () => {
    router.push('/optionScreen');
  };

  // Navigate to the 'rulesScreen' when the button is pressed
  const navigateToRules = () => {
    router.push('/rulesScreen');
  };
  const navigateToScreen = () => {
    router.push('/profileScreen');
  };
  return (
    <ImageBackground
      source={backgroundimage}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
      {/* Start Game Button */}
      <TouchableOpacity
        onPress={navigateToGame}
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
        onPress={navigateToOption}
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
          width: 40, // Set the width of the image
          height: 40, // Set the height of the image
        }}>
        <Image
          source={iconse} // Use the image you imported
          style={{
            width: 40, // Set the width of the image
            height: 40, // Set the height of the image
          }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Home;
