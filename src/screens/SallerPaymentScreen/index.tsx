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
import PaymentTransaction from './PaymentTransaction';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
const data = [
    {
        id: 1,
        name: 'Cash out',
        price: '235.0',
        pymentMethod: 'Agent',
        date: '10-11-2024',
    },
    {
        id: 2,
        name: 'Collection',
        price: '235.0',
        pymentMethod: '#35345',
        date: '10-11-2024',
    },
    {
        id: 3,
        name: 'Payout',
        price: '235.0',
        pymentMethod: '#35345',
        date: '10-11-2024',
    },
    {
        id: 4,
        name: 'Cash out',
        price: '235.0',
        pymentMethod: '#35345',
        date: '10-11-2024',
    },

]
const paymentMethodData = [
    {
        id: 1,
        name: 'Agent',
        image: icons.cash_out,
        price: '235.0',
        pymentMethod: 'Agent',
        date: '10-11-2024',
    },
    {
        id: 2,
        name: 'Payout',
        image: icons.cash_out,


        price: '235.0',
        pymentMethod: '#35345',
        date: '10-11-2024',
    },
    {
        id: 3,
        name: 'Nagad',
        image: icons.cash_out,
        price: '235.0',
        pymentMethod: '#35345',
        date: '10-11-2024',
    },
    {
        id: 4,
        name: 'Bkash',
        image: icons.cash_out,
        price: '235.0',
        pymentMethod: '#35345',
        date: '10-11-2024',
    },
    {
        id: 5,
        name: 'Roket',
        image: icons.cash_out,
        price: '235.0',
        pymentMethod: '#35345',
        date: '10-11-2024',
    },

]

const MyAccount = () => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [ratings, setRatings] = useState("");
    const [comment, setComment] = useState("");
    const [showOrdersName, setShowOrdersName] = useState("Withdraw");

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
                            setShowOrdersName('Payment Transaction')
                        }}>


                            <View style={{
                                flexDirection: 'row',
                                width: 80,
                                height: 28,
                                borderRadius: 5,
                                backgroundColor: showOrdersName == 'Payment Transaction' ? COLORS.white : COLORS.primary,


                                alignItems: 'center',
                                justifyContent: 'center'

                            }}>
                                <Image

                                    source={icons.transaction}
                                    style={{
                                        width: 18,
                                        height: 18,

                                        tintColor: showOrdersName == 'Payment Transaction' ? COLORS.primary : COLORS.white,
                                    }}

                                />

                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {

                            setShowOrdersName('Withdraw')
                        }}>


                            <View style={{
                                flexDirection: 'row',
                                width: 80,
                                height: 28,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5,
                                marginLeft: 2,
                                backgroundColor: showOrdersName == 'Withdraw' ? COLORS.white : COLORS.primary,
                            }}>

                                <Image

                                    source={icons.cash_out}
                                    style={{
                                        width: 21,
                                        height: 21,
                                        tintColor: showOrdersName == 'Withdraw' ? COLORS.primary : COLORS.white,
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







                    {showOrdersName == 'Withdraw' &&

                        <>
                            <View style={{

                                width: 120,
                                height: 28,
                                borderRadius: 6,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 15

                            }}>

                                {/* <Text style={{
                                fontSize: 9,
                                fontWeight: '500',
                                color: COLORS.white,
                                
                            }}>Current blance</Text> */}


                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    // marginTop: 2,
                                }}>


                                    <Image
                                        style={{
                                            width: 13,
                                            height: 13,
                                            tintColor: COLORS.white
                                        }}
                                        source={icons.dollar}
                                    />
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: '700',
                                        color: COLORS.white,
                                        // marginBottom:2
                                    }}>4344</Text>

                                </View>
                            </View>

                            <FlatList
                                style={{
                                    marginTop: 20
                                }}
                                data={paymentMethodData}
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
                                            height: 50,
                                            elevation: 0.7,
                                            marginBottom: 8,
                                            justifyContent: 'center',


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

                                                        width: 40,
                                                        height: 40,
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
                                                            source={item.image}


                                                        />

                                                    </View>


                                                    <Text style={{
                                                        fontSize: 14,

                                                        fontWeight: '700',
                                                        color: COLORS.black,
                                                        marginLeft: 5
                                                    }}>
                                                        {`${item.name}`}
                                                    </Text>



                                                </View>

                                            </View>
                                        </View>

                                    </TouchableOpacity>


                                )}
                            />

                        </>


                    }


                    {showOrdersName == 'Payment Transaction' &&

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
                                        height: 60,
                                        elevation: 0.7,
                                        marginBottom: 8,
                                        justifyContent: 'center',


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

                                                    width: 50,
                                                    height: 55,
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
                                                        source={item.name == 'Cash out' ? icons.cash_out : item.name == 'Collection' ? icons.restaurant : item.name == 'Payout' ? icons.wallet : icons.wallet}


                                                    />

                                                </View>
                                                <View style={{
                                                    marginLeft: 6
                                                }}>


                                                    <Text style={{
                                                        fontSize: 14,
                                                        marginTop: -2.5,
                                                        fontWeight: '700',
                                                        color: COLORS.black,
                                                    }}>
                                                        {`${item.name}`}
                                                    </Text>

                                                    <View style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        // justifyContent: 'center',
                                                        marginTop: 3


                                                    }}>
                                                        <Image

                                                            source={icons.transaction}

                                                            style={{
                                                                width: 13,
                                                                height: 13,
                                                                tintColor: COLORS.gray
                                                            }}


                                                        />
                                                        <Text style={{
                                                            fontSize: 10,
                                                            fontWeight: '700',
                                                            color: COLORS.gray,
                                                            marginHorizontal: 3,
                                                            fontStyle: 'italic',

                                                        }}>
                                                            {`${item.pymentMethod}`}
                                                        </Text>
                                                    </View>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        // justifyContent: 'center',
                                                        marginTop: 3


                                                    }}>
                                                        <Image

                                                            source={icons.calendar}

                                                            style={{
                                                                width: 13,
                                                                height: 13,
                                                                tintColor: COLORS.gray
                                                            }}


                                                        />
                                                        <Text style={{
                                                            fontSize: 10,
                                                            fontWeight: '700',
                                                            color: COLORS.gray,
                                                            marginHorizontal: 2,
                                                            fontStyle: 'italic',

                                                        }}>
                                                            {`${item.date}`}
                                                        </Text>
                                                    </View>
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





            </View>
        </Wrapper>
    )
}

export default MyAccount;