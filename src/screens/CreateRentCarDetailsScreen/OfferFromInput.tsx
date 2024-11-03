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
    value = '',
    onPressIn,
    maxLength,

}: any) => {
    return (

        <View style={{
            flexDirection: 'row',
            height: SIZES.responsiveScreenWidth(20),
            marginTop: 15,
            borderRadius: 7,
            backgroundColor: COLORS.lightGray2,
            width: SIZES.responsiveScreenWidth(70),
            alignItems: 'center',
            justifyContent:'center'
        }}>
            {prependComponent}

            <TextInput
                style={{


                    fontSize: SIZES.responsiveScreenFontSize(1.7),
                    fontWeight: '800',
                
                    color:COLORS.primary

                }}
                
                value={value}
                onPressIn={onPressIn}
                placeholder={placeholder}
                placeholderTextColor={COLORS.gray}
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