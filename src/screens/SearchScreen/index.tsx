import {
    Animated as RNAnimated,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, images } from '../../constants';

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import Wrapper from '../../components/Wrapper';

import {
    CollapsibleContainer,
    CollapsibleFlatList,
    CollapsibleHeaderContainer,
    StickyView,
    useCollapsibleContext,
    withCollapsibleContext,
} from '@r0b0t3d/react-native-collapsible';
import FastImage from 'react-native-fast-image';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Svg, { Defs, G, Path, Use } from 'react-native-svg';
import AppStatusBar from '../../components/AppStatusBar';
import FilterModel from '../HomeScreen/FilterModel';
import HomeHeader from '../HomeScreen/HomeHeader';
import HomeSearchBar from '../HomeScreen/HomeSearchBar';
import LoadingScreen from '../LoadingScreen';
import MenuTypes from './MenuTypes';

let noticeHeight2 = 75
const noticeHeight = -(noticeHeight2 + StatusBar.currentHeight)



const data = [
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
    {
        id: 4,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },
    {
        id: 5,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 6,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },

    {
        id: 12,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },
    {
        id: 22,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 32,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },
    {
        id: 42,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },
    {
        id: 52,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 62,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },


    {
        id: 222,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 332,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },
    {
        id: 442,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Penne pasta in tomato sauce with chicken and tomatoes on a wooden table',
        image: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1727299306~exp=1727302906~hmac=cf04c4b185584c4f3a4779bc57590cfe789f45ad80d64aae552433c729b4d18e&w=2000',
    },
    {
        id: 552,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/hot-spicy-stew-eggplant-sweet-pepper-olives-capers-with-basil-leaves-top-view_2829-6430.jpg?t=st=1727303387~exp=1727306987~hmac=7805ac560df897065e84d473e0ee128a910f288db06569b8edf331193656f999&w=2000',
    },
    {
        id: 652,
        profile_name: 'Kawsar Khan',
        profile_image: images.profile,
        delivery_status: 'Free Delivery',
        delivery_time: '10-15',
        name: 'Hot spicy stew eggplant, sweet pepper, olives and capers with basil leaves',
        image: 'https://img.freepik.com/free-photo/baked-vegetables-white-plate-eggplant-zucchini-tomatoes-paprika-onions-top-view_2829-17239.jpg?t=st=1727304096~exp=1727307696~hmac=60a4a4300e1e61aac4db57f1537c4047eead205fa2c844deeff0f965bf7050cc&w=2000',
    },



]


