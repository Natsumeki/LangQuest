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
  );
}
