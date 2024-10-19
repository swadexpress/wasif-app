import { COLORS, SIZES, icons, images } from '../../constants';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

import Header2 from '../../components/Header2'
import IconButton from '../../components/IconButton'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SingleImageHeader from '../../components/SingleImageHeader';
import LinearGradient from 'react-native-linear-gradient';
import DeliveryStatus from './DeliveryStatus';
import Wrapper from '../../components/Wrapper';
import ProductItem from '../../components/ProductItem';
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

    const { navigate } = useNavigation();

    const navigation = useNavigation()





    return (

        <Wrapper>
            <View
                style={{
                    flex: 1,

                }}
            >
                <SingleImageHeader
                    name={'Delivery Details'}

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


                                    }}>
                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
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
                                                    Packed by Seller

                                                </Text>
                                                <Text style={{
                                                    fontSize: 10,

                                                    fontWeight: '500',
                                                    color: COLORS.primary,
                                                    marginTop: 7
                                                }}>
                                                    Esimated delivery date is

                                                </Text>
                                                <Text style={{
                                                    fontSize: 15,
                                                    marginTop: 3,

                                                    fontWeight: '800',
                                                    color: COLORS.primary,
                                                }}>
                                                    10-10-2024                                        </Text>


                                            </View>

                                            <Image
                                                source={icons.discount}
                                                style={{
                                                    marginRight: 10,
                                                    width: 50,
                                                    height: 50,
                                                    tintColor: COLORS.primary
                                                }}




                                            />

                                        </View>

                                        <View style={{

                                            width: '100%',
                                            height: 1,
                                            backgroundColor: COLORS.white
                                        }}
                                        />


                                        <Text style={{
                                            fontSize: 10,

                                            fontWeight: '500',
                                            color: COLORS.primary,
                                            marginTop: 8,
                                            marginBottom: 10
                                        }}>
                                            Shipped by Local Standard Delivery Service

                                        </Text>
                                    </View>

                                </LinearGradient>




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
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        // justifyContent:'center',

                                        width: SIZES.width * 0.96,

                                    }}>

                                        <Image
                                            source={icons.delivery}
                                            style={{
                                                width: 17,
                                                height: 17,
                                                marginLeft: 8,

                                                tintColor: COLORS.primary
                                            }}




                                        />

                                        <Text style={{
                                            fontSize: 11,
                                            marginLeft: 4,
                                            fontWeight: '700',
                                            color: COLORS.primary,

                                        }}>
                                            {`Receiver: Kawsar Khan`}

                                        </Text>


                                    </View>
                                    <Text style={{
                                        fontSize: 10,
                                        fontWeight: '500',
                                        color: COLORS.gray,
                                        marginBottom: 8,
                                        marginTop: 2, marginHorizontal: 20
                                    }}>
                                        Kazi office-2d floor, Kalkini, Madaripur, Dhaka, Bangladesh
                                    </Text>


                                </LinearGradient>

                                <DeliveryStatus />




                            </View>
                        }
                        renderItem={({ item, index }) => (
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <ProductItem key={index} item={item} />
                            </View>

                        )}

                        ListFooterComponent={

                            <View style={{
                                alignItems: 'center'
                            }}>
                                <View style={{

                                    marginBottom: 90
                                }} />
                            </View>}

                    />
                </View>



            </View>
        </Wrapper>
    )
}

export default MyAccount;