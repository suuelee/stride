import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

function WalkerInterestCard() {
  const walkerReducer = useSelector(
    state => state.tripReducer.currentWalkerReducer,
  );
  return (
    <View
      style={{
        width: '90%',
        height: 100,
        borderRadius: 30,
        backgroundColor: '#F1F2ED',
        padding: 20,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 12,
        }}>
        {walkerReducer.fName} loves...
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          alignSelf: 'center',
          marginTop: 10,
        }}>
        {walkerReducer.hobbies}
      </Text>
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

export default WalkerInterestCard;
