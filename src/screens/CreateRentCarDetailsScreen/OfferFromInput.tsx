import {
    TextInput,
    View
} from 'react-native';
import {
    COLORS,
    SIZES
} from '../../constants';

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
    value ,
    maxLength

}: any) => {
    return (

        <View style={{
            flexDirection: 'row',
            height: SIZES.responsiveScreenWidth(22),
            marginTop: 15,
            borderRadius: 7,
            backgroundColor: COLORS.lightGray2,
            width: SIZES.responsiveScreenWidth(80),
            alignItems: 'center',
            justifyContent:'center'
        }}>
       

            <TextInput
                style={{

                    fontSize: SIZES.responsiveScreenFontSize(1.7),
                    fontWeight: '700',
                    color:COLORS.primary,
                    marginHorizontal:10

                }}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}

                autoCapitalize={autoCapitalize}
                maxLength={maxLength}
                onChangeText={(text) => onChange(text)}
            />
       

        </View>
    )
}

export default FromInput;