import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

export const Cat = (): any => {
  const name = 'Cat';
  const [isHungry, setIsHungry] = useState(true);

  console.log('render');
  return (
    <View>
      <Text>Hello I am your {name}!</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk' : 'Thank you!'}
      />
      {/* <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Name me!" /> */}
    </View>
  );
};
