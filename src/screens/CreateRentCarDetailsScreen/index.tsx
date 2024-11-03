import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';

import React, { useCallback, useRef, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { createNotifications } from 'react-native-notificated';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import FromInput from '../Authentication/FromInput';
import AnimationFixedBottomSheet from './AnimationFixedBottomSheet';
import CarType from './CarType';
import OfferFromInput from './OfferFromInput';

const offerPriceData = [
    {
        price: 4500,
    },
    {
        price: 5500,
    },
    {
        price: 5800,
    },
    {
        price: 7100,
    },

]

const CreateParcelAndCourierDetailsScreen = () => {

    const navigation = useNavigation<any>()

    const [receiverPhoneNumber, setReceiverPhoneNumber] = useState<any>('')
    const [receiverName, setReceiverName] = useState<any>('')
    const [city, setCity] = useState<any>('')
    const [zone, setZone] = useState<any>('')
    const [area, setArea] = useState<any>('')
    const [selectCarType, setSelectCarType] = useState<any>('Select Car Type')
    const [selectCarTypeData, setSelectCarTypeData] = useState<any>('Select Car Type')
    const [fullAddress, setFullAddress] = useState<any>('')
    const [scheduleYourRide, setScheduleYourRide] = useState<any>('Schedule Your Ride')

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [emailError, setEmailError] = useState<any>('')
    const [offerPrice, setOfferPrice] = useState<any>('')
    const { NotificationsProvider, useNotifications } = createNotifications({
        notificationPosition: 'center',
    })
    const animationFixedBottomSheetRef = useRef<any>(null);
    const animationFixedOfferAreasonableFareBottomSheetRef = useRef<any>(null);




    const handelAnimationFixedBottomSheet = useCallback(() => {
        animationFixedBottomSheetRef?.current?.scrollTo(-310);
    }, []);

    const handelAnimationFixedOfferAreasonableFareBottomSheetRef = useCallback(() => {
        animationFixedOfferAreasonableFareBottomSheetRef?.current?.scrollTo(-310);
    }, []);





    const handelSignUpScreen = async () => {
        // onDisplayNotification()

        // if (
        //     receiverPhoneNumber !== '' &&
        //     receiverName !== '' &&
        //     city !== '' &&
        //     zone !== '' &&
        //     area !== '' &&
        //     fullAddress !== ''
        // ) {
        //     // await AsysncStorage.setItem('@username', 'Kawsar Khan');
        //     // await AsysncStorage.setItem('@email', email);
        //     // await AsysncStorage.setItem('@youAre', youAre);
        //     setTimeout(() => {
        //         onDisplayNotification()
        //     }, 3000);
        //     navigation.navigate('FillYourProfileScreen')
        // }


        navigation.navigate('ParcelPickupScreen')

    }




    return (

        <Wrapper>
            <SingleImageHeader
                name={'Create Parcel Details'}

            />


            <View
                style={styles.mainContainer}
            >
                <LinearGradient
                    style={
                        styles.linearGradientProfileInfoMainContainer
                    }
                    locations={[0, 1,]}
                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                    useAngle={true}
                    angle={190}>
                    <View style={
                        styles.linearGradientProfileInfoContainer
                    }>
                        <View style={
                            styles.linearGradientProfileInfoLeftSiteContainer
                        }>
                            <Image
                                source={icons.location}
                                style={
                                    styles.linearGradientProfileInfoLeftSiteIcon
                                }
                            />
                            <Text style={
                                styles.linearGradientProfileInfoLeftSiteText
                            }>
                                {`Sender: Kawsar Khan`}
                            </Text>
                        </View>
                        <View style={
                            styles.linearGradientProfileInfoRightEditButtonContainer
                        }>
                            <Text
                                style={
                                    styles.linearGradientProfileInfoRightEditButtonText
                                }>
                                Edit
                            </Text>
                        </View>
                    </View>
                    <Text style={
                        styles.linearGradientProfileInfoBottomText
                    }>
                        Kazi office-2d floor, Kalkini, Madaripur, Dhaka, Bangladesh
                    </Text>
                </LinearGradient>
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.keyboardAwareContainer}

                >

                    <View style={{
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity

                            onPress={handelAnimationFixedBottomSheet}
                            activeOpacity={1}


                        >


                            <View style={{
                                flexDirection: 'row',
                                height: SIZES.responsiveScreenWidth(11.5),
                                marginTop: 15,
                                borderRadius: 7,
                                backgroundColor: COLORS.lightGray2,
                                width: SIZES.responsiveScreenWidth(90),
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Text
                                    style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.6),
                                        fontWeight: '700',
                                        marginLeft: 10,
                                        color: selectCarType == 'Select Car Type' ? COLORS.gray : COLORS.primary
                                    }}
                                >
                                    {selectCarType}
                                </Text>

                                <Image
                                    source={icons.down_arrow}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(3.1),
                                        height: SIZES.responsiveScreenWidth(3.1),
                                        tintColor: COLORS.primary,
                                        marginRight: 12
                                    }}



                                />


                            </View>

                        </TouchableOpacity>




                        <FromInput
                            label="City"
                            placeholder="District"
                            keyboardType='default'
                            autocomplete='additional-name'
                            value={city}
                            onChange={(value: any) => {
                                setCity(value)
                            }}
                            errorMsg={emailError}
                            appendComponent={
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        marginRight: 8
                                    }}
                                >
                                    <Image
                                        source={city == "" || (city != "" && emailError == "") ? icons.correct : icons.correct}

                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: city == '' ? COLORS.gray : (city != "" && emailError == '') ? COLORS.green : COLORS.red
                                        }}
                                    />

                                </View>
                            }

                        />



                        <FromInput
                            label="Upazila"
                            placeholder="Upazila"
                            keyboardType='default'
                            autocomplete='additional-name'
                            value={zone}
                            onChange={(value: any) => {
                                setZone(value)
                            }}
                            errorMsg={emailError}
                            appendComponent={
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        marginRight: 8
                                    }}
                                >
                                    <Image
                                        source={zone == "" || (zone != "" && emailError == "") ? icons.correct : icons.correct}

                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: zone == '' ? COLORS.gray : (zone != "" && emailError == '') ? COLORS.green : COLORS.red
                                        }}
                                    />

                                </View>
                            }

                        />



                        <FromInput
                            label="Area"
                            placeholder="Area"
                            keyboardType='default'
                            autocomplete='additional-name'
                            value={area}
                            onChange={(value: any) => {
                                setArea(value)
                            }}
                            errorMsg={emailError}
                            appendComponent={
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        marginRight: 8
                                    }}
                                >
                                    <Image
                                        source={area == "" || (area != "" && emailError == "") ? icons.correct : icons.correct}

                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: area == '' ? COLORS.gray : (area != "" && emailError == '') ? COLORS.green : COLORS.red
                                        }}
                                    />

                                </View>
                            }

                        />
                        <FromInput
                            label="Full Address"
                            placeholder="Full Address"
                            keyboardType='default'
                            autocomplete='additional-name'
                            value={fullAddress}
                            onChange={(value: any) => {
                                setFullAddress(value)
                            }}
                            errorMsg={emailError}
                            appendComponent={
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        marginRight: 8
                                    }}
                                >
                                    <Image
                                        source={fullAddress == "" || (fullAddress != "" && emailError == "") ? icons.correct : icons.correct}

                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: fullAddress == '' ? COLORS.gray : (fullAddress != "" && emailError == '') ? COLORS.green : COLORS.red
                                        }}
                                    />

                                </View>
                            }

                        />




                        <TouchableOpacity

                            onPress={() => setOpen(true)}
                            activeOpacity={1}


                        >


                            <View style={{
                                flexDirection: 'row',
                                height: SIZES.responsiveScreenWidth(11.5),
                                marginTop: 15,
                                borderRadius: 7,
                                backgroundColor: COLORS.lightGray2,
                                width: SIZES.responsiveScreenWidth(90),
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Text
                                    style={{
                                        fontSize: SIZES.responsiveScreenFontSize(1.6),
                                        fontWeight: '700',
                                        marginLeft: 10,
                                        color: scheduleYourRide == 'Schedule Your Ride' ? COLORS.gray : COLORS.primary
                                    }}
                                >
                                    {scheduleYourRide}
                                </Text>

                                <Image
                                    source={icons.calendar}
                                    style={{
                                        width: SIZES.responsiveScreenWidth(4.5),
                                        height: SIZES.responsiveScreenWidth(4.5),
                                        tintColor: COLORS.primary,
                                        marginRight: 12
                                    }}
                                />


                            </View>

                        </TouchableOpacity>




                        <DatePicker
                            modal
                            // minimumDate={new Date("2021-12-31")}
                            mode={'datetime'}
                            open={open}
                            date={date}
                            title={' '}
                            minimumDate={new Date()}
                            buttonColor={COLORS.primary}
                            dividerColor={COLORS.darkRed}
                            onConfirm={d => {
                                setOpen(false);
                                setDate(date);

                                let updateTime = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + ' ' + (d.getHours() > 12 ? d.getHours() - 12 : d.getHours()) + ':' + d.getMinutes() + ' ' + (d.getHours() >= 12 ? "PM" : "AM");
                                setScheduleYourRide(updateTime)
                                // console.log(updateTime);
                                // console.log(date.getMonth());
                                // console.log(date.getUTCMonth());
                            }}
                            onCancel={() => {
                                setOpen(false);
                            }}
                        />







                        <TouchableOpacity
                            style={{
                                marginTop: '5%',
                            }}
                            onPress={handelAnimationFixedOfferAreasonableFareBottomSheetRef}
                            activeOpacity={0.9}>
                            <LinearGradient
                                style={styles.linearGradientButton}
                                locations={[0, 1,]}
                                colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                useAngle={true}
                                angle={90}>
                                <Text style={styles.linearGradientButtonText}>
                                    Confirm
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </KeyboardAwareScrollView>

            </View>


            <AnimationFixedBottomSheet
                ref={animationFixedBottomSheetRef}
                MAX_TRANSLATE_Y={-310}

            >
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>


                    <Text
                        style={{
                            color: COLORS.primary,
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.7),
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 11,
                            alignSelf: 'flex-start'
                        }}
                    >
                        Select Car Type
                    </Text>








                    <CarType setSelectCarTypeData={setSelectCarTypeData} />




                    <TouchableOpacity


                        style={{
                            marginTop: 30,
                        }}
                        activeOpacity={0.9}
                        onPress={() => {
                            setSelectCarType(selectCarTypeData.name)

                            animationFixedBottomSheetRef?.current?.scrollTo(0);


                        }}
                    >
                        <LinearGradient
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary,
                                width: SIZES.responsiveScreenWidth(80),
                                height: SIZES.responsiveScreenWidth(8.5),
                                borderRadius: 6,
                                flexDirection: 'row',

                                elevation: 1
                            }}
                            locations={[0, 1,]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={10}>




                            <Image source={icons.transaction}
                                style={{
                                    width: SIZES.responsiveScreenWidth(5),
                                    height: SIZES.responsiveScreenWidth(5),
                                    tintColor: COLORS.primary
                                }}
                            />

                            <Text
                                style={{
                                    color: COLORS.primary,
                                    fontWeight: '700',
                                    fontSize: SIZES.responsiveScreenFontSize(1.7),
                                    marginLeft: 8
                                }}
                            >
                                Next
                            </Text>


                        </LinearGradient>
                    </TouchableOpacity>

                </View>


            </AnimationFixedBottomSheet>



            {/* ================================ */}
            <AnimationFixedBottomSheet
                ref={animationFixedOfferAreasonableFareBottomSheetRef}
                MAX_TRANSLATE_Y={-310}

            >
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Text
                        style={{
                            color: COLORS.primary,
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.7),
                            marginTop: 10,
                            marginLeft: 11,
                            alignSelf: 'flex-start'
                        }}
                    >
                        Offer a reasonable fare
                    </Text>

                    <Text
                        style={{
                            color: COLORS.gray,
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.2),
                            marginTop: 2,
                            marginLeft: 11,
                            marginBottom: 10,
                            alignSelf: 'flex-start'
                        }}
                    >Offer a fare between <Text
                        style={{
                            color: COLORS.primary,
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.2),
                            marginTop: 2,
                            marginLeft: 11,
                            marginBottom: 10,
                            alignSelf: 'flex-start'
                        }}
                    > ৳4770 - ৳7100
                        </Text>
                    </Text>


                    <OfferFromInput
                        label="Offer Price"
                        placeholder="Price"
                        keyboardType='email-address'
                        autocomplete='email'
                        value={43}
                        onChange={(value: any) => {
                            setOfferPrice(value)
                        }}
                        errorMsg={emailError}
                        appendComponent={null}

                    />



                    <View style={{
                        flexDirection: 'row'
                    }}>

                        {offerPriceData.map((v: any) => {

                            // console.log(v,'kk')
                            return (
                                <>
                                    <TouchableOpacity


                                        style={{
                                            marginTop: 10,
                                            marginHorizontal: 6
                                        }}
                                        activeOpacity={0.9}
                                        onPress={() => {
                                            setOfferPrice(v.price)

                                            console.log(offerPrice,'offerPrice')
                                        }}
                                    >
                                        <LinearGradient
                                            style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: COLORS.primary,
                                                width: SIZES.responsiveScreenWidth(18),
                                                height: SIZES.responsiveScreenWidth(10),
                                                borderRadius: 6,
                                                flexDirection: 'row',

                                                elevation: 1
                                            }}
                                            locations={[0, 1,]}
                                            colors={[v.price ==offerPrice ?  COLORS.lightOrange :COLORS.darkRed, COLORS.lightBlue,]}
                                            useAngle={true}
                                            angle={10}>

                                            <Text
                                                style={{
                                                    color: COLORS.primary,
                                                    fontWeight: '700',
                                                    fontSize: SIZES.responsiveScreenFontSize(1.6),
                                                    marginLeft: 8
                                                }}
                                            >
                                                ৳{v.price}
                                            </Text>


                                        </LinearGradient>
                                    </TouchableOpacity>

                                </>
                            )
                        })}


                    </View>












                    <TouchableOpacity


                        style={{
                            marginTop: 30,
                        }}
                        activeOpacity={0.9}
                        onPress={() => {
                            // setSelectCarType(selectCarTypeData.name)

                            // handelAnimationFixedOfferAreasonableFareBottomSheetRef?.current?.scrollTo(0);


                        }}
                    >
                        <LinearGradient
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary,
                                width: SIZES.responsiveScreenWidth(80),
                                height: SIZES.responsiveScreenWidth(8.5),
                                borderRadius: 6,
                                flexDirection: 'row',

                                elevation: 1
                            }}
                            locations={[0, 1,]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={10}>




                            <Image source={icons.transaction}
                                style={{
                                    width: SIZES.responsiveScreenWidth(5),
                                    height: SIZES.responsiveScreenWidth(5),
                                    tintColor: COLORS.primary
                                }}
                            />

                            <Text
                                style={{
                                    color: COLORS.primary,
                                    fontWeight: '700',
                                    fontSize: SIZES.responsiveScreenFontSize(1.7),
                                    marginLeft: 8
                                }}
                            >
                                Next
                            </Text>


                        </LinearGradient>
                    </TouchableOpacity>

                </View>


            </AnimationFixedBottomSheet>



        </Wrapper>



    )
}






const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottieViewContainer: {
        width: SIZES.responsiveScreenWidth(43),
        height: SIZES.responsiveScreenWidth(43),
    },
    keyboardAwareContainer: {
        flexGrow: 1,
        // justifyContent: 'center'

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
        marginBottom: 8,
        marginTop: 4,
        marginHorizontal: 26
    },

    text__container: {
        flex: 1,
    },
    textareaContainer: {
        // height: SIZES.responsiveScreenHeight(80),
        height: 80,
        backgroundColor: COLORS.white,
        width: '100%',
        borderRadius: 10,
        borderWidth: 0.7,
        borderColor: '#F47D81',
        marginTop: 15

    },
    textarea: {
        textAlignVertical: 'top', // hack android
        height: SIZES.responsiveScreenHeight(25),
        fontSize: SIZES.responsiveScreenFontSize(1.5),
        color: COLORS.black,
        fontWeight: '700',
        marginHorizontal: 8,
        marginVertical: 1
    },











}
)



export default CreateParcelAndCourierDetailsScreen;