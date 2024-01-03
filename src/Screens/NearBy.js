import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// import Home from './Home';
// import SalonDetails from './SalonDetails';

const NearBy = () => {
  let id = 5
  // const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{flex:1,backgroundColor:'yellow'}}>
      <View style={{backgroundColor:'pink',width:300,height:300}}>
        <View style={{backgroundColor:"red",width:50,height:50,borderRadius:25,alignSelf:'center'}}>

        </View>
       
      </View>
    </View>
    
    
    //   <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Home} />
    //   <Tab.Screen name="SalonDetails" component={SalonDetails} />
    // </Tab.Navigator>
  )
}

export default NearBy

const styles = StyleSheet.create({})