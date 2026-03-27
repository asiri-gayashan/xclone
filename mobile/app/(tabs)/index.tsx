import { View, Text } from 'react-native'
import React from 'react'
import { useUserSync } from "@/hooks/useUserSync";

const Index = () => {

  
  
  useUserSync();

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}

export default Index