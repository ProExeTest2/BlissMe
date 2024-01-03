import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../../assets/images';
import colors from '../../utils/colors';
import {
  Services,
  about,
  images,
  salonProduct,
} from '../../assets/constants/ConstantData';
import {SalonServices} from '../../assets/constants/ConstantData';
import {fontSize, hp, wp} from '../../utils/globalFunction';
import {BackBtn} from '../components/AuthComponents/Index';
import {CommonStrings} from '../../utils/CommonStrings';
// import Navigations from '../Navigation/Navigations';

import MapView from 'react-native-maps'


const SalonDetails = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productList, setProductList] = useState(SalonServices);
  const [screen, setScreen] = useState(0);
  const [products, setProducts] = useState(salonProduct);
  const [salonDetails, setSalonDetails] = useState(about);
  const [serviceLastTotal, setServiceLastTotal] = useState(0);
  const [productLastTotal, setProductLastTotal] = useState(0);

  // let [oilMaskCounter,setOilMaskCounter] = useState(0)
  // const [creambathCounter,setCreambathCounter] = useState(0)
  // const [moisturizingCounter,setMoisturizingCounter] = useState(0)
  // const [creamMaskCounter,setCreamMaskCounter] = useState(0)

  const serviceTotal = productList => {
    console.log(productList);
    let last = productList.filter(productList => {
      if (productList.checked == true) {
        return productList.price;
      }
    });

    let makeTotal = last.map(val => val.price);

    const initialValue = 0;
    let lastTotal = makeTotal.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    setServiceLastTotal(lastTotal);
  };

  const productTotal = products => {
    // console.log(products)

    let stepOne = products.filter(products => {
      if (products.count > 0) {
        return products;
      }
      // console.log(stepOne)
    });

    let stepTwo = [];
    stepOne.map(obj => {
      stepTwo.push(obj.count * obj.price);
    });
    // console.log(stepTwo)

    const initialValue = 0;
    let thiredStep = stepTwo.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    setProductLastTotal(thiredStep);
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Le Spa by Jan</Text>
        <BackBtn imgStyle={styles.backArrowImg} />
      </View>

      <Image source={Images.salon1} style={styles.posterImg} />
      <View style={styles.tabBar}>
        <FlatList
          data={salonDetails}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.tabBarView}
                onPress={() => {
                  const view = salonDetails.map(obj => {
                    if (item.id === obj.id) {
                      if (item.id === 0) {
                        setScreen(0);
                      }
                      if (item.id === 1) {
                        setScreen(1);
                      }
                      if (item.id === 2) {
                        setScreen(2);
                      }
                      // if (item.id === 3) {
                      //   setScreen(3);
                      // }
                      return {...obj, selected: true};
                    } else {
                      return {...obj, selected: false};
                    }
                  });
                  setSalonDetails(view);
                }}>
                <Text
                  style={[
                    styles.tabBarTxt,
                    {color: item.selected ? colors.pink : colors.black},
                  ]}>
                  {item.name}
                </Text>
                {item.selected ? (
                  <View style={styles.tabBarTxtUnderLine}></View>
                ) : null}
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.flatListView}>
        {screen === 0 || screen === 1 ? (
          <View style={styles.servicesView}>
            <FlatList
              data={
                screen === 0 ? Services : screen === 1 ? salonProduct : null
              }
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.servicesList}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={
                      currentIndex === index
                        ? styles.slectedServicesContainer
                        : styles.unSelectedServicesContainer
                    }
                    onPress={() => {
                      setCurrentIndex(index);
                    }}>
                    <Text
                      style={
                        currentIndex === index
                          ? styles.selectedServicesListTxt
                          : styles.unSelectedServicesListTxt
                      }>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity style={styles.filterContainer}>
              <Text style={styles.filterTxt}>{CommonStrings.filter}</Text>
              <Image source={Images.filter} style={styles.filterImg} />
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={styles.flatListContainer}>
          {screen == 0 ? (
            <FlatList
              data={productList}
              renderItem={({item}) => {
                return (
                  <View style={{flexDirection: 'row', marginTop: hp(1)}}>
                    <TouchableOpacity
                      onPress={() => {
                        const tmp = productList?.map(obj => {
                          if (obj?.id === item?.id) {
                            return {
                              ...obj,
                              checked: !item?.checked,
                            };
                          } else {
                            return obj;
                          }
                        });
                        setProductList(tmp);
                      }}>
                      <Image
                        source={
                          item.checked
                            ? Images.checked_Box
                            : Images.unChecked_Box
                        }
                        style={[
                          styles.checkBox,
                          {
                            backgroundColor: item.checked
                              ? colors.pink
                              : colors.gray,
                          },
                        ]}
                      />
                    </TouchableOpacity>
                    <View style={styles.flatListDetails}>
                      <Text style={styles.flatListTxt}>{item.name}</Text>
                      <Text style={styles.price}>
                        {CommonStrings.hk$}
                        {item.price}
                        {CommonStrings.time}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          ) : screen == 1 ? (
            <FlatList
              data={products}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.productListView}>
                    {/* <TouchableOpacity style={[styles.productImageConatiner,{borderColor: item?.selected ? colors.black : colors.gray}]}  onPress={()=>{ */}
                    <TouchableOpacity
                      style={styles.productImageConatiner}
                      onPress={() => {
                        if (item.id === 0) {
                          navigation.navigate('OilMask');
                        }
                      }}>
                      <Image source={item.src} style={styles.productImg} />
                    </TouchableOpacity>
                    <View style={styles.productTxtView}>
                      <Text style={styles.productTxt}>{item.fullName}</Text>
                      <Text style={styles.productPrice}>
                        {CommonStrings.hk$}
                        <Text> {item.price}</Text>
                      </Text>
                      <Text style={styles.productTex}>
                        {CommonStrings.taxInfo}
                      </Text>
                    </View>
                    <View style={styles.btnContainer}>
                      {item.selected ? (
                        <View style={styles.incDecView}>
                          <TouchableOpacity
                            style={styles.increaseDecrease}
                            onPress={() => {
                              const temp = products.map(obj => {
                                if (item?.id === obj?.id) {
                                  if (item?.count <= 1) {
                                    return {
                                      ...item,
                                      selected: false,
                                      count: (item.count = 0),
                                    };
                                  } else {
                                    return {...obj, count: item.count - 1};
                                  }
                                } else {
                                  return obj;
                                }
                              });
                              setProducts(temp);
                            }}>
                            <Text style={styles.incDecSign}>-</Text>
                          </TouchableOpacity>
                          <Text style={styles.noOfProduct}>{item.count}</Text>
                          <TouchableOpacity
                            style={styles.increaseDecrease}
                            onPress={() => {
                              let temp = products.map(obj => {
                                if (item?.id === obj?.id) {
                                  return {...obj, count: item.count + 1};
                                } else {
                                  return obj;
                                }
                              });
                              setProducts(temp);
                            }}>
                            <Text style={styles.incDecSign}>+</Text>
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <TouchableOpacity
                          style={styles.addBtn}
                          onPress={() => {
                            let temp = products.map(obj => {
                              if (obj?.id === item?.id) {
                                return {...obj, selected: true};
                              } else {
                                return {...obj};
                              }
                            });
                            setProducts(temp);
                          }}>
                          <Text style={styles.addBtnTxt}>Add</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                );
              }}
            />
          ) : screen == 2 ? (
            <View style={{marginTop: hp(5)}}>
              <Text style={styles.headings}>About Le Spa by Jan</Text>
              <Text style={styles.aboutSalon}>{CommonStrings.aboutSalon}</Text>

              <Text style={styles.headings}>Service on day</Text>
              <View style={styles.salonTiming}>
                <View>
                  <Text>{CommonStrings.weekDays}</Text>
                  <Text>{CommonStrings.weekEnds}</Text>
                </View>
                <View style={styles.time}>
                  <Text>{CommonStrings.weekDaysTime}</Text>
                  <Text>{CommonStrings.weekEndsTime}</Text>
                </View>
              </View>
              <Text style={styles.headings}>{CommonStrings.locationTxt}</Text>


              <View style={styles.locationView}>
                <Image source={Images.map} style={styles.mapImg} />
                <View style={styles.salonLocationTxtContainer}>
                  <Text style={styles.salonLocationTxt}>{CommonStrings.salonLocation}</Text>
                  <View>
                    <View style={styles.kilometers}>
                      <Image source={Images.location_pin} style={styles.locationPinImg} />
                      <Text>{CommonStrings.km}</Text>
                    </View>




                    <View style={styles.locationLink}>
                      <TouchableOpacity onPress={()=>{

                      // <MapView
                      // style={{height:hp(100),width:wp(100)}}
                      // initialRegion={{
                      //   latitude: 37.78825,
                      //   longitude: -122.4324,
                      //   latitudeDelta: 0.0922,
                      //   longitudeDelta: 0.0421,
                      // }}
                      //   />

                        Linking.openURL('https://www.google.com/maps/@21.2148077,72.8633633,15z?entry=ttu')
                      }} >
                        <Text>see the location</Text>
                      </TouchableOpacity>
                    </View>




                  </View>
                </View>
              </View>
            </View>
          ) : null}





        </View>
        <View style={styles.bottumContainer}>
          <Text style={styles.bottumText}>
            Total {CommonStrings.hk$}
            {screen === 0 ? serviceLastTotal : productLastTotal}
            {/* {grandTotal} */}
          </Text>

          <TouchableOpacity
            style={styles.bottumBtn}
            onPress={() => {
              // console.log(products)
              {
                screen == 0
                  ? serviceTotal(productList)
                  : productTotal(products);
              }
            }}>
            <Text style={styles.bottumBtnTxt}>{CommonStrings.continue}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SalonDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    height: hp(7),
    justifyContent: 'center',
  },

  backArrowImg: {
    marginLeft: wp(3),
  },
  headerTxt: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
    position: 'absolute',
  },
  posterImg: {
    width: '100%',
    height: 195,
  },
  tabBar: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: colors.white,
    // backgroundColor: 'yellow',
    width: wp(84),
    height: hp(6),
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: hp(27),
    justifyContent: 'space-around',
    shadowColor: colors.black,
    elevation: 7,
  },
  tabBarView: {
    height: hp(6),
    width: wp(21),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarTxt: {
    marginTop: hp(1),
    marginBottom: hp(1),
    alignSelf: 'center',
    fontSize: fontSize(16),
    color: colors.black,
    fontWeight: '500',
  },
  tabBarTxtUnderLine: {
    backgroundColor: colors.pink,
    height: hp(1),
    position: 'absolute',
    bottom: 1,
    width: wp(15),
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  flatListView: {
    flex: 1,
  },
  servicesView: {
    marginHorizontal: wp(1),
    // borderWidth:1,s
    marginTop: hp(5),
  },
  servicesList: {
    marginHorizontal: wp(-1),
    marginVertical: hp(1),
  },
  slectedServicesContainer: {
    backgroundColor: colors.pink,
    width: wp(30),
    height: hp(5),
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
  },
  unSelectedServicesContainer: {
    backgroundColor: colors.white,
    width: wp(30),
    color: colors.gray,
    height: hp(5),
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 10,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  selectedServicesListTxt: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
  },
  unSelectedServicesListTxt: {
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
    fontSize: fontSize(16),
    color: colors.black,
    fontWeight: '500',
  },
  filterImg: {
    resizeMode: 'contain',
    height: hp(3),
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: wp(2),
  },
  productImageConatiner: {
    height: hp(10),
    width: wp(27),
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImg: {
    // borderWidth:1,
    // borderColor:colors.black,
    height: hp(9),
    width: wp(27),
    resizeMode: 'contain',
  },
  productListView: {
    flexDirection: 'row',
    marginVertical: hp(1),
  },
  productTxtView: {
    height: hp(10),
    width: wp(42),
  },
  productTxt: {
    color: colors.black,
    fontSize: fontSize(12),
    fontWeight: '400',
  },
  productPrice: {
    color: colors.black,
    fontSize: fontSize(13),
    fontWeight: '500',
    position: 'absolute',
    bottom: hp(2),
  },
  productTex: {
    position: 'absolute',
    bottom: hp(0),
  },
  btnContainer: {
    width: wp(27),
    alignItems: 'center',
    justifyContent: 'center',
  },
  incDecView: {
    flexDirection: 'row',
    // justifyContent:,
    // marginHorizontal:1
  },
  increaseDecrease: {
    backgroundColor: colors.pink,
    width: wp(7),
    marginHorizontal: wp(2),
    height: hp(3),
  },
  noOfProduct: {
    color: colors.black,
    fontSize: fontSize(16),
    fontWeight: '500',
  },
  incDecSign: {
    color: colors.white,
    fontSize: fontSize(16),
    fontWeight: '500',
    alignSelf: 'center',
  },
  addBtn: {
    backgroundColor: colors.pink,
    borderRadius: 3,
    height: hp(3),
    width: wp(20),
  },
  addBtnTxt: {
    color: colors.white,
    fontSize: fontSize(15),
    alignSelf: 'center',
    fontWeight: '700',
  },
  headings: {
    color: colors.black,
    fontSize: fontSize(20),
    fontWeight: '500',
    margin: wp(1),
  },
  salonTiming:{
    flexDirection:'row',
    margin: wp(1),
    justifyContent:'space-between',
    marginBottom:hp(1)

  },
  time:{
    // justifyContent:'flex-end'
    textAlign:'right'
  },
  locationView:{
    backgroundColor:'yellow',
    flexDirection:'row'
  },
  mapImg:{
    height:hp(8),
    width:wp(30),
  },
  salonLocationTxtContainer:{
    // backgroundColor:'pink',
    height:hp(6),
    width:wp(65)
  },
  salonLocationTxt:{
    fontSize:fontSize(15),
    fontWeight:'400',
    marginLeft:wp(1),
    textAlign:'left',
  },
  kilometers:{
    flexDirection:'row',
    marginTop:hp(1)
  },
  locationPinImg:{
    height:hp(2),
    width:wp(5),
    // resizeMode:'contain'
  },
  aboutSalon:{
    fontSize:fontSize(15),
    fontWeight:'400',
    marginHorizontal:wp(1),
    marginBottom:hp(1)

  },
  flatListDetails: {
    marginTop: hp(1),
    height: hp(7),
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
    width: wp(100),
  },
  checkBox: {
    height: hp(3),
    width: wp(6),
    borderRadius: 6,
    marginTop: hp(1),
  },
  flatListTxt: {
    color: colors.black,
    width: wp(57),
    fontSize: fontSize(13),
    fontWeight: '400',
    marginHorizontal: wp(2),
  },
  price: {
    fontSize: fontSize(15),
    fontWeight: '500',
    color: colors.black,
  },
  bottumContainer: {
    flexDirection: 'row',
    backgroundColor: colors.dark_blue,
    height: hp(7),
    width: wp(100),
    paddingHorizontal: wp(7),
    justifyContent: 'space-between',
  },
  bottumText: {
    color: colors.white,
    fontSize: fontSize(14),
    fontWeight: '700',
    alignSelf: 'center',
  },
  bottumBtn: {
    backgroundColor: colors.pink,
    borderRadius: 3,
    alignSelf: 'center',
    height: hp(5),
    width: wp(40),
    justifyContent: 'center',
  },
  bottumBtnTxt: {
    color: colors.white,
    fontSize: fontSize(16),
    fontWeight: '500',
    alignSelf: 'center',
  },
});
