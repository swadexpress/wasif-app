import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";

import { COLORS, SIZES, icons } from "../../constants";

const ProfileValue = ({ icon, value, onPress }: any) => {
    return (
        <TouchableOpacity

        activeOpacity={0.9}
            style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 8

            }}
            onPress={onPress}
        >
            {/* Icon */}
            <View
                style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            >
                <View
                    style={{
                        width: SIZES.responsiveScreenWidth(9),
                        height: SIZES.responsiveScreenWidth(9),
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        backgroundColor: COLORS.lightBlue,
                        elevation: 1
                    }}
                >
                    <Image
                        source={icon}
                        resizeMode="contain"
                        style={{
                            width: SIZES.responsiveScreenWidth(5.5),
                            height: SIZES.responsiveScreenWidth(5.5),
                            tintColor: COLORS.primary
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontWeight: '700',
                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                        color: COLORS.primary,
                        marginLeft: 5
                    }}
                >
                    {value}
                </Text>

            </View>

            <Image
                source={icons.back}
                style={{
                    width: SIZES.responsiveScreenWidth(3.4),
                    height: SIZES.responsiveScreenWidth(3.4),
                    tintColor: COLORS.gray,
                    transform: [{
                        rotate: '180deg'
                    }]
                }}
            />
        </TouchableOpacity>
    )
}



export default ProfileValue;