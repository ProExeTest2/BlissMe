import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CreateNewAccount from '../Screens/auth/CreateNewAc';
import Login from '../Screens/auth/login';
import Verification from '../Screens/auth/Verification';
import Onbording from '../Screens/On_bording';
import Flatlist from '../flatlist';

import Home from '../Screens/Home';
import DrawerNavigation from './DrawerNavigation';
import TopSalon from '../Screens/TopSalon';
import Header from '../components/common/Header';
import BottomTabNavigation from './BottomTabNavigation';
import SalonDetails from '../Screens/SalonDetails';
import Menu from '../components/common/Menu';
import OilMask from '../Screens/ProductDetails/OilMask';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator()
const Navigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
          
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateNewAccount" component={CreateNewAccount} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Onbording" component={Onbording} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Flatlist" component={Flatlist} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="TopSalon" component={TopSalon} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation}/>
        <Stack.Screen name="SalonDetails" component={SalonDetails} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name='OilMask' component={OilMask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;

// const styles = StyleSheet.create({})
