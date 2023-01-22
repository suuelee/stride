import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import TripDetailView from '../components/TripDetailView';
import Whereto from '../components/Whereto';
import Geolocation from '@react-native-community/geolocation';
import {
  GET_LIVE_LOCATION,
  GET_TRIP,
  SEND_LIVE_LOCATION,
} from '../actions/tripActions';
import {v4 as uuid} from 'uuid';

function Home({navigation}) {
  const dispatch = useDispatch();
  const currentTrip = useSelector(
    state => state.tripReducer.currentTripReducer,
  );
  const [coord, setCoord] = useState([]);

  // CONFIGURE - CHANGE USER
  const myUserId = 2;

  useEffect(() => {
    dispatch({type: GET_TRIP, payload: {userId: myUserId}});
  }, [dispatch]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        const lat = info.coords.latitude;
        const long = info.coords.longitude;
        setCoord([lat, long]);
        if (myUserId === 2) {
          const id = uuid();
          dispatch({
            type: SEND_LIVE_LOCATION,
            payload: {
              _id: id,
              userID: myUserId,
              striderID: myUserId,
              timestamp: new Date(),
              latitude: lat,
              longitude: long,
            },
          });
          dispatch({type: GET_LIVE_LOCATION, payload: {_id: id}});
        }
      },
      err => {
        console.log('Enable Location!');
        console.log(err);
      },
    );
  }, []);

  if (coord.length === 0) {
    return null;
  }

  return (
    <View>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider="google"
        showsUserLocation
        initialCamera={{
          center: {
            latitude: '49.26038',
            longitude: '-123.11336',
          },
          pitch: 0,
          heading: 0,
          altitude: 1000,
          zoom: 11,
        }}>
        {currentTrip !== null && (
          <Marker
            key={'to'}
            coordinate={{
              latitude: currentTrip.dropoffCoord[1],
              longitude: currentTrip.dropoffCoord[0],
            }}
          />
        )}
      </MapView>
      {currentTrip === null && <Whereto />}
      {currentTrip !== null && <TripDetailView />}
      <View
        style={{
          position: 'absolute',
          top: currentTrip === null ? 280 : 50,
          right: '5%',
        }}>
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

export default Home;
