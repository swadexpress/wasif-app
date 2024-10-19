import { COLORS, SIZES, icons } from '../../constants';
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
import OrderItems from './OrderItems';
import RiderInformation from './RiderInformation';
import SingleImageHeader from '../../components/SingleImageHeader';
const data = [
    {
        id: 1,
        price: '235.0',
        order_id: '35345',
        status: 'Shiping',
        date: '10-11-2024',
        items: 4,

    },
    {
        id: 2,
        price: '235.0',
        order_id: '35345',
        status: 'Delivered',
        date: '10-11-2024',
        items: 4
    },
    {
        id: 3,
        price: '235.0',
        order_id: '35345',
        status: 'Cancel',
        date: '10-11-2024',
        items: 4
    },
    {
        id: 6,
        price: '235.0',
        order_id: '35345',
        status: 'Shiping',
        date: '10-11-2024',
        items: 4
    },
    {
        id: 4,
        price: '235.0',
        order_id: '35345',
        status: 'Delivered',
        date: '10-11-2024',
        items: 4
    },
    {
        id: 5,
        price: '235.0',
        order_id: '35345',
        status: 'Cancel',
        date: '10-11-2024',
        items: 4
    },
    {
        id: 7,
        price: '235.0',
        order_id: '35345',
        status: 'Shiping',
        date: '10-11-2024',
        items: 4
    },
    {
        id: 8,
        price: '235.0',
        order_id: '35345',
        status: 'Delivered',
        date: '10-11-2024',
        items: 4
    },
    {
        id: 9,
        price: '235.0',
        order_id: '35345',
        status: 'Cancel',
        date: '10-11-2024',
        items: 4
    },

    {
        id: 11,
        price: '235.0',
        order_id: '35345',
        status: 'Delivered',
        date: '10-11-2024',
        items: 4
    },
    {
        id: 12,
        price: '235.0',
        order_id: '35345',
        status: 'Cancel',
        date: '10-11-2024',
        items: 4
    },

]

const MyAccount = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [ratings, setRatings] = useState("");
    const [comment, setComment] = useState("");
    const [showOrdersName, setShowOrdersName] = useState("Order Items");

    const [selectedShowDetails, setSelectedShowDetails] = useState('All Product');

    const { navigate } = useNavigation();

    const navigation = useNavigation()





    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >

            <SingleImageHeader
                name={'Check Out'}

            />

            <View style={{
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center'
                // marginHorizontal:8

            }}>

                <View style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.primary,
                    borderRadius: 7,

                }}>

                    <TouchableOpacity onPress={() => {
                        setShowOrdersName('Chat')
                    }}>


                        <View style={{
                            flexDirection: 'row',
                            width: 80,
                            height: 28,
                            borderRadius: 5,
                            backgroundColor: showOrdersName == 'Chat' ? COLORS.white : COLORS.primary,


                            alignItems: 'center',
                            justifyContent: 'center'

                        }}>
                            <Image

                                source={icons.chat}
                                style={{
                                    width: 18,
                                    height: 18,

                                    tintColor: showOrdersName == 'Chat' ? COLORS.primary : COLORS.white,
                                }}

                            />

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {

                        setShowOrdersName('Order Items')
                    }}>


                        <View style={{
                            flexDirection: 'row',
                            width: 80,
                            height: 28,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,

                            marginLeft: 2,
                            backgroundColor: showOrdersName == 'Order Items' ? COLORS.white : COLORS.primary,




                        }}>

                            <Image

                                source={icons.cart}
                                style={{
                                    width: 19,
                                    height: 19,
                                    tintColor: showOrdersName == 'Order Items' ? COLORS.primary : COLORS.white,
                                }}

                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setShowOrdersName('Map')
                    }}>


                        <View style={{
                            flexDirection: 'row',
                            width: 80,
                            height: 28,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            marginLeft: 2,
                            backgroundColor: showOrdersName == 'Map' ? COLORS.white : COLORS.primary,

                        }}>

                            <Image

                                source={icons.delivery}
                                style={{
                                    width: 15,
                                    height: 15,
                                    tintColor: showOrdersName == 'Map' ? COLORS.primary : COLORS.white,
                                }}

                            />
                        </View>
                    </TouchableOpacity>





                </View>


                {showOrdersName == 'Order Items' &&
                    <OrderItems />

                }


                {showOrdersName == 'Chat' &&

                    <FlatList
                        style={{
                            marginTop: 20
                        }}
                        data={data}
                        keyExtractor={item => `${item.id}`}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity
                                activeOpacity={0.9}>
                                <View style={{
                                    backgroundColor: COLORS.lightGray2,
                                    borderRadius: 10,

                                    width: SIZES.width * 0.95,
                                    height: 56,
                                    elevation: 0.4,
                                    marginBottom: 8,
                                    justifyContent: 'center'

                                }}>



                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginHorizontal: 5,
                                        backgroundColor: COLORS.lightGray2,

                                        justifyContent: 'space-between',



                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',

                                        }}>
                                            <View style={{

                                                width: 43,
                                                height: 43,
                                                borderRadius: 6,
                                                // backgroundColor: item.status == 'Shiping' ? COLORS.primary2 :item.status == 'Delivered'? COLORS.primary4 : COLORS.red2,
                                                backgroundColor: COLORS.primary,
                                                alignItems: 'center',
                                                justifyContent: 'center'

                                            }}>


                                                <Image

                                                    style={{
                                                        width: 25,
                                                        height: 25,
                                                        tintColor: COLORS.white


                                                    }}
                                                    source={icons.delivery}


                                                />

                                            </View>
                                            <View>


                                                <Text style={{
                                                    fontSize: 14,
                                                    fontWeight: '700',
                                                    color: COLORS.black,
                                                    marginHorizontal: 5
                                                }}>
                                                    {`${item.order_id}`}
                                                </Text>
                                                <Text style={{
                                                    fontSize: 10,
                                                    fontWeight: '700',
                                                    color: COLORS.gray,
                                                    marginHorizontal: 5,
                                                    fontStyle: 'italic',
                                                    marginTop: 1
                                                }}>
                                                    {`${item.date}    *${item.items} items`}
                                                </Text>
                                            </View>

                                        </View>

                                        <View style={{
                                            flexDirection: 'row',

                                            width: 80,
                                            height: 28,
                                            borderRadius: 100,
                                            backgroundColor: COLORS.primary,
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}>

                                            <Image

                                                source={icons.dollar}
                                                style={{
                                                    width: 11,
                                                    height: 11,
                                                    tintColor: COLORS.white

                                                }}

                                            />

                                            <Text style={{
                                                fontSize: 11,
                                                fontWeight: '700',
                                                color: COLORS.white,
                                            }}>
                                                {item.price}
                                            </Text>

                                        </View>



                                    </View>
                                </View>

                            </TouchableOpacity>


                        )}
                    />
                }





            </View>


            {showOrdersName == 'Map' &&
                <>


                    <RiderInformation />
                </>


            }


        </View>
    )
}

export default MyAccount;