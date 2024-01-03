import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontSize, hp, wp } from '../../../utils/globalFunction'
import colors from '../../../utils/colors'

const PrimaryButton = ({txt,style,txtStyle,onPress}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.container,{...style}]} onPress={onPress} >
        <Text style={[styles.buyTxt,{...txtStyle}]}>{txt}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: colors.pink,
    },
    buyTxt: {
        color: colors.white,
        alignSelf: 'center',
        fontSize: fontSize(15),
        fontWeight: '600',
      },
})