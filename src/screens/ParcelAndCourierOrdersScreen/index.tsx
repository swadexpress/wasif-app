import {
    FlatList,
    Image,
    StyleSheet,
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
        order_id: '35345',
        parcelStatus: 'Pickup requested',
        date: '10-11-2024',
        address: 'Dhaka Chawkbazar boro katar',
        image: icons.location
    },
    {
        id: 2,
        order_id: '35345',
        parcelStatus: 'Pickup Confirmed',
        date: '10-11-2024',
        address: 'Dhaka Chawkbazar boro katar',
        image: icons.location
    },
    {
        id: 3,
        order_id: '35345',
        parcelStatus: 'Parcel Delivered',
        date: '10-11-2024',
        address: 'Dhaka Chawkbazar boro katar',
        image: icons.check
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
                    name={'Courier Orders'}

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
                            
                            onPress={() => navigation.navigate('ParcelAndCourierOrdersDetailsScreen')}>

                                <LinearGradient
                                    style={{
                                        borderRadius: 5,
                                        elevation: 1,
                                        marginTop: 5
                                    }}

                                    locations={[0, 1,]}
                                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={90}>
                                    <View style={{
                                        marginTop: 12,
                                        marginBottom: 12,
                                        borderRadius: 10,
                                        width: SIZES.width * 0.96,

                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    
                                        flexDirection: 'row',

                                    }}>
                                        <View style={{
                                            borderRadius: 10,
                                            width: '80%',
                                            flexDirection: 'row',
                                            alignItems:'center'


                                        }}>

                                            <Image
                                                source={icons.delivery}
                                                style={{
                                                    width: SIZES.responsiveScreenWidth(7),
                                                    height: SIZES.responsiveScreenWidth(7),

                                                    marginLeft: 10,
                                                    tintColor: COLORS.primary
                                                }}


                                            />
                                            <View style={{

                                            }}>



                                                <Text style={{
                                                    fontSize: SIZES.responsiveScreenFontSize(1.6),
                                                    marginLeft: 4,
                                                    fontWeight: '700',
                                                    color: COLORS.primary,
                                                    flex: 1
                                                }}>
                                                    {item.parcelStatus}

                                                </Text>
                                                <Text style={{
                                                    fontSize: SIZES.responsiveScreenFontSize(1.3),
                                                    marginLeft: 5,
                                                    fontWeight: '500',
                                                    color: COLORS.gray,
                                                    flex: 1
                                                }}>
                                                    {item.address}

                                                </Text>

                                            </View>


                                        </View>



                                        <Image
                                            source={icons.back}
                                            style={{
                                                marginRight: 10,
                                                width: 15,
                                                height: 15,
                                                tintColor: COLORS.primary,
                                                transform: [{ rotate: '180deg' }]
                                            }}




                                        />



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

const styles = StyleSheet.create({

    linearGradientProfileInfoMainContainer: {
        borderRadius: 5,
        elevation: 2,
        marginTop: 15
    },

    linearGradientProfileInfoContainer: {
        marginTop: 8,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center',
        justifyContent: 'space-between',
        width: SIZES.responsiveScreenWidth(96),
    },
    linearGradientProfileInfoLeftSiteContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    linearGradientProfileInfoLeftSiteIcon: {
        width: SIZES.responsiveScreenWidth(5),
        height: SIZES.responsiveScreenWidth(5),
        marginLeft: 8,
        tintColor: COLORS.primary
    },
    linearGradientProfileInfoLeftSiteText: {
        fontSize: SIZES.responsiveScreenFontSize(1.5),
        marginLeft: 4,
        fontWeight: '700',
        color: COLORS.primary,
    },
    linearGradientProfileInfoRightEditButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 6,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: COLORS.primary,
        justifyContent: 'center',
        width: SIZES.responsiveScreenWidth(13),
        height: SIZES.responsiveScreenWidth(5.5),
    },
    linearGradientProfileInfoRightEditButtonText: {
        fontSize: SIZES.responsiveScreenFontSize(1.4),
        marginLeft: 4,
        fontWeight: '700',
        color: COLORS.primary,
    },
    linearGradientProfileInfoBottomText: {
        fontSize: SIZES.responsiveScreenFontSize(1.3),
        fontWeight: '500',
        color: COLORS.gray,
        marginHorizontal: 10,
        marginLeft: SIZES.responsiveScreenWidth(5) + 13,
    },



})

export default UserOrdersScreen;