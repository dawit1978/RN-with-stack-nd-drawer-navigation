/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from 'react-native-elements';

import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
} from 'react-native';

import { DrawerContent } from './screens/DrawerContent'

import MainTabScreen from './screens/MainTabScreen'
import MapScreen from './screens/MapScreen'
import SettingsScreen from './screens/SettingsScreen'
import SupportScreen from './screens/SupportScreen'

// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from'./screens/DetailsScreen';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


//App



// const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const App = () =>{
  return (
    <NavigationContainer>
       
      <Drawer.Navigator drawerContent={props  => <DrawerContent{ ... props}/>} initialRouteName='Home'>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="MapScreen" component={MapScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      </Drawer.Navigator>
    
    </NavigationContainer>
  );
}

export default App;