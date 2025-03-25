import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import questions from '~/assets/data/AllQuestionsData';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

import { QuizQuestion } from '~/types';
import EndedQuestion from '~/components/EndedQuestion';
import HeaderComponent from '~/components/HeaderComponent';

export default function GameScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(
    questions[currentQuestionIndex]
  );
  // gyvybes
const[lives, setLives] = useState(5);



  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('Jūs laimėjote!');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrectAnswer = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrongAnswer = () => {
if(lives <= 1){
  Alert.alert('jus pralaimejote', "bandykite is naujo" , [
    { text: "bandykite dar karta", onPress: restart },
    
  ]);
  setLives(0);
}else{
  Alert.alert('Neteisingas atsakymas, bandykite dar kartą!');
  setLives(lives -1)
}
};

const restart  = () => {
  setLives(5);
  setCurrentQuestionIndex(0);
};

  

  return (

    <SafeAreaView className="flex flex-1 p-3">
      <StatusBar animated barStyle={'default'} />
      
      {/* <header></header> */}
      <HeaderComponent progress={currentQuestionIndex / questions.length}lives={lives}/>


      {currentQuestion.type === 'MULTIPLE_CHOICE' && (
        <MultipleChoiceQuestion
          question={{
            question: currentQuestion.text,
            options: currentQuestion.options || [],
          }}
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