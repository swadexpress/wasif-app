import { useNavigation } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import LinearGradient from "react-native-linear-gradient"
import { COLORS, SIZES, icons } from "../../constants"





const ReviewOrderItem = ({ item, onPress }: any) => {

    const navigation = useNavigation<any>()

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('UserOrdersReviewTextScreen')

            }}
            activeOpacity={0.9}>

            <LinearGradient
                style={{
                    borderRadius: 5,
                    elevation: 1,
                    width: SIZES.width * 0.96,
                    marginTop: 7,
                    marginBottom: 1


                }}

                locations={[0, 1,]}
                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                useAngle={true}
                angle={90}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',

                    }}>
                        <FastImage

                            style={{
                                width: 72,
                                height: 72,
                                borderRadius: 6
                            }}
                            source={{ uri: item.image }}
                            resizeMode={'cover'}
                        // resizeMode={'stretch'}

                        />
                        <View style={{
                            marginLeft: 8
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',


                            }}>



                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '700',
                                    color: COLORS.black,

                                }}>
                                    {`${item.name.slice(0, 25)}...`}
                                </Text>




                            </View>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 5
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>

                                    <Image
                                        source={icons.delivery}
                                        style={{
                                            width: 15,
                                            height: 15,
                                            tintColor: COLORS.primary
                                        }}

                                    />


                                    <Text style={{
                                        fontSize: 10,
                                        fontWeight: '700',
                                        color: COLORS.black,
                                        marginLeft: 3
                                    }}>
                                        {item.delivery_status}
                                    </Text>

                                </View>

                            </View>
                            <View style={{

                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 5
                            }}>
                                <Image
                                    source={icons.star}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginLeft: 3,

                                        tintColor: COLORS.orange
                                    }}
                                />
                                <Image
                                    source={icons.star}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginLeft: 3,
                                        tintColor: COLORS.orange
                                    }}
                                />
                                <Image
                                    source={icons.star}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginLeft: 3,
                                        tintColor: COLORS.orange
                                    }}
                                />
                                <Image
                                    source={icons.star}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginLeft: 3,
                                        tintColor: COLORS.orange
                                    }}
                                />
                                <Image
                                    source={icons.star}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        marginLeft: 3,
                                        tintColor: COLORS.orange
                                    }}
                                />



                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: '900',
                                    color: COLORS.black,
                                    marginLeft: 8

                                }}>
                                    4.5
                                </Text>
                                <Text style={{
                                    fontSize: 8,
                                    fontWeight: '900',
                                    color: COLORS.gray

                                }}>
                                    (23+)
                                </Text>
                            </View>


                        </View>

                    </View>

                    <View style={{
                        alignItems: 'flex-end',
                        justifyContent: 'space-around',
                        marginRight: 8
                    }}>

                        <View style={{
                            width: SIZES.responsiveScreenWidth(18),
                            height: 19,
                            borderRadius: 5,
                            borderWidth: 0.4,
                            borderColor: COLORS.primary,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontSize: SIZES.responsiveScreenFontSize(1.2),
                                fontWeight: '600',
                                color: COLORS.primary,
                            }}>
                                Review
                            </Text>
                        </View>



                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>

    )

}

export default ReviewOrderItem