const Home = () => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
    const [selectedMenuType, setSelectedMenuType] = React.useState(1);
    const [menuList, setMenuList] = useState([]);
    const [recommends, setRecommends] = useState([]);
    const [popular, setPopular] = useState([]);
    const [isStatusBar, setIsStatusBar] = useState(true);
    const navigation = useNavigation<any>();
    const refRBSheetFilter = useRef();

    const handelChangeCategory = () => {


    }


    const noticePostion = useRef(new RNAnimated.Value(noticeHeight)).current


    const slideUp = () => {
        RNAnimated.timing(noticePostion, {
            toValue: noticeHeight,
            duration: 1200,
            useNativeDriver: false
        }).start()
    }
    const slideDown = () => {
        RNAnimated.timing(noticePostion, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: false
        }).start()
    }

    useEffect(() => {

        slideDown()
        setIsStatusBar(true)

        const timeoutId = setTimeout(() => {
            setIsStatusBar(false)
            slideUp()
        }, 3500)

        return () => clearTimeout(timeoutId)


    }, [])





    const { scrollY } = useCollapsibleContext()

    const backgroundColorChanges = useAnimatedStyle(() => {

        const opacity = interpolate(
            scrollY.value, [0, 120], [0, 1]
        )
        return { backgroundColor: `rgba(254,224,222,${opacity})` }
    })

    const [isLoading, setLoading] = useState(false)
    useEffect(() => {

        setLoading(false)

        const timeoutId = setTimeout(() => {
            setLoading(true)
        }, 3000)

        return () => clearTimeout(timeoutId)


    }, [])



    return (
        <>
            {isLoading ?

                <Wrapper>

                    <AppStatusBar />


                    <RNAnimated.View style={{
                        width: '100%',
                        zIndex: 99,
                        position: 'absolute',
                        backgroundColor: COLORS.lightBlue,
                        transform: [{ translateY: noticePostion }]
                    }}>
                        <View style={{
                            height: 75,
                            top: StatusBar.currentHeight + 5,

                        }}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                backgroundColor: COLORS.lightBlue

                            }}>
                                <Text>It's raining neear this location</Text>
                                <Text>Our deliver partners may take longer to reach you</Text>
                                <Text>Notice</Text>

                            </View>

                            <Svg
                                width='100%'
                                height="30"
                                fill={COLORS.lightBlue}
                                viewBox='0 0 4000 1000'

                                preserveAspectRatio='none'

                                style={{
                                    width: '100%',
                                    transform: [{ rotateX: '180deg' }]

                                }}


                            >

                                <Defs>
                                    <Path
                                        id='wavepath'
                                        d="M 0 2000 0 500 Q 62.5 280 125 500 t 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0   125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0 v1000 z"
                                    />

                                </Defs>

                                <G>
                                    <Use

                                        href='#wavepath'
                                        y='324'


                                    />
                                </G>
                            </Svg>
                        </View>
                    </RNAnimated.View>


                    <RNAnimated.View style={{

                        flex: 1,
                        width: '100%',
                        marginTop: noticePostion.interpolate({
                            inputRange: [noticeHeight, 0],
                            outputRange: [0, noticeHeight2 + 10]
                        })
                    }}>
                        <CollapsibleContainer
                            style={{
                                flex: 1,
                            }}>



                            <CollapsibleHeaderContainer containerStyle={{
                                backgroundColor: 'transparent'
                            }}>
                                <HomeHeader refRBSheetFilter={refRBSheetFilter} />

                                <StickyView style={[

                                    , {
                                        alignItems: 'center',
                                        backgroundColor: COLORS.lightRed
                                    },
                                    backgroundColorChanges]

                                }>
                                    <HomeSearchBar refRBSheetFilter={refRBSheetFilter} />

                                </StickyView>


                            </CollapsibleHeaderContainer>

                            <CollapsibleFlatList
                                data={data}
                                headerSnappable={false} // <-- should header auto snap when you release the finger
                                horizontal={false}
                                numColumns={2}
                                keyExtractor={(item) => `${item.id}`}
                                showsVerticalScrollIndicator={false}
                                ListHeaderComponent={
                                    <MenuTypes />
                                }
                                renderItem={({ item }) => {

                                    return (
                                        <View style={{
                                            alignItems: 'center',

                                        }}>


                                            <TouchableOpacity

                                                onPress={() => navigation.navigate("SearchingAndFiteringProducts")}

                                                style={{
                                                    marginBottom: 5,
                                                    marginLeft: 5,
                                                    elevation: 2
                                                }}

                                                activeOpacity={0.9}>

                                                <FastImage

                                                    style={{
                                                        width: SIZES.responsiveScreenWidth(48),
                                                        height: SIZES.responsiveScreenWidth(30),
                                                        borderRadius: 8,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        elevation: 1


                                                    }}
                                                    source={{ uri: item.image }}
                                                    resizeMode={'cover'}
                                                // resizeMode={'stretch'}

                                                >



                                                    <Text style={{
                                                        fontSize: SIZES.responsiveScreenFontSize(1.7),
                                                        fontWeight: '700',
                                                        color: COLORS.white,
                                                        opacity: 0.9

                                                    }}>
                                                        {item.profile_name}
                                                    </Text>
                                                </FastImage>



                                            </TouchableOpacity>
                                        </View>



                                    )
                                }}

                                ListFooterComponent={
                                    <View style={{
                                        alignItems: 'center',
                                    }}>



                                        <View style={{ height: 70 }} />
                                    </View>

                                }

                            />


                        </CollapsibleContainer>
                    </RNAnimated.View>


                    <FilterModel
                        refRBSheetFilter={refRBSheetFilter}
                    />
                </Wrapper>

                :

                <LoadingScreen />
            }
        </>
    )
}

export default withCollapsibleContext(Home);