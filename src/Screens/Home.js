import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';

import colors from '../assets/constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../assets/images/index';
import {
  Salon,
  Services,
  images,
  products,
} from '../assets/constants/ConstantData';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const width = Dimensions.get('window').width

const Home = ({navigation}) => {
  const [state, setstate] = useState(true);
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Header data={'Home'} />
      </View>

      {state ? (
        <ScrollView
          style={styles.ScrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.mainContant}>
            <View style={styles.locationView}>
              <View style={styles.locationImgView}>
                <Image
                  name="locationPin"
                  source={Images.location_pink_pin}
                  style={styles.Img}
                />
              </View>
              <View style={styles.locationTxtView}>
                <Text style={styles.locationTxt}>Mong Kok Flower Market</Text>
              </View>
            </View>
          </View>

          {/* <View style={styles.posterView}>
            <View>
              <Image name="poster" source={Images.spa} style={styles.poster} />
            </View>
            <View style={styles.postertxtview}>
              <Text style={styles.postertxt}>
                Get <Text style={styles.pr}>10%</Text>
              </Text>
              <Text style={styles.postertxt}> Discount for Sap</Text>
            </View>
            <View style={styles.poster_option}>
              <Image name="pics" source={Images.pink_dot} style={styles.dots} />
              <Image name="pics" source={Images.dot} style={styles.dots} />
              <Image name="pics" source={Images.dot} style={styles.dots} />
            </View>
          </View> */}
          <View style={styles.container}>
            <SwiperFlatList
              autoplay
              autoplayLoop
              // pagingEnabled={false}
              showPagination={true}
              data={products}
              renderItem={({item}) => {
                return (
                    <Image
                      source={item.src}
                      style={{height: 200,width:width*0.98,}}
                      resizeMode='cover'
                    />
                );
              }}
            />
          </View>
          <View style={styles.topsalonview}>
            <View>
              <Text style={styles.topsalontxt}>Top Salon</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TopSalon');
              }}>
              <View>
                <Text style={styles.viewall}>View All</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginHorizontal: -5}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Salon}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={{}}>
                    <View
                      style={{
                        backgroundColor: 'pink',
                        backgroundColor: 'white',
                        height: 200,
                        width: 187,
                        justifyContent: 'space-between',
                        marginHorizontal: 5,
                      }}>
                      <Image
                        source={item.src}
                        style={{height: '55%', width: 187, resizeMode: 'cover'}}
                      />
                      <View
                        style={{
                          backgroundColor: colors.pink,
                          flexDirection: 'row',
                          borderRadius: 20,
                          width: 50,
                          position: 'absolute',
                          bottom: '50%',
                          left: '5%',
                        }}>
                        <Image
                          source={item.str}
                          style={{height: 12, width: 12, marginLeft: '5%'}}
                        />
                        <Text
                          style={{
                            color: colors.white,
                            fontSize: 11,
                            fontWeight: '500',
                            marginLeft: '10%',
                          }}>
                          {item.rating}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: colors.black,
                          position: 'absolute',
                          top: '60%',
                          left: '2%',
                          fontSize: 15,
                          fontWeight: '500',
                        }}>
                        {item.name}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          bottom: '5%',
                          left: '2%',
                        }}>
                        <Image
                          source={item.pin}
                          style={{height: 15, width: 15}}
                        />
                        <Text style={{fontSize: 12, fontWeight: '500'}}>
                          {item.km}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={styles.services_view}>
            <View style={styles.top_services_view}>
              <View>
                <Text style={styles.top_services_txt}>Top Services</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.viewall}>View All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.Services}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Services}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                    <View style={{paddingBottom: 5}}>
                      <View style={styles.icon_view}>
                        <Image
                          name="services"
                          source={item.src}
                          style={styles.icons}
                        />
                      </View>
                      <Text style={styles.icon_name}>{item.name}</Text>
                      <Text style={styles.place}>{item.place} place</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={styles.discounts}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={images}
              renderItem={({item}) => {
                return (
                  <View style={styles.discountView}>
                    <View style={styles.discount_img_View}>
                      <Image
                        name="discount"
                        source={item.src}
                        style={styles.discount_img}
                      />
                    </View>
                    <View style={styles.discountTxtView}>
                      <Text style={styles.dicountTxt}>
                        {' '}
                        Get{' '}
                        <Text style={styles.dicountTxtPR}>
                          {' '}
                          {item.discountPR}{' '}
                        </Text>{' '}
                      </Text>
                      <Text style={styles.dicountTxt}>
                        Discount for
                        <Text style={styles.dicountTxt}> {item.name}</Text>
                      </Text>
                    </View>
                    <View style={styles.buybtn}>
                      <TouchableOpacity>
                        <Text style={styles.buytxt}>Buy now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <View style={styles.ourProduct_view}>
            <Text style={styles.ourProduct_txt}>Our Product</Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={products}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.productsView}>
                    <Image source={item.src} style={styles.productImg} />
                    <View>
                      <Text style={styles.product_txt}>{item.name}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      ) : (
        // null

        <View>
          <View style={styles.mainContant}>
            <View style={styles.locationView}>
              <View style={styles.locationImgView}>
                <Image
                  name="locationPin"
                  source={Images.location_pink_pin}
                  style={styles.Img}
                />
              </View>
              <View style={styles.locationTxtView}>
                <Text style={styles.locationTxt}>Mong Kok Flower Market</Text>
              </View>
            </View>
          </View>
          <View style={styles.posterView}>
            <View>
              <Image
                name="poster"
                source={Images.salonPoster}
                style={styles.poster}
              />
            </View>
            <View style={styles.postertxtview}>
              <Text style={styles.postertxt}>
                Get <Text style={styles.pr}>2%</Text>
              </Text>
              <Text style={styles.postertxt}> Discount for Salon</Text>
            </View>
            <View style={styles.poster_option}>
              <Image name="pics" source={Images.pink_dot} style={styles.dots} />
              <Image name="pics" source={Images.dot} style={styles.dots} />
              <Image name="pics" source={Images.dot} style={styles.dots} />
            </View>
          </View>
          <View>
            <FlatList
              data={Services}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View>
                    <TouchableOpacity style={stylo.servicesList}>
                      {/* <TouchableOpacity style={[stylo.servicesList,{backgroundColor:item?.selected?'red':'green'}]}> */}
                      <Text style={stylo.servicesTxt}>{item.name}</Text>
                      {/* </TouchableOpacity>  */}
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>

          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                // backgroundColor: 'red',
              }}>
              <Text style={{fontSize: 15, fontWeight: '500'}}>Filter</Text>
              <Image
                name="filter"
                source={Images.filter}
                style={{resizeMode: 'contain', height: 25}}
              />
            </TouchableOpacity>
          </View>
          <Text style={stylo.TopSalonTxt}>Top Salon</Text>

          <View>
            <FlatList
              data={Salon}
              renderItem={({item}) => {
                return (
                  <View>
                    <View style={stylo.flatlist}>
                      <Image source={item.src} />
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: 10,
  },
  mainContant: {},
  locationView: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    height: 40,
  },
  locationImgView: {
    marginHorizontal: '5%',
  },
  Img: {
    height: 30,
    width: 25,
  },
  locationTxtView: {},
  locationTxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  ScrollView: {
    // height: '100%',
    // width: '100%',
  },
  posterView: {},
  poster: {
    height: 200,
    width: '100%',
    borderRadius: 5,
  },
  postertxtview: {
    position: 'absolute',
    alignSelf: 'center',
    marginVertical: 70,
  },
  postertxt: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  pr: {
    color: colors.pink,
    fontSize: 50,
    fontWeight: '900',
  },
  poster_option: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 5,
    justifyContent: 'space-between',
  },
  dots: {
    height: 5,
    width: 5,
    marginLeft: 5,
  },
  container: { flex: 1, },
  topsalonview: {
    marginHorizontal: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
  },
  topsalontxt: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
  },
  viewall: {
    color: colors.black,
    fontSize: 15,
    marginTop: 3,
  },
  salons: {
    height: 130,
    width: '100%',
  },
  salonMainView: {
    // justifyContent:'space-between',
  },
  flatlistview: {
    // marginVertical: 10,
    // backgroundColor: 'green',
    // borderRadius: 5,
    // width: '50%',
    // height: 205,
    // shadowColor: '#000',
    // shadowOffset: {width: 1, height: 1},
    // shadowOpacity: 0.4,
    // shadowRadius: 3,
    // elevation: 4,
    width: 200,
    height: 300,
    backgroundColor: 'green',
  },
  ratingview: {
    flexDirection: 'row',
    height: 15,
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 50,
    backgroundColor: colors.pink,
    borderRadius: 20,
    alignItems: 'center',
  },
  ratingtxt: {
    color: colors.white,
    fontSize: 11,
    marginLeft: '5%',
  },
  salonsname: {},
  flatlisttxt: {
    textAlign: 'left',
    marginLeft: 7,
    fontSize: 15,
    width: 180,
    fontWeight: '500',
    color: colors.black,
  },
  star: {
    height: 12,
    width: 12,
    marginLeft: '15%',
  },
  pinview: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 7,
    left: 7,
  },
  pin: {
    height: 15,
    width: 15,
  },
  km: {
    color: colors.black,
    fontSize: 12,
    marginLeft: 3,
    fontWeight: '500',
  },
  services_view: {
    marginHorizontal: '2%',
  },
  top_services_view: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: '5%',
  },
  top_services_txt: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
  },
  icon_view: {
    height: 70,
    width: 120,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  icons: {
    alignSelf: 'center',
    marginTop: '7%',
    width: 40,
    height: 40,
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
  discountView: {},
  discounts: {
    marginTop: 50,
  },
  discount_img_View: {},
  discount_img: {
    width: 310,
    height: 150,
    marginRight: 12,
  },
  discountTxtView: {
    position: 'absolute',
    marginLeft: '3%',
    marginTop: '5%',
  },
  dicountTxt: {
    color: colors.white,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',
  },
  dicountTxtPR: {
    color: colors.pink,
    fontSize: 50,
    fontWeight: '900',
  },
  buybtn: {
    position: 'absolute',
    backgroundColor: colors.pink,
    width: 100,
    height: 25,
    borderRadius: 20,
    bottom: 7,
    left: 7,
  },
  buytxt: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '500',
    marginVertical: '1%',
  },
  ourProduct_view: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: '5%',
  },
  ourProduct_txt: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
  },
  productImg: {
    width: 190,
    height: 140,
    marginRight: 15,
    //
  },
  product_txt: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '400',
  },
  productsView: {
    // backgroundColor:'red'
  },
});

const stylo = StyleSheet.create({
  servicesList: {
    backgroundColor: colors.pink,
    borderRadius: 20,
    width: 100,
    height: 35,
    justifyContent: 'space-around',
    margin: 10,
  },
  servicesTxt: {
    color: colors.white,
    alignSelf: 'center',
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
    margin: '2%',
  },
  filterTxt: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
    marginRight: '2%',
  },
  filterImg: {
    marginTop: '2%',
    height: 20,
    width: 20,
  },
  TopSalonTxt: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '500',
    margin: '1%',
  },
  flatlist: {
    // height:'8%',
    // backgroundColor:'skyblue'
  },
});

export default Home;
