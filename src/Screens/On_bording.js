// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { Images } from '../assets/images';

// const Onbording = ({navigation}) => {
//   return (
//     <View style={styles.main}>
//       <View style={styles.header}>
//         <View>
//           <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
//             <Image
//               name="arrow"
//               source={Images.backarrow}
//               style={styles.arrow}
//             />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.headertxtview}>
//           <Text style={styles.headertxt}>Choose your Interests</Text>
//         </View>
//       </View>
//       <View style={styles.icons_l1}>
//         <TouchableOpacity>
//           <View style={styles.icons}>
//             <View>
//               <Image
//                 name="beautypluse"
//                 source={Images.beauty_pluse}
//                 style={styles.beautypluse}
//               />
//               <Image
//                 name="beautypluse"
//                 source={Images.beauty}
//                 style={styles.beauty}
//               />
//             </View>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <View style={styles.icons}>
//             <Image
//               name="facewash"
//               source={Images.facewash}
//               style={styles.facewash}
//             />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <View style={styles.icons}>
//             <Image
//               name="facemasage"
//               source={Images.facemassage}
//               style={styles.facewash}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.icons_l2}>
//         <TouchableOpacity>
//           <View style={styles.icons}>
//             <Image
//               name="legmassage"
//               source={Images.legmassage}
//               style={styles.legmassage}
//             />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <View style={styles.icons}>
//             <Image
//               name="faceglow"
//               source={Images.faceglow}
//               style={styles.faceglow}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.skip}>
//         <TouchableOpacity onPress={()=>{navigation.navigate('Flatlist');}}>
//           <Text style={styles.skiptxt}>Skip Now</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.continue}>
//         <TouchableOpacity onPress={()=>{navigation.navigate('Home');}}>
//           <Text style={styles.continuetxt}>Continue</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// export default Onbording

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
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
//   headertxtview: {
//     alignSelf: 'center',
//     marginLeft: '20%',
//   },
//   headertxt: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '500',
//     alignSelf: 'center',
//   },
//   icons_l1: {
//     flexDirection: 'row',
//     marginTop: '10%',
//   },
//   icons: {
//     borderWidth: 1,
//     marginHorizontal: 10,
//     height: 80,
//     width: 110,
//   },
//   beautypluse: {
//     height: 20,
//     width: 70,
//     marginHorizontal: '15%',
//     marginTop: '7%',
//   },
//   beauty: {
//     marginLeft: '15%',
//     marginTop: '5%',
//     height: 35,
//     width: 70,
//   },
//   facewash: {
//     alignSelf: 'center',
//     marginVertical: '7%',
//     height: 65,
//     width: 65,
//   },
//   icons_l2: {
//     flexDirection: 'row',
//     marginTop: '10%',
//   },
//   legmassage: {
//     alignSelf: 'center',
//     marginVertical: '7%',
//     height: 65,
//     width: 65,
//   },
//   faceglow: {
//     alignSelf: 'center',
//     marginVertical: '7%',
//     height: 65,
//     width: 65,
//   },
//   skip: {
//     // alignItems: 'center',
//     borderBottomWidth: 1,
//     position: 'absolute',
//     bottom: '10%',
//     alignSelf: 'center',
//   },
//   skiptxt: {
//     fontSize: 15,
//   },
//   continue: {
//     backgroundColor: '#1D1B44',
//     marginHorizontal: '20%',
//     height: 35,
//     width: '100%',
//     borderRadius: 3,
//     position: 'absolute',
//     bottom: '3%',
//     alignSelf: 'center',
//   },
//   continuetxt: {
//     color: 'white',
//     alignSelf: 'center',
//     fontSize: 20,
//     padding: 2,
//   },
// });

import { View, Text } from 'react-native'
import React from 'react'

const On_bording = () => {
  return (
    <View>
      <Text>On_bording</Text>
    </View>
  )
}

export default On_bording