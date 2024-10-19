import { COLORS, FONTS, SIZES, constants, dummyData, icons, images } from '../../constants';
import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import CardItem from '../../components/CardItem'
import CartQuantityButton from '../../components/CartQuantityButton'
import FooterTotal from '../../components/FooterTotal'
import IconButton from '../../components/IconButton'
import IconLabel from '../../components/IconLabel'
import React, { useEffect, useState } from 'react';
import TextButton from '../../components/TextButton'
import Rating from '../../components/Rating'
import TextIconButton from '../../components/TextIconButton'
import LineDivider from '../../components/LineDivider'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import SingleImageHeader from '../../components/SingleImageHeader';
import ProfileValue from './ProfileValue';
import ProfileRadioButton from './ProfileRadioButton';
import ProfileValueTop from './ProfileValueTop';
import Header from './Header';
import ProfileHeader from './ProfileHeader';
import Wrapper from '../../components/Wrapper';
import LinearGradient from 'react-native-linear-gradient';
import LoadingScreen from '../LoadingScreen';

const MyAccount = ({ }) => {
    const [studyReminder, setStudyReminder] = useState(false)
    const [isShopOpen, setisShopOpen] = useState(true)
    

    const navigation = useNavigation<any>()


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
                    <View
                        style={{
                            flex: 1,
                            // backgroundColor: COLORS.white,
                            alignItems: 'center'
                        }}
                    >

                        <Header name={'Profile'} />





                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{
                                flexGrow: 1,
                            }}
                        >


                            <View style={{
                                alignItems: 'center'
                            }}>

                                <ProfileHeader />


                                <LinearGradient
                                    style={{

                                        borderRadius: 5,
                                        elevation: 1,
                                        marginVertical: 3,
                                        marginTop: 20,

                                        width: SIZES.responsiveScreenWidth(90),

                                    }}

                                    locations={[0, 1]}
                                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={10}>




                                    <Text style={{
                                        color: COLORS.primary,
                                        fontWeight: '700',
                                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                                        marginLeft: 10,
                                        marginTop: 10,
                                        marginBottom: 5

                                    }}>Account</Text>

                                    <ProfileValue
                                        icon={icons.profile}

                                        value="Manage Profile"

                                        onPress={() => {
                                            navigation.navigate('SallerPaymentScreen')
                                        }}
                                    />
                                    <ProfileValue
                                        icon={icons.wallet}

                                        value="Wallet"

                                        onPress={() => {
                                            navigation.navigate('PaymentWalletScreen')
                                        }}
                                    />
                                    <ProfileValue
                                        icon={icons.wallet}

                                        value="Payment History"

                                        onPress={() => {
                                            navigation.navigate('PaymentHistoryScreen')
                                        }}
                                    />


                                </LinearGradient>




                                {/* ====================== */}


                                <LinearGradient
                                    style={{

                                        borderRadius: 5,
                                        elevation: 1,
                                        marginVertical: 3,
                                        marginTop: 10,

                                        width: SIZES.responsiveScreenWidth(90),

                                    }}

                                    locations={[0, 1]}
                                    colors={[COLORS.lightBlue, COLORS.lightRed,]}
                                    useAngle={true}
                                    angle={10}>

                                    <Text style={{
                                        color: COLORS.primary,
                                        fontWeight: '700',
                                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                                        marginLeft: 10,
                                        marginTop: 10,
                                        marginBottom: 5

                                    }}>Notification</Text>


                                    <ProfileRadioButton
                                        icon={icons.notification}
                                        label="Notification"
                                        isSelected={studyReminder}
                                        onPress={() => {
                                            setStudyReminder(!studyReminder)
                                        }}
                                    />
                                    <ProfileRadioButton
                                        icon={icons.cart}
                                        label="Shop Open"
                                        isSelected={isShopOpen}
                                        onPress={() => {
                                            setisShopOpen(!isShopOpen)
                                        }}
                                    />
                                </LinearGradient>

                                {/* ========================== */}
                                <LinearGradient
                                    style={{

                                        borderRadius: 5,
                                        elevation: 1,
                                        marginVertical: 3,
                                        marginTop: 10,

                                        width: SIZES.responsiveScreenWidth(90),

                                    }}

                                    locations={[0.1, 1]}
                                    colors={[COLORS.lightRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={320}>

                                    <Text style={{
                                        color: COLORS.primary,
                                        fontWeight: '700',
                                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                                        marginLeft: 5,
                                        marginTop: 10,
                                        marginBottom: 1

                                    }}>More</Text>

                                    <ProfileValue
                                        icon={icons.edit}

                                        value="Thame"
                                    />
                                    <ProfileValue
                                        icon={icons.logout}

                                        value="Logout"
                                    />

                                </LinearGradient>
                            </View>


                            <View style={{
                                height: 60
                            }} />
                        </ScrollView>

                    </View>
                </Wrapper>
                : <LoadingScreen />
            }
        </>

    )
}

export default MyAccount;