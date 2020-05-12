import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import test from './testproject.png';

export const ImageBlock = () => (
  <View>
    <ImageBackground source={test} style={{ width: '100%', height: '100%' }}>
      <Text>Hello</Text>
    </ImageBackground>
    <Text>HIII</Text>
    {/* <Image source={test} /> */}
  </View>
);
