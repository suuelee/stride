import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {
  ACCEPT_STRIDE_REQUEST,
  GET_STRIDE_REQUEST,
} from '../actions/tripActions';
import Geolocation from '@react-native-community/geolocation';

function WalkList() {
  const dispatch = useDispatch();
  const requestList = useSelector(
    state => state.tripReducer.requestListReducer,
  );
  const [coord, setCoord] = useState([]);

  useEffect(() => {
    dispatch({type: GET_STRIDE_REQUEST});
  }, [dispatch]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        const lat = info.coords.latitude;
        const long = info.coords.longitude;
        setCoord([lat, long]);
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
    <SafeAreaView>
      <FlatList
        style={{width: '100%', height: '100%'}}
        ListHeaderComponent={() => {
          return (
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                alignSelf: 'center',
                marginBottom: 20,
              }}>
              Stride Requests
            </Text>
          );
        }}
        data={requestList}
        renderItem={request => {
          return (
            <View
              style={{
                width: '90%',
                height: 200,
                backgroundColor: '#E3E5DA',
                borderRadius: 10,
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                }}>
                <MapView
                  style={{width: '100%', height: '100%'}}
                  provider="google"
                  scrollEnabled={false}
                  showsUserLocation
                  initialCamera={{
                    center: {
                      latitude: "49.26038",
                      longitude: "-123.11336",
                    },
                    pitch: 0,
                    heading: 0,
                    altitude: 1000,
                    zoom: 9,
                  }}>
                  <Marker
                    key={'from'}
                    coordinate={{latitude: coord[0], longitude: coord[1]}}
                  />
                  <Marker
                    key={'to'}
                    coordinate={{latitude: request.item.dropoffCoord[1], longitude: request.item.dropoffCoord[0]}}
                  />
                </MapView>
              </View>
              <View
                style={{
                  width: '50%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    alignSelf: 'center',
                    marginBottom: 20,
                  }}>{`${request.item.pickupAddress} to ${request.item.dropoffAddress}`}</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    alignSelf: 'center',
                  }}>{`1.2 km`}</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    alignSelf: 'center',
                  }}>{`10 minute walk`}</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#46534D',
                    width: '70%',
                    height: 30,
                    marginTop: 25,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    dispatch({
                      type: ACCEPT_STRIDE_REQUEST,
                      payload: request.item._id,
                    });
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Accept
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default WalkList;
