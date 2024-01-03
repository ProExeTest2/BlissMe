import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AuthButton from '../components/AuthComponents/AuthButton';
import BackBtn from '../components/AuthComponents/BackBtn';
import {FlatList} from 'react-native';
import {Services} from '../../assets/constants/ConstantData';
import {fontSize, wp, hp} from '../../utils/globalFunction';
import colors from '../../utils/colors';

const Onbording = ({navigation}) => {
  const [interestList, setInterestList] = useState(Services);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <View style={styles.headertxtview}>
          <Text style={styles.headertxt}>Choose your Interests</Text>
          <View style={styles.backBtn}>
            <BackBtn screen={'Login'} />
          </View>
        </View>
      </View>

      <FlatList
        numColumns={3}
        data={interestList}
        contentContainerStyle={{
          alignSelf: 'center',
          marginTop: 20,
          // marginHorizontal:50
        }}
        renderItem={({item}) => {
          return (
            <View style={{marginHorizontal: 0}}>
              <TouchableOpacity
                style={[styles.unSelectedIconView, {borderColor: item?.selected ? colors.dark_blue : colors.gray}]}
                onPress={() => {
                  console.log('selected---->>', item);
                  let temp = interestList.map(obj => {
                    console.log('obj--------->>', obj);
                    if (obj?.id === item?.id) {
                      return {...obj, selected: !obj?.selected};
                    }
                    else{
                      // return{...obj,selected:false}
                      return obj;
                    }
                  });
                  setInterestList(temp);
                }}>
                <Image source={item.src} style={[styles.icons,{tintColor: item?.selected ? colors.dark_blue : 'grey'}]} />
              </TouchableOpacity>









              
              {/* <TouchableOpacity
                style={[styles.unSelectedIconView, {borderColor: item?.selected ? colors.dark_blue : 'grey'}]}
                onPress={() => {
                  console.log('selected:::--------->>', item);
                  let temp = interestList.map(obj => {
                    console.log('obj--------->>', obj);
                    if (obj?.id === item?.id) {
                      return {...obj, selected: !obj?.selected};
                    }
                      return obj;
                  });
                  setInterestList(temp);
                }}>
                <Image source={item.src} style={[styles.icons,{tintColor: item?.selected ? colors.dark_blue : 'grey'}]} />
              </TouchableOpacity>               */}
            </View>
          );
        }}
        />

      <View style={styles.skip}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Flatlist');
          }}>
          <Text style={styles.skiptxt}>Skip Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Btn}>
        <AuthButton
          data={'Continue'}
          onPress={() => {
            navigation.navigate('DrawerNavigation');
          }}
          style={styles.Btn}
        />
      </View>
    </SafeAreaView>
  );
};

export default Onbording;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
  },
  backBtn:{
    position:'absolute',
    justifyContent:'center',
    marginLeft:wp(5)
  },
  headertxtview: {
    width: wp(100),
  },
  headertxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
  icons: {
    height: 60,
    width: 60,
    tintColor: 'grey',
  },
  unSelectedIconView: {
    borderWidth: 1,
    borderRadius: 3,
    width: wp(30),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    marginVertical: hp(1),
    marginHorizontal: wp(1),
  },
  skip: {
    borderBottomWidth: 1,
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center',
  },
  skiptxt: {
    fontSize: 15,
  },
  Btn: {
    paddingBottom: hp(3),
  },
});
