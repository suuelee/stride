import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function Whereto() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        height: 250,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{height: '100%', flex: 1, alignItems: 'center'}}>
          <Image
            source={require('../assets/WhereToIcon.png')}
            style={{height: 80, resizeMode: 'contain', marginTop: 70}}
          />
        </View>
        <View
          style={{
            height: '100%',
            flex: 5,
          }}>
          <View
            style={{
              backgroundColor: '#E3E5DA',
              width: '95%',
              height: 40,
              marginTop: 60,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder="Pickup Location"
              placeholderTextColor={'#46534D'}
              style={{paddingLeft: 10, paddingRight: 10}}
              onChangeText={text => {
                setPickup(text);
              }}
              value={pickup}
            />
          </View>
          <View
            style={{
              backgroundColor: '#E3E5DA',
              width: '95%',
              height: 40,
              marginTop: 25,
              borderRadius: 10,
              justifyContent: 'center',
            }}>
            <TextInput
              placeholder="Where to?"
              placeholderTextColor={'#46534D'}
              style={{paddingLeft: 10, paddingRight: 10}}
              onChangeText={text => {
                setDestination(text);
              }}
              value={destination}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#46534D',
          width: '90%',
          height: 40,
          marginTop: 15,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          console.log(`Creating request from ${pickup} to ${destination}`);
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Stride</Text>
      </TouchableOpacity>
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

export default Whereto;
