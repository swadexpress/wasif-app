import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import FastImage from "react-native-fast-image"
import LinearGradient from "react-native-linear-gradient"
import SingleImageHeader from "../../components/SingleImageHeader"
import Wrapper from "../../components/Wrapper"
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
        takeImage: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },
    {
        id: 2,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',

        takeImage: ''
    },
    {
        id: 3,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
        takeImage: ''
    },



]

const Kitchen = ({ recommends }: any) => {

    const [showStartDirectionToAddress, setShowStartDirectionToAddress] = useState(false)











    const navigation = useNavigation<any>()

    console.log('dd')
    return (
        <Wrapper>
            <View style={{
                flex: 1,



            }}>
                <SingleImageHeader
                    name={'Check order'}

                />

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: 10


                }}>

                    <FlatList
                        data={data}
                        keyExtractor={item => `${item.id}`}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity

                                onPress={() => navigation.navigate('SellerProfileScreen')}


                                activeOpacity={0.9}>

                                <LinearGradient
                                    style={{
                                        backgroundColor: COLORS.lightGray2,
                                        borderRadius: 10,
                                        width: SIZES.width * 0.97,
                                        elevation: 2,
                                        marginBottom: 7,
                                        marginTop: 5

                                    }}

                                    locations={[0, 1,]}
                                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={30}>







                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',

                                        marginLeft: 5,
                                        // backgroundColor: COLORS.lightGray2,


                                    }}>



                                        <View style={{
                                            marginLeft: 7,
                                            width: '54%'



                                        }}>



                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.5),
                                                fontWeight: '700',
                                                color: COLORS.black,

                                            }}>
                                                {`${item.name.slice(0, 25)}...`}
                                            </Text>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.2),
                                                fontWeight: '600',
                                                color: COLORS.gray,

                                            }}>
                                                {`${item.name.slice(0, 70)}...`}
                                            </Text>


                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginTop: 4
                                            }}>

                                                {/* <Image
                                                        source={icons.dollar}
                                                        style={{
                                                            width: 15,
                                                            height: 15,
                                                            tintColor: COLORS.red2
                                                        }}

                                                    /> */}


                                                <Text style={{
                                                    fontSize: SIZES.responsiveScreenFontSize(1.5),
                                                    fontWeight: '800',
                                                    color: COLORS.red,

                                                }}>
                                                    ৳ 200.0
                                                </Text>

                                            </View>





                                        </View>

                                        <View style={{
                                            flexDirection: 'row'


                                        }}>



                                            {item.takeImage ?
                                                <FastImage
                                                    style={{
                                                        width: SIZES.responsiveScreenWidth(19),
                                                        height: SIZES.responsiveScreenWidth(19),
                                                        borderRadius: 5,
                                                        marginRight: 5,
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                    source={{ uri: item.image }}
                                                    resizeMode={'cover'}
                                                >

                                                    {!showStartDirectionToAddress &&

                                                        <Image

                                                            source={icons.edit}

                                                            style={{
                                                                width: 40,
                                                                height: 40,
                                                                tintColor: COLORS.primary

                                                            }}
                                                        />
                                                    }
                                                </FastImage>

                                                :

                                                <View
                                                    style={{
                                                        width: SIZES.responsiveScreenWidth(19),
                                                        height: SIZES.responsiveScreenWidth(19),

                                                        borderRadius: 5,
                                                        marginRight: 5,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        backgroundColor: COLORS.gray
                                                    }}

                                                >

                                                    <Image

                                                        source={icons.edit}

                                                        style={{
                                                            width: SIZES.responsiveScreenWidth(8),
                                                            height: SIZES.responsiveScreenWidth(8),
                                                            tintColor: COLORS.primary

                                                        }}
                                                    />

                                                </View>


                                            }

                                            <FastImage
                                                style={{
                                                    width: SIZES.responsiveScreenWidth(19),
                                                    height: SIZES.responsiveScreenWidth(19),

                                                    borderRadius: 5
                                                }}
                                                source={{ uri: item.image }}
                                                resizeMode={'cover'}
                                            />

                                        </View>




                                    </View>



                                </LinearGradient>

                            </TouchableOpacity>


                        )}

                        ListFooterComponent={
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>




                                <TouchableOpacity
                                        style={{
                                            marginTop: 30,
                                            marginBottom: 50
                                        }}
                                    activeOpacity={0.9}

                                    onPress={() => {

                                        if (showStartDirectionToAddress) {
                                            navigation.navigate('RiderStartDirectionToDeliveryMapScreen')
                                            return
                                        }
                                        setShowStartDirectionToAddress(true)

                                    }}





                                >

                                    <LinearGradient
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 10,
                                            backgroundColor: COLORS.primary,
                                            borderRadius: 5,
                                            elevation: 2,
                                            width: SIZES.responsiveScreenWidth(80),
                                            height: SIZES.responsiveScreenWidth(8.5),


                                        }}

                                        locations={[0, 1,]}
                                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={160}>


                                        <Image
                                            source={icons.delivery}
                                            style={{
                                                width: SIZES.responsiveScreenWidth(5),
                                                height: SIZES.responsiveScreenWidth(5),
                                                tintColor: COLORS.primary
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.7),
                                                fontWeight: '700',
                                                color: COLORS.primary,
                                                marginLeft: 5

                                            }}
                                        > {showStartDirectionToAddress ? `Start direction to delivery` : `Head to customer address`}
                                        </Text>

                                    </LinearGradient>
                                </TouchableOpacity>



                            </View>
                        }

                    />
                </View>
            </View>

        </Wrapper>
    )

}

export default Kitchen