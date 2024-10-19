import {COLORS, FONTS, SIZES, constants,  } from '../../constants';
import {
    Text,
    TextInput,
    View,
} from 'react-native';

import React from 'react';

const FromInput = ({

containerStyle, 
label,
placeholder,
inputStyle, 
prependComponent,
appendComponent,
onChange,
secureTextEntry,
keyboardType = "default",
autoCompleteType = "off",
autoCapitalize = "none",
errorMsg = "",
value='',
maxLength

}:any) => {
    return (
        <View style ={{...containerStyle}}>

            <View style ={{
                flexDirection:'row',
                height:35,
                backgroundColor:COLORS.lightGray2
            }}>
                {prependComponent}

                <TextInput 
                    style = {{

                        flex: 1,
                        ...inputStyle,
                        fontSize:12,
                        fontWeight:'700'
                        
                    }} 
                    value ={value}
                    placeholder={placeholder}
                    placeholderTextColor ={COLORS.gray2}
                    secureTextEntry ={secureTextEntry}
                    keyboardType = {keyboardType}
                    autoCompleteType = {autoCompleteType}
                    autoCapitalize = {autoCapitalize}
                    maxLength = {maxLength}
                    onChangeText = {(text) => onChange(text)}

                />
                {appendComponent}

            </View>

        </View>
    )
}

export default FromInput;