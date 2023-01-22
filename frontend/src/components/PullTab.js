import React from 'react';
import {StyleSheet, View} from 'react-native';

function PullTab() {
  return (
    <View
      style={{
        width: '25%',
        backgroundColor: '#E3E5DA',
        height: 5,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
      }}
    />
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

export default PullTab;
