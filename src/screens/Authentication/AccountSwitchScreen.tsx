import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, animations, icons } from '../../constants';

import React, { useState } from 'react';

import notifee, { AndroidImportance } from '@notifee/react-native';
import AsysncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createNotifications } from 'react-native-notificated';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import LoadingScreen from '../LoadingScreen';

const AccountSwitchScreen = () => {

    const navigation = useNavigation() as any

    const [email, setEmail] = useState('kawsarkhan@gmail.com')
    const [password, setPassword] = useState('kawsarkhan') as any
    const [confirmPassword, setConfirmPassword] = useState('kawsarkhan') as any
    const [youAre, setYouAre] = useState('') as any


    const [emailError, setEmailError] = useState('') as any
    const [passwordError, setPasswordError] = useState('') as any
    const [showPassword, setShowPassword] = useState(false) as any

    const { NotificationsProvider, useNotifications } = createNotifications({
        notificationPosition: 'center',
    })

    const { notify } = useNotifications()

    const [isLoading, setLoading] = useState(true)




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

        if (
            youAre !== '' &&
            email !== '' &&
            password !== '' &&
            confirmPassword !== ''
        ) {


            await AsysncStorage.setItem('@username', 'Kawsar Khan');
            await AsysncStorage.setItem('@email', email);
            await AsysncStorage.setItem('@youAre', youAre);

            // await AsysncStorage.removeItem('@username');
            // await AsysncStorage.removeItem('@email');
            // await AsysncStorage.removeItem('@youAre');

            if (youAre == 'Foodie') {

                setLoading(false)
                const timeoutId = setTimeout(() => {
                    setLoading(true)
                    navigation.navigate('OnBoardingCategoryScreen')

                    setTimeout(() => {
                        onDisplayNotification()
                    }, 10000)
                }, 3000)
            } else if (youAre == 'Seller') {

                setLoading(false)
                const timeoutId = setTimeout(() => {
                    setLoading(true)
                    navigation.navigate('SallerHomeScreen')

                    setTimeout(() => {
                        onDisplayNotification()
                    }, 10000)
                }, 3000)

                return () => clearTimeout(timeoutId)


            }
            else if (youAre == 'Rider') {

                setLoading(false)
                const timeoutId = setTimeout(() => {
                    setLoading(true)
                    navigation.navigate('RiderHomeScreen')

                    setTimeout(() => {
                        onDisplayNotification()
                    }, 10000)
                }, 3000)

                return () => clearTimeout(timeoutId)


            }







        }
        else {


            if (
                youAre == ''

            ) {




                return (
                    <>
                        {
                            notify('error', {
                                params: {
                                    description: 'Select Foodie, Seller, Rider!',
                                    title: 'I am a ?',
                                    style: {
                                        leftIconSource: icons.restaurant,
                                        titleSize: SIZES.responsiveScreenFontSize(1.8),
                                        titleWeight: '800',
                                        titleColor: COLORS.red,
                                        descriptionSize: SIZES.responsiveScreenFontSize(1.4),
                                        descriptionWeight: '600',
                                        accentColor: COLORS.darkRed,

                                    },
                                },

                            })
                        }

                    </>
                )
            }
            else if (
                email == ''

            ) {


                return (
                    <>
                        {
                            notify('error', {
                                params: {
                                    description: '',
                                    title: 'Check your Mail!',
                                    style: {
                                        leftIconSource: icons.profile,
                                        titleSize: SIZES.responsiveScreenFontSize(1.6),
                                        titleWeight: '800',
                                        titleColor: COLORS.red,
                                        descriptionSize: SIZES.responsiveScreenFontSize(1.4),
                                        descriptionWeight: '600',
                                        accentColor: COLORS.darkRed,


                                    },
                                },

                            })
                        }

                    </>
                )
            }
            else if (
                password == ''

            ) {


                return (
                    <>
                        {
                            notify('error', {
                                params: {
                                    description: '',
                                    title: 'Check your Password!',
                                    style: {
                                        leftIconSource: icons.restaurant,
                                        titleSize: SIZES.responsiveScreenFontSize(1.6),
                                        titleWeight: '800',
                                        titleColor: COLORS.red,
                                        descriptionSize: SIZES.responsiveScreenFontSize(1.4),
                                        descriptionWeight: '600',
                                        accentColor: COLORS.darkRed,


                                    },
                                },

                            })
                        }

                    </>
                )
            }




        }


    }

    return (
        <>
            {isLoading ?
                <Wrapper>
                    <SingleImageHeader
                        name={'You are?'}

                    />
                    <NotificationsProvider />
                    <View
                        style={styles.mainContainer}
                    >
                        <LottieView
                            source={animations.loading}
                            style={styles.lottieViewContainer}
                            loop={true}
                            autoPlay
                            cacheComposition={true}
                            hardwareAccelerationAndroid
                        />
                        <View style={{
                            alignItems: 'center',
                            marginTop: SIZES.responsiveScreenHeight(3)
                        }}>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('FoodieHomeScreen')}
                                    activeOpacity={0.9}>
                                    <LinearGradient
                                        style={styles.linearGradientButtonMainContainer}
                                        locations={[0, 1,]}
                                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={45}>
                                        <View style={styles.linearGradientButtonContainer}>
                                            <Image
                                                source={icons.restaurant}
                                                style={styles.linearGradientButtonImage}
                                            />
                                            <View>
                                                <Text style={
                                                    styles.linearGradientButtonTextTop
                                                }
                                                >
                                                    I am a
                                                </Text>
                                                <Text style={
                                                    styles.linearGradientButtonTextBottom
                                                }>Foodie</Text>

                                            </View>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>

                                <TouchableOpacity

                                    style={{

                                    }}
                                    onPress={() => navigation.navigate('SallerHomeScreen')}
                                    activeOpacity={0.9}>
                                    <LinearGradient
                                        style={styles.linearGradientButtonMainContainer}
                                        locations={[0, 1,]}
                                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={45}>
                                        <View style={styles.linearGradientButtonContainer}>
                                            <Image
                                                source={icons.restaurant}
                                                style={styles.linearGradientButtonImage}
                                            />
                                            <View>
                                                <Text style={styles.linearGradientButtonTextTop}>I am a</Text>
                                                <Text style={
                                                    styles.linearGradientButtonTextBottom
                                                }>Seller</Text>

                                            </View>
                                        </View>

                                    </LinearGradient>


                                </TouchableOpacity>

                                <TouchableOpacity

                                    style={{

                                    }}
                                    onPress={() => navigation.navigate('RiderHomeScreen')}
                                    activeOpacity={0.9}>
                                    <LinearGradient
                                        style={styles.linearGradientButtonMainContainer}


                                        locations={[0, 1,]}
                                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={45}>
                                        <View style={styles.linearGradientButtonContainer}>
                                            <Image
                                                source={icons.delivery}
                                                style={styles.linearGradientButtonImage}
                                            />
                                            <View>
                                                <Text style={
                                                    styles.linearGradientButtonTextTop
                                                }>I am a</Text>
                                                <Text style={
                                                    styles.linearGradientButtonTextBottom
                                                }>Rider</Text>

                                            </View>
                                        </View>

                                    </LinearGradient>


                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Wrapper>

                :

                <LoadingScreen />
            }
        </>

    )
}




