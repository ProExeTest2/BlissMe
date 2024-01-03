import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../utils/colors'
import { hp, wp, fontSize } from '../../../utils/globalFunction';


const AuthButton = ({data,onPress,disabled}) => {

  return (
    <TouchableOpacity 
      style={styles.Btn}  
      onPress={onPress}
      disabled={disabled}
    >
    <Text style={styles.BtnTxt}>{data}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton

const styles = StyleSheet.create({
    Btn:{
        backgroundColor: colors.dark_blue,
        marginTop: hp(5),
        width:wp(80),
        justifyContent:'center',
        alignSelf:'center',
        height: hp(5),
        borderRadius: 3,
    },
    BtnTxt:{
        color:colors.white,
        alignSelf: 'center',
        fontSize:fontSize(20) ,
    }
})