import React from 'react';
import { Platform, SectionList, StyleSheet, Text, View } from 'react-native';

export const SectionListBasic = () => {
  console.log(Platform.Version);
  console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'D', data: ['Devin', 'Dan'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian'] },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={[styles.sectionHeader, styles.red]}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    ...Platform.select({
      ios: {
        backgroundColor: 'purple'
      },
      android: {
        backgroundColor: "green"
      }
    }),
  },
  sectionHeader: {
    fontSize: 22,
    color: 'blue',
    fontWeight: 'bold',
    backgroundColor: Platform.OS === 'ios' ? 'green' : 'yellow'
  },


  item: {
    fontSize: 18,
  },

  red: {
    color: 'red'
  }
})