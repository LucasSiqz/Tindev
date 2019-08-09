
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={sytles.container}>
      <Text style={sytles.text}>Hello World</Text>
    </View>
  );
};

const sytles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20,
  }
})