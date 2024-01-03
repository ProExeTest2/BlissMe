import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../utils/colors';
import {Images} from '../../../assets/images';
import BackBtn from '../../components/AuthComponents/BackBtn';
import AuthButton from '../../components/AuthComponents/AuthButton';
import TextInputCompo from '../../components/AuthComponents/PrimaryTxtInput';
import {fontSize, hp, wp} from '../../../utils/globalFunction';
import {CommonStrings} from '../../../utils/CommonStrings';

import {Formik} from 'formik';
import * as Yup from 'yup'

const verificationSchema = Yup.object().shape({
  otp:Yup.string()
  .min(4,'* to short')
  .max(4,'* to long')
  .required('* please enter OTP')
  .matches(/^[0-9]+$/, '* must be only digits')

})

const Verification = ({navigation,route}) => {
  const data= route.params;
  console.log('data', data)

  const [otp, setOtp] = useState();
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <BackBtn  />
      </View>
      <View style={styles.logo}>
        <Image name="logo" source={Images.logo} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.otptxt}>{CommonStrings.verificationHeader}</Text>
        <View style={styles.txtview}>
          <Text style={styles.txt}>{CommonStrings.otpInstruction}</Text>
        </View>
      </View>

      <Formik
      initialValues={{
        otp:''
      }}
      initialErrors={{
        otp:'OTP is required'
      }}
      validationSchema={verificationSchema}>
      {({
        values,
        touched,
        errors,
        handlesubmit,
        handleChange,
        setFieldTouched,
        isValid,
      }) => (

      
        <>
        <TextInputCompo
          value={otp}
          lan={4}
          viewStyle={styles.txtInputContainer}
          txtStyle={styles.txtInputTxt}
          keyboardType={'numeric'}
          onChangeText={handleChange('otp')}

          // onChangeText={text => {
          //   setOtp(text);
          // }}
        />
          {touched.otp && errors.otp && (<Text style={styles.errTxt}>{errors.otp}</Text>)}

        <AuthButton
          data={'Verify'}
          onPress={() => {
            // {setFieldTouched('otp')}
            {!errors.otp?navigation.navigate('Onbording'):setFieldTouched('otp')}

            // {
            //   otp ? navigation.navigate('Onbording') : null;
            // }
          }}
        />
        </>
      )}

      </Formik>
      <View style={styles.resendtxtview}>
        <Text style={styles.resendtxt}>{CommonStrings.dontReceiveCode}</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.resendBtn}>{CommonStrings.resend}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    marginTop: hp(3),
    marginLeft: wp(5),
  },
  logo: {
    height: hp(10),
    width: wp(30),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  otptxt: {
    fontWeight: '500',
    textAlign: 'center',
    marginTop: hp(7),
    fontSize: fontSize(20),
    color: colors.black,
  },
  txtview: {
    marginVertical: hp(3),
    alignSelf: 'center',
    width: wp(60),
  },
  txt: {
    fontSize: fontSize(12),
    fontWeight: '400',
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSize(12),
  },
  txtInputContainer: {
    borderRadius: 3,
    width: wp(95),
  },
  txtInputTxt: {
    textAlign: 'center',
    fontSize: fontSize(16),
    width: wp(100),
    alignSelf: 'center',
    fontWeight: '700',
    letterSpacing: 5,
  },
  resendtxtview: {
    flexDirection: 'row',
    marginTop: hp(5),
    marginHorizontal: wp(25),
  },
  resendtxt: {
    color: colors.black,
    fontSize: fontSize(15),
  },
  resendBtn: {
    fontSize: fontSize(15),
    color: colors.pink,
    fontWeight: '700',
  },
  errTxt:{
    color:colors.red,
    fontSize:fontSize (15),
    marginLeft:wp(5),
    marginTop:hp(1)
  }
});

export default Verification;
