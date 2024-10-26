import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, animations, icons } from '../../constants';

import React, { useState } from 'react';
import FromInput from './FromInput';

import notifee, { AndroidImportance } from '@notifee/react-native';
import AsysncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { createNotifications } from 'react-native-notificated';
import SingleImageHeader from '../../components/SingleImageHeader';
import Wrapper from '../../components/Wrapper';
import LoadingScreen from '../LoadingScreen';
import ContinueWithOtherButton from './ContinueWithOtherButton';

const SignIn = () => {

    const navigation = useNavigation() as any

    const [email, setEmail] = useState('foodies@gmail.com')
    const [password, setPassword] = useState('foodies12345') as any
    const [confirmPassword, setConfirmPassword] = useState('foodies12345') as any
    const [youAre, setYouAre] = useState('R') as any


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



            setLoading(false)
            setTimeout(() => {
                setLoading(true)
                navigation.navigate('FillYourProfileScreen')

                setTimeout(() => {
                    onDisplayNotification()
                }, 50000)
            }, 1500)





        }


    }

    return (
        <>
            {isLoading ?
                <Wrapper>
                    <SingleImageHeader
                        name={'Register'}

                    />


                    <View
                        style={styles.mainContainer}
                    >
                        <LottieView
                            source={animations.logo}
                            style={styles.lottieViewContainer}
                            loop={true}
                            autoPlay
                            cacheComposition={true}
                            hardwareAccelerationAndroid
                        />




                        <KeyboardAwareScrollView
                            contentContainerStyle={styles.keyboardAwareContainer}

                        >

                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>

                                <FromInput
                                    label="Email"
                                    placeholder="Email"
                                    keyboardType='email-address'
                                    autocomplete='email'
                                    value={email}
                                    onChange={(value: any) => {
                                        setEmail(value)
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
                                                source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.correct}

                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                    tintColor: email == '' ? COLORS.gray : (email != "" && emailError == '') ? COLORS.green : COLORS.red
                                                }}
                                            />

                                        </View>
                                    }

                                />


                                <FromInput
                                    label="Password"
                                    placeholder="Password"
                                    secureTextEntry={!showPassword}
                                    value={password}
                                    onChange={(value: any) => {
                                        setPassword(value)
                                    }}
                                    appendComponent={
                                        <TouchableOpacity style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: SIZES.responsiveScreenWidth(9),
                                            width: SIZES.responsiveScreenWidth(9),
                                        }}
                                            onPress={() => setShowPassword(!showPassword)}
                                        >
                                            <Image
                                                source={showPassword ? icons.eye_close : icons.eye}
                                                style={{
                                                    width: SIZES.responsiveScreenWidth(4.2),
                                                    height: SIZES.responsiveScreenWidth(4.2),
                                                    tintColor: showPassword ? COLORS.primary : COLORS.gray,

                                                }}
                                            />
                                        </TouchableOpacity>
                                    }

                                />
                                <FromInput
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                    secureTextEntry={!showPassword}
                                    value={confirmPassword}
                                    onChange={(value: any) => {
                                        setConfirmPassword(value)
                                    }}
                                    appendComponent={
                                        <TouchableOpacity style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: SIZES.responsiveScreenWidth(9),
                                            width: SIZES.responsiveScreenWidth(9),
                                        }}
                                            onPress={() => setShowPassword(!showPassword)}
                                        >
                                            <Image
                                                source={showPassword ? icons.eye_close : icons.eye}
                                                style={{
                                                    width: SIZES.responsiveScreenWidth(4.2),
                                                    height: SIZES.responsiveScreenWidth(4.2),
                                                    tintColor: showPassword ? COLORS.primary : COLORS.gray,

                                                }}
                                            />
                                        </TouchableOpacity>
                                    }

                                />




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
                                            Register
                                        </Text>

                                    </LinearGradient>


                                </TouchableOpacity>


                                {/* ============ContinueWithOtherButton===================== */}
                                <ContinueWithOtherButton />
                            </View>
                        </KeyboardAwareScrollView>




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
        width: SIZES.responsiveScreenWidth(43),
        height: SIZES.responsiveScreenWidth(43),
    },
    keyboardAwareContainer: {
        flexGrow: 1,
        justifyContent: 'center'

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



export default SignIn;