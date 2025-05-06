import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import LevelCard from '../components/LevelCard';
import { router } from 'expo-router';
import levelQuestions from '~/assets/data/levelsData';


const LevelsScreen = () => {
  // Gauname visus turimus lygius pagal levelQuestions raktus (pvz.: [1,2,3,...])
  const levels = Object.keys(levelQuestions).map(Number).sort((a, b) => a - b);

  const handlePress = (level: number) => {
    router.push({
      pathname: '/game/[levelGame]',
      params: { levelGame: level },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pasirink lygį</Text>
      <FlatList
        data={levels}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <LevelCard level={item} onPress={() => handlePress(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default LevelsScreen;
