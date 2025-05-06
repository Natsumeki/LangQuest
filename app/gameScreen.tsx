import React, { useEffect, useState } from 'react';
import { Alert, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';


import { QuizQuestion } from '~/types';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import EndedQuestion from '~/components/EndedQuestion';
import HeaderComponent from '~/components/HeaderComponent';
import levelQuestions from '~/assets/data/levelsData';

export default function GameScreen() {
  const { levelGame } = useLocalSearchParams(); // Gauna lygio numerį kaip string
  const level = Number(levelGame);

  const questions = levelQuestions[level];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lives, setLives] = useState(5);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setLives(5);
  }, [level]);

  if (!questions || questions.length === 0) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <StatusBar animated barStyle="default" />
        <HeaderComponent progress={0} lives={lives} />
        <View>
          <Text>Šiame lygyje nėra klausimų.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('Jūs laimėjote!', '', [
        { text: 'Grįžti atgal', onPress: () => setCurrentQuestionIndex(0) },
      ]);
    }
  }, [currentQuestionIndex]);

  const onCorrectAnswer = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrongAnswer = () => {
    if (lives <= 1) {
      Alert.alert('Jūs pralaimėjote', 'Bandykite iš naujo', [
        { text: 'Bandyti dar kartą', onPress: restart },
      ]);
    } else {
      Alert.alert('Neteisingas atsakymas, bandykite dar kartą!');
      setLives((prev) => prev - 1);
    }
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  return (
    <SafeAreaView className="flex flex-1 p-3">
      <StatusBar animated barStyle="default" />

      <HeaderComponent
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />

      {currentQuestion?.type === 'MULTIPLE_CHOICE' && (
      <MultipleChoiceQuestion
      question={{
        id: currentQuestion.id, // pridėta
        question: currentQuestion.text,
        options: currentQuestion.options || [],
      }}
      onCorrectAnswer={onCorrectAnswer}
      onWrongAnswer={onWrongAnswer}
    />
    
      )}

      {currentQuestion?.type === 'OPEN_ENDED' && (
      <EndedQuestion
      question={currentQuestion} // čia jau yra visas su ID
      onCorrectAnswer={onCorrectAnswer}
      onWrongAnswer={onWrongAnswer}
    />
    
      )}
    </SafeAreaView>
  );
}
