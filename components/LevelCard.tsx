// components/LevelCard.js
import React from 'react';
import { Text, StyleSheet, Pressable, } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const LevelCard = ({ level, onPress }) => {
  return (
    <Animated.View entering={FadeInUp.duration(500)} style={styles.card}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>Level {level}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LevelCard;
