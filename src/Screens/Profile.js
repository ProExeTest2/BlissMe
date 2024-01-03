import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
  const navigation = useNavigation()

  let[count,setCount] = useState(0)

  // useEffect(() => { 
  //   return ( console.warn('hello'))
  // }),[];


  const signOut = async () => {
    try {
        await auth().signOut()
            .then((res) => {
                console.log('User signed out!')
                revokeAccess()
            })
            .catch((error) => {
                console.log(error);
            })
  
    } catch (error) {
        console.error(error);
    }
  }

  const revokeAccess = async () => {
    try {
        await GoogleSignin.revokeAccess()
            .then((res) => {
                // console.log(res,"------------revokeAccess------------");
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(error)
            })
    } catch (error) {
        console.error(error);
    }
};

  return (

    <View style={styles.main}>
      <View style={styles.parent}>
        <View style={styles.child}>
        </View>
      </View>
      <View>
        <Button title='press' onPress={()=>{setCount(count++)}} />
        <TouchableOpacity onPress={()=>{
          signOut()
        }}>
          <Text>sign out</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>Profile</Text> */}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
      backgroundColor:'white'
  },
  parent:{
    alignSelf:'center',
    height:200,
    width:100,
    backgroundColor:'white',
    overflow:"hidden"
  },
  child:{
    height:190,
    width:100,
    backgroundColor:'yellow',
    shadowColor:'black',
    elevation:5
  }
})