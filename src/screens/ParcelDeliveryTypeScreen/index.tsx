import {
    Image,
    StatusBar, StyleSheet, Text, View
} from 'react-native';
import { COLORS, SIZES, animations, icons, images } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import ScalePress from '../../components/ScalePress';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';

let noticeHeight2 = 75
const noticeHeight = -(noticeHeight2 + StatusBar.currentHeight)



const data = [
    {
        id: 1,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },
    {
        id: 2,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 3,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },



]


const PercelDeliveryType = () => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
    const [selectedMenuType, setSelectedMenuType] = React.useState(1);
    const [menuList, setMenuList] = useState([]);
    const [recommends, setRecommends] = useState([]);
    const [popular, setPopular] = useState([]);
    const [isStatusBar, setIsStatusBar] = useState(true);
    const navigation = useNavigation<any>();
    const refRBSheetFilter = useRef();



    return (
        <>
            <Wrapper>


                <SingleImageHeader
                    name={'Parcel'}

                />

                <View style={styles.mainContainer}>



                    <View style={{
                        position: 'absolute',
                        top: 15,
                        left: 15

                    }}>



                        <Text style={{
                            fontSize: SIZES.responsiveScreenFontSize(1.7),
                            fontWeight: '800',
                            color: COLORS.black,
                            marginTop: 0
                        }}>
                            Reliable delivery
                        </Text>
                        <Text style={{
                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                            fontWeight: '600',
                            color: COLORS.gray,
                            marginTop: 1
                        }}>
                            Send things to your destination
                        </Text>
                        <Text style={{
                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                            fontWeight: '600',
                            color: COLORS.gray,

                        }}>
                            fast and securely
                        </Text>



                    </View>



                    <LottieView
                        source={animations.parcel_ride}
                        style={styles.lottieViewContainer}
                        loop={true}
                        autoPlay
                        cacheComposition={true}
                        hardwareAccelerationAndroid
                    />







                    <Text style={{
                        fontSize: SIZES.responsiveScreenFontSize(1.8),
                        fontWeight: '800',
                        color: COLORS.black,
                        marginTop: 10,
                        alignSelf: 'flex-start',
                        marginLeft: 10,
                        marginBottom: 10
                    }}>
                        Send your parcel
                    </Text>




                    {/* ====================================== */}
                    <Animated.View entering={FadeInDown.delay(150).duration(1200)}>
                        <ScalePress onPress={() => navigation.navigate("CreateParcelAndCourierDetailsScreen")}>
                            <LinearGradient
                                style={{
                                    borderRadius: 10,
                                    width: SIZES.responsiveScreenWidth(97),
                                    elevation: 1,
                                    marginBottom: 5,
                                    marginTop: 5
                                }}

                                locations={[0, 1,]}
                                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                useAngle={true}
                                angle={190}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 7,
                                        marginBottom: 7

                                    }}>
                                        <View
                                            style={{
                                                width: SIZES.responsiveScreenWidth(12),
                                                height: SIZES.responsiveScreenWidth(12),
                                                borderRadius: 7,
                                                backgroundColor: COLORS.lightBlue,
                                                elevation: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginLeft: 8
                                            }}
                                        >
                                            <Image
                                                source={icons.delivery}
                                                style={{
                                                    width: SIZES.responsiveScreenWidth(8),
                                                    height: SIZES.responsiveScreenWidth(8),
                                                    borderRadius: 8
                                                }}
                                            />

                                        </View>
                                        <View style={{
                                            marginLeft: 7,

                                        }}>



                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.6),
                                                fontWeight: '800',
                                                color: COLORS.black,
                                                marginTop: 0
                                            }}>
                                                Instant Delivery
                                            </Text>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                                fontWeight: '600',
                                                color: COLORS.gray,
                                                marginTop: 1
                                            }}>
                                                Immediate Pickup, Fast Delivery
                                            </Text>



                                        </View>

                                    </View>

                                    <View style={{
                                        alignItems: 'flex-end',
                                        justifyContent: 'space-around',
                                        marginRight: 8


                                    }}>



                                        <View style={{
                                            borderRadius: 5,
                                            width: SIZES.responsiveScreenWidth(6),
                                            height: SIZES.responsiveScreenWidth(6),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // elevation: 0.5

                                        }}>
                                            <Image
                                                source={icons.down_arrow}
                                                style={{
                                                    width: SIZES.responsiveScreenWidth(3.8),
                                                    height: SIZES.responsiveScreenWidth(3.8),
                                                    tintColor: COLORS.primary,
                                                    transform: [{
                                                        rotate: '270deg'
                                                    }]
                                                }}
                                            />
                                        </View>


                                    </View>
                                </View>




                            </LinearGradient>

                        </ScalePress>


                        {/* ====================================== */}
                        <ScalePress onPress={() => navigation.navigate("CreateParcelAndCourierDetailsScreen")}>
                            <LinearGradient
                                style={{
                                    borderRadius: 10,
                                    width: SIZES.responsiveScreenWidth(97),
                                    elevation: 1,
                                    marginBottom: 5,
                                    marginTop: 5
                                }}

                                locations={[0, 1,]}
                                colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                useAngle={true}
                                angle={190}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 7,
                                        marginBottom: 7

                                    }}>
                                        <View
                                            style={{
                                                width: SIZES.responsiveScreenWidth(12),
                                                height: SIZES.responsiveScreenWidth(12),
                                                borderRadius: 7,
                                                backgroundColor: COLORS.lightBlue,
                                                elevation: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginLeft: 8
                                            }}
                                        >
                                            <Image
                                                source={icons.delivery}
                                                style={{
                                                    width: SIZES.responsiveScreenWidth(8),
                                                    height: SIZES.responsiveScreenWidth(8),
                                                    borderRadius: 8
                                                }}
                                            />

                                        </View>
                                        <View style={{
                                            marginLeft: 7,

                                        }}>



                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.6),
                                                fontWeight: '800',
                                                color: COLORS.black,
                                                marginTop: 0
                                            }}>
                                                Nationwide Delivery
                                            </Text>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                                fontWeight: '600',
                                                color: COLORS.gray,
                                                marginTop: 1
                                            }}>
                                                Pickup within hours, delivery in days
                                            </Text>



                                        </View>

                                    </View>

                                    <View style={{
                                        alignItems: 'flex-end',
                                        justifyContent: 'space-around',
                                        marginRight: 8


                                    }}>



                                        <View style={{
                                            borderRadius: 5,
                                            width: SIZES.responsiveScreenWidth(6),
                                            height: SIZES.responsiveScreenWidth(6),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // elevation: 0.5

                                        }}>
                                            <Image
                                                source={icons.down_arrow}
                                                style={{
                                                    width: SIZES.responsiveScreenWidth(3.8),
                                                    height: SIZES.responsiveScreenWidth(3.8),
                                                    tintColor: COLORS.primary,
                                                    transform: [{
                                                        rotate: '270deg'
                                                    }]
                                                }}
                                            />
                                        </View>


                                    </View>
                                </View>




                            </LinearGradient>

                        </ScalePress>

                    </Animated.View>



                </View>




            </Wrapper>

        </>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottieViewContainer: {
        marginTop: '5%',
        width: SIZES.responsiveScreenWidth(50),
        height: SIZES.responsiveScreenWidth(50),
    },
})


export default PercelDeliveryType;