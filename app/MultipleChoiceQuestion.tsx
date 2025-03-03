import { View, Text } from 'react-native';
import React, { useState } from 'react';
import ImageOption from '~/components/ImageOptions.tsx/ImageOption';
import CustomButton from '~/components/CustomButton';
import { Option, QuestionProp } from '~/types';

const MultipleChoiceQuestion = ({ question, onCurrentAnswer, onWrongAnser }: QuestionProp) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const onButtonPress = () => {
    if (selected?.correct) {
      onCurrentAnswer(); //teisingas atsakymas
      setSelected(null);
    } else {
      //neteisingas
      onWrongAnser();
    }
  };
  return (
    <>
      <Text className="mb-4 text-center text-2xl font-bold">{question.question}</Text>

      {/* imam klausyma ir option ir imama masyva */}
      <View className="w-full flex-1 flex-row flex-wrap justify-between gap-2">
        {question.options.map((option) => (
          // panaudojam komponenta
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <CustomButton text="Patvirtinti" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

export default MultipleChoiceQuestion;
