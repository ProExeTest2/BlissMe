import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
// import { NativeScreenNavigationContainer } from 'react-native-screens';
import { Images } from '../assets/images';

const Login = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.logo}>
        <Image
          name="logo"
          source={Images.logo}
          style={styles.logo}
        />
      </View>
      <View style={styles.loginv}>
        <Text style={styles.logintxt}>Login</Text>
      </View>
      <View style={styles.mo_no}>
        <View style={styles.c_codev}>
          <Text style={styles.c_codet}>+91</Text>
        </View>
        <View style={styles.txtinv}>
          <TextInput
            style={styles.txtin}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
      </View>

      <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Verification');
          }}>
          <Text style={styles.btntxt}>continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signv}>
        <Text style={styles.signtxt}>----- or sign up with -----</Text>
      </View>

      <View style={styles.logosv}>
        <TouchableOpacity>
          <View style={styles.iconview}>
            <Image
              name="google"
              source={Images.google}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.fb}>
            <Image
              name="facebook"
              source={Images.fcebook}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconview}>
            <Image
              name="apple"
              source={Images.apple}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.txt}>
        <Text>Dont have an account ? </Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateNewAccount');
            }}>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#FFF',

    // marginHorizontal:'50%'
  },
  logo: {
    height: 70,
    width: 100,
    alignSelf: 'center',
    marginTop: '20%',
  },
  loginv: {
    marginLeft: '5%',
  },
  logintxt: {
    color: 'black',
    fontSize: 20,
    marginTop: '18%',
  },
  mo_no: {
    flexDirection: 'row',
  },
  c_codev: {
    marginLeft: '5%',
    marginTop: '5%',
    // borderWidth: 1,
    height: 30,
    width: 45,
    backgroundColor: '#F8F8F8',
  },
  c_codet: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 15,
    paddingTop: '5%',
  },
  txtinv: {
    backgroundColor: '#F8F8F8',
    // borderWidth: 1,
    marginTop: '5%',
    marginLeft: '4%',
    marginRight: '5%',
    height: 30,
    width: '75%',
  },
  txtin: {
    fontSize: 15,
    padding: 5,
    backgroundColor: '#F8F8F8',
  },
  btn: {
    backgroundColor: '#1D1B44',
    marginHorizontal: '10%',
    marginTop: '12%',
    height: 35,
    borderRadius: 3,
    // alignContent:'center'
  },
  btntxt: {
    alignSelf: 'center',
    fontSize: 20,
    padding: 2,
    color: 'white',
  },
  signv: {
    marginHorizontal: '31%',
    marginVertical: '10%',
  },
  logosv: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-around',
  },
  iconview: {
    width: 100,
    height: 45,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 2,
  },
  fb: {
    width: 100,
    height: 45,
    justifyContent: 'space-around',
    backgroundColor: '#1877F2',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 2,
  },
  icon: {
    height: 23,
    width: 23,
  },
  txt: {
    flexDirection: 'row',
    marginHorizontal: '22%',
    marginTop: '25%',
  },
  register: {
    color: '#F93A8B',
    fontWeight: '700',
  },
});

export default Login

