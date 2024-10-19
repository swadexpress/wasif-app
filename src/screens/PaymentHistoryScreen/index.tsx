import { COLORS, SIZES, icons } from '../../constants';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import LinearGradient from 'react-native-linear-gradient';
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
                    name={'Payment History'}

                />

                <View style={{
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                    // marginHorizontal:8

                }}>


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

                                <LinearGradient
                                    style={{


                                        borderRadius: 10,

                                        width: SIZES.responsiveScreenWidth(96),
                                        height: 60,
                                        elevation: 1,
                                        marginBottom: 8,

                                        flexDirection: 'row',
                                        alignItems: 'center',


                                        justifyContent: 'space-between',


                                    }}

                                    locations={[0, 1]}
                                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={190}>



                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginLeft: 4

                                    }}>
                                        <View style={{

                                            width: SIZES.responsiveScreenWidth(11),
                                            height: SIZES.responsiveScreenWidth(11.3),
                                            borderRadius: 6,
                                            // backgroundColor: item.status == 'Shiping' ? COLORS.primary2 :item.status == 'Delivered'? COLORS.primary4 : COLORS.red2,
                                            backgroundColor: COLORS.lightBlue,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            elevation:1

                                        }}>


                                            <Image

                                                style={{
                                                    width: SIZES.responsiveScreenWidth(5.5),
                                                    height: SIZES.responsiveScreenWidth(5.5),
                                                    tintColor: COLORS.primary
                                                }}
                                                source={item.name == 'Cash out' ? icons.cash_out : item.name == 'Collection' ? icons.restaurant : item.name == 'Payout' ? icons.wallet : icons.wallet}


                                            />

                                        </View>
                                        <View style={{
                                            marginLeft: 6
                                        }}>


                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                                marginTop: -4,
                                                fontWeight: '700',
                                                color: COLORS.black,
                                            }}>
                                                {`${item.name}`}
                                            </Text>

                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                // justifyContent: 'center',
                                                marginTop: 2


                                            }}>
                                                <Image

                                                    source={icons.transaction}

                                                    style={{
                                                        width: SIZES.responsiveScreenWidth(2.5),
                                                        height: SIZES.responsiveScreenWidth(2.5),
                                                        tintColor: COLORS.gray
                                                    }}


                                                />
                                                <Text style={{
                                                    fontSize: SIZES.responsiveScreenFontSize(1.05),

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
                                                marginTop: 3,
                                                


                                            }}>
                                                <Image

                                                    source={icons.calendar}

                                                    style={{
                                                        width: SIZES.responsiveScreenWidth(2.8),
                                                        height: SIZES.responsiveScreenWidth(2.8),
                                                        tintColor: COLORS.gray
                                                    }}


                                                />
                                                <Text style={{
                                                    fontSize: SIZES.responsiveScreenFontSize(1.05),
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
                                        marginRight:6,

                                        width: SIZES.responsiveScreenWidth(15),
                                        height: 24,
                                        borderRadius: 4,
                                        borderColor: COLORS.primary,
                                        // backgroundColor: COLORS.primary,
                                        borderWidth:0.5,
                                        alignItems: 'center',
                                        justifyContent: 'center'

                                    }}>

                                        {/* <Image

                                            source={icons.dollar}
                                            style={{
                                                width: 11,
                                                height: 11,
                                                tintColor: COLORS.white

                                            }}

                                        /> */}

                                        <Text style={{
                                            fontSize: SIZES.responsiveScreenFontSize(1.2),
                                            fontWeight: '700',
                                            color: COLORS.primary,
                                        }}>
                                            {`৳ ${item.price}`}
                                        </Text>

                                    </View>





                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                    />

                </View>





            </View>
        </Wrapper>
    )
}

export default MyAccount;