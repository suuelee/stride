import React, {useEffect} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import MapView from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import TripDetailView from '../components/TripDetailView';
import Whereto from '../components/Whereto';

function Home({navigation}) {
  const dispatch = useDispatch();
  const currentTrip = useSelector(
    state => state.tripReducer.currentTripReducer,
  );

  useEffect(() => {
    dispatch({type: 'GET_TRIP', payload: {userId: 1}});
  }, [dispatch]);

  return (
    <View>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider="google"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {currentTrip === null && <Whereto/>}
      {currentTrip !== null && <TripDetailView/>}
      <View style={{position: 'absolute', top: 280, right: '5%'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image
            source={require('../assets/SampleProfile.png')}
            style={{height: 50, width: 50, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Support');
          }}>
          <Image
            source={require('../assets/Info.png')}
            style={{
              height: 50,
              width: 50,
              resizeMode: 'contain',
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
      </View>
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

export default Home;
