import React, {useEffect} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
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
      <View style={{position: 'absolute', top: currentTrip === null ? 280 : 50, right: '5%'}}>
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
        >
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

export default Home;
