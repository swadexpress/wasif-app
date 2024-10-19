import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
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

    {
        id: 4,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },

]

const AllProducts = ({ }: any) => {

    return (
        <View style={{
            marginTop: 5,
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
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item, index }) => (

                    <TouchableOpacity


                        activeOpacity={0.7}>



                        <View style={{
                            backgroundColor: COLORS.lightGray2,
                            borderRadius: 10,
                            marginTop: 8,
                            width: SIZES.width * 0.47,
                            elevation: 1,
                            marginRight: 8,
                            marginBottom: 1,

                        }}>
                            <View style={{
                                position: 'absolute',
                                left: 5,
                                top: 5,
                                zIndex: 99,
                                backgroundColor: COLORS.white,
                                borderRadius: 5,
                                width: 45,
                                height: 22,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row'
                            }}>
                                <Image
                                    source={icons.dollar}
                                    style={{
                                        width: 11,
                                        height: 11,
                                        tintColor: COLORS.primary
                                    }}
                                />
                                <Text style={{
                                    fontSize: 12,
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
                                backgroundColor: COLORS.white,
                                borderRadius: 100,
                                width: 24,
                                height: 24,
                                alignItems: 'center',
                                justifyContent: 'center'
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

                                // alignItems: 'center',
                                width: 55,
                                height: 18,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                position: 'absolute',
                                zIndex: 99,
                                top: '52%',
                                right: 3,
                                backgroundColor: COLORS.white,
                                borderRadius: 4
                            }}>
                                <Image
                                    source={icons.star}
                                    style={{
                                        width: 10,
                                        height: 10,

                                        tintColor: COLORS.orange
                                    }}
                                />
                                <Text style={{
                                    fontSize: 10,
                                    fontWeight: '900',
                                    color: COLORS.black,
                                    marginLeft: 3

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





                            <FastImage

                                style={{
                                    width: SIZES.width * 0.47,
                                    height: SIZES.width * 0.3,
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


                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>



                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: '700',
                                        color: COLORS.black,
                                        marginHorizontal: 3
                                    }}>
                                        {`${item.name.slice(0, 40)}...`}
                                    </Text>

                                </View>
                            </View>



                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginLeft: 4,
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
                                            width: 15,
                                            height: 15,
                                            tintColor: COLORS.primary
                                        }}

                                    />


                                    <Text style={{
                                        fontSize: 10,
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
                                            width: 15,
                                            height: 15,
                                            tintColor: COLORS.primary
                                        }}

                                    />


                                    <Text style={{
                                        fontSize: 10,
                                        fontWeight: '700',
                                        color: COLORS.primary,
                                        marginLeft: 2
                                    }}>
                                        {`${item.delivery_time} min`}
                                    </Text>

                                </View>
                            </View>


                        </View>

                    </TouchableOpacity>


                )}

            />
        </View>
    )

}

export default AllProducts