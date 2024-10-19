import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
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
        <Wrapper>
            <View
                style={{
                    flex: 1,
                    // backgroundColor: COLORS.white
                }}
            >



                <SingleImageHeader
                    name={'Notification'}

                />


                <View style={{
                    flex: 1,

                    alignItems: 'center',
                    justifyContent: 'center',
                 
                }}>



                        <FlatList
                            style={{
                                marginTop: 10

                            }}
                            data={data2}
                            keyExtractor={item => `${item.id}`}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => (

                                <TouchableOpacity
                                    activeOpacity={0.9}>

                                    <LinearGradient
                                        style={{
                                            backgroundColor: COLORS.darkRed,
                                            borderRadius: 5,

                                            width: SIZES.responsiveScreenWidth(95),
                                            height: SIZES.responsiveScreenWidth(12),
                                            elevation: 1,
                                            marginBottom: 7,
                                            marginTop:1,
                                            justifyContent: 'center'
                                        }}

                                        locations={[0, 1,]}
                                        colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={10}>



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
                                                <View style={{

                                                    width: SIZES.responsiveScreenWidth(9),
                                                    height: SIZES.responsiveScreenWidth(9),
                                                    borderRadius: 6,
                                                    // backgroundColor: item.name == 'Payment' ? COLORS.primary2 : item.name == 'Order Accept' ? COLORS.primary4 : item.name == 'Promotion' ? COLORS.darkBlue : COLORS.red2,
                                                    backgroundColor: COLORS.darkRed,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    elevation:2,
                                                   

                                                }}>


                                                    <Image

                                                        style={{
                                                            width: SIZES.responsiveScreenWidth(5.5),
                                                            height: SIZES.responsiveScreenWidth(5.5),
                                                            tintColor: COLORS.primary


                                                        }}
                                                        source={item.name == 'Payment' ? icons.wallet : item.name == 'Order Accept' ? icons.check : item.name == 'Promotion' ? icons.coupon : icons.cross}


                                                    />

                                                </View>
                                                <View style ={{
                                                    marginLeft:3
                                                }}>


                                                    <Text style={{
                                                        fontSize: SIZES.responsiveScreenFontSize(1.6),
                                                        fontWeight: '700',
                                                        color: COLORS.black,
                                                        marginHorizontal: 5
                                                    }}>
                                                        {`${item.status}`}
                                                    </Text>
                                                    <Text style={{
                                                        fontSize: SIZES.responsiveScreenFontSize(1.3),
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
                                    </LinearGradient>


                                </TouchableOpacity>


                            )}

                            ListFooterComponent={<View style={{
                                marginBottom: 70
                            }} />}
                        />

                   


            

                </View>



            </View>
        </Wrapper>
    )
}

export default MyAccount;