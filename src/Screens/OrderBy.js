// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   ActivityIndicator,
//   Image,
//   TouchableOpacity,
// } from 'react-native';

// export default class BasicFlatList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       data: [],
//       page: 1,
//       seed: 1,
//       error: null,
//       refreshing: false,
//       selectedItem:'null',
//     };
//   }

//   componentDidMount() {
//     this.makeRemoteRequest();
//   }

//   makeRemoteRequest = () => {
//     const {page, seed} = this.state;
//     const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
//     this.setState({loading: true});
//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         this.setState({
//           data: page === 1 ? res.results : [...this.state.data, ...res.results],
//           error: res.error || null,
//           loading: false,
//           refreshing: false
//         });
//       })
//       .catch(error => {
//         this.setState({error, loading: false});
//       });
//   };

//   onPressAction = (rowItem) => {
//     console.log('ListItem was selected');
//     console.dir(rowItem);
//     this.setState({
//       selectedItem: rowItem.id.value
//     });
//   }

//   renderRow = (item) => {
//     const isSelectedUser = this.state.selectedItem === item.id.value;
//     console.log(`Rendered item - ${item.id.value} for ${isSelectedUser}`);
//     const viewStyle = isSelectedUser ? styles.selectedButton : styles.normalButton;
//     return(
//         <TouchableOpacity style={viewStyle} onPress={() => this.onPressAction(item)} underlayColor='#dddddd'>
//           <View style={styles.listItemContainer}>
//             <View>
//               <Image source={{ uri: item.picture.large}} style={styles.photo} />
//             </View>
//             <View style={{flexDirection: 'column'}}>
//               <View style={{flexDirection: 'row', alignItems: 'flex-start',}}>
//                 {isSelectedUser ?
//                   <Text style={styles.selectedText}>{item.name.first} {item.name.last}</Text>
//                   : <Text style={styles.text}>{item.name.first} {item.name.last}</Text>
//                 }
//               </View>
//               <View style={{flexDirection: 'row', alignItems: 'flex-start',}}>
//                 <Text style={styles.text}>{item.email}</Text>
//               </View>
//             </View>
//           </View>
//         </TouchableOpacity>
//     );
//   }

//   render() {
//     return(
//       <FlatList style={styles.container}
//         data={this.state.data}
//         renderItem={({ item }) => (
//           this.renderRow(item)
//         )}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//   },
//   selectedButton: {
//     backgroundColor: 'lightgray',
//   },
//   normalButton: {
//     backgroundColor: 'white',
//   },
//   listItemContainer: {
//     flex: 1,
//     padding: 12,
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   text: {
//     marginLeft: 12,
//     fontSize: 16,
//   },
//   selectedText: {
//     marginLeft: 12,
//     fontSize: 20,
//   },
//   photo: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//   },
// });







import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('plese enter your full name'),
  email: Yup.string()
    .email('Invalid email')
    .required('plese enter email'),
  password:Yup.string()
    .min(8)
    .required('plese enter your password')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#!@?%$&^*-]).{8,}$/,
      'must contain 8 latter, at lest one charactor latter,one lowercase letter , one number and one special charactor '
    ),
  confirmPassword:Yup.string()
    .min(8)
    .oneOf([Yup.ref('password')],'your password do not match')
    .required('confirm password is required' ),
  mobailNumber:Yup.string()
      .min(10,'must be exectly atlest 10 dizit')
      .max(10,'must be exectly atlest 10 dizit')
      .required('mobail number is must be required')
      .matches(/^[0-9]+$/,'must be only digits')
});

const login = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobailNumber: '',
      }}
      validationSchema={SignupSchema}>
      {({values, touched, errors, handlesubmit,handleChange,setFieldTouched,isValid}) => (
        <View>
          {/* <Text>login</Text> */}
          <Text>sign up</Text>
          <View>
            <TextInput
              style={styles.inputStyle}
              placeholder="full name"
              value={values.name}
              onChangeText={handleChange('name')}
              // onBlur={()=>{setFieldTouched('name')}}
            />
          {touched.name && errors.name && (<Text style={styles.errTxt}>{errors.name}</Text>)}
          </View>
          <View>
            <TextInput
              style={styles.inputStyle}
              placeholder="email"
              value={values.email}
              onChangeText={handleChange('email')}
              // onBlur={()=>{setFieldTouched('email')}}

            />
            {touched.email && errors.email && (<Text style={styles.errTxt}>{errors.email}</Text>)}

          </View>
          <View>
            <TextInput
              style={styles.inputStyle}
              placeholder="password"
              value={values.password}
              onChangeText={handleChange('password')}
              // onBlur={()=>{setFieldTouched('password')}}

            />
            {touched.password && errors.password && (<Text style={styles.errTxt}>{errors.password}</Text>)}

          </View>
          <View>
            <TextInput
              style={styles.inputStyle}
              placeholder="confirm password"
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              // onBlur={()=>{setFieldTouched('confirmPassword')}}

            />
            {touched.confirmPassword && errors.confirmPassword && (<Text style={styles.errTxt}>{errors.confirmPassword}</Text>)}

          </View>
          <View>
            <TextInput
              style={styles.inputStyle}
              maxLength={10}
              placeholder="mobail number"
              value={values.mobailNumber}
              onChangeText={handleChange('mobailNumber')}
              onBlur={()=>{setFieldTouched('mobailNumber')}}

            />
            { touched.mobailNumber && errors.mobailNumber && (<Text style={styles.errTxt}>{errors.mobailNumber}</Text>)}

          </View>
          <TouchableOpacity 
            onPress={() => { 
              {setFieldTouched('name')}
              {setFieldTouched('email')}
              {setFieldTouched('password')}
              {setFieldTouched('confirmPassword')}
              {setFieldTouched('mobailNumber')}



            }}
            style={styles.btn} //disabled={!isValid} 
            // onBlur={()=>{setFieldTouched('mobailNumber')}}
          >
            <Text>submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default login;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: 'gray',
    alignSelf: 'center',
    height: 30,
    width: 70,
  },
  errTxt:{
    color:'red',
    fontSize:15,
    margin:5
  }
});
