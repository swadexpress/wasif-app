import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';

import React, { useState } from 'react';

import notifee, { AndroidImportance } from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { createNotifications } from 'react-native-notificated';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import FromInput from '../Authentication/FromInput';
import TowPointSlider from './TowPointSlider';

const CreateParcelAndCourierDetailsScreen = () => {

    const navigation = useNavigation<any>()

    const [receiverPhoneNumber, setReceiverPhoneNumber] = useState<any>('')
    const [receiverName, setReceiverName] = useState<any>('')
    const [city, setCity] = useState<any>('')
    const [zone, setZone] = useState<any>('')
    const [area, setArea] = useState<any>('')
    const [fullAddress, setFullAddress] = useState<any>('')
    const [Kg, setKg] = useState<any>('')

    const [emailError, setEmailError] = useState<any>('')
    const { NotificationsProvider, useNotifications } = createNotifications({
        notificationPosition: 'center',
    })


    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission()

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            importance: AndroidImportance.HIGH,
            vibration: true,
            sound: 'hollow',

        });

        // Display a notification
        await notifee.displayNotification({
            title: `<p style="color:${COLORS.primary4};"><b>Wellcome Foodies</span></p></b></p>  &#127881; `,

            body: `<p style="color:${COLORS.primary}; font-size=10px"><b>You will get 90% discount on first order</span></p></b></p> &#128576;`,
            android: {
                channelId,
                sound: 'hollow',
                vibrationPattern: [300, 500],

                // smallIcon: 'default',
                // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                    id: 'default',
                },
            },
        });
    }










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
                        justifyContent: 'center',
                    }}>

                        <FromInput
                            label="Receiver's Phone Number"
                            placeholder="Receiver's Phone Number"
                            keyboardType='number-pad'
                            autocomplete='cc-number'
                            value={receiverPhoneNumber}
                            onChange={(value: any) => {
                                setReceiverPhoneNumber(value)
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
                                        source={receiverPhoneNumber == "" || (receiverPhoneNumber != "" && emailError == "") ? icons.correct : icons.correct}

                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: receiverPhoneNumber == '' ? COLORS.gray : (receiverPhoneNumber != "" && emailError == '') ? COLORS.green : COLORS.red
                                        }}
                                    />

                                </View>
                            }

                        />

                        <FromInput
                            label="Receiver's Name"
                            placeholder="Receiver's Name"
                            keyboardType='default'
                            autocomplete='additional-name'
                            value={receiverName}
                            onChange={(value: any) => {
                                setReceiverName(value)
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
                                        source={receiverName == "" || (receiverName != "" && emailError == "") ? icons.correct : icons.correct}

                                        style={{
                                            width: 20,
                                            height: 20,
                                            tintColor: receiverName == '' ? COLORS.gray : (receiverName != "" && emailError == '') ? COLORS.green : COLORS.red
                                        }}
                                    />

                                </View>
                            }

                        />


                        <FromInput
                            label="City"
                            placeholder="City"
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
                            label="Zone"
                            placeholder="Zone"
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

                        <Text style={{
                            fontSize: SIZES.responsiveScreenFontSize(1.7),
                            fontWeight: '700',
                            color: COLORS.primary,
                            alignSelf: 'flex-start',
                            marginTop: 15,
                            marginLeft: 4
                        }}>Item Weight</Text>

                        <View
                            style={{
                                marginTop: -8,
                            }}>
                            <TowPointSlider
                        
                                values={[0, 1]}
                                min={1}
                                max={10}
                                prefix='Kg'
                                postfix=''
                                onValuesChange={(values: any) => setKg(values)}
                            />

                        </View>


                        <TouchableOpacity
                            style={{
                                marginTop: '5%',
                            }}
                            onPress={handelSignUpScreen}
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