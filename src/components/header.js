import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../assets/images';
import { NativeScreenNavigationContainer } from 'react-native-screens';
import { useNavigation } from '@react-navigation/native';


const Header = ({ data }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.menuview}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer()
            }}
          >
            <Image name="menu" source={Images.menu} style={styles.menu} />
          </TouchableOpacity>
        </View>
        <View style={styles.headingview}>
          <Text style={styles.heading}>{data}</Text>
        </View>
        <View style={styles.searchview}>
          <TouchableOpacity>
            <Image name="search" source={Images.search} style={styles.search} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '3%',
  },
  menuview: {
    height: 30,

    width: 35,
  },
  menu: {
    height: 20,
    alignSelf: 'center',

    width: 25,
  },
  headingview: {
    height: 30,
    width: 80,
  },
  heading: {
    color: 'black',
    fontSize: 16,
    alignSelf: 'center',
  },
  searchview: {
    height: 30,
    width: 35,
  },
  search: {
    alignSelf: 'center',
    marginTop:'7%',
    height: 23,
    width: 25,
  },
});

export default Header
