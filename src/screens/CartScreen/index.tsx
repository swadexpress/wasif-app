import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS, SIZES, icons, images } from '../../constants';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { SwipeListView } from 'react-native-swipe-list-view';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';


const data = [
    {
        id: 1,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        qty: 2,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Bikini Set 1 Set Pink Colour / Bikini Bra Pantie Set For Girls And Women / Swim Bikini Dress For Ladies',
        image: 'https://img.drz.lazcdn.com/static/bd/p/c510f4d4df5881aea3567d70a50eab72.jpg_720x720q80.jpg',
    },
    {
        id: 2,
        profile_name: 'Kawsar Khan',
        qty: 2,
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: '2024 Sexy Lace-up White Pearl Micro Mini Bikini Set in Pink        ',
        image: 'https://www.dhresource.com/webp/m/0x0/f2/albu/g20/M00/16/67/rBVaqWGF1nqAXVJiAAhzd03Yg7s448.jpg',
    },
    {
        id: 3,
        profile_name: 'Kawsar Khan',
        qty: 2,
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',

        name: "GHXCJ Women's Tie Knot Front Spaghetti Strap High Cut Bikini Set Swimsuit",
        image: 'https://m.media-amazon.com/images/I/81wmcUGVt5L.jpg',
    },



]





const MyCart = ({ }) => {
    const [myCartList, setMyCartList] = useState<any>()
    const [shouldUpdate, setShouldUpdate] = useState<any>(true)

    const loadProductData = async () => {
        let cartProducts = JSON.parse(await AsyncStorage.getItem('@cartProducts')) || []
        console.log(cartProducts)
        setMyCartList(cartProducts)
        console.log(route.name, 'route')

    }
    const route = useRoute()


    const navigation = useNavigation<any>()


    const updateQuantityHandler = (newQty: number, id: number) => {
        const newMyCartList = myCartList.map(cl => (
            cl.id === id ? { ...cl, qty: newQty } : cl
        ))
        setMyCartList(newMyCartList)


    }

    const removeMyCartHandler = (id: number) => {
        let newMyCartList = [...myCartList]
        const index = newMyCartList.findIndex(cart => cart.id === id)
        newMyCartList.splice(index, 1)
        setMyCartList(newMyCartList)

    }



    useEffect(() => {
        loadProductData()
        let times = new Date()
        // setShouldUpdate(times)
    }, [])

    console.log(shouldUpdate, 'shouldUpdate')



    return (

        <Wrapper>
            <View
                style={{
                    flex: 1,
                }}
            >

                <SingleImageHeader
                    name={'Cart'}

                />


                <SwipeListView
                    data={myCartList}
                    key={(item: any) => `${item.id}`}
                    contentContainerStyle=
                    {styles.swipeListContainer}

                    disableRightSwipe={true}
                    renderItem={({ item, index }: any) => (
                        <>
                            <TouchableOpacity

                                onPress={() =>
                                    navigation.navigate('FoodDetailsScreen')

                                }
                                activeOpacity={0.9}>



                                <LinearGradient
                                    style={
                                        styles.linearGradientContainer
                                    }

                                    locations={[0, 1,]}
                                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={90}>

                                    <View style={

                                        styles.linearGradientCardMainContainer
                                    }>
                                        <FastImage

                                            style={styles.linearGradientCardImage}
                                            source={{ uri: item.product_image }}
                                            resizeMode={'cover'}

                                        />
                                        <View style={{
                                            marginLeft: 8
                                        }}>




                                            <Text style={styles.linearGradientCardLeftText}>
                                                {`${item?.product_name.slice(0, 25)}...`}
                                            </Text>



                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.8),
                                                fontWeight: '800',
                                                color: COLORS.red2,
                                                alignSelf: 'flex-start',
                                                marginTop: 5,
                                                marginBottom: 5
                                            }

                                            }>
                                                {item.product_price}
                                            </Text>














                                            {/* ======== cart update============ */}

                                            <View style={

                                                styles.leftSiteCartUpdateMainContainer
                                            }>

                                                <TouchableOpacity
                                                    onPress={() => {
                                                        if (item.qty > 1) {
                                                            updateQuantityHandler(item.qty - 1, item.id)
                                                        }

                                                    }}


                                                    style={

                                                        [
                                                            styles.leftSiteCartUpdateButtonContainer,
                                                            {
                                                                backgroundColor: item.qty > 1 ? COLORS.darkRed : COLORS.lightGray1,

                                                            }
                                                        ]
                                                    }>


                                                    <Image
                                                        source={icons.minus}
                                                        style={

                                                            [styles.leftSiteCartUpdateButtonIcon,
                                                            {
                                                                tintColor: item.qty > 1 ? COLORS.red2 : COLORS.white,

                                                            }
                                                            ]
                                                        }
                                                    />

                                                </TouchableOpacity>

                                                <Text style={styles.leftSiteCartUpdateButtonText}>
                                                    {item.qty}
                                                </Text>

                                                <TouchableOpacity

                                                    onPress={() => {
                                                        updateQuantityHandler(item.qty + 1, item.id)
                                                    }}
                                                    style={styles.leftSiteCartUpdateButtonContainer}>


                                                    <Image
                                                        source={icons.plus}
                                                        style={

                                                            styles.leftSiteCartUpdateButtonIcon

                                                        }
                                                    />

                                                </TouchableOpacity>


                                            </View>




                                        </View>

                                    </View>

                                </LinearGradient>



                            </TouchableOpacity>


                        </>
                    )}

                    renderHiddenItem={(data, rowMap) => (
                        <View style={
                            styles.hiddenItemMainContainer


                        }>


                            <TouchableOpacity

                                activeOpacity={0.9}
                                style={
                                    styles.hiddenItemButtonContainer
                                }
                                onPress={async () => {
                                    await AsyncStorage.removeItem('@cartProducts');

                                    removeMyCartHandler(data.item.id)
                                }}

                            >
                                <Image
                                    source={icons.delete_icon}
                                    style={
                                        styles.hiddenItemButtonIcon


                                    } />

                            </TouchableOpacity>
                        </View>

                    )}
                    ListFooterComponent={() => (





                        <View style={styles.listFooterMainContainer}>

                            {/* Shipping Fee */}


                            <View
                                style={

                                    styles.listFooterTotalAmountContainer

                                }

                            >
                                {/* <Text
                                    style={styles.listFooterTotalAmountText}
                                >
                                    Total Amount
                                </Text>


                                <Text
                                    style={{
                                        color: COLORS.red2,
                                        fontSize: SIZES.responsiveScreenFontSize(1.8),
                                        fontWeight: '800'
                                    }}
                                >
                                    {'৳ 400'}

                                </Text> */}

                            </View>




                            <TouchableOpacity

                                style={{
                                    marginTop: 20,
                                    marginBottom: 10,
                                }}

                                onPress={() => navigation.navigate('CardScreen')}


                                activeOpacity={0.9}>

                                <LinearGradient
                                    style={styles.linearGradientButton}

                                    locations={[0, 1,]}
                                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={90}>

                                    <Text style={styles.linearGradientButtonText}>
                                        Continue
                                    </Text>

                                </LinearGradient>


                            </TouchableOpacity>





                        </View>









                    )}


                    leftOpenValue={75}
                    rightOpenValue={-75}
                />





            </View>
        </Wrapper>
    )
}






