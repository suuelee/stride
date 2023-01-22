import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {GET_STRIDE_REQUEST} from '../actions/tripActions';

function WalkList() {
  const dispatch = useDispatch();
  const requestList = useSelector(
    state => state.tripReducer.requestListReducer,
  );

  useEffect(() => {
    dispatch({type: GET_STRIDE_REQUEST});
  }, [dispatch]);

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
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
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
                    console.log('accept');
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
