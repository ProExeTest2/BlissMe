import {View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React,{useState,useEffect} from 'react';
import colors from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native'
import { hp, wp } from '../../../utils/globalFunction';
import Rating from './Rating';
import PrimaryButton from './PrimaryButton';
import { CommonStrings } from '../../../utils/CommonStrings';
// import Navigations from '../Navigation/Navigations';

const ServiceList = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation()

  return (
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.container} 
                activeOpacity={0.8}
                onPress={()=>{navigation.navigate('SalonDetails')}}
                >
                <Image
                  source={item.src}
                  style={styles.Img}
                />



                <Rating img={item.str} txt={item.rating} style={{bottom:hp(1.3),left:wp(1.3)}} />


                <View style={styles.salonCard}>
                    <Text
                      style={styles.salonName}>
                      {item.name}
                    </Text>
                    <Text
                      style={styles.salonTime}>
                      {item.time}
                    </Text>

                  <View
                    style={styles.locationView}>
                      <Image
                        source={item.pin}
                        style={styles.locationPin}
                      />
                      <Text
                        style={styles.locationTxt}>
                        {item.km}
                      </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <PrimaryButton txt={CommonStrings.book} style={styles.PrimaryButton} txtStyle={styles.primaryBtnTxt} />
            </View>
          );
        }}
      />
  );
};


export default ServiceList;

const styles = StyleSheet.create({
  container:{
      backgroundColor:'white',
      flexDirection: 'row',
      height: 100,
      shadowColor:colors.black,
      marginBottom:5,
      elevation:5,
      marginHorizontal:wp(2),
      width: '96%',
      borderRadius: 5,
      marginVertical: '2%',
  },
  Img:{
    height: 100, width: 140, borderRadius: 3
  },
  ratingView:{
      position: 'absolute',
      flexDirection: 'row',
      backgroundColor: colors.pink,
      bottom: 7,
      left: 7,
      borderRadius: 20,
      width: '10%',
      height: '15%',
  },
  ratingImg:{
      height: 10,
      width: 10,
      marginTop: '5%',
      marginHorizontal: '5%',
  },
  ratingTxt:{
      color: colors.white,
      fontSize: 11,
      fontWeight: '500',
  },
  salonCard:{
    flex: 1, 
    justifyContent: 'space-between',
    position:'relative'
  },
  salonName:{
      marginTop: '3%',
      marginLeft: '3%',
      color: colors.black,
      fontSize: 15,
      fontWeight: '500',
  },
  salonTime:{
      color: colors.green,
      marginLeft: '3%',
      fontSize: 10,
      fontWeight: '400',
      marginVertical: '2%',
  },
  locationView:{
      flexDirection: 'row',
      // backgroundColor:"yellow",
      paddingBottom: '7%',
  },
  locationPin:{
      height: 15,
      width: 15,
      marginHorizontal: '2%',
  },
  locationTxt:{
      color: colors.black,
      fontSize: 12,
      fontWeight: '500',
  },
  bookBtnTxt:{
      color: colors.white,
      fontSize: 15,
      fontWeight: '700',
  },
  PrimaryButton:{
      width: 80,
      height: 30,
      borderRadius: 3,
      marginRight: '2%',
      position: 'absolute',
      bottom: 17,
      right: 5,
  },
  primaryBtnTxt:{
    fontWeight:'700'
  }

})