import { Image, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import question from '../assets/data/OneQuestionWithOption';
import ImageOption from "~/components/ImageOptions.tsx/ImageOption";

export default function Home() {
  return (
    <SafeAreaView className="m-3 flex-1 items-center justify-center p-3">
      {/* laiko juosta */}
      <StatusBar animated barStyle={'light-content'}/>
      {/* text klausimas */}
      <Text className="mb-4 text-center text-2xl font-bold">{question.question}</Text>
      
      {/* imam klausyma ir option ir imama masyva */}
      <View className='w-full flex-1 flex-row flex-wrap justify-between gap-2'>
        {question.options.map((option) => (
          // panaudojam komponenta
          <ImageOption key={option.id} image={option.image} text={option.text}/>
        ))}
        </View>
    </SafeAreaView>

  );
}
