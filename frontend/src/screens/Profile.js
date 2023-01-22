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
import { Navbar } from 'react-native-navbar'
import { color } from 'react-native-reanimated';


function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView>
      <View>
        <Text styles={{
          fontSize: 200,
        }}>Profile</Text>
      </View>

      

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
                display: "flex",
                flexDirection: 'column',
                width: '95%',
                height: 60,
                paddingTop: 10,
                paddingLeft: 20,
                 marginTop: 50, 
                borderRadius: 10, 
                backgroundColor: "#E3E5DA"}}>

      <Text
              style={{
                color: 'grey',
                fontSize: 12,
              backgroundColor: '#E3E5DA',}}
              onChangeText={text => {
                setFirstName(text);
              }}
              value={firstName}
            >First Name</Text>

      <Text
              style={{
                color: 'black',
                fontSize: 18,
              }}
              onChangeText={text => {
                setFirstName(text);
              }}
              value={firstName}
            >Brad</Text>
        </View>
        <View style={{
                width: '95%',
                height: 60,
                paddingLeft: 10,
                 paddingRight: 10,
                 marginTop: 15, 
                 paddingTop: 10,
                 paddingLeft: 15,
                borderRadius: 10, 
                backgroundColor: "#E3E5DA"}}>

      <Text
              style={{
                color: 'grey',
                fontSize: 12,
              backgroundColor: '#E3E5DA',}}
              onChangeText={text => {
                setFirstName(text);
              }}
              value={firstName}
            >Last Name</Text>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
              }}
              onChangeText={text => {
                setFirstName(text);
              }}
              value={firstName}
            >Patterson</Text>
        </View>
        <View style={{
                width: '95%',
                height: 60,
                paddingTop: 10,
                paddingLeft: 15,
                 paddingRight: 10,
                 marginTop: 15, 
                borderRadius: 10, 
                backgroundColor: "#E3E5DA"}}>

      <Text
              style={{
                color: 'grey',
                fontSize: 12,
                backgroundColor: '#E3E5DA',}}
                onChangeText={text => {
                setFirstName(text);
              }}
              value={firstName}
              >Phone Number</Text>
              <Text
              style={{
                color: 'black',
                fontSize: 18,
              }}
              onChangeText={text => {
                setFirstName(text);
              }}
              value={firstName}>
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
              onChangeText={text => {
                setFirstName(text);
              }}
              value={firstName}
            >Email</Text>
          <Text 
          style={{
            color: 'black',
            fontSize: 18,
          }}
          onChangeText={text => {
            setFirstName(text);
          }}
          value={firstName}>
                brad.pat@gmail.com
            </Text>
            
        </View>

      <View style={{
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#46534D',
          width: '50%',
          height: 40,
          marginTop: 40,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          console.log(`Creating request from ${pickup} to ${destination}`);
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Save changes</Text>
      </TouchableOpacity>
      </View>
      

      {/* turn into component-------- */}

      {/* <View style={{
        width: '100%',
        height: 90,
        display: 'flex',
        spaceBetween: 1,
        flexDirection: 'row',
        backgroundColor: '#46534D',
        borderRadius: 10,
      }}>

      <Image source={require('../assets/home.png')}
      style={{height: 50, resizeMode: 'contain',}}
      >
      </Image>

      <Image source={require('../assets/distance.png')}
      style={{height: 50, resizeMode: 'contain'}}
      >
      </Image>

      <Image source={require('../assets/user.png')}
      style={{height: 45, resizeMode: 'contain'}}
      >
      </Image>


      </View> */}
      
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