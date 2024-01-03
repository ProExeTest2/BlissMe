import React from 'react'
import { Images } from '../../../assets/images'
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const Menu = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
            <Image source={Images.menu} style={styles.menuIcon} />
        </TouchableOpacity>
  )
}

export default Menu

const styles = StyleSheet.create({
    menuIcon:{
        height:20,
        width:24
    }
})