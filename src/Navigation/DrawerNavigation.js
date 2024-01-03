import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../Screens/Home'
import TopSalon from '../Screens/TopSalon'
import BottomTabNavigation from './BottomTabNavigation'
// import Onbording from '../Screens/On_bording'


const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (

        <Drawer.Navigator
        initialRouteName='BottomTabNavigation'
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: false,
        }}
        >
            <Drawer.Screen name='Homes' component={BottomTabNavigation} />
            {/* <Drawer.Screen name='Home' component={Home} /> */}
            <Drawer.Screen name='TopSalon' component={TopSalon} />

        </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})