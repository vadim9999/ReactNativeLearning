import React from 'react';

import { View, FlatList, Text, StyleSheet } from 'react-native';

export const FlatListBasic = () => {
  console.log('flatlist');

  return (
    <View>
      <FlatList
        data={[{ key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
        { key: 'Devin' },
        { key: 'kevin' },
        { key: 'Devin' },
      ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 19,
    height: 44,
    backgroundColor: 'green',
    marginBottom: 10,
    color: 'white',
  },
});
