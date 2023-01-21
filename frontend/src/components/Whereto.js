import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function Whereto() {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        height: 200,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>From?</Text>
      <Text>To?</Text>
      <Text>Confirm Stride</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Whereto;
