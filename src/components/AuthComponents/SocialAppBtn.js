import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../utils/globalFunction';
import colors from '../../../utils/colors';

const SocialAppBtn = ({src, background, onPress}) => {
  return (
    <TouchableOpacity style={[styles.view, background]} onPress={onPress}>
      <Image source={src} style={styles.img} />
    </TouchableOpacity>
  );
};

export default SocialAppBtn;

const styles = StyleSheet.create({
  view: {
    height: hp(5),
    width: wp(25),
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    elevation: 3,
    shadowColor: colors.black,
    shadowRadius: 10,
    backgroundColor: colors.white,
  },
  img: {
    height: hp(3),
    resizeMode: 'contain',
    width: wp(6),
    alignSelf: 'center',
  },
});
