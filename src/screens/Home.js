import React from 'react';
import { View, Text, Button } from 'react-native';

export const Home = ({ navigation }) => {
  console.log("navigation", navigation);
  
  return (
  <View>
    <Text>Home</Text>
    <Button 
      title="Go to Janes's Profile"
      onPress={() => navigation.navigate('Profile', {name: "Jane"})}
    />
  </View>
);
}