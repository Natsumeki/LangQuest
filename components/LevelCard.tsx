// components/LevelCard.tsx
import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface LevelCardProps {
  level: number;
  onPress: (level: number) => void;
}

const LevelCard = ({ level, onPress }: LevelCardProps) => {
  return (
    <Animated.View
      entering={FadeInUp.duration(500).delay(level * 100)}
      style={styles.cardContainer}>
      <Pressable
        onPress={() => onPress(level)}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
        <Text style={styles.text}>Level {level}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
    backgroundColor: '#f0f0f0',
  },
});

export default LevelCard;
