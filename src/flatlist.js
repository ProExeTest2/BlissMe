// import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useEffect, useState } from 'react'


// const Flatlist = () => {
//   let [count, setCount] = useState(0);
//   let [data, setData] = useState(101);
//   let [counter, setCounter] = useState(10);


//   // useEffect(()=>{
//   //   console.warn(count,'==========',counter)
//   // },[count,counter])

//   // useEffect(()=>{
//   //   console.warn('==========',data)
//   // },[data])

//   return (
//     <View>
//       <Text>{count}======={data}====={counter}</Text>
//       <Button title='count' onPress={()=>{setCount(++count)}} />
//       <Button title='data' onPress={()=>{setData(data+101)}} />
//       <Button title='counter' onPress={()=>{setCounter(counter+10)}} />

//       <User info={{count,counter}} />
//     </View>
//   )
// }

// const User = (props) => {
//   let [date,setDate] = useState(1)
// // console.log(props)
//   useEffect(()=>{
//     console.warn('count updated')
//   },[props.info])
//   return(
//     <View>
//       <Text style={{color:'red',fontSize:20}}>{date}</Text>
//       <Button title='date' onPress={()=>{
//         setDate(++date)
//       }} />
//     </View>
//   )
// }

// export default Flatlist

// const styles = StyleSheet.create({})



import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import  {useState} from 'react'


const flatlist = () => {
  // const total = []
  let [total,setTotal] = useState([])


  let arr = [
    {
      name:'dinkal',
      no:23,
      value:true
    },
    {
      name:'nilesh',
      no:25,
      value:true
    },
    {
      name:'gopal',
      no:24,
      value:false
    },
    {
      name:'milan',
      no:23,
      value:true
    },
  ]
console.log(arr)
  let last = arr.filter(arr=>{
    if(arr.value==true)
    {
      return(arr.no)
    }
  })
console.log(last)

let makeTotal = last.map( val => val.no)
console.log(makeTotal)

let lastTotal = makeTotal.reduce( (accumulator, currentValue) => accumulator + currentValue)
console.log(lastTotal)

  return (
    // <View>
    //   <TouchableOpacity onPress={()=>{
    //     setTotal(total.push(10))
    //   }}>
    //     <Text>10</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={()=>{
    //     setTotal(total.push(20))
    //   }}>
    //     <Text>20</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={()=>{
    //     setTotal(total.push(30))
    //   }}>
    //     <Text>30</Text>
    //   </TouchableOpacity>

    //   <Text>{total}</Text>
    // </View>



  //   <View>
  //   <TouchableOpacity onPress={()=>{
  //     total.push(10)
  //     console.log(total)
  //   }}>
  //     <Text>10</Text>
  //   </TouchableOpacity>
  //   <TouchableOpacity onPress={()=>{
  //     total.push(20)
  //     console.log(total)

  //   }}>
  //     <Text>20</Text>
  //   </TouchableOpacity>
  //   <TouchableOpacity onPress={()=>{
  //     total.push(30)
  //     console.log(total)

  //   }}>
  //     <Text>30</Text>
  //   </TouchableOpacity>
  //   {/* <Text>{total}</Text> */}
  // </View>



  <View>
    <Text>{}</Text>

  </View>
  )
}

export default flatlist

const styles = StyleSheet.create({})