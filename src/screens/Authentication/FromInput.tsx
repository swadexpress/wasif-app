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
    maxLength

}: any) => {
    return (

        <View style={{
            flexDirection: 'row',
            height: SIZES.responsiveScreenWidth(11.5),
            marginTop: 15,
            borderRadius: 7,
            backgroundColor: COLORS.lightGray2,
            width: SIZES.responsiveScreenWidth(90),
            alignItems: 'center'
        }}>
            {prependComponent}

            <TextInput
                style={{

                    flex: 1,
                    ...inputStyle,
                    fontSize: SIZES.responsiveScreenFontSize(1.6),
                    fontWeight: '700',
                    marginLeft:10,
                    color:COLORS.primary

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
            {appendComponent}

        </View>
    )
}

export default FromInput;