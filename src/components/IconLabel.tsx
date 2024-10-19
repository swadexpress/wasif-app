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

const IconLabel =({containerStyle,iconStyle,icon,labelStyle,label}:any)=>{
console.log(label)
    return(

    <View 
   
        style={{
            flexDirection: 'row',
            paddingVertical:SIZES.base,
            paddingHorizontal:SIZES.radius,
            borderRadius:SIZES.radius,
            ...containerStyle

    
    }}

    
    >
        <Image 
            source={icon}
            style ={{
                width:20,
                height:20,
                ...iconStyle
            }}/>


            <Text style={{
                marginLeft:SIZES.base,
                ...FONTS.body3,
                ...labelStyle
            }}>
                {label}
            </Text>


    

    </View>

    )



}

export default IconLabel;









