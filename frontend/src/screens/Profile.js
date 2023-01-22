import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import WalkerDescriptionCard from '../components/WalkerDescriptionCard';


function Profile() {
  

  
  return (
    <SafeAreaView>

      <View style={{
              backgroundColor: '#E3E5DA',
              width: '95%',
              height: 200,
              marginTop: 60,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Image source={require('../assets/SampleProfile.png')

                    }
                    style={{
                      height: 100, width: 100, resizeMode: 'contain'
                    }}></Image>
              <Text style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
              }}>Brad Patterson</Text>
      </View>
      
      
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>


        <View style={{
                width: '95%',
                height: 60,
                paddingTop: 10,
                paddingLeft: 15,
                 paddingRight: 10,
                 marginTop: 50, 
                borderRadius: 10, 
                backgroundColor: "#E3E5DA"}}>

      <Text
              style={{
                color: 'grey',
                fontSize: 12,
                backgroundColor: '#E3E5DA',}}
               
              >Phone Number</Text>
              <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
              }}
           >
                123-456-7890
              </Text>
        </View>

        <View style={{
                width: '95%',
                height: 60,
                paddingTop: 10,
                 paddingLeft: 15,
                 paddingRight: 10,
                 marginTop: 15, 
                marginBottom: 0, 
                borderRadius: 10, 
                backgroundColor: "#E3E5DA"}}>

      <Text
              style={{
                color: 'grey',
                fontSize: 12,
              backgroundColor: '#E3E5DA',}}
            >Email</Text>
          <Text 
          style={{
            fontWeight: 'bold',
            fontSize: 15,
          }}
       
>
                brad.pat@gmail.com
            </Text>
            
        </View>

      <View style={{
        alignItems: 'center',
        marginTop: 50, 
        backgroundColor: '#E3E5DA',
        borderRadius: 20,
        width: '95%'
      }}>

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
            tintColor: 'green',
          }}
        />
        <Image
          source={require('../assets/Pants.png')}
          style={{
            flex: 1,
            width: 80,
            resizeMode: 'contain',
            alignSelf: 'center',
            tintColor: 'blue',
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
            {"5’9’’"}
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
            {"Caucasian"}
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
            {"Caucasian"}
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
            {"Male"}
          </Text>
        </View>
      </View>
    </View>


      </View>

      
      </View>

    </SafeAreaView>
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

export default Profile;