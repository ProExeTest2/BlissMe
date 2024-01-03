import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import Swiper from 'react-native-swiper';

import {
  Poster,
  Salon,
  Services,
  images,
  products,
  FaceMassage,
} from '../../assets/constants/ConstantData';
import colors from '../../utils/colors';
import Header from '../components/common/Header';
import {fontSize, hp, wp} from '../../utils/globalFunction';
import {Images} from '../../assets/images/index';
import ServiceList from '../components/common/ServiceList';
import { CommonStrings } from '../../utils/CommonStrings';
import {useNavigation} from '@react-navigation/native'
import Rating from '../components/common/Rating';
import PrimaryButton from '../components/common/PrimaryButton';

const Home = () => {
  const [state, setstate] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation()

 
  return (
    <View style={styles.main}>
      {state ? (
        <View style={styles.header}>
          <Header data={'Home'} />
        </View>
      ) : (
        <View style={styles.header}>
          <Header data={'Top Salon '} />
        </View>
      )}

      {state ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.locationView}>
            <Image source={Images.location_pink_pin} style={styles.Img} />
            <Text style={styles.locationTxt}>{CommonStrings.location}</Text>
          </View>
          <View style={styles.swiper}>
            <Swiper
              pagingEnabled
              showsPagination
              activeDotColor={colors.pink}
              dotColor={colors.white}
              activeDotStyle={styles.activeDotStyle}
              dotStyle={styles.normalDotStyle}
              style={styles.swiperStyle}
              loop={true}
              autoplay={true}>
              {Poster.map(item => {
                return (
                  <>
                  <View style={styles.swiperImgView}>
                    <Image
                      source={item.src}
                      style={styles.swiperImg}
                      resizeMode="cover"
                    />
                    </View>
                    <View style={styles.posterTxtView}>
                      <Text style={styles.posterNormalTxt}>
                        {CommonStrings.get}
                        <Text style={styles.posterPR}>{item.discountPR}</Text>
                      </Text>
                      <Text style={styles.posterNormalTxt}>
                        {CommonStrings.discountFor}{' '}
                        <Text style={styles.posterNormalTxt}>{item.name}</Text>
                      </Text>
                    </View>
                  </>
                );
              })}
            </Swiper>
          </View>

          <View style={styles.top_services_view}>
            <Text style={styles.topsalontxt}>{CommonStrings.topSalon}</Text>
            <TouchableOpacity
              onPress={() => {
                setstate(false);
              }}>
              <Text style={styles.viewall}>{CommonStrings.viewAll}</Text>
            </TouchableOpacity>
          </View>





          <View style={styles.flatListView}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Salon}
              renderItem={({item}) => {
                return (
    
                <View style={{overflow:"hidden",marginHorizontal: wp(2),}}>
                  <TouchableOpacity
                    style={styles.salonListView}
                    onPress={() => {
                      navigation.navigate('SalonDetails');
                    }}>
                    <Image source={item.src} style={styles.salonListImg} />
                    <Rating img={item.str} txt={item.rating} style={{bottom: hp(11.5),left: wp(2)}} />


                    <Text style={styles.salonNameTxt}>{item.name}</Text>
                    <View style={styles.salonLocationView}>
                      <Image
                        source={item.pin}
                        style={styles.salonLocationPin}
                      />
                      <Text style={styles.salonLocationTxt}>{item.km}</Text>
                    </View>
                  </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.top_services_view}>
            <Text style={styles.top_services_txt}>{CommonStrings.topService}</Text>
            <TouchableOpacity>
              <Text style={styles.viewall}>{CommonStrings.viewAll}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Services}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(item?.screen);
                  }}>
                    <View style={styles.icon_view}>
                      <Image
                        name="services"
                        source={item.src}
                        style={styles.icons}
                      />
                    </View>
                    <Text style={styles.icon_name}>{item.name}</Text>
                    <Text style={styles.place}>{item.place} {CommonStrings.palce}</Text>
                </TouchableOpacity>
              );
            }}
          />

          <View style={styles.discounts}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={({item}) => {
                return (
                  <View>
                      <ImageBackground source={item.src} style={styles.discount_img} />
                    <View style={styles.productImgView}>
                    </View>
                    <View style={styles.discountTxtView}>
                      <Text style={styles.dicountTxtPR}>{item.discountPR}</Text>
                      <Text style={styles.dicountTxt}>
                        {CommonStrings.discountFor}
                        <Text style={styles.dicountTxt}> {item.name}</Text>
                      </Text>
                    </View>

                    <PrimaryButton txt={CommonStrings.buyNow} style={styles.primaryBtn} />
                  </View>
                );
              }}
            />
          </View>

          <Text style={styles.ourProduct_txt}>{CommonStrings.ourProduct}</Text>
          <View style={styles.productsView}>
            <FlatList
              horizontal={true}
              data={products}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                    <Image source={item.src} style={styles.productImg} />
                    <Text style={styles.product_txt}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.main}>
          <View style={styles.locationView}>
            <Image
              name="locationPin"
              source={Images.location_pink_pin}
              style={styles.Img}
            />
            <Text style={styles.locationTxt}>{CommonStrings.location}</Text>
          </View>
          <View style={styles.swiper}>
            <Swiper
              pagingEnabled
              showsPagination
              activeDotColor={colors.pink}
              dotColor={colors.white}
              activeDotStyle={styles.activeDotStyle}
              dotStyle={styles.normalDotStyle}
              style={styles.swiperStyle}
              loop={true}
              autoplay={true}>
              {Salon.map(item => {
                return (
                  <>
                  <View style={styles.swiperImgView}>

                  <Image
                    source={item.src}
                    style={styles.swiperImg}
                    resizeMode="cover"
                  />
                  </View>
                  <View style={styles.posterTxtView}>
                  <Text style={styles.posterNormalTxt}>
                    {CommonStrings.get}{}
                    <Text style={styles.posterPR}>{CommonStrings.PR}</Text>
                  </Text>
                  <Text style={styles.posterNormalTxt}>
                    {CommonStrings.discountFor}
                    <Text style={styles.posterNormalTxt}> {CommonStrings.salon}</Text>
                  </Text>
                </View>
                </>
                )
              })}
            </Swiper>
          </View>

          <View style={styles.servicesView}>
            <FlatList
              data={Services}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.servicesList}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={ currentIndex===index?styles.slectedServicesContainer:styles.unSelectedServicesContainer}
                    onPress={() => {
                      setCurrentIndex(index);
                    }}>
                    <Text style={currentIndex===index? styles.selectedServicesListTxt:styles.unSelectedServicesListTxt}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <TouchableOpacity style={styles.filterContainer}>
            <Text style={styles.filterTxt}>{CommonStrings.filter}</Text>
            <Image source={Images.filter} style={styles.filterImg} />
          </TouchableOpacity>
          <Text style={styles.TopSalonTxt}>{CommonStrings.topSalon}</Text>
          <ServiceList data={currentIndex % 2 === 0 ? Salon : FaceMassage} />
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  locationView: {
    flexDirection: 'row',
    height: hp(5),
    marginHorizontal: wp(2),
  },
  Img: {
    height: hp(3),
    width: wp(4),
    marginHorizontal: wp(2),
  },
  locationTxt: {
    color: colors.black,
    fontSize: fontSize(20),
    fontWeight: '500',
  },
  topsalontxt: {
    color: colors.black,
    fontSize: fontSize(20),
    fontWeight: '500',
  },
  viewall: {
    color: colors.black,
    fontSize: fontSize(13),
    fontWeight: '500',
    marginVertical: hp(1),
  },
  top_services_view: {
    marginHorizontal: wp(2),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: hp(1),
  },
  top_services_txt: {
    color: colors.black,
    fontSize: fontSize(20),
    fontWeight: '500',
  },
  icon_view: {
    justifyContent: 'center',
    height: hp(8),
    width: wp(30),
    marginHorizontal: wp(2),
    borderWidth: 1,
    borderRadius: 5,
    borderColor:colors.gray
  },
  icons: {
    alignSelf: 'center',
    width: wp(11),
    height: hp(5),
  },
  icon_name: {
    color: colors.dark_blue,
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
  },
  place: {
    color: colors.black,
    fontSize: 10,
    alignSelf: 'center',
    fontWeight: '500',
  },
  discounts: {
    marginTop: hp(5),
    marginHorizontal: wp(2),
  },
  productImgView:{
    width: wp(80),
    height: hp(18),
    marginHorizontal: wp(1),
    position:'absolute',
    backgroundColor:colors.black,
    opacity:0.5
  },
  discount_img: {
    width: wp(80),
    height: hp(18),
    marginHorizontal: wp(1),
  },
  discountTxtView: {
    position: 'absolute',
    marginLeft: wp(3),
    marginTop: hp(2),
  },
  dicountTxt: {
    color: colors.white,
    textAlign: 'left',
    fontSize: fontSize(20),
    fontWeight: '500',
    left: wp(1),
  },
  dicountTxtPR: {
    color: colors.pink,
    fontSize: fontSize(50),
    fontWeight: '900',
    left: wp(1),
  },
  primaryBtn:{
    width: wp(22),
    height: hp(3),
    borderRadius: 20,
    bottom: hp(1),
    left: wp(3),
  },
  buyTxt: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: fontSize(15),
    fontWeight: '500',
  },
  ourProduct_txt: {
    color: colors.black,
    fontSize: fontSize(20),
    fontWeight: '500',
    marginVertical: hp(3),
    marginHorizontal: wp(2),
  },
  productImg: {
    width: wp(50),
    height: hp(17),
    marginHorizontal: wp(1),
  },
  product_txt: {
    color: colors.black,
    fontSize: fontSize(15),
    fontWeight: '400',
    marginVertical: hp(1),
    marginHorizontal: wp(2),
  },
  productsView: {
    marginHorizontal: wp(2),
  },
  TopSalonTxt: {
    color: colors.black,
    fontSize: fontSize(20),
    marginLeft: wp(2),
    fontWeight: '500',
  },
  swiper: {
    height: hp(22),
    width: wp(96),
    marginHorizontal:wp(2),
    borderRadius:5,
  },
  swiperImgView:{
    height: hp(22),
    width: wp(96),
    backgroundColor:colors.black,
    position: 'absolute',
    borderRadius:5,
  },
  swiperImg: {
    opacity:0.7,
    height: hp(22),
    width: wp(96),
    position: 'absolute',
    borderRadius:5,
    
  },


  slectedServicesContainer: {
    backgroundColor: colors.pink,
    width: wp(30),
    height: hp(5),
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
  },
  unSelectedServicesContainer:{
    backgroundColor: colors.white,
    width: wp(30),
    color:colors.gray,
    height: hp(5),
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
    borderColor:colors.gray,
    borderWidth:1,
  },
  selectedServicesListTxt: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
  unSelectedServicesListTxt:{
    color: colors.gray,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
  filterContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  filterTxt: {
    fontSize: fontSize(15),
    color: colors.black,
    fontWeight: '500',
  },
  filterImg: {
    resizeMode: 'contain',
    height: hp(3),
  },
  servicesView: {
    marginHorizontal: wp(1),
  },
  swiperView: {
    justifyContent: 'center',
    marginHorizontal: wp(2),
  },
  homePosterImg: {
    height: hp(40),
    width: wp(96),
    position: 'absolute',
  },
  posterTxtView: {
    top: hp(5),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  posterNormalTxt: {
    color: colors.white,
    fontSize: fontSize(20),
    fontWeight: '500',
  },
  posterPR: {
    color: colors.pink,
    fontSize: fontSize(50),
    fontWeight: '900',
  },
  flatListView: {
    alignSelf: 'center',
    marginHorizontal: wp(1),
    height: hp(25),
    // overflow:'hidden',
  },
  activeDotStyle: {
    height: hp(1),
    width: wp(2),
    borderRadius: 6,
    bottom: hp(-1),
  },
  normalDotStyle: {
    height: hp(1),
    width: wp(2),
    bottom: hp(-1),
  },
  swiperStyle: {
    height: hp(22),
  },
  salonListView: {
    backgroundColor: colors.white,
    height: hp(23),
    width: wp(45),
    justifyContent: 'space-between',
    shadowColor:colors.black,
    elevation: 1,
  },
  salonListImg: {
    height: hp(13),
    width: wp(45),
    resizeMode: 'cover',
    borderRadius:5
  },



  salonRatingView: {
    backgroundColor: colors.pink,
    flexDirection: 'row',
    borderRadius: 20,
    width: wp(13),
    position: 'absolute',
    paddingVertical:hp(0.2),
    bottom: hp(11),
    left: wp(2),
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



  salonNameTxt: {
    color: colors.black,
    position: 'absolute',
    top: hp(13.5),
    left: wp(2),
    fontSize: 15,
    fontWeight: '500',
  },
  salonLocationView: {
    flexDirection: 'row',
    bottom: hp(1),
    left: wp(1),
  },
  salonLocationPin: {
    height: hp(2),
    width: wp(5),
  },
  salonLocationTxt: {
    fontSize: fontSize(12),
    fontWeight: '500',
    color: colors.black,
  },
  servicesList: {
    marginHorizontal: wp(-1),
    marginVertical: hp(1),
  },
});

export default Home;
