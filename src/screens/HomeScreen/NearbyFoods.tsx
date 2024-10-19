import { FlatList, Image, Text, View } from "react-native"
import FastImage from "react-native-fast-image"
import LinearGradient from "react-native-linear-gradient"
import Animated, { FadeInDown } from "react-native-reanimated"
import ScalePress from "../../components/ScalePress"
import { COLORS, SIZES, icons, images } from "../../constants"


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

const NearbyFoods = ({ recommends }: any) => {

    console.log('dd')
    return (
        <View style={{
            marginTop: 10,
            // marginHorizontal:8

        }}>

            <Text style={{
                fontSize: SIZES.responsiveScreenFontSize(2),
                fontWeight: '800',
                color: COLORS.black,
                marginTop: 3,
                marginBottom: 15,
                marginLeft: 8,

            }}>
                Nearby Meal
            </Text>



            <FlatList
                style={{

                }}
                data={data}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Animated.View entering={FadeInDown.delay(150).duration(1200)}>

                    <ScalePress


                        >

                        <LinearGradient
                            style={{
                            
                                borderRadius: 10,
                                width: SIZES.responsiveScreenWidth(60),
                                elevation: 1,
                                marginRight: 8,
                                marginBottom: 1,
                                marginLeft: index == 0 ? 8 : 0

                            }}

                            locations={[0, 1,]}
                            colors={[COLORS.lightRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={90}>


                            <View style={{
                                position: 'absolute',
                                left: 5,
                                top: 5,
                                zIndex: 99,
                                backgroundColor: COLORS.lightBlue,
                                elevation:2,
                                borderRadius: SIZES.responsiveScreenWidth(0.8),
                                width: SIZES.responsiveScreenWidth(12.5),
                                height: SIZES.responsiveScreenWidth(5),

                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row'
                            }}>
                                <Image
                                    source={icons.dollar}
                                    style={{
                                        width: SIZES.responsiveScreenFontSize(1.5),
                                        height: SIZES.responsiveScreenFontSize(1.5),
                                        tintColor: COLORS.primary
                                    }}
                                />
                                <Text style={{
                                    fontSize: SIZES.responsiveScreenFontSize(1.5),
                                    fontWeight: '900',
                                    color: COLORS.black,
                                    marginLeft: -2
                                }}>
                                    800
                                </Text>

                            </View>
                            <View style={{
                                position: 'absolute',
                                right: 5,
                                top: 5,
                                zIndex: 99,
                                backgroundColor: COLORS.lightBlue,
                                elevation:2,
                                borderRadius: SIZES.responsiveScreenWidth(1),
                                width: SIZES.responsiveScreenWidth(6),
                                height: SIZES.responsiveScreenWidth(6),

                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    source={icons.love}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(4.2),
                                        height: SIZES.responsiveScreenWidth(4.2),

                                        tintColor: COLORS.primary


                                    }}
                                />
                            </View>



                            <FastImage

                                style={{
                                    width: SIZES.responsiveScreenWidth(60),
                                    height: SIZES.responsiveScreenWidth(32),
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10
                                }}
                                source={{ uri: item.image }}
                                // resizeMode={'cover'}
                                resizeMode={'stretch'}

                            />

                            <View style={{
                                flexDirection: 'row',
                                // alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 8,
                                marginHorizontal:8


                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '79%'


                                }}>

                                    {/* <Image
                                        source={icons.delivery}
                                        style={{
                                            width: 15,
                                            height: 15,
                                            tintColor: COLORS.primary
                                        }}

                                    /> */}


                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                                        fontWeight: '700',
                                        color: COLORS.black,
                                     
                                    }}>
                                        {item.name}
                                    </Text>

                                </View>


                                <View style={{

                                    // alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    marginRight: 6,
                                    height: SIZES.responsiveScreenWidth(5.5),

                                }}>
                                    <Image
                                        source={icons.star}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(2.4),
                                            height: SIZES.responsiveScreenWidth(2.4),


                                            tintColor: COLORS.primary,
                                            marginTop: 3


                                        }}
                                    />
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.3),
                                        fontWeight: '900',
                                        color: COLORS.black,
                                        marginLeft: 3

                                    }}>
                                        4.5
                                    </Text>
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(0.9),

                                        fontWeight: '900',
                                        color: COLORS.gray


                                    }}>
                                        (23+)
                                    </Text>
                                </View>






                            </View>



                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal:10,
                                marginTop: 8,
                                marginBottom: 10
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}>

                                    <Image
                                        source={icons.delivery}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(3.3),
                                            height: SIZES.responsiveScreenWidth(3.3),

                                            tintColor: COLORS.primary


                                        }}

                                    />


                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        fontWeight: '700',
                                        color: COLORS.primary,
                                        marginLeft: 3
                                    }}>
                                        {item.delivery_status}
                                    </Text>

                                </View>


                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center', marginLeft: 7

                                }}>

                                    <Image
                                        source={icons.clock}
                                        style={{
                                            width: SIZES.responsiveScreenWidth(3.3),
                                            height: SIZES.responsiveScreenWidth(3.3),

                                            tintColor: COLORS.primary
                                        }}

                                    />


                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        fontWeight: '800',
                                        color: COLORS.primary,
                                        marginLeft: 2
                                    }}>
                                        {`${item.delivery_time} min`}
                                    </Text>

                                </View>
                            </View>




                        </LinearGradient>

                    </ScalePress>
                    </Animated.View>

                )}

                ListFooterComponent={<View style={{
                    marginRight: 10


                }} />}

            />
        </View>
    )

}

export default NearbyFoods