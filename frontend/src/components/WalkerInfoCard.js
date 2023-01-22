import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function WalkerInfoCard() {
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
            width: 22,
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
          You're in safe hands
        </Text>
        <Image
          source={require('../assets/ShareLocation.png')}
          style={{flex: 1, height: 22, width: 22, resizeMode: 'contain'}}
        />
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
          Mark Diamond
        </Text>
      </View>
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
            389
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
      <View style={{flex: 1, width: '100%'}}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 12,
            alignSelf: 'center',
            color: '#008224',
          }}>
          +2 Trips Tonight
        </Text>
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

export default WalkerInfoCard;
