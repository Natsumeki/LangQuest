<<<<<<< HEAD
import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
=======
import { Alert, Image, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import questions from '../assets/data/MultipleChoiceQuestions';

import { useEffect, useState } from 'react';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import EndedQuestion from './EndedQuestion';

type Option = {
  id: string;
  image: string;
  text: string;
};

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //indeksas nurodo dabartini klausyma
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  const onCorrectAnswer = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1); //jis nustato pridedam viena ir pereinam prie kito klausymo
  };

  //apdoroti duomenis pries paleidziant
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('sveikiname', 'jus atsakete i visus klausymus');
      setCurrentQuestionIndex(0);
    } else {
      //nustato nauja klausyma
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onWrongAnser = () => {
    Alert.alert('netiesa!', 'bandykite dar karta!'); //neteisinga fukcija
  };

  return (
    <SafeAreaView className="m-3 flex-1 items-center justify-center p-3">
      {/* laiko juosta */}
      <StatusBar animated barStyle={'light-content'} />
      {/* text klausimas */}
      {/* <MultipleChoiceQuestion
        question={currentQuestion}
        onCurrentAnswer={onCorrectAnswer}
        onWrongAnser={onWrongAnser}
      /> */}
      <EndedQuestion />
    </SafeAreaView>
>>>>>>> 7f00e7d38beb5903a7ae56002a68ae9faef02a15
  );
}
