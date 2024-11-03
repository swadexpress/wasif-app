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
import LinearGradient from 'react-native-linear-gradient';
import { createNotifications } from 'react-native-notificated';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';

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


        navigation.navigate('FoodieHomeScreen')

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
                                {`Sender's Details`}
                            </Text>
                        </View>
                    </View>
                    <Text style={
                        {
                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                            fontWeight: '700',
                            color: COLORS.primary,
                            marginHorizontal: 15,
                            marginLeft: SIZES.responsiveScreenWidth(5) + 13,

                        }
                    }>
                        Kawsar khan
                    </Text>
                    <Text style={
                        styles.linearGradientProfileInfoBottomText
                    }>
                        +8801771297948
                    </Text>
                    <Text style={
                        [styles.linearGradientProfileInfoBottomText, {
                            marginBottom: 10
                        }]
                    }>
                        Kazi office-2d floor, Kalkini, Madaripur, Dhaka, Bangladesh
                    </Text>


                </LinearGradient>

                <LinearGradient
                    style={
                        styles.linearGradientProfileInfoMainContainer
                    }
                    locations={[0, 1,]}
                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                    useAngle={true}
                    angle={8}>
                    <View style={
                        styles.linearGradientProfileInfoContainer
                    }>
                        <View style={
                            styles.linearGradientProfileInfoLeftSiteContainer
                        }>
                            <Image
                                source={icons.delivery}
                                style={
                                    styles.linearGradientProfileInfoLeftSiteIcon
                                }
                            />
                            <Text style={
                                styles.linearGradientProfileInfoLeftSiteText
                            }>
                                {`Receiver's Details`}
                            </Text>
                        </View>
                    </View>
                    <Text style={
                        {
                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                            fontWeight: '700',
                            color: COLORS.primary,
                            marginHorizontal: 15,
                            marginLeft: SIZES.responsiveScreenWidth(5) + 13,

                        }
                    }>
                        Kawsar khan
                    </Text>
                    <Text style={
                        styles.linearGradientProfileInfoBottomText
                    }>
                        +8801568393974
                    </Text>
                    <Text style={
                        [styles.linearGradientProfileInfoBottomText, {
                            marginBottom: 10
                        }]
                    }>
                        Chawkbazar, Chotokathara, Dhaka, Bangladesh
                    </Text>


                </LinearGradient>

                <LinearGradient
                    style={
                        styles.linearGradientProfileInfoMainContainer
                    }
                    locations={[0, 1,]}
                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                    useAngle={true}
                    angle={8}>
                    <View style={
                        styles.linearGradientProfileInfoContainer
                    }>
                        <View style={
                            styles.linearGradientProfileInfoLeftSiteContainer
                        }>
                            <Image
                                source={icons.transaction}
                                style={
                                    styles.linearGradientProfileInfoLeftSiteIcon
                                }
                            />
                            <Text style={
                                styles.linearGradientProfileInfoLeftSiteText
                            }>
                                {`Parcel`}
                            </Text>
                        </View>
                    </View>
                    <Text style={
                        {
                            fontSize: SIZES.responsiveScreenFontSize(1.4),
                            fontWeight: '700',
                            color: COLORS.primary,
                            marginHorizontal: 15,
                            marginBottom: 10,
                            marginLeft: SIZES.responsiveScreenWidth(5) + 13,

                        }
                    }>
                        1.5Kg
                    </Text>


                </LinearGradient>


                <LinearGradient
                    style={

                        {
                            marginTop: 12,
                            borderRadius: 5

                        }


                    }
                    locations={[0, 1,]}
                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                    useAngle={true}
                    angle={140}>

                    <View style={
                        [styles.linearGradientProfileInfoContainer, {
                            marginBottom: 13,
                            marginTop: 13

                        }
                        ]
                    }>
                        <View style={
                            styles.linearGradientProfileInfoLeftSiteContainer
                        }>
                            <Image
                                source={icons.transaction}
                                style={
                                    styles.linearGradientProfileInfoLeftSiteIcon
                                }
                            />
                            <Text style={
                                styles.linearGradientProfileInfoLeftSiteText
                            }>
                                {`Parcel`}
                            </Text>
                        </View>



                        <Text style={
                            {
                                fontSize: SIZES.responsiveScreenFontSize(1.5),
                                fontWeight: '700',
                                color: COLORS.primary,
                                marginHorizontal: 10,


                            }
                        }>
                            1.5Kg
                        </Text>

                    </View>



                </LinearGradient>









            </View>




<View style ={{
    alignItems:'center',
    marginBottom:10
}}>


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
                        Send Request
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

            </View>

        </Wrapper>



    )
}






const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
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
        marginHorizontal: 10,
        marginLeft: SIZES.responsiveScreenWidth(5) + 13,
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