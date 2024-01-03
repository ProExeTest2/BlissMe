import { Image, StyleSheet, Text, View } from 'react-native'
import React  from 'react'

import BackBtn from '../../components/AuthComponents/BackBtn'
import { fontSize, hp, wp } from '../../../utils/globalFunction'
import colors from '../../../utils/colors'
import { Images } from '../../../assets/images'
import { CommonStrings } from '../../../utils/CommonStrings'
import PrimaryButton from '../../components/common/PrimaryButton'

import VideoPlayer from 'react-native-video-player'
import Navigations from '../../Navigation/Navigations'


const OilMask = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <BackBtn imgStyle={styles.backBtn} />
        <View style={styles.headerTxtView}>
        <Text style={styles.headerTxt} >Kerastase Elixir</Text>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image source={Images.oilMask} style={styles.mainImg} />
        <Text style={styles.productPrice}>{CommonStrings.hk$}{CommonStrings.price}</Text>
        <Text style={styles.taxInfo}>{CommonStrings.taxInfo}</Text>
      </View>
      <Text style={styles.headings}>{CommonStrings.Features}</Text>
      <View style={styles.normalTxtView}>
        <Text style={styles.normaltxt}>1) They provides a unique and indulgent in-salon experience</Text>
        <Text style={styles.normaltxt}>2) It's perfect for all types of hair</Text>
        <Text style={styles.normaltxt}>3) Helps replenish and revitalize dull, damaged and lifeless hair without overloading it</Text>
      </View>
      <Text style={styles.headings}>{CommonStrings.Specification}</Text>
      <View style={styles.normalTxtView}>
        <Text style={styles.normaltxt}>{CommonStrings.productType}{CommonStrings.beauty}</Text>
        <Text style={styles.normaltxt}>{CommonStrings.Publisher}{CommonStrings.kerastase}</Text>
        <Text style={styles.normaltxt}>{CommonStrings.releaseDate}{CommonStrings.date}</Text>
        <Text style={styles.normaltxt}>{CommonStrings.size}{CommonStrings.sizeNo}</Text>
        <Text style={styles.normaltxt}>{CommonStrings.SKU}{CommonStrings.skuNo}</Text>
        <Text style={styles.normaltxt}>{CommonStrings.studio}{CommonStrings.studioName}</Text>
        <Text style={styles.normaltxt}>{CommonStrings.title}{CommonStrings.oilMaskName}</Text>
      </View>
      <View style={styles.videoContainer}>
        <VideoPlayer
          video={require('../../../assets/video/oilMaskVideo.mp4')}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
        />
      </View>
      <View style={styles.primaryBtnView}>
        <PrimaryButton txt={CommonStrings.add} style={styles.primaryBtn} onPress={()=>{
          navigation.goBack()
        }} />
        {/* <Text>hyy</Text> */}
      </View>
    </View>
  )
}

export default OilMask

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:colors.white
  },
  header:{
    height:hp(7),
    justifyContent:'center'
  },
  backBtn:{
    marginLeft:wp(3),
  },
  headerTxtView:{
    position:'absolute',
    alignSelf:'center'
  },
  headerTxt:{
    fontSize:fontSize(20),
    fontWeight:'500',
    color:colors.black
  },
  imgContainer:{
    // backgroundColor:'yellow',
    alignItems:'center',
    height:hp(23),
    justifyContent:'center'
  },
  mainImg:{
    height:hp(18),
    width:wp(55)
  },
  productPrice:{
    color:colors.black,
    fontSize:fontSize(13),
    fontWeight:'500'
  },
  taxInfo:{
    fontSize:fontSize(11),
    fontWeight:'400',
    color:colors.gray
  },
  headings:{
    color:colors.black,
    fontSize:fontSize(16),
    fontWeight:'500',
    marginLeft:wp(3)
  },
  normalTxtView:{
    marginHorizontal:wp(3),
    justifyContent:'space-around',
    marginVertical:hp(1),
  },
  normaltxt:{
    fontSize:fontSize(13),
    fontWeight:'400',
    color:colors.black,
    textAlign:'left'
  },
  videoContainer:{
    backgroundColor:colors.gray,
    marginHorizontal:wp(3),
    height:hp(25),
    marginBottom:hp(1)
  },
  primaryBtnView:{
    height:hp(5),
  },
  primaryBtn:{
    height:hp(5),
    width:wp(40),
    alignSelf:'center',
    borderRadius:3
  }
  
})