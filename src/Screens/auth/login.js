import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import colors from '../../../utils/colors';
import {Images} from '../../../assets/images';
import {CommonStrings} from '../../../utils/CommonStrings';
import {hp, wp, fontSize} from '../../../utils/globalFunction';
import {
  AuthButton,
  SocialAppBtn,
  PrimaryTxtInput,
} from '../../components/AuthComponents/Index';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '124798003309-n0ooedufll1ltsufe4jr63n1pl3tvtb0.apps.googleusercontent.com',
});

import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  mobailNumber: Yup.string()
    .required('* Mobile number is must be required')
    .min(10, '* must be exectly atlest 10 dizit')
    .max(10, '* must be exectly atlest 10 dizit')
    .required('* mobail number is must be required')
    .matches(/^[0-9]+$/, 'must be only digits'),
});

const Login = ({navigation}) => {
  const [number, setNumber] = useState('');

  //  signIn with GOOGLE
  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    console.log('---------- called ---------');
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        console.log('--------->>>>>>>>>', res);
        navigation.navigate('DrawerNavigation');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.main}>
      <StatusBar hidden />
      <Image source={Images.logo} style={styles.logo} />
      <Text style={styles.logintxt}>{CommonStrings.login}</Text>

      <Formik
        initialValues={{
          mobailNumber: '',
        }}
        initialErrors={{
          mobailNumber: '* Mobile number is must be required',
        }}
        validationSchema={SignupSchema}>
        {({
          values,
          touched,
          errors,
          handlesubmit,
          handleChange,
          setFieldTouched,
        }) => (
          <>
            <View style={styles.moNoView}>
              <View style={styles.countryCodeView}>
                <Text style={styles.countryCodeTxt}>
                  {CommonStrings.countryCode}
                </Text>
              </View>

              <PrimaryTxtInput
                viewStyle={styles.primayBtnView}
                lan={10}
                placeholder="mobail number"
                keyboardType={'number-pad'}
                value={values.mobailNumber}
                onChangeText={handleChange('mobailNumber')}
                onBlur={() => {
                  setFieldTouched('mobailNumber');
                }}
              />
            </View>
            {touched.mobailNumber && errors.mobailNumber && (
              <Text style={styles.errTxt}>{errors.mobailNumber}</Text>
            )}

            <AuthButton
              data={CommonStrings.continue}
              onPress={() => {
                if (!errors.mobailNumber) {
                  navigation.navigate('Verification');
                }
                setFieldTouched('mobailNumber');
                console.log('====================================');

                console.log(errors.mobailNumber);
                console.log('====================================');
              }}
            />
          </>
        )}
      </Formik>
      
      <Text style={styles.signtxt}>{CommonStrings.signUpOption}</Text>
      <View style={styles.socialAppView}>
        <SocialAppBtn
          src={Images.google}
          onPress={() => {
            onGoogleButtonPress()
              .then(() => {})
              .catch(error => {
                console.log(error);
              });
          }}
        />
        <SocialAppBtn
          src={Images.fcebook}
          background={styles.faceBookBtnView}
        />
        <SocialAppBtn src={Images.apple} />
      </View>
      <View style={styles.registerView}>
        <Text style={styles.normalTxt}>{CommonStrings.haveNotAccount}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateNewAccount');
          }}>
          <Text style={styles.registerTxtBtn}>{CommonStrings.register}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    width: wp(33),
    height: hp(11),
    marginTop: hp(10),
    alignSelf: 'center',
  },
  logintxt: {
    marginTop: hp(8),
    fontWeight: '500',
    marginLeft: wp(3.5),
    color: colors.black,
    fontSize: fontSize(20),
  },
  moNoView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  countryCodeView: {
    marginTop: hp(3),
    justifyContent: 'center',
    height: hp(5),
    width: wp(10),
    backgroundColor: colors.offWhite,
  },
  countryCodeTxt: {
    alignSelf: 'center',
    color: colors.black,
    fontSize: fontSize(15),
  },
  primayBtnView: {
    marginTop: hp(3),
    height: hp(5),
    width: wp(80),
    justifyContent: 'center',
  },
  numberERROR: {
    color: 'red',
    marginTop: hp(1),
    marginLeft: wp(17),
  },
  primayBtnTxt: {
    fontSize: fontSize(15),
  },
  signtxt: {
    color: colors.black,
    alignSelf: 'center',
    marginVertical: hp(6),
    fontSize: fontSize(15),
    fontWeight: '400',
  },
  socialAppView: {
    flexDirection: 'row',
    marginHorizontal: wp(7),
    justifyContent: 'space-between',
  },
  faceBookBtnView: {
    backgroundColor: colors.facebook_Blue,
    shadowColor: colors.black,
    elevation: 5,
  },
  registerView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(15),
  },
  normalTxt: {
    color: colors.black,
    fontSize: fontSize(15),
    fontWeight: '400',
  },
  registerTxtBtn: {
    color: colors.pink,
    fontWeight: '700',
    fontSize: fontSize(15),
  },
  errTxt: {
    color: colors.red,
    fontSize: fontSize(15),
    alignSelf: 'center',
  },
});

export default Login;