const styles = StyleSheet.create({
    swipeListContainer: {
        marginHorizontal: 8,
        marginTop: 15
    },


    linearGradientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        height: SIZES.responsiveScreenWidth(26),
        elevation: 1,
        borderRadius: 8,
        marginTop: 10

    },
    linearGradientCardMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },


    linearGradientCardImage: {
        width: SIZES.responsiveScreenWidth(25),
        height: SIZES.responsiveScreenWidth(26),
        borderRadius: 8

    },
    linearGradientCardLeftTextContainer: {
        // alignItems: 'center',

    },
    linearGradientCardLeftText: {
        fontSize: SIZES.responsiveScreenFontSize(1.6),
        fontWeight: '700',
        color: COLORS.black,
    },

    linearGradientCardLeftDeliveryStatusMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7

    },
    linearGradientCardLeftDeliveryStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    linearGradientCardLeftDeliveryStatusIcons: {
        width: SIZES.responsiveScreenWidth(3.4),
        height: SIZES.responsiveScreenWidth(3.4),
        tintColor: COLORS.primary
    },
    linearGradientCardLeftDeliveryStatusText: {
        fontSize: SIZES.responsiveScreenFontSize(1.2),
        fontWeight: '800',
        color: COLORS.black,
        marginLeft: 3
    },

    linearGradientCardLeftDeliveryStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    linearGradientCardLeftDeliveryStarIcons: {
        width: SIZES.responsiveScreenWidth(2.4),
        height: SIZES.responsiveScreenWidth(2.4),
        marginLeft: 3,
        tintColor: COLORS.primary
    },
    linearGradientCardLeftDeliveryStarText: {
        fontSize: SIZES.responsiveScreenFontSize(1.3),
        fontWeight: '900',
        color: COLORS.black,
        marginLeft: 3
    },
    linearGradientCardLeftDeliveryStarSubText: {
        fontSize: SIZES.responsiveScreenFontSize(0.9),
        fontWeight: '900',
        color: COLORS.gray
    },
    leftSiteCartUpdateMainContainer: {
        width: SIZES.responsiveScreenWidth(17.8),
        height: SIZES.responsiveScreenWidth(4),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5
    },
    leftSiteCartUpdateButtonContainer: {
        width: SIZES.responsiveScreenWidth(5.4),
        height: SIZES.responsiveScreenWidth(5.4),

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    leftSiteCartUpdateButtonIcon: {
        width: SIZES.responsiveScreenWidth(3.4),
        height: SIZES.responsiveScreenWidth(3.4),
        tintColor: COLORS.primary,


    },
    leftSiteCartUpdateButtonText: {
        fontSize: SIZES.responsiveScreenFontSize(1.4),
        fontWeight: '800',
        color: COLORS.primary

    },
    rightSiteCartMainContainer: {
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        marginRight: 8

    },
    rightSiteCartMainLoveButtonContainer: {
        backgroundColor: COLORS.lightOrange3,
        borderRadius: 5,
        width: SIZES.responsiveScreenWidth(6),
        height: SIZES.responsiveScreenWidth(6),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3

    },
    rightSiteCartMainLoveButtonIcons: {
        width: SIZES.responsiveScreenWidth(3.5),
        height: SIZES.responsiveScreenWidth(3.5),
        tintColor: COLORS.primary

    },

    rightSiteCartMainPriceButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 44,
        height: 29,

    },
    rightSiteCartMainPriceButtonText: {
        fontSize: SIZES.responsiveScreenFontSize(1.5),
        fontWeight: '700',
        color: COLORS.red2,
        flex: 1


    },
    hiddenItemMainContainer: {
        height: SIZES.responsiveScreenWidth(26),
        width: SIZES.responsiveScreenWidth(95),
        backgroundColor: COLORS.primary,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: SIZES.radius

    },
    hiddenItemButtonContainer: {
        height: SIZES.responsiveScreenWidth(25),
        width: SIZES.responsiveScreenWidth(19),
        alignItems: 'center',
        justifyContent: 'center'

    },
    hiddenItemButtonIcon: {
        width: SIZES.responsiveScreenWidth(10),
        height: SIZES.responsiveScreenWidth(10),
        tintColor: COLORS.white,

    },



    listFooterMainContainer: {
        alignItems: 'center',
        // backgroundColor: COLORS.white,
        borderRadius: 10,
        marginTop: 25,
        width: SIZES.responsiveScreenWidth(97)


    },
    listFooterTotalAmountContainer: {
        flexDirection: 'row',
        width: '94%',
        justifyContent: 'space-between',
        marginTop: 10,

    },
    listFooterTotalAmountText: {
        color: COLORS.black,
        fontSize: SIZES.responsiveScreenFontSize(1.6),
        fontWeight: '800',


    },



    linearGradientButton: {
        backgroundColor: COLORS.lightGray2,
        borderRadius: 5,
        width: SIZES.responsiveScreenWidth(80),
        height: SIZES.responsiveScreenWidth(8.5),
        elevation: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradientButtonText: {
        fontSize: SIZES.responsiveScreenFontSize(1.8),
        fontWeight: '800',
        color: COLORS.primary,
    },











}
)











export default MyCart;