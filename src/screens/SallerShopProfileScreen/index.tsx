import {
    FlatList,
    Animated as RNAnimated,
    StatusBar,
    View
} from 'react-native';
import { SIZES, images } from '../../constants';

import {
    useCollapsibleContext,
    withCollapsibleContext
} from '@r0b0t3d/react-native-collapsible';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import AppStatusBar from '../../components/AppStatusBar';
import Wrapper from '../../components/Wrapper';
import LoadingScreen from '../LoadingScreen';
import AllProducts from './AllProducts';

import FilterModel from '../HomeScreen/FilterModel';
import AboutUs from './AboutUs';
import Header from './Header';
import ProfileHeader from './ProfileHeader';
import Review from './Review';

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
    const [selectedShowDetails, setSelectedShowDetails] = useState('Products');

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
        }).start(() => {
            setTimeout(() => {
                slideUp()

            }, 2500)

        })
    }






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
        // setLoading(true)
        setTimeout(() => {
            setLoading(true)

        }, 500)

        setTimeout(() => {

            slideDown()


        }, 6000)



    }, [])



    return (
        <>
            {isLoading ?

                <Wrapper>

                    <AppStatusBar />
                



                            <Header
                                isHomeRout={false}
                                name={'test'}
                                refRBSheetFilter={refRBSheetFilter} />

                                {/* <HomeSearchBar refRBSheetFilter={refRBSheetFilter} /> */}
                      




                        <FlatList
                            data={data}
                            style={{
                                marginTop:8
                            }}

                            keyExtractor={(item) => `${item.id}`}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent={

                                <>
                                    <View style={{
                                        alignItems: 'center',
                                        marginBottom: 70
                                    }}>

                                        <ProfileHeader
                                            isProfile={false}
                                            setSelectedShowDetails={setSelectedShowDetails}
                                        />

                                        {/* {renderAboutButton()} */}
                                        {selectedShowDetails == 'Products' ?
                                            <AllProducts />
                                            : null
                                        }
                                        {selectedShowDetails == 'Review' ?
                                            <Review />
                                            : null
                                        }
                                        {selectedShowDetails == 'About us' ?
                                            <AboutUs />
                                            : null
                                        }
                                    </View>
                                </>
                            }
                            renderItem={({ item }) => {

                                return (
                                    <View style={{
                                        alignItems: 'center'
                                    }}>
                                      
                                    </View>



                                )
                            }}

                            ListFooterComponent={
                                <View style={{
                                    alignItems: 'center',
                                    width: SIZES.responsiveScreenWidth(100)
                                }}>
                                 


                                    <View style={{ height: 70 }} />
                                </View>

                            }

                        />


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