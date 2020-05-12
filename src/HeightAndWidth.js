import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const HeightAndWidth = () => {
  console.log("Hi");

  // console.log(styles)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ok</Text>
      <View style={styles.block1} />

      <View style={styles.block1} />
      <View style={styles.block2}>
        <View style={styles.block3} />
      </View>

      {/* <View style={{ height: 40, width:40, backgroundColor: 'yellow' }}>
        <View style={{ flex: 1, backgroundColor: 'green' }} />
        <View style={{ flex: 2, backgroundColor: 'purple' }} />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,

  },
  container: {
    color: 'green',
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    flexGrow: 1,
  },
  block1: {
    width: 150,
    height: 150,
    backgroundColor: 'powderblue',
    borderWidth: 2,
  },

  block3: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'red',
    top: 10,
    left: 20,
  },
  block2: {
    width: 100,
    height: 200,
    backgroundColor: 'skyblue',
    borderColor: 'black',
    borderWidth: 1,
    position: 'relative',
    // alignSelf:'flex-end'
    // borderStyle: 'solid'
  }
})