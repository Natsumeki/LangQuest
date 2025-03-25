import { View, Text, ImageBackground } from 'react-native';
import React from 'react';

const Rules = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://png.pngtree.com/background/20210711/original/pngtree-japanese-impression-travel-poster-background-template-picture-image_1104477.jpg' }} 
      style={{ flex: 1 }}
    >
      <View className="flex-1 justify-center items-center pb-20"> {/* Center all content */}
        <View className="bg-opacity-50 rounded-lg p-5 w-full max-w-lg"> {/* Restrict width for better layout */}
          {/* Title */}
          <Text className="text-3xl font-bold text-center mb-5 text-pink-500">
            Game Rules
          </Text>
          
          {/* Rule 1 */}
          <Text className="text-lg mb-4 text-pink-500">
            1. To start the game, click the "Start Game" button.
          </Text>
          
          {/* Rule 2 */}
          <Text className="text-lg mb-4 text-pink-500">
            2. Once the game begins, you will face different challenges as a player.
          </Text>
          
          {/* Rule 3 */}
          <Text className="text-lg mb-4 text-pink-500">
            3. To modify the game options, click the "Options" button to change the settings.
          </Text>
          
          {/* Rule 4 */}
          <Text className="text-lg mb-4 text-pink-500">
            4. For more detailed information about the rules and game progress, click the "Rules" button on this screen.
          </Text>
          
          {/* Rule 5 */}
          <Text className="text-lg mb-4 text-pink-500">
            5. When the game ends, your score will be displayed. Aim for the highest score!
          </Text>
          
          {/* Fun Text */}
          <Text className="text-lg font-bold text-center italic mt-5 text-red-500">
            Have fun!
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Rules;
