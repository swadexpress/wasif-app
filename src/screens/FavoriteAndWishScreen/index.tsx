import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import { COLORS, SIZES, icons, images } from "../../constants"
import { useNavigation } from "@react-navigation/native"
import { IconButton } from "../../../../src/components"
import Header2 from "../../components/Header2"
import Header from "./Header"


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

const Kitchen = ({ recommends }: any) => {











    const navigation = useNavigation<any>()

    console.log('dd')
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
            // alignItems:'center'


        }}>
            <Header />
            <View style={{
                flex: 1,
                alignItems: 'center',
                marginTop:15


            }}>

                <FlatList
                    data={data}
                    keyExtractor={item => `${item.id}`}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity

                            onPress={() => navigation.navigate('SellerProfileScreen')}


                            activeOpacity={0.7}>



                            <View style={{
                                backgroundColor: COLORS.lightGray2,
                                borderRadius: 10,
                                width: SIZES.width * 0.97,
                                elevation: 0.4,
                                marginBottom: 5,
                                marginTop: 5


                            }}>





                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',

                                    marginLeft: 5,
                                    backgroundColor: COLORS.lightGray2,


                                }}>

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',

                                    }}>
                                        <FastImage

                                            style={{
                                                width: 100,
                                                height: 107,
                                                borderRadius: 8
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


                                                <View style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginLeft: 7

                                                }}>

                                                    <Image
                                                        source={icons.clock}
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
                                                        marginLeft: 2
                                                    }}>
                                                        {`${item.delivery_time} min`}
                                                    </Text>

                                                </View>
                                            </View>
                                            <View style={{

                                                backgroundColor: COLORS.white,
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


                                            <View style={{

                                                backgroundColor: COLORS.primary,
                                                borderRadius: 7,
                                                width: 105,
                                                height: 26,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                marginTop: 7
                                            }}>
                                                <Image
                                                    source={icons.cart}
                                                    style={{
                                                        width: 16,
                                                        height: 16,
                                                        tintColor: COLORS.white
                                                    }}
                                                />

                                                <Text style={{
                                                    fontSize: 12,
                                                    fontWeight: '700',
                                                    color: COLORS.white,
                                                    marginLeft: 5
                                                }}>Add to Cart</Text>
                                            </View>


                                        </View>

                                    </View>

                                    <View style={{
                                        alignItems: 'flex-end',
                                        justifyContent: 'space-around',
                                        marginRight: 8


                                    }}>



                                        <View style={{

                                            backgroundColor: COLORS.lightOrange3,
                                            borderRadius: 5,
                                            width: 26,
                                            height: 26,
                                            alignItems: 'center',
                                            justifyContent: 'center',

                                        }}>
                                            <Image
                                                source={icons.love}
                                                style={{
                                                    width: 16,
                                                    height: 16,
                                                    tintColor: COLORS.primary
                                                }}
                                            />
                                        </View>

                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 43,

                                            height: 29,

                                        }}>

                                            <Image
                                                source={icons.dollar}
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                    tintColor: COLORS.red2
                                                }}

                                            />


                                            <Text style={{
                                                fontSize: 13,
                                                fontWeight: '700',
                                                color: COLORS.red2,
                                                marginLeft: -2
                                            }}>
                                                200.0
                                            </Text>

                                        </View>

                                    </View>
                                </View>


                            </View>

                        </TouchableOpacity>


                    )}

                />
            </View>
        </View>
    )

}

export default Kitchen