import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

function WalkerDescriptionCard() {
  const walkerReducer = useSelector(
    state => state.tripReducer.currentWalkerReducer,
  );
  if (walkerReducer === null) {
    return null;
  }
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
            tintColor: walkerReducer.top,
          }}
        />
        <Image
          source={require('../assets/Pants.png')}
          style={{
            flex: 1,
            width: 80,
            resizeMode: 'contain',
            alignSelf: 'center',
            tintColor: walkerReducer.pants,
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
            {walkerReducer.height}
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
            {walkerReducer.hair}
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
            {walkerReducer.race}
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
            {walkerReducer.gender}
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
