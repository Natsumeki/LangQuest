import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import questions from '~/assets/data/MultipleChoiceQuestions';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import EndedQuestion from './EndedQuestion';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Indekas, nurodo dabartini klausima
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      // Parodo zinute, kai atsakyti visi klausimai
      Alert.alert('Sveikiname! ', 'Jus atsakete i visus klausimus');
      setCurrentQuestionIndex(0);
    } else {
      // Nustatome nauja klausima
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrectAnswer = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrongAnser = () => {
    Alert.alert('Netiesa! ', 'Bandykite dar karta!');
  };

  return (
    <SafeAreaView className="flex flex-1 p-3">
      <StatusBar animated barStyle={'default'} />

      {/* <MultipleChoiceQuestion
        question={currentQuestion}
        onCorrectAnswer={onCorrectAnswer}
        onWrongAnser={onWrongAnser}
      /> */}
      <EndedQuestion
        question={currentQuestion}
        onCorrectAnswer={onCorrectAnswer}
        onWrongAnser={onWrongAnser}
      />
    </SafeAreaView>
  );
}
