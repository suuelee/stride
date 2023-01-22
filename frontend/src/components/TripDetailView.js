import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import PullTab from './PullTab';
import WalkerDescriptionCard from './WalkerDescriptionCard';
import WalkerInfoCard from './WalkerInfoCard';
import WalkerInterestCard from './WalkerInterestCard';

function TripDetailView() {
  const currentTrip = useSelector(
    state => state.tripReducer.currentTripReducer,
  );

  return (
    <BottomSheet
      snapPoints={['15%', '90%']}
      renderContent={() => {
        return (
          <View style={{backgroundColor: 'white', height: '100%'}}>
            {PullTab()}
            <View style={{paddingLeft: '5%', paddingRight: '5%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                {`Walking to ${
                  currentTrip.dropoffAddress ?? currentTrip.destination
                }`}
              </Text>
              <Text style={{fontSize: 16, marginTop: 50, marginBottom: 30}}>
                {currentTrip.status === 'progress' ||
                currentTrip.status === 'walking'
                  ? 'With your Stride walker:'
                  : 'Searching for a Stride walker...'}
              </Text>
            </View>
            {(currentTrip.status === 'progress' ||
              currentTrip.status === 'walking') && (
              <ScrollView
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingBottom: 30,
                }}>
                <WalkerInfoCard />
                <WalkerDescriptionCard />
                <WalkerInterestCard />
              </ScrollView>
            )}
          </View>
        );
      }}
    />
  );
}

export default TripDetailView;
