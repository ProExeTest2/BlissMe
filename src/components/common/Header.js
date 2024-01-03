import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../../assets/images';
import Menu from './Menu';
import Search from './Search';
import { fontSize, hp, wp } from '../../../utils/globalFunction';
import colors from '../../../utils/colors';


const Header = ({ data }) => {
  
  // const navigation = useNavigation()
  return (
      <View style={styles.header}>
          <Menu />
        <View style={styles.headingview}>
          <Text style={styles.heading}>{data}</Text>
        </View>
        <Search />
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:wp(3)
  },
  headingview: {
    height: hp(3),
    width: wp(50),
  },
  heading: {
    color: colors.black,
    fontSize:fontSize (20),
    fontWeight:'500',
    height:hp(10),
    alignSelf: 'center',
  },
});

export default Header
