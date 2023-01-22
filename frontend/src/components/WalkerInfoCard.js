import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {END_STRIDE_REQUEST, START_STRIDE_REQUEST} from '../actions/tripActions';

function WalkerInfoCard() {
  const dispatch = useDispatch();
  const walkerReducer = useSelector(
    state => state.tripReducer.currentWalkerReducer,
  );
  const currentTrip = useSelector(
    state => state.tripReducer.currentTripReducer,
  );

  if (walkerReducer === null) {
    return null;
  }

  return (
    <View
      style={{
        width: '90%',
        height: 300,
        borderRadius: 30,
        borderColor: '#F1F2ED',
        borderWidth: 10,
      }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/Phone.png')}
          style={{
            flex: 1,
            height: 22,
            resizeMode: 'contain',
            justifyContent: 'space-between',
          }}
        />
        <Text
          style={{
            flex: 3,
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'center',
          }}>
          {currentTrip.status === 'walking'
            ? "You're on your way"
            : "You're in safe hands"}
        </Text>
        <TouchableOpacity
          style={{flex: 1, height: 22, width: 22, alignItems: 'center'}}
          onPress={() => {
            dispatch({
              type: START_STRIDE_REQUEST,
              payload: currentTrip._id,
            });
          }}>
          <Image
            source={require('../assets/ShareLocation.png')}
            style={{height: 22, width: 22, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 2, width: '100%', justifyContent: 'center'}}>
        <Image
          source={require('../assets/SampleProfile.png')}
          style={{
            flex: 1,
            height: 80,
            width: 80,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{flex: 1, width: '100%'}}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 18,
            alignSelf: 'center',
          }}>
          {`${walkerReducer.fName ?? ''} ${walkerReducer.lName ?? ''}`}
        </Text>
      </View>
      {currentTrip.status === 'progress' && (
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}} />
          <View style={{flex: 1}}>
            <Text
              style={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: 32,
                alignSelf: 'center',
              }}>
              {walkerReducer.noTripsCompleted ?? ''}
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text
              style={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: 12,
              }}>
              Trips
            </Text>
            <Text
              style={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: 12,
              }}>
              Completed
            </Text>
          </View>
          <View style={{flex: 1}} />
        </View>
      )}
      {currentTrip.status === 'progress' && (
        <View style={{flex: 1, width: '100%'}}>
          <Text
            style={{
              flex: 1,
              fontWeight: 'bold',
              fontSize: 12,
              alignSelf: 'center',
              color: '#008224',
            }}>
            +1 Trips Tonight
          </Text>
        </View>
      )}
      {currentTrip.status === 'walking' && (
        <View style={{flex: 1, width: '100%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#46534D',
              width: '50%',
              height: 40,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              flexDirection: 'row',
            }}
            onPress={() => {
              dispatch({type: END_STRIDE_REQUEST, payload: currentTrip._id});
            }}>
            <Image
              source={require('../assets/End.png')}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginRight: 10,
              }}
            />
            <Text style={{color: 'white', fontWeight: 'bold'}}>End Trip</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentTrip.status === 'walking' && (
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/Report.png')}
            style={{
              height: 16,
              width: 16,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginRight: 10,
            }}
          />
          <Text
            style={{color: 'black', fontWeight: 'bold', alignSelf: 'center'}}>
            Report
          </Text>
        </View>
      )}
    </View>
  );
}

export default WalkerInfoCard;
