import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';


function Support({navigation}) {
  return (
    <SafeAreaView>
        <Text onPress={() => {
          navigation.navigate('WalkList');
        }}>Support</Text>
    </SafeAreaView>
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

export default Support;