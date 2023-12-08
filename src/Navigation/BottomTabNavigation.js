import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import OrderBy from '../Screens/OrderBy'
import NearBy from '../Screens/NearBy'
import Profile from '../Screens/Profile'
import { Images } from '../assets/images/index'
import TopSalon from '../Screens/TopSalon'

const Bottom = createBottomTabNavigator()

const BottomTabNavigation = () => {
  return (
    // <View>
    //   <Text>BottomTabNavigation</Text>
    // </View>

    <Bottom.Navigator screenOptions={{headerShown:false}} >
      <Bottom.Screen name='Home' component={Home} options={{
        tabBarIcon:tabInfo =>{
          return(
            <Image 
            source={Images.home}
             style={{height:25,width:25}}  /> 
          )
        }
        }} />
      <Bottom.Screen name='Nearby' component={NearBy}  options={{
        tabBarIcon:tabInfo=>{
          return(
            <Image 
            source={Images.store}
             style={{height:25,width:25}} /> 
            
            )
          }
      }} />
      <Bottom.Screen name='Orderby' component={OrderBy} options={{
        tabBarIcon:tabInfo=>{
          return(
            <Image source={Images.near} style={{height:25,width:25}} /> 
            
            )
          }
      }} />
      <Bottom.Screen name='Profile' component={Profile} options={{
        tabBarIcon:tabInfo=>{
          return(
            <Image source={Images.profile} style={{height:25,width:25}} /> 
            
            )
          }
      }} />
    </Bottom.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})