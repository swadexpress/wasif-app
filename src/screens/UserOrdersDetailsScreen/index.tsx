import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons, images } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ProductItem from '../../components/ProductItem';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
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


const MyAccount = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [ratings, setRatings] = useState("");
    const [comment, setComment] = useState("");

    const [selectedShowDetails, setSelectedShowDetails] = useState('All Product');


    const navigation = useNavigation<any>()





    return (

        <Wrapper>
            <View
                style={{
                    flex: 1,

                }}
            >
                <SingleImageHeader
                    name={'Orders Details'}

                />

                <View style={{

                    alignItems: 'center',
                    justifyContent: 'center'
                    // marginHorizontal:8

                }}>


                    <FlatList
                        style={{

                        }}
                        data={data}
                        keyExtractor={item => `${item.id}`}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}

                        ListHeaderComponent={
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <LinearGradient
                                    style={{
                                        borderRadius: 5,
                                        elevation: 1,
                                        marginTop: 15
                                    }}

                                    locations={[0, 1,]}
                                    colors={[COLORS.lightBlue, COLORS.lightRed,]}
                                    useAngle={true}
                                    angle={190}>
                                    <View style={{
                                        marginTop: 8,
                                        borderRadius: 10,
                                        width: SIZES.width * 0.96,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: 50,
                                        flexDirection: 'row',

                                    }}>


                                        <View style={{
                                            borderRadius: 10,
                                            flexGrow: 1,
                                            marginBottom: 8,
                                            marginLeft: 10
                                        }}>



                                            <Text style={{
                                                fontSize: 15,

                                                fontWeight: '700',
                                                color: COLORS.primary,

                                            }}>
                                                Packed

                                            </Text>
                                            <Text style={{
                                                fontSize: 10,

                                                fontWeight: '500',
                                                color: COLORS.primary,
                                            }}>
                                                Paid by cash on delivery.

                                            </Text>
                                            <Text style={{
                                                fontSize: 10,

                                                fontWeight: '500',
                                                color: COLORS.primary,

                                            }}>
                                                Your parcel is packed and will be handed orber to our logistics parner.

                                            </Text>


                                        </View>

                                        <Image
                                            source={icons.cart}
                                            style={{
                                                marginRight: 10,
                                                width: 30,
                                                height: 30,
                                                tintColor: COLORS.primary
                                            }}




                                        />

                                    </View>

                                </LinearGradient>

                                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('UserOrdersDeliveryDetailsScreen')}>

                                    <LinearGradient
                                        style={{
                                            borderRadius: 5,
                                            elevation: 1,
                                            marginTop: 5
                                        }}

                                        locations={[0, 1,]}
                                        colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={190}>
                                        <View style={{
                                            marginTop: 8,
                                            borderRadius: 10,
                                            width: SIZES.width * 0.96,

                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            minHeight: 50,

                                            flexDirection: 'row',

                                        }}>
                                            <View style={{
                                                borderRadius: 10,
                                                flexDirection: 'row',
                                                width: '80%'



                                            }}>

                                                <Image
                                                    source={icons.delivery}
                                                    style={{
                                                        width: 17,
                                                        height: 17,
                                                        marginLeft: 10,
                                                        tintColor: COLORS.primary
                                                    }}




                                                />

                                                <Text style={{
                                                    fontSize: 10,
                                                    marginLeft: 4,
                                                    fontWeight: '700',
                                                    color: COLORS.primary,
                                                    flex: 1

                                                }}>
                                                    06 Oct-Your package has been processed and wll be with our delivery parten soon

                                                </Text>


                                            </View>



                                            <Image
                                                source={icons.back}
                                                style={{
                                                    marginRight: 10,
                                                    width: 15,
                                                    height: 15,
                                                    tintColor: COLORS.primary,
                                                    transform: [{ rotate: '180deg' }]
                                                }}




                                            />



                                        </View>

                                    </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('UserOrdersDeliveryDetailsScreen')}>

                                    <LinearGradient
                                        style={{
                                            borderRadius: 5,
                                            elevation: 1,
                                            marginTop: 5
                                        }}

                                        locations={[0, 1,]}
                                        colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={190}>
                                        <View style={{
                                            marginTop: 8,
                                            borderRadius: 10,
                                            width: SIZES.width * 0.96,
                                            minHeight: 50,
                                        }}>
                                            <View style={{
                                                borderRadius: 10,
                                                flexDirection: 'row',

                                            }}>

                                                <Image
                                                    source={icons.location}
                                                    style={{
                                                        width: 17,
                                                        height: 17,
                                                        tintColor: COLORS.primary
                                                    }}




                                                />

                                                <Text style={{
                                                    fontSize: 10,
                                                    marginLeft: 4,
                                                    fontWeight: '700',
                                                    color: COLORS.primary,

                                                }}>
                                                    Kalkini,Madaripur

                                                </Text>
                                                <Text style={{
                                                    fontSize: 11,
                                                    fontWeight: '500',
                                                    color: COLORS.gray,
                                                    marginTop: -5

                                                }}>
                                                    1771297948
                                                </Text>

                                            </View>
                                            <Text style={{
                                                fontSize: 10,
                                                fontWeight: '500',
                                                color: COLORS.gray,
                                                marginTop: 1,
                                                marginHorizontal: 20
                                            }}>
                                                Kazi office-2d floor, Kalkini, Madaripur, Dhaka, Bangladesh
                                            </Text>


                                        </View>

                                    </LinearGradient>
                                </TouchableOpacity>







                            </View>
                        }
                        renderItem={({ item, index }) => (
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <ProductItem
                                    key={index} item={item}
                                    onPress={() => {
                                        navigation.navigate('UserOrdersDeliveryDetailsScreen')
                                    }}


                                />
                            </View>

                        )}

                        ListFooterComponent={

                            <View style={{
                                alignItems: 'center',
                                marginBottom: 90
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>




                                    <LinearGradient
                                        style={{
                                            borderRadius: 5,
                                            elevation: 1,
                                            marginTop: 10,
                                        }}
                                        locations={[0, 1,]}
                                        colors={[COLORS.lightBlue, COLORS.lightRed,]}
                                        useAngle={true}
                                        angle={190}>
                                        <View style={{
                                            borderRadius: 5,
                                            flexDirection: 'row',
                                            // backgroundColor:COLORS.primary,
                                            height: 24,
                                            width: 110,
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}>

                                            <Image
                                                source={icons.chat}
                                                style={{
                                                    width: 17,
                                                    height: 17,
                                                    tintColor: COLORS.black
                                                }}




                                            />

                                            <Text style={{
                                                fontSize: 10,
                                                marginLeft: 4,
                                                fontWeight: '600',
                                                color: COLORS.black,

                                            }}>
                                                Chat with Seller

                                            </Text>

                                        </View>

                                    </LinearGradient>
                                </View>


                                <View style={{
                                    borderRadius: 10,
                                    width: SIZES.responsiveScreenWidth(96),
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    marginTop: 10

                                }}>
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.3),
                                        marginLeft: 4,
                                        fontWeight: '800',
                                        color: COLORS.primary,

                                    }}>
                                        {`Oder Summary`}

                                    </Text>
                                </View>

                                <View style={{
                                    borderRadius: 10,
                                    width: SIZES.responsiveScreenWidth(96),
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    marginTop: 13
                                }}>
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        marginLeft: 4,
                                        fontWeight: '400',
                                        color: COLORS.primary,

                                    }}>
                                        {`Subtotal(${3} items)`}

                                    </Text>

                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        marginLeft: 4,
                                        fontWeight: '400',
                                        color: COLORS.primary,

                                    }}>
                                        {`৳ ${330}`}

                                    </Text>

                                </View>
                                <View style={{
                                    borderRadius: 10,
                                    width: SIZES.responsiveScreenWidth(96),
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    marginTop: 5

                                }}>
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        marginLeft: 4,
                                        fontWeight: '400',
                                        color: COLORS.primary,

                                    }}>
                                        {`Shipping Fee`}

                                    </Text>

                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        marginLeft: 4,
                                        fontWeight: '400',
                                        color: COLORS.primary,

                                    }}>
                                        {`৳ ${"08"}`}

                                    </Text>

                                </View>
                                <View style={{
                                    borderRadius: 10,
                                    width: SIZES.responsiveScreenWidth(96),
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    marginTop: 5

                                }}>
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        marginLeft: 4,
                                        fontWeight: '400',
                                        color: COLORS.primary,

                                    }}>
                                        {`COD Handling Free`}

                                    </Text>

                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.2),
                                        marginLeft: 4,
                                        fontWeight: '400',
                                        color: COLORS.primary,

                                    }}>
                                        {`৳ ${"0.80"}`}

                                    </Text>

                                </View>
                                <View style={{

                                    borderRadius: 10,
                                    width: SIZES.responsiveScreenWidth(96),
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    marginTop: 7

                                }}>
                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.3),
                                        marginLeft: 4,
                                        fontWeight: '800',
                                        color: COLORS.primary,

                                    }}>
                                        {`Total`}

                                    </Text>

                                    <Text style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.3),
                                        marginLeft: 4,
                                        fontWeight: '800',
                                        color: COLORS.primary,

                                    }}>
                                        {`৳ ${"339"}`}

                                    </Text>

                                </View>

                            </View>}

                    />
                </View>



            </View>
        </Wrapper>
    )
}

export default MyAccount;