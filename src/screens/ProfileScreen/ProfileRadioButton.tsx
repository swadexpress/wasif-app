import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated
} from 'react-native';
import { connect } from "react-redux";

import { COLORS, FONTS, SIZES } from "../../constants";

const ProfileRadioButton = ({ icon, label, isSelected, onPress }: any) => {

    const radioAnimated = React.useRef(new Animated.Value(0)).current;

    const circleColorAnimated = radioAnimated.interpolate({
        inputRange: [0, 17],
        outputRange: [COLORS.gray, COLORS.primary],
    });

    const lineColorAnimated = radioAnimated.interpolate({
        inputRange: [0, 17],
        outputRange: [COLORS.gray, COLORS.primary],
    });

    React.useEffect(() => {
        if (isSelected) {
            Animated.timing(radioAnimated, {
                toValue: 17,
                duration: 400,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(radioAnimated, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false,
            }).start();
        }
    }, [isSelected])

    return (
        <View
            style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal:8
            }}
        >

            <View
                style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row'

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
                        elevation:1
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
                        color: COLORS.primary,
                        fontWeight: '700',
                        fontSize:  SIZES.responsiveScreenFontSize(1.5),
                        marginLeft:5
                    }}
                >
                    {label}
                </Text>
            </View>

            {/* Radio Button */}
            <TouchableOpacity
                style={{
                    width: SIZES.responsiveScreenWidth(7),
                    height: SIZES.responsiveScreenWidth(7),
                    alignItems: 'center',
                    justifyContent: 'center',
                   
                }}
                onPress={() => onPress()}
            >
                <Animated.View
                    style={{
                        width: "100%",
                        height: 4,
                        borderRadius: 1,
                        backgroundColor: lineColorAnimated
                    }}
                />

                <Animated.View
                    style={{
                        position: 'absolute',
                        left: radioAnimated,
                        width: SIZES.responsiveScreenWidth(2.8),
                        height: SIZES.responsiveScreenWidth(2.8),
                        borderRadius: 3,
                        borderWidth: 8,
                        borderColor: circleColorAnimated,
                        backgroundColor: COLORS.gray,
                        
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}



export default ProfileRadioButton;