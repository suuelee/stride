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
import { useNavigation } from '@react-navigation/native';




// function UserInput(placeholder, info, setInfo) {
//   return(
//   <View
//   style={{
//     display: 'flex',
//     flexDirection: 1,
//     marginTop: 70,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '95%',
//     height: 50,
//   }}
//   >
//    <TextInput
//         placeholder={placeholder}
//         placeholderTextColor={'#46534D'}
//         style={{
//           width: '95%',
//           height: 50,
//           paddingLeft: 10,
//            paddingRight: 10, 
//           marginBottom: 50, 
//           borderRadius: 10,
//         backgroundColor: '#E3E5DA',}}
//         onChangeText={text => {
//           setInfo(text);
//         }}
//         // value={info}
//       />

//   </View>
//   )
  
// }

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [stars, setStars] = useState('');
  const navigation = useNavigation();
  return (
  
    <SafeAreaView>
    <View style={{
      alignItems: 'center',
      marginTop: 40,
    }}>
      <Image source={require('../assets/logo.png')}
      style={{height: 70, resizeMode: 'contain', marginTop: 70}}
      >
        
      </Image>
      <Text style={{color: 'white', fontWeight: 'bold', 
          color: 'black',
          fontSize: 30,
          marginTop: 20}}>
        Sign Up
      </Text>
    </View>
    {/* <UserInput placeholder="Email" info={user} setInfo={setUser} /> */}
        <View
        style={{
          display: 'flex',
          marginTop: 160,
          marginBottom: 20,
          marginLeft: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
          height: 50,
        }}
        >
         <TextInput
              placeholder="First Name*"
              placeholderTextColor={'#46534D'}
              style={{
                width: '95%',
                height: 50,
                paddingLeft: 10,
                 paddingRight: 10, 
                marginBottom: 10, 
                marginTop: 10,
                borderRadius: 10,
              backgroundColor: '#E3E5DA',}}
              onChangeText={text => {
                setName(text);
              }}
              value={name}
            />
         <TextInput
              placeholder="Last Name*"
              placeholderTextColor={'#46534D'}
              style={{
                width: '95%',
                height: 50,
                paddingLeft: 10,
                 paddingRight: 10, 
                marginBottom: 10, 
                borderRadius: 10,
              backgroundColor: '#E3E5DA',}}
              onChangeText={text => {
                setLastName(text);
              }}
              value={lastName}
            />
         <TextInput
              placeholder="Phone Number*"
              placeholderTextColor={'#46534D'}
              style={{
                width: '95%',
                height: 50,
                paddingLeft: 10,
                 paddingRight: 10, 
                marginBottom: 10, 
                borderRadius: 10,
              backgroundColor: '#E3E5DA',}}
              onChangeText={text => {
                setPhone(text);
              }}
              value={phone}
            />
         <TextInput
              placeholder="Email*"
              placeholderTextColor={'#46534D'}
              style={{
                width: '95%',
                height: 50,
                paddingLeft: 10,
                 paddingRight: 10, 
                marginBottom: 10, 
                borderRadius: 10,
              backgroundColor: '#E3E5DA',}}
              onChangeText={text => {
                setEmail(text);
              }}
              value={email}
            />
         <TextInput
              placeholder="Password*"
              placeholderTextColor={'#46534D'}
              style={{
                width: '95%',
                height: 50,
                paddingLeft: 10,
                 paddingRight: 10, 
                marginBottom: 10, 
                borderRadius: 10,
              backgroundColor: '#E3E5DA',}}
              onChangeText={text => {
                setPassword(text);
                setStars(stars + '*')
              }}
              value={stars}
            />
  

        </View>

        <View style={{
          marginTop: 150,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 10,
          width: '95%',
          height: 55,
        }}>
        <TouchableOpacity
        style={{
          backgroundColor: '#46534D',
          width: '50%',
          height: 40,
          borderRadius: 40,
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>Register</Text>
      </TouchableOpacity>


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