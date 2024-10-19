import {COLORS, FONTS, SIZES, constants, dummyData, icons, images} from '../../constants';
import {
    Image,
    Text,
    View,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react';

const AuthLayout = ({title,subtitle,titleContainerStyle,children}) => {
    return (
        <View
            style ={{
                flex: 1,
                paddingVertical:SIZES.padding,
                backgroundColor:COLORS.white,
            }}
        
        >  

        <KeyboardAwareScrollView
        keyboardDismissMode ='on-drag'
        contentContainerStyle ={{
            flex: 1,
            paddingHorizontal:SIZES.padding,
        }}
        >
        
        {/* App Icon  */}
        <View 
             style ={{
                 alignItems: 'center',
             }}
                >
                    <Image
                        source ={images.logo_02}
                        resizeMode='contain'
                        style ={{
                            height:100,
                            width:200
                        }}
                        />


                </View>


        {/* Title & SubTitle */}

        <View 
            style ={{
                marginTop:SIZES.padding,
                ...titleContainerStyle,
            }}>

            <Text 
                style ={{
                    textAlign: 'center',
                    ...FONTS.h2
                }}>
                    {title}
            </Text>

            <Text 
                style ={{
                    textAlign: 'center',
                    ...FONTS.body3,
                    color: COLORS.darkGray,
                    marginTop:SIZES.base
                }}>
                    {subtitle}
            </Text>



        </View>
        {/* Content / Children  */}
        {children}

        </KeyboardAwareScrollView>

           
        </View>
    )
}

export default AuthLayout;