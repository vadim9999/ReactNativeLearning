import React from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';

export const Buttons = () => (
  <View style={{ alignItems: 'center' }}>
    <Button
      onPress={() => {
        alert('you tapped');
      }}
      color="#0F3F33"
      title="Press"
    />

    <TouchableHighlight
      onPress={() => console.log('click')}
      underlayColor="blue">
      <View style={styles.button}>
        <Text>Click me</Text>
      </View>
    </TouchableHighlight>

    <TouchableOpacity onPress={() => console.log('Touchable opacity click')}>
      <View style={styles.button}>
        <Text>TouchableOpacity</Text>
      </View>
    </TouchableOpacity>

    <TouchableNativeFeedback
      onPress={() => console.log("touchable")}
      // background="black"
      background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
    >
      <View>
        <Text>TouchableNativeFeedback</Text>
      </View>
    </TouchableNativeFeedback>

    <TouchableWithoutFeedback
      onPress={() => console.log("rouchable without feedback")

      }>
      <View style={styles.button}>
        <Text>TouchableWithoutFeedback</Text>
      </View>
    </TouchableWithoutFeedback>

    <TouchableHighlight
    onPress={() => console.log("clock")}
    onLongPress={() => console.log("long press")    }
    >
      <View style={styles.button}>
        <Text>Long press</Text>
      </View>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'green',
    marginBottom: 20,
  },
});
