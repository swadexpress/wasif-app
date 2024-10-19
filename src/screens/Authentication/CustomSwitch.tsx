import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES, } from '../../constants';
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import React from 'react';

const CustomSwitch = ({ value, onChange }: any) => {

    return (

        <TouchableWithoutFeedback

            onPress={() => onChange(!value)}

        >

            <View style={{ flexDirection: 'row' }}>

                <View
                    style={
                        value ? styles.switchOnContainer : styles.switchOffContainer
                    }>
                    <View
                        style={{
                            ...styles.dot,
                            backgroundColor: value ? COLORS.darkRed : COLORS.gray
                        }}

                    >


                    </View>
                </View>



                {/* Text */}

                <Text
                    style={{
                        color: value ? COLORS.primary : COLORS.gray,
                        marginLeft: 8,
                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                        fontWeight: '700'
                    }}>
                    Sent app update
                </Text>


            </View>
        </TouchableWithoutFeedback>

    )



}




const styles = StyleSheet.create({

    switchOnContainer: {
        width: SIZES.responsiveScreenWidth(10),
        height: 18,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 5,
        backgroundColor: COLORS.primary,


    },


    switchOffContainer: {
        width: SIZES.responsiveScreenWidth(10),
        height: 18,
        paddingLeft: 2,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: 5,
        backgroundColor: COLORS.transparent,
    },


    dot: {
        width: 12,
        height: 12,
        borderRadius: 6

    }


})




export default CustomSwitch;









