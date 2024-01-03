import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import { fontSize, wp, hp } from '../../../utils/globalFunction'
import colors from '../../../utils/colors'

const PrimaryTxtInput = ({keyboardType,lan,viewStyle,txtStyle,value,onChangeText,placeholder,onTextInput}) => {
  return (
    <View style={[styles.view,{...viewStyle}]}>
        <TextInput
            style={[styles.txtin,{...txtStyle}]}
            keyboardType={keyboardType || 'default'}
            // keyboardType='number-pad'
            maxLength={lan}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onTextInput={onTextInput}
            // onTextInput={onTextInput}
          />
    </View>
  )
}

export default PrimaryTxtInput

const styles = StyleSheet.create({
    txtin: {
        fontSize: fontSize(15),
        justifyContent:'center',
        fontWeight:'400',
        paddingHorizontal:10
      },
      view: {
        backgroundColor:colors.offWhite,
        width: wp(100),
        alignSelf:"center",
      },
})