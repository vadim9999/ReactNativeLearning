/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, Text, Image, View, TextInput} from 'react-native';
import {Cat} from './src/Cat';

const App: () => React$Node = () => {
  const [text, setText] = useState('');
  console.log("render App");
  
  return (
    <>
      <ScrollView>
        <Text>Hi!!!</Text>
        <View>
          <Text>Second text</Text>
          <Image
            source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
            style={{width: 200, height: 200}}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="you can type in me"
        />
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        {/* <Cat />
        <Cat />
        <Cat /> */}
      </ScrollView>
    </>
  );
};

export default App;
