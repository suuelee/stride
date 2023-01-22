import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [stars, setStars] = useState('');
  const navigation = useNavigation();
  return (
  
    <SafeAreaView>
    <View style={{
      alignItems: 'center',
      marginTop: 70,
    }}>
      <Image source={require('../assets/logo.png')}
      style={{height: 70, resizeMode: 'contain', marginTop: 70, marginLeft: 20}}
      >
        
      </Image>
      <Text style={{color: 'white', fontWeight: 'bold', 
          color: 'black',
          fontSize: 30,
          marginTop: 20,
          marginLeft: 20}}>
        Sign In to Continue
      </Text>
    </View>

        <View
        style={{
          display: 'flex',
          flexDirection: 1,
          marginTop: 70,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
          height: 50,
        }}
        >
         <TextInput
              placeholder="Email or Phone Number"
              placeholderTextColor={'#46534D'}
              style={{
                width: '95%',
                height: 60,
                marginLeft: 20,
                paddingLeft: 10,
                 paddingRight: 10, 
                marginBottom: 50, 
                borderRadius: 10,
              backgroundColor: '#E3E5DA',}}
              onChangeText={text => {
                setUser(text);
              }}
              value={user}
            />

        </View>

        <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
          height: 55,
        }}
        >
        <TextInput
              placeholder="Password"
              placeholderTextColor={'#46534D'}
              style={{
                width: '95%',
                marginLeft: 20,
                height: 60,
                paddingLeft: 10,
                 paddingRight: 10, 
                marginBottom: 50, 
                borderRadius: 10,
              backgroundColor: '#E3E5DA',}}
              onChangeText={text => {
                setStars(stars + '*')
                setPassword(text);
              }}
              value={stars}
            />
        </View>

        <View style={{
          marginTop: 0,
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
          height: 55,
        }}>
        <TouchableOpacity
        style={{
          backgroundColor: '#46534D',
          width: '50%',
          height: 40,
          marginTop: 15,
          marginLeft: 20,
          borderRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Sign In</Text>
      </TouchableOpacity>


      <View style={{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
      }}>
      <Text style={{
        fontSize: 10,
      }}>Not a user yet? </Text>
      <Text style={{
        textDecorationLine: 'underline',
        fontSize: 10
      }} onPress={() => {
        navigation.navigate('Signup');
      }}>
        Sign up here.
      </Text>
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

export default Login;