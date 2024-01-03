import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../../../assets/images'

const Search = () => {
  return (
    <View>
        <TouchableOpacity>
            <Image source={Images.search} style={styles.searchIcon}  />
        </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchIcon:{
        height:25,
        width:25
    }
})