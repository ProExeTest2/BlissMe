import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../utils/colors'
import { fontSize, hp, wp } from '../../../utils/globalFunction'

const Rating = ({img,txt,style}) => {
  return (
      <View style={[styles.salonRatingView,{...style}]}>
        <Image source={img} style={styles.ratingImg} />
        <Text style={styles.ratingTxt}>{txt}</Text>
      </View>
  )
}

export default Rating

const styles = StyleSheet.create({
    salonRatingView: {
        backgroundColor: colors.pink,
        flexDirection: 'row',
        borderRadius: 20,
        width: wp(13),
        height:hp(2),
        position:'absolute',
        alignItems:'center'        
      },
      ratingImg: {
        height: hp(1.5),
        width: wp(3),
        marginLeft: wp(2),
      },
      ratingTxt: {
        color: colors.white,
        fontSize: fontSize(11),
        fontWeight: '500',
        marginLeft: wp(1),
      },
})