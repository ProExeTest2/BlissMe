// import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import { Images } from '../assets/images';

// const Verification = ({navigation}) => {
//   return (
//     <View style={styles.main}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={()=>{navigation.navigate('Login');}}>
//           <Image name='arrow' source={Images.backarrow} style={styles.arrow} />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.logo}>
//         <Image
//           name="logo"
//           source={Images.logo}
//           style={styles.logo}
          
//         />
//       </View>
//       <View>
//         <Text style={styles.otptxt}>OTP Verification</Text>
//         <View style={styles.txtview}>
//           <Text style={styles.txt}>
//             Your Otp Verification code Sent to your
//           </Text>
//           <Text style={styles.txt}>Mobile Number</Text>
//         </View>
//       </View>
//       <View style={styles.txtinview}>
//         <TextInput style={styles.txtin} keyboardType='numeric' maxLength={4} />
//       </View>
//       <View style={styles.btn}>
//         <TouchableOpacity onPress={()=>{navigation.navigate('Onbording');}}>
//           <Text style={styles.btntxt}>Verify</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.resendtxtview}>
//         <Text style={styles.resendtxt}>Didn't receive the code </Text>
//         <View>
//           <TouchableOpacity>
//             <Text style={styles.resendbtn}>Resend</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     alignContent: 'center',
//   },
//   header: {
//     flexDirection: 'row',
//     marginTop: '3%',
//     marginLeft: '3%',
//   },
//   arrow: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 20,
//     width: 10,
//   },
//   logo: {
//     height: 70,
//     width: 100,
//     alignSelf: 'center',
//     marginTop: '20%',
//   },
//   otptxt: {
//     textAlign: 'center',
//     marginTop: '15%',
//     fontSize: 20,
//     color: 'black',
//   },
//   txtview: {
//     marginTop: '3%',
//   },
//   txtin: {
//     textAlign: 'center',
//     fontSize: 16,
//     width: '100%',
//     padding: 5,
//   },
//   txt: {
//     textAlign: 'center',
//     fontSize: 12,
//   },
//   txtinview: {
//     borderRadius: 3,
//     marginHorizontal: '2%',
//     backgroundColor: 'rgb(244, 244, 244)',
//     marginVertical: '7%',
//   },
//   btn: {
//     backgroundColor: '#1D1B44',
//     marginHorizontal: '10%',
//     height: 35,
//     borderRadius: 3,
//   },
//   btntxt: {
//     color: 'white',
//     alignSelf: 'center',
//     fontSize: 20,
//     padding: 2,
//   },
//   resendtxtview: {
//     flexDirection: 'row',
//     marginTop: '5%',
//     marginHorizontal: '25%',
//   },
//   resendtxt: {
//     color: 'black',
//     fontSize: 15,
//   },
//   resendbtn: {
//     fontSize: 15,
//     color: '#F93A8B',
//     fontWeight: '700',
//   },
// });
// export default Verification;

import { View, Text } from 'react-native'
import React from 'react'

const Verification = () => {
  return (
    <View>
      <Text>Verification</Text>
    </View>
  )
}

export default Verification