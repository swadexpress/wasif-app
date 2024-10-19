import Animated,{useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES, constants, dummyData, icons} from '../constants';
import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import React from 'react';

const TextButton =({label,labelStyle,buttonContainerStyle,onPress,disabled})=>{

    return(

    <TouchableOpacity 
        style={{
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor:COLORS.primary,
            ... buttonContainerStyle 
    
    }}
    disabled={disabled}
    onPress={onPress}
    
    >

        <Text style ={{color:COLORS.white,...FONTS.h3 ,...labelStyle}}>
            {label}

        </Text>



    </TouchableOpacity>

    )



}

export default TextButton;









