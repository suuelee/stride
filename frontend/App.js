import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Support from './src/screens/Support';
import WalkList from './src/screens/WalkList';

enableScreens();
const MainStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Profile" component={Profile} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Signup" component={Signup} />
        <MainStack.Screen name="Support" component={Support} />
        <MainStack.Screen name="WalkList" component={WalkList} />
      </MainStack.Navigator>
    </NavigationContainer>
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

export default App;
