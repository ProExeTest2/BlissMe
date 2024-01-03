import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../../utils/colors';
import {CommonStrings} from '../../../utils/CommonStrings';
import {fontSize, hp, wp} from '../../../utils/globalFunction';
import {
  BackBtn,
  AuthButton,
  PrimaryTxtInput,
} from '../../components/AuthComponents/Index';

import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '* Too Short!')
    .max(50, '* Too Long!')
    .required('* plese enter your full name'),
  email: Yup.string().email('*Invalid email').required('* plese enter email'),
  mobailNumber: Yup.string()
    .min(10, '* must be exectly atlest 10 dizit')
    .max(10, '* must be exectly atlest 10 dizit')
    .required('* mobail number is must be required')
    .matches(/^[0-9]+$/, '* must be only digits'),
});

const CreateNewAccount = ({navigation}) => {
  const [userData,setUserData] = useState({ UserName: '', Email: '', PhoneNo: '' })
  // let [name, setName] = useState('');
  // let [email, setEmail] = useState('');
  // let [number, setNumber] = useState('');

  // console.log(name,'----name----')
  // console.log(email,'----email----')
  // console.log(number,'----mobailNo----')

  console.log('====================>',userData)







  // const onChangeTextOne = (val) => {
    // return(
      // handleChange(`${name}`)
    // )
  // }
  // const onChangeTextTwo = (val) => {
  //   // return(
  //     setName(val)
  //   // 
  // }
  // onPress

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.headertxtview}>
          <Text style={styles.headertxt}>{CommonStrings.createNewAc}</Text>
        </View>

        <BackBtn imgStyle={styles.backBtnImg} />
      </View>
      <Formik
        initialValues={{
          name: '',
          email: '',
          mobailNumber: '',
        }}
        initialErrors={{
          name:'name is mandatory',
          email:'email is mandatory',
          mobailNumber:'mobail number is mandatory',
        }}
        validationSchema={SignupSchema}
        >
        {({values,touched,errors,handlesubmit,handleChange,setFieldTouched,isValid,}) => (
          <>
            <View style={styles.inputFilds}>
              <Text style={styles.txt}>{CommonStrings.name}</Text>

              <PrimaryTxtInput
                txtStyle={styles.txtInputTxtStyle}
                viewStyle={styles.txtInputViewStyle}
                // value={[userData?.UserName,values.name]}
                value={[values.name]}
                placeholder={'Enter your name'}
                
                onChangeText={handleChange('name')}
                // onChangeText={(text)=>{
                //   console.log(name)
                //   return(
                //     setName(text)
                //     )
                // }}


              // onChangeText={(name)=>{setName(name)}}
              // onChangeText={onChangeTextTwo}
             
              // onChangeText   ={(text)=>{
              //     console.log(name,'<<<<<<<<<<<<<<<=============>>>>>>>>>>>');
              //   }}
              
              // onChangeText={[  text => {setName(text),console.log(name,'====>>>>')},handleChange('name') ]}

              // onChangeText={[onChangeTextOne('name'),onChangeTextTwo((val))]}
              />
          {touched.name && errors.name && (<Text style={styles.errTxt}>{errors.name}</Text>)}


              <Text style={styles.txt}>{CommonStrings.email}</Text>
              <PrimaryTxtInput
                txtStyle={styles.txtInputTxtStyle}
                viewStyle={styles.txtInputViewStyle}
                value={values.email}
                // value={[userData?.Email,values.email]}
                placeholder={'Enter your email'}
                keyboardType={'email'}
              onChangeText={handleChange('email')}


                // onChangeText={text => {
                //   handleChange('email')
                //   return setEmail(text);
                // }}
              />
          {touched.email && errors.email && (<Text style={styles.errTxt}>{errors.email}</Text>)}


              <Text style={styles.txt}>{CommonStrings.phoneNumber}</Text>
              <PrimaryTxtInput
                keyboardType={'numeric'}
                lan={10}
                txtStyle={styles.txtInputTxtStyle}
                viewStyle={styles.txtInputViewStyle}
                value={values.mobailNumber}
                // value={[userData?.PhoneNo,values.mobailNumber]}
                placeholder={'Enter your number'}
              onChangeText={handleChange('mobailNumber')}

                // onChangeText={text => {
                //   handleChange('mobailNumber')

                //   return setNumber(text);
                // }}
              />
          {touched.mobailNumber && errors.mobailNumber && (<Text style={styles.errTxt}>{errors.mobailNumber}</Text>)}

            </View>

            <AuthButton
              data={'Create New Account'}
              onPress={() => {
                {setFieldTouched('name')}
                {setFieldTouched('email')}
                {setFieldTouched('mobailNumber')}
                setUserData({UserName:values.name,Email:values.email,PhoneNumber:values.mobailNumber})
                let ui={UserName:values.name,Email:values.email,PhoneNumber:values.mobailNumber}
                {!errors.name && !errors.email && !errors.mobailNumber ? navigation.navigate('Verification',{userData : ui}):null}
              }}
            />
          </>
        )}
      </Formik>

      <View style={styles.alreadyview}>
        <Text style={styles.alreadytxt}>{CommonStrings.haveAC}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.loginbtn}>{CommonStrings.login}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lsttxtview}>
        <Text style={styles.lsttxt}>{CommonStrings.instruction}</Text>
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
    height: hp(5),
  },
  inputFilds: {
    marginTop: hp(3),
  },
  headertxtview: {
    position: 'absolute',
    width: wp(100),
    height: hp(5),
    top: hp(1),
  },
  headertxt: {
    color: colors.black,
    fontSize: fontSize(20),
    fontWeight: '500',
    alignSelf: 'center',
  },
  backBtnImg: {
    top: hp(1.5),
    left: wp(5),
  },
  txt: {
    marginLeft: wp(5),
    marginVertical: hp(1),
    color: colors.black,
    fontSize: fontSize(15),
    fontWeight: '400',
  },
  txtInputTxtStyle: {
    backgroundColor: colors.offWhite,
    fontSize: fontSize(15),
    height: hp(6),
    borderRadius: 3,
  },
  txtInputViewStyle: {
    width: wp(90),
  },
  alreadyview: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(10),
  },
  alreadytxt: {
    color: colors.black,
    fontSize: fontSize(15),
    fontWeight: '400',
  },
  loginbtn: {
    color: colors.pink,
    fontSize: fontSize(15),
    fontWeight: '700',
  },
  lsttxtview: {
    fontSize: fontSize(15),
    color: colors.black,
    marginTop: hp(18),
  },
  lsttxt: {
    color: colors.black,
    fontSize: fontSize(15),
    marginHorizontal: wp(5),
    textAlign: 'center',
  },
  errTxt:{
    color:colors.red,
    fontSize:fontSize (15),
    marginLeft:wp(5),
    marginTop:hp(0.5)
  }
});

export default CreateNewAccount;