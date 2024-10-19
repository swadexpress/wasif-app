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
const data = [
    {
        id: 1,
        name: 'Order Cancel',
        dis: 'An online and mobile platform that connects diners with local restaurants. In 2020, Grubhub introduced technology to help restaurants make customer pickup orders more convenient',
        status: 'Cancel',
        order_id: '#03423',
        date: '10-11-2024',
    },
    {
        id: 2,
        name: 'Payment',
        dis: 'An online and mobile platform that connects diners with local restaurants. In 2020, Grubhub introduced technology to help restaurants make customer pickup orders more convenient',
        status: 'Payment',
        order_id: '#03423',
        date: '10-11-2024',
    },
    {
        id: 3,
        name: 'Promotion',
        dis: 'An online and mobile platform that connects diners with local restaurants. In 2020, Grubhub introduced technology to help restaurants make customer pickup orders more convenient!',
        status: 'Promotion',
        order_id: '#03423',
        date: '10-11-2024',
    },
    {
        id: 4,
        name: 'Order Accept',
        dis: 'Order #1234 has benn success',
        status: 'Order Accept',
        order_id: '#03423',
        date: '10-11-2024',
    },
    {
        id: 12,
        name: 'Order Cancel',
        dis: 'An online and mobile platform that connects diners with local restaurants. In 2020, Grubhub introduced technology to help restaurants make customer pickup orders more convenient',
        status: 'Cancel',
        order_id: '#03423',
        date: '10-11-2024',
    },
    {
        id: 22,
        name: 'Payment',
        dis: 'Thanks you! Your transaction is',
        status: 'Payment',
        date: '10-11-2024',
    },
    {
        id: 32,
        name: 'Promotion',
        dis: 'An online and mobile platform that connects diners with local restaurants. In 2020, Grubhub introduced technology to help restaurants make customer pickup orders more convenient',
        status: 'Promotion',
        order_id: '#03423',
        date: '10-11-2024',
    },
    {
        id: 42,
        name: 'Order Accept',
        dis: 'Order #1234 has benn success',
        status: 'Order Accept',
        order_id: '#03423',
        date: '10-11-2024',
    },
    {
        id: 212,
        name: 'Payment',
        dis: 'An online and mobile platform that connects diners with local restaurants. In 2020, Grubhub introduced technology to help restaurants make customer pickup orders more convenient',
        status: 'Payment',
        order_id: '#03423',
        date: '10-11-2024',
    },
    {
        id: 312,
        name: 'Promotion',
        dis: 'An online and mobile platform that connects diners with local restaurants. In 2020, Grubhub introduced technology to help restaurants make customer pickup orders more convenient',
        status: 'Promotion',
        order_id: '#03423',
        date: '10-11-2024',
    },
    {
        id: 421,
        name: 'Order Accept',
        dis: 'Order #1234 has benn success',
        status: 'Order Accept',
        order_id: '#03423',
        date: '10-11-2024',
    },

]
const data2 = [
    {
        id: 1,
        name: 'Order Cancel',
        dis: 'Order #453 has been cancelled',
        status: 'Cancel',
        date: '10-11-2024',
    },
    {
        id: 2,
        name: 'Payment',
        dis: 'Thanks you! Your transaction is',
        status: 'Payment',
        date: '10-11-2024',
    },
    {
        id: 3,
        name: 'Promotion',
        dis: 'Invite friends -Get 1 coupens each!',
        status: 'Promotion',
        date: '10-11-2024',
    },
    {
        id: 4,
        name: 'Order Accept',
        dis: 'Order #1234 has benn success',
        status: 'Order Accept',
        date: '10-11-2024',
    },
    {
        id: 12,
        name: 'Order Cancel',
        dis: 'Order #453 has been cancelled',
        status: 'Cancel',
        date: '10-11-2024',
    },
    {
        id: 22,
        name: 'Payment',
        dis: 'Thanks you! Your transaction is',
        status: 'Payment',
        date: '10-11-2024',
    },
    {
        id: 32,
        name: 'Promotion',
        dis: 'Invite friends -Get 1 coupens each!',
        status: 'Promotion',
        date: '10-11-2024',
    },
    {
        id: 42,
        name: 'Order Accept',
        dis: 'Order #1234 has benn success',
        status: 'Order Accept',
        date: '10-11-2024',
    },
    {
        id: 212,
        name: 'Payment',
        dis: 'Thanks you! Your transaction is',
        status: 'Payment',
        date: '10-11-2024',
    },
    {
        id: 312,
        name: 'Promotion',
        dis: 'Invite friends -Get 1 coupens each!',
        status: 'Promotion',
        date: '10-11-2024',
    },
    {
        id: 421,
        name: 'Order Accept',
        dis: 'Order #1234 has benn success',
        status: 'Order Accept',
        date: '10-11-2024',
    },

]








