import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { COLORS, SIZES } from "../../constants";

const ProfileValue = ({ icon, value, onPress }: any) => {
    return (
        <TouchableOpacity

        activeOpacity={0.9}
            style={{
            
                height:SIZES.responsiveScreenWidth(16.5),
                width: SIZES.responsiveScreenWidth(16.5),
                alignItems: 'center',
                justifyContent: 'center',
                // marginHorizontal: 15,
                // backgroundColor:COLORS.gray

            }}
            onPress={onPress}
        >

            <View
                style={{
                    width: SIZES.responsiveScreenWidth(9.7),
                    height: SIZES.responsiveScreenWidth(9),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: COLORS.lightBlue,
                    elevation:1
                }}
            >
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                        width: SIZES.responsiveScreenWidth(5.5),
                        height: SIZES.responsiveScreenWidth(5.5),
                        tintColor: COLORS.primary,
                        
                    }}
                />
            </View>
            <Text
                style={{
                    fontWeight: '700',
                    fontSize: SIZES.responsiveScreenFontSize(1.2),
                    color: COLORS.primary,
                    marginTop: 4
                }}
            >
                {value}
            </Text>

        </TouchableOpacity>
    )
}



export default ProfileValue;