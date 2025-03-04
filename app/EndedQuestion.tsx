import { View, Text, TextInput, Image, Platform, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';

import { EndedQuestionProps } from '~/types';
import CustomButton from '~/components/CustomButton';

const EndedQuestion = ({ question, onCorrectAnswer, onWrongAnser }: EndedQuestionProps) => {
  const [input, setInput] = useState('');

  const onButtonPress = () => {
    if (question.answer?.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrectAnswer();
      setInput('');
    } else {
      onWrongAnser();
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text className="self-start text-lg font-bold">Išverskite šį sakinį</Text>
      <View className="m-2 mb-0 flex flex-row items-center self-stretch">
        {/* Image */}
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738675454/Boy_qcbv19.png',
          }}
          className="aspect-3/4 mr-2 w-[30%]"
          resizeMode="contain"
          width={50}
          height={150}
        />

        <View className=" rounded-md border border-gray-300 p-2">
          <Text className="text-md">I am a student</Text>
        </View>
      </View>

      {/* Sentance container */}
      <TextInput
        value={input}
        onChangeText={(changedText) => setInput(changedText)}
        className="text-md flex-1 self-stretch rounded-lg border border-gray-300 bg-gray-200 p-2"
        placeholder="Įveskite lietuvių kalba"
        textAlignVertical="top"
        multiline={true}
      />

      {/* Button */}
      <CustomButton text="Check" onPress={onButtonPress} disabled={false} />
    </KeyboardAvoidingView>
  );
};

export default EndedQuestion;