const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lottieViewContainer: {
        width: SIZES.responsiveScreenWidth(80),
        height: SIZES.responsiveScreenWidth(80),
    },
    buttonContainer: {
        justifyContent: 'space-between',
        width: SIZES.responsiveScreenWidth(95),
        flexDirection: 'row',
        // height: SIZES.responsiveScreenHeight(15)
        marginTop: SIZES.responsiveScreenHeight(3)
    },

    linearGradientButtonMainContainer: {
        backgroundColor: COLORS.lightGray2,
        borderRadius: 5,
        width: SIZES.responsiveScreenWidth(30),
        height: SIZES.responsiveScreenWidth(13),
        elevation: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linearGradientButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    linearGradientButtonImage: {
        marginLeft: 4,
        width: SIZES.responsiveScreenWidth(7),
        height: SIZES.responsiveScreenWidth(7),
    },
    linearGradientButtonTextTop: {
        fontSize: SIZES.responsiveScreenFontSize(1.4),
        fontWeight: '700',
        color: COLORS.primary,
        marginLeft: 6
    },
    linearGradientButtonTextBottom: {
        fontSize: SIZES.responsiveScreenFontSize(1.4),
        fontWeight: '700',
        color: COLORS.primary,
        marginLeft: 6
    },

}
)




export default AccountSwitchScreen;