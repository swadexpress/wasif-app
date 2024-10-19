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
                    name={'Wallet'}

                />

                <View style={{
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                    // marginHorizontal:8

                }}>





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



                                    <LinearGradient
                                        style={{

                                            borderRadius: 10,
                                            width: SIZES.responsiveScreenWidth(95),
                                            height: 50,
                                            elevation: 0.7,
                                            marginBottom: 8,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginHorizontal: 5,
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

                                        }}>
                                            <View style={{

                                                width: SIZES.responsiveScreenWidth(10),
                                                height: SIZES.responsiveScreenWidth(10),
                                                borderRadius: 6,
                                                // backgroundColor: item.status == 'Shiping' ? COLORS.primary2 :item.status == 'Delivered'? COLORS.primary4 : COLORS.red2,
                                                backgroundColor: COLORS.lightBlue,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginLeft:5,
                                                elevation:1

                                            }}>


                                                <Image

                                                    style={{
                                                        width: SIZES.responsiveScreenWidth(5.3),
                                                        height: SIZES.responsiveScreenWidth(5.3),
                                                        tintColor: COLORS.primary
                                                    }}
                                                    source={item.image}


                                                />

                                            </View>


                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.5),

                                                fontWeight: '700',
                                                color: COLORS.primary,
                                                marginLeft: 5
                                            }}>
                                                {`${item.name}`}
                                            </Text>



                                        </View>


                                    </LinearGradient>




                                </TouchableOpacity>


                            )}
                        />

                    </>








                </View>





            </View>
        </Wrapper>
    )
}

export default MyAccount;