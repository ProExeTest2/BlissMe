import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';


import CreateNewAccount from './src/auth/CreateNewAc'
import Login from './src/auth/login'
import Verification from './src/auth/Verification'
import Onbording from './src/Screens/On_bording'
import Flatlist from './src/flatlist';

import Home from './src/Screens/Home';

import Navigations from './src/Navigation/Navigations';

// const stack = createNativeStackNavigator()
// const drawer = createDrawerNavigator()
const App = () => {
  return (
    <Navigations />
  )
}

export default App

// const styles = StyleSheet.create({})