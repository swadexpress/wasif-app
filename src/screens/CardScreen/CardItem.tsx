import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CardItem = ({ item, isSelected, onPress }: any) => {




    return (
        <TouchableOpacity

            activeOpacity={0.9}
            style={{
                marginTop: 8,
                marginBottom: 1,

            }}
            onPress={onPress}

        >


            <LinearGradient
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: SIZES.responsiveScreenWidth(96),
                    height: SIZES.responsiveScreenWidth(14),
                    elevation: 1,
                    backgroundColor: COLORS.lightBlue,
                    borderRadius: 6,

                }}

                locations={[0, 1,]}
                colors={[COLORS.darkRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={90}>




                {/* Cards Image */}
                <View
                    style={{
                        width: SIZES.responsiveScreenWidth(12),
                        height: SIZES.responsiveScreenWidth(12),
                        alignItems: "center",
                        justifyContent: "center",
                        // elevation: 1,
                        borderRadius: 5,
                        // backgroundColor: COLORS.lightBlue,
                        marginLeft: 5,
                        borderWidth:1,
                        borderColor:COLORS.white
                    }}>
                    <Image
                        source={item.icon}
                        resizeMode='center'
                        style={{
                            width: SIZES.responsiveScreenWidth(7.6),
                            height:SIZES.responsiveScreenWidth(5.6),
                        }} />
                </View>

                {/* Name  */}

                <Text
                    style={{
                        flex: 1,
                        marginLeft: 8,
                        fontSize: SIZES.responsiveScreenFontSize(1.8),
                        fontWeight: '700',
                        color: COLORS.primary

                    }}

                >
                    {item.name}
                </Text>

                {/* Radio Button  */}
                <Image
                    source={isSelected ? icons.check_on : icons.check_off}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: 10,
                        tintColor: isSelected ? COLORS.primary : COLORS.gray
                    }}

                />

            </LinearGradient>
        </TouchableOpacity>

    )



}

export default CardItem;









