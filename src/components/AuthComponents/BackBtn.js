import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Images } from '../../../assets/images'
import { useNavigation } from '@react-navigation/native';
import { hp, wp } from '../../../utils/globalFunction';


const BackBtn = ({imgStyle}) => {
    const navigation = useNavigation()
  return (
      <TouchableOpacity style={styles.backarrowContainer} onPress={()=>{navigation.goBack()}}>
          <Image source={Images.backarrow} style={[styles.backarrow,{...imgStyle}]} />
      </TouchableOpacity>
  )
}

export default BackBtn;

const styles = StyleSheet.create({
    backarrowContainer:{
        // backgroundColor:'pink',
        height:hp(3),
        width:wp(3)
    },
    backarrow: {
        height:hp(3),
        width:wp(3)
      },
})