import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import PullTab from './PullTab';
import WalkerDescriptionCard from './WalkerDescriptionCard';
import WalkerInfoCard from './WalkerInfoCard';
import WalkerInterestCard from './WalkerInterestCard';

function TripDetailView() {
  return (
    <BottomSheet
      snapPoints={['15%', '90%']}
      renderContent={() => {
        return (
          <View style={{backgroundColor: 'white', height: '100%'}}>
            {PullTab()}
            <View style={{paddingLeft: '5%', paddingRight: '5%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                Walking to 2194 Health Sciences Mall, Vancouver
              </Text>
              <Text style={{fontSize: 16, marginTop: 50, marginBottom: 30}}>With your Stride walker:</Text>
            </View>
            <ScrollView contentContainerStyle={{alignItems: 'center', paddingBottom: 30}}>
              {WalkerInfoCard()}
              {WalkerDescriptionCard()}
              {WalkerInterestCard()}
            </ScrollView>
          </View>
        );
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

export default TripDetailView;
