import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

const optionScreen = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://png.pngtree.com/background/20210710/original/pngtree-beautiful-japanese-poster-background-picture-image_991711.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>OPTION</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff', 
    fontWeight: 'bold',
  },
});

export default optionScreen;
