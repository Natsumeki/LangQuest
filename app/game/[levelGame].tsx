// app/game/[level].tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import levelQuestions from '~/assets/data/levelsData';

import EndedQuestion from '~/components/EndedQuestion';
import HeaderComponent from '~/components/HeaderComponent';
import { QuizQuestion } from '~/types';
import MultipleChoiceQuestion from '../MultipleChoiceQuestion';

export default function GameLevelScreen() {
  const router = useRouter();

  const { levelGame } = useLocalSearchParams<{ levelGame: string }>();
  const parsedLevel = parseInt(levelGame ?? '1', 10);
  const questions = levelQuestions[parsedLevel] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(questions[0] ?? null);
  const [lives, setLives] = useState(5);

  useEffect(() => {
    if (currentIndex >= questions.length) {
      Alert.alert('🎉 Jūs laimėjote!', 'Grįžtate į lygių pasirinkimą.', [
        { text: 'Gerai', onPress: () => router.replace('/levelsScreen') },
      ]);
    } else {
      setCurrentQuestion(questions[currentIndex]);
    }
  }, [currentIndex]);

  const onCorrectAnswer = () => setCurrentIndex(currentIndex + 1);

  const onWrongAnswer = () => {
    if (lives <= 1) {
      Alert.alert('❌ Pralaimėjote', 'Bandykite iš naujo.', [
        { text: 'Bandyti dar kartą', onPress: restart },
      ]);
    } else {
      Alert.alert('Neteisingas atsakymas!');
      setLives(lives - 1);
    }
  };

  const restart = () => {
    setLives(5);
    setCurrentIndex(0);
  };

  if (!currentQuestion) return null;

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <StatusBar barStyle="dark-content" />
      <HeaderComponent progress={currentIndex / questions.length} lives={lives} />
      {currentQuestion.type === 'MULTIPLE_CHOICE' && (
        <MultipleChoiceQuestion
          question={{ question: currentQuestion.text, options: currentQuestion.options || [] }}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}
      {currentQuestion.type === 'OPEN_ENDED' && (
        <EndedQuestion
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}
    </SafeAreaView>
  );
}
