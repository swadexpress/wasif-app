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
    onPressIn,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    value = '',
    maxLength

}: any) => {
    return (

        <View style={{
            flexDirection: 'row',
            backgroundColor: COLORS.white,
            width: SIZES.responsiveScreenWidth(85.1),
            height: SIZES.responsiveScreenWidth(9),
            alignItems: 'center',
            elevation:1,
            borderRadius: 5,

        }}>
            {prependComponent}

            <TextInput
                style={{

                    flex: 1,
                    ...inputStyle,
                    marginLeft:10,
                    color:COLORS.primary,
                    fontSize:SIZES.responsiveScreenFontSize(1.6),
                    fontWeight:'500'


                }}
                value={value}
                onPressIn ={onPressIn}
                // TextInputProps={textInputProps}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray2}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}

                autoCapitalize={autoCapitalize}
                maxLength={maxLength}
                onChangeText={(text) => onChange(text)}
            />
            {appendComponent}

        </View>
    )
}

export default FromInput;