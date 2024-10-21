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
        order_id: '35345',
        status: 'Shiping',
        date: '10-11-2024',
        items: [
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

    },

    {
        id: 3,
        order_id: '35345',
        status: 'Cancel',
        date: '10-11-2024',
        items: [
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
    },
    {
        id: 6,
        order_id: '35345',
        status: 'Shiping',
        date: '10-11-2024',
        items: [
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
    },
    {
        id: 4,
        order_id: '35345',
        status: 'Delivered',
        date: '10-11-2024',
        items: [
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
    },
    {
        id: 5,
        order_id: '35345',
        status: 'Cancel',
        date: '10-11-2024',
        items: [
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
    },
    {
        id: 7,
        order_id: '35345',
        status: 'Shiping',
        date: '10-11-2024',
        items: [
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
    },


]

const UserOrdersScreen = () => {
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
                    // backgroundColor: COLORS.white
                }}
            >
                <SingleImageHeader
                    name={'All Orders'}

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
                        renderItem={({ item, index }) => (

                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => navigation.navigate('UserOrdersDetailsScreen')}>


                                <LinearGradient
                                    style={{
                                        borderRadius: 5,
                                        elevation: 1,

                                        marginBottom: 1,

                                        marginTop: 15,

                                        width: SIZES.responsiveScreenWidth(97),
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }}

                                    locations={[0, 0.6,1]}
                                    colors={[COLORS.lightBlue,COLORS.lightRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={260}>


                                    <View style={{
                                        borderRadius: 10,
                                        width: SIZES.responsiveScreenWidth(97),
                                        marginTop: 4,
                                        marginBottom: 10,
                                        justifyContent: 'center'

                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginHorizontal: 5,
                                            justifyContent: 'space-between',
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',

                                            }}>

                                                <LinearGradient
                                                    style={{
                                                        borderRadius: 3,
                                                        elevation: 1,
                                                        width: 28,
                                                        height: 28,
                                                        backgroundColor: COLORS.primary,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}

                                                    locations={[0, 1,]}
                                                    colors={[COLORS.lightBlue, COLORS.lightRed,]}
                                                    useAngle={true}
                                                    angle={190}>



                                                    <Image

                                                        style={{
                                                            width: 16,
                                                            height: 16,
                                                            tintColor: COLORS.primary


                                                        }}
                                                        source={icons.cart}


                                                    />


                                                </LinearGradient>



                                                <View>


                                                    <Text style={{
                                                        fontSize: 14,
                                                        fontWeight: '700',
                                                        color: COLORS.black,
                                                        marginHorizontal: 5
                                                    }}>
                                                        {`${'Khan Express'}`}
                                                    </Text>

                                                </View>

                                            </View>

                                            <View style={{
                                                width: 80,
                                                height: 28,
                                                borderRadius: 100,
                                                alignItems: 'center',
                                                justifyContent: 'center',

                                            }}>

                                                <Text style={{
                                                    fontSize: 11,
                                                    fontWeight: '700',
                                                    color: COLORS.primary,
                                                }}>
                                                    Packed
                                                </Text>

                                            </View>

                                        </View>
                                    </View>

                                    {item.items.map((v, index) => {
                                        return (
                                            <ProductItem
                                                key={index} item={v}

                                                
                                                onPress={() => {
                                                    navigation.navigate('UserOrdersDetailsScreen')
                                                }}
                                            />
                                        )
                                    })}

                                    <View style={{
                                        borderRadius: 10,
                                        width: SIZES.responsiveScreenWidth(95),
                                        marginTop: 4,
                                        marginBottom: 10,
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-end',


                                    }}>


                                        <View style={{

                                            borderRadius: 100,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            marginRight: 8,
                                            marginTop:4

                                        }}>

                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.2),
                                                fontWeight: '500',
                                                color: COLORS.primary,
                                            }}>
                                                {`Total(${4}) items:`}
                                            </Text>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.3),
                                                fontWeight: '800',
                                                color: COLORS.primary,
                                                marginLeft: 5
                                            }}>
                                                ৳ 900
                                            </Text>

                                        </View>







                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            marginTop: 10,
                                            marginRight: 7

                                        }}>





                                            <View style={{
                                                width: SIZES.responsiveScreenWidth(18),
                                                height: 19,
                                                borderRadius: 5,
                                                borderWidth: 0.4,
                                                borderColor: COLORS.red,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: SIZES.responsiveScreenFontSize(1.2),
                                                    fontWeight: '600',
                                                    color: COLORS.red,
                                                }}>
                                                    Cancel
                                                </Text>
                                            </View>
                                            <View style={{
                                                width: SIZES.responsiveScreenWidth(18),
                                                marginLeft: 10,
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
                                                    color: COLORS.black,
                                                }}>
                                                    Buy again
                                                </Text>
                                            </View>

                                        </View>

                                    </View>



                                </LinearGradient>

                            </TouchableOpacity>

                        )}

                        ListFooterComponent={<>
                            <View style={{

                                marginBottom: 150
                            }} />


                        </>}

                    />
                </View>



            </View>
        </Wrapper>
    )
}

export default UserOrdersScreen;