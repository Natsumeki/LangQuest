import { View, Text } from 'react-native'
import React from 'react'
import { ProgressProps } from '~/types'

const Progressbar = ({progress} : ProgressProps) => {

    return (
    <View className="h-6 flex-1 bg-gray-300 rounded-full">
      <View style = {{width: `${progress * 100}%` }} className={'flex-1 rounded-full bg-[#f50ba7]'}>
        <View className={'mt-1 h-2 w-[90%] self-center rounded-full bg-[#fa5fcb]'}/>
      </View>
      {/* //hight light */}
      
    </View>
  )
}

export default Progressbar