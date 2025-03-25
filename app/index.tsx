import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

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

  return (
    <ImageBackground
      source={{ uri: 'https://png.pngtree.com/background/20210711/original/pngtree-japanese-travel-fresh-and-wind-poster-background-picture-image_1070537.jpg' }}
      className='flex-1 justify-center items-center p-5'
    >
      {/* Start Game Button */}
      <TouchableOpacity
        onPress={navigateToGame}
    className='bg-red-500 p-4 rounded-full mb-5 w-64 h-16 justify-center items-center shadow-2xl shadow-blue-500'
      >
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
          Start Game
        </Text>
      </TouchableOpacity>

      {/* Option Button */}
      <TouchableOpacity
        onPress={navigateToOption}
        className='bg-red-500 p-4 rounded-full mb-5 w-64 h-16 justify-center items-center shadow-2xl shadow-blue-500'

      >
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
          Option
        </Text>
      </TouchableOpacity>

      {/* Rules Button */}
      <TouchableOpacity
        onPress={navigateToRules}
        className='bg-red-500 p-4 rounded-full mb-5 w-64 h-16 justify-center items-center shadow-2xl shadow-blue-900'

      >
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
          Rules
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Home;
