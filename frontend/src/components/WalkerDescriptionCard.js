import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function WalkerDescriptionCard() {
  return (
    <View style={{width: '90%', height: 200, flexDirection: 'row'}}>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View style={{flex: 1}} />
        <Image
          source={require('../assets/Shirt.png')}
          style={{
            flex: 1,
            width: 80,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Image
          source={require('../assets/Pants.png')}
          style={{
            flex: 1,
            width: 80,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <View style={{flex: 1}} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Description
        </Text>
        <View
          style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
          <Image
            source={require('../assets/Height.png')}
            style={{
              height: 18,
              width: 18,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            5'9"
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
          <Image
            source={require('../assets/Hair.png')}
            style={{
              height: 18,
              width: 18,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            Short Brown Hair
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
          <Image
            source={require('../assets/Ethnicity.png')}
            style={{
              height: 18,
              width: 18,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            Caucasian
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
          <Image
            source={require('../assets/Gender.png')}
            style={{
              height: 18,
              width: 18,
              resizeMode: 'contain',
              alignSelf: 'center',
              marginRight: 5,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 12,
            }}>
            Male
          </Text>
        </View>
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

export default WalkerDescriptionCard;
