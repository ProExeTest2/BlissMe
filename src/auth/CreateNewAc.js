// import React from "react";
// import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
// import { Images } from "../../assets/images";



// const CreateNewAccount = ({navigation}) => {
//     return (
//       <View style={styles.main}>
//         <View style={styles.header}>
//           <TouchableOpacity
//             style={styles.arrow}
//             onPress={()=>{navigation.navigate('Login')}}>
//             <Image
//               name="backarrow"
//               source={Images.backarrow}
//               style={styles.backarrow}
//             />
//           </TouchableOpacity>
//           <View style={styles.headertxtview}>
//             <Text style={styles.headertxt}>Create New Account</Text>
//           </View>
//         </View>
//         <View style={styles.mainchild}>
//           <View>
//             <Text style={styles.txt}>Name</Text>
//             <TextInput style={styles.txtin} />
//           </View>
//           <View>
//             <Text style={styles.txt}>Email</Text>
//             <TextInput style={styles.txtin} keyboardType="email-address" />
//           </View>
//           <View>
//             <Text style={styles.txt}>Phone Number</Text>
//             <TextInput
//               style={styles.txtin}
//               keyboardType="numeric"
//               maxLength={10}
//             />
//           </View>

//           <View style={styles.btn}>
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate('Login');
//               }}>
//               <Text style={styles.btntxt}>Create New Account</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.alreadyview}>
//             <Text style={styles.alreadytxt}>Already have an account ? </Text>
//             <View>
//               <TouchableOpacity
//                 onPress={() => {
//                   navigation.navigate('Login');
//                 }}>
//                 <Text style={styles.loginbtn}>Login</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.lsttxtview}>
//             <Text style={styles.lsttxt}>
//               By clicking create new account you agree to the
//             </Text>
//             <Text style={styles.lsttxt}>following Terms & Condition.</Text>
//           </View>
//         </View>
//       </View>
//     );
// } 

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   header: {
//     flexDirection: 'row',
//     marginTop: '3%',
//     marginLeft: '3%',
//   },
//   arrow: {
//     justifyContent: "center",
//     alignItems:"center"
//   },
//   headertxtview: {
//     alignSelf:"center",
//     marginLeft: '20%',
//   },
//   backarrow: {
//     height: 20,
//     width: 10,
//   },
//   headertxt: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '500',
//     alignSelf: 'center',
//   },
//   mainchild: {
//     margin: '5%',
//     marginTop: '10%',
//   },
//   txtin: {
//     // borderWidth: 1,
//     backgroundColor: 'rgb(244, 244, 244)',
//     fontSize: 17,
//     height: 50,
//     borderRadius: 3,
//   },
//   txt: {
//     color: 'black',
//     fontSize: 15,
//     marginVertical: '3%',
//   },
//   btn: {
//     borderWidth: 1,
//     marginTop: '8%',
//     marginHorizontal: '10%',
//     height: 35,
//     backgroundColor: '#1D1B44',
//     borderRadius: 3,
//   },
//   btntxt: {
//     color: 'white',
//     alignSelf: 'center',
//     fontSize: 20,
//     padding: 2,
//   },
//   alreadyview: {
//     flexDirection: 'row',
//     marginHorizontal: '20%',
//     marginTop: '20%',
//   },
//   alreadytxt: {
//     color: 'black',
//     fontSize: 15,
//   },
//   loginbtn: {
//     color: '#F93A8B',
//     fontSize: 15,
//     fontWeight: '700',
//   },
//   lsttxtview: {
//     fontSize: 15,
//     color: 'black',
//     marginTop: '50%',
//     marginHorizontal: '3%',
//   },
//   lsttxt: {
//     color: 'black',
//     fontSize: 15,
//     textAlign: 'center',
//   },
//   lasttxtlower: {
//     alignSelf: 'center',
//   },
// });
// export default CreateNewAccount;

import { View, Text } from 'react-native'
import React from 'react'

const CreateNewAc = () => {
  return (
    <View>
      <Text>CreateNewAc</Text>
    </View>
  )
}

export default CreateNewAc