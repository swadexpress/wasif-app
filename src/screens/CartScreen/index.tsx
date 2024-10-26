import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS, SIZES, icons, images } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },
    {
        id: 2,
        profile_name: 'Kawsar Khan',
        qty: 2,
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 3,
        profile_name: 'Kawsar Khan',
        qty: 2,
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',

        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },



]





const MyCart = ({ }) => {

    const [myCartList, setMyCartList] = useState(data)

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
                                            source={{ uri: item.image }}
                                            resizeMode={'cover'}

                                        />
                                        <View style={{
                                            marginLeft: 8
                                        }}>
                                            <View style={

                                                styles.linearGradientCardLeftTextContainer
                                            }>



                                                <Text style={styles.linearGradientCardLeftText}>
                                                    {`${item.name.slice(0, 25)}...`}
                                                </Text>




                                            </View>

                                            <View style={

                                                styles.linearGradientCardLeftDeliveryStatusMainContainer
                                            }>

                                                <View style={

                                                    styles.linearGradientCardLeftDeliveryStatusContainer

                                                }>

                                                    <Image
                                                        source={icons.delivery}
                                                        style={

                                                            styles.linearGradientCardLeftDeliveryStatusIcons

                                                        }

                                                    />


                                                    <Text style={

                                                        styles.linearGradientCardLeftDeliveryStatusText
                                                    }>
                                                        {item.delivery_status}
                                                    </Text>

                                                </View>


                                                <View
                                                    style={[
                                                        styles.linearGradientCardLeftDeliveryStatusContainer, {
                                                            marginLeft: 7

                                                        }]}>

                                                    <Image
                                                        source={icons.clock}
                                                        style={styles.linearGradientCardLeftDeliveryStatusIcons}

                                                    />


                                                    <Text style={styles.linearGradientCardLeftDeliveryStatusText
                                                    }>
                                                        {`${item.delivery_time} min`}
                                                    </Text>

                                                </View>
                                            </View>

                                            {/* =========================== */}
                                            <View style={

                                                styles.linearGradientCardLeftDeliveryStarContainer
                                            }>
                                                <Image
                                                    source={icons.star}
                                                    style={
                                                        styles.linearGradientCardLeftDeliveryStarIcons
                                                    }
                                                />
                                                <Image
                                                    source={icons.star}
                                                    style={
                                                        styles.linearGradientCardLeftDeliveryStarIcons
                                                    }
                                                />
                                                <Image
                                                    source={icons.star}
                                                    style={
                                                        styles.linearGradientCardLeftDeliveryStarIcons
                                                    }
                                                />
                                                <Image
                                                    source={icons.star}
                                                    style={
                                                        styles.linearGradientCardLeftDeliveryStarIcons
                                                    }
                                                />
                                                <Image
                                                    source={icons.star}
                                                    style={
                                                        styles.linearGradientCardLeftDeliveryStarIcons
                                                    }
                                                />



                                                <Text style={

                                                    styles.linearGradientCardLeftDeliveryStarText

                                                }>
                                                    4.5
                                                </Text>
                                                <Text style={

                                                    styles.linearGradientCardLeftDeliveryStarSubText
                                                }>
                                                    (23+)
                                                </Text>
                                            </View>




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

                                    <View style={
                                        styles.rightSiteCartMainContainer
                                    }>



                                        <View style={

                                            styles.rightSiteCartMainLoveButtonContainer

                                        }>
                                            <Image
                                                source={icons.love}
                                                style={
                                                    styles.rightSiteCartMainLoveButtonIcons
                                                }
                                            />
                                        </View>



                                        <View style={


                                            styles.rightSiteCartMainPriceButtonContainer
                                        }>

                                            {/* <Image
                                                    source={icons.dollar}
                                                    style={{
                                                        width: SIZES.responsiveScreenFontSize(1.6),
                                                        height: SIZES.responsiveScreenFontSize(1.6),
                                                        tintColor: COLORS.red2
                                                    }}

                                                /> */}


                                            <Text style={
                                                styles.rightSiteCartMainPriceButtonText
                                            }>
                                                ৳ 200.0
                                            </Text>

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
                                onPress={() => {
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
                                <Text
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

                                </Text>

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
        marginLeft: 5,
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
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -10

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
        marginTop: 15
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
        marginLeft: -2

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