const MyAccount = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [ratings, setRatings] = useState("");
    const [comment, setComment] = useState("");

    const [showOrdersName, setShowOrdersName] = useState("Notification");


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




   




            <View style={{
                flex:1,
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center'
                // marginHorizontal:8

            }}>




                <View style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: COLORS.primary,
                    borderRadius: 7,

                }}>

                    <TouchableOpacity onPress={() => {
                        setShowOrdersName('Notification')
                    }}>


                        <View style={{
                            flexDirection: 'row',
                            width: 130,
                            height: 28,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                            borderTopRightRadius: showOrdersName == 'Notification' ? 8 : 5,
                            borderBottomRightRadius: showOrdersName == 'Notification' ? 8 : 5,
                            backgroundColor: showOrdersName == 'Notification' ? COLORS.primary : COLORS.white,


                            alignItems: 'center',
                            justifyContent: 'center'

                        }}>
                            <Image

                                source={icons.notification}
                                style={{
                                    width: 18,
                                    height: 18,

                                    tintColor: showOrdersName == 'Notification' ? COLORS.white : COLORS.black,
                                }}

                            />

                            <Text style={{
                                fontSize: 11,
                                fontWeight: '700',
                                marginLeft: 5,
                                color: showOrdersName == 'Notification' ? COLORS.white : COLORS.black,
                            }}>
                                Notification
                            </Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setShowOrdersName('Chat')
                    }}>


                        <View style={{
                            flexDirection: 'row',
                            width: 130,
                            height: 28,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopLeftRadius: showOrdersName == 'Chat' ? 8 : 5,
                            borderBottomLeftRadius: showOrdersName == 'Chat' ? 8 : 5,
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
                            backgroundColor: showOrdersName == 'Chat' ? COLORS.primary : COLORS.white,




                        }}>

                            <Image

                                source={icons.chat}
                                style={{
                                    width: 18,
                                    height: 18,
                                    tintColor: showOrdersName == 'Chat' ? COLORS.white : COLORS.primary,
                                }}

                            />

                            <Text style={{
                                fontSize: 11,
                                marginLeft: 5,
                                fontWeight: '700',
                                color: showOrdersName == 'Chat' ? COLORS.white : COLORS.primary,
                            }}>
                                Chat
                            </Text>

                        </View>
                    </TouchableOpacity>

                </View>





                {showOrdersName == 'Notification' &&

                    <FlatList
                        style={{

                            marginTop: 15

                        }}
                        data={data2}
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

                                                width: 45,
                                                height: 45,
                                                borderRadius: 6,
                                                // backgroundColor: item.name == 'Payment' ? COLORS.primary2 : item.name == 'Order Accept' ? COLORS.primary4 : item.name == 'Promotion' ? COLORS.darkBlue : COLORS.red2,
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
                                                    source={item.name == 'Payment' ? icons.wallet : item.name == 'Order Accept' ? icons.check : item.name == 'Promotion' ? icons.coupon : icons.cross}


                                                />

                                            </View>
                                            <View>


                                                <Text style={{
                                                    fontSize: 15,
                                                    fontWeight: '700',
                                                    color: COLORS.black,
                                                    marginHorizontal: 5
                                                }}>
                                                    {`${item.status}`}
                                                </Text>
                                                <Text style={{
                                                    fontSize: 11,
                                                    fontWeight: '700',
                                                    color: COLORS.gray,
                                                    marginHorizontal: 5,
                                                    fontStyle: 'italic',
                                                    marginTop: 1
                                                }}>
                                                    {`${item.dis}`}
                                                </Text>
                                            </View>

                                        </View>




                                    </View>
                                </View>

                            </TouchableOpacity>


                        )}
                    />

                }



                {showOrdersName == 'Chat' &&

                    <FlatList
                        style={{

                            marginTop: 15

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
                                        marginHorizontal:5,
                                        justifyContent: 'space-between',

                                    }}>



                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',

                                        }}>
                                            <View style={{

                                                width: 45,
                                                height: 45,
                                                borderRadius: 6,
                                                // backgroundColor: item.name == 'Payment' ? COLORS.primary2 : item.name == 'Order Accept' ? COLORS.primary4 : item.name == 'Promotion' ? COLORS.darkBlue : COLORS.red2,
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
                                                    source={icons.chat}


                                                />
                                            </View>
                                            <View>




                                                <Text style={{
                                                    fontSize: 15,
                                                    fontWeight: '700',
                                                    color: COLORS.black,
                                                    marginHorizontal: 5
                                                }}>
                                                    {`${item.order_id}`}
                                                </Text>



                                                <Text style={{
                                                    fontSize: 11,
                                                    fontWeight: '700',
                                                    color: COLORS.gray,
                                                    marginHorizontal: 5,
                                                    fontStyle: 'italic',
                                                    marginTop: 1
                                                }}>
                                                    {`${item.dis.slice(0,40)}...`}
                                                </Text>
                                            </View>

                                        </View>






                                        <View style={{

                                            width: 50,
                                            height: 22,
                                            borderRadius: 6,
                                            // backgroundColor: item.name == 'Payment' ? COLORS.primary2 : item.name == 'Order Accept' ? COLORS.primary4 : item.name == 'Promotion' ? COLORS.darkBlue : COLORS.red2,
                                            backgroundColor: COLORS.primary,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{
                                                fontSize: 11,
                                                fontWeight: '700',
                                                color: COLORS.gray,
                                                marginHorizontal: 5,
                                                fontStyle: 'italic',
                                                marginTop: 1
                                            }}>
                                                {`10 Jun`}
                                            </Text>
                                        </View>






                                    </View>



                                </View>

                            </TouchableOpacity>


                        )}
                    />

                }


            </View>



        </View>
    )
}

export default MyAccount;