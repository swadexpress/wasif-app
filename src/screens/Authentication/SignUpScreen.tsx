import {
    Image,
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
import AppStatusBar from '../../components/AppStatusBar';
import Wrapper from '../../components/Wrapper';
import LoadingScreen from '../LoadingScreen';

const SignIn = () => {

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
                    <AppStatusBar />
                    <NotificationsProvider />

                    <View
                        style={{

                            alignItems: 'center',
                            // height: SIZES.responsiveScreenHeight(10)
                            // justifyContent: 'center'
                        }}
                    >
                        <Text style={{
                            fontSize: SIZES.responsiveScreenFontSize(2),
                            fontWeight: '900',
                            color: COLORS.primary
                        }}>
                            Register
                        </Text>





                        <View style={{
                            // alignItems: 'center',
                            justifyContent: 'space-between',
                            width:SIZES.responsiveScreenWidth(95),
                            flexDirection: 'row',
                            // height: SIZES.responsiveScreenHeight(15)
                            marginTop: SIZES.responsiveScreenHeight(3)

                        }}>

                            <TouchableOpacity

                                onPress={() => setYouAre('Foodie')}
                                activeOpacity={0.9}>
                                <LinearGradient
                                    style={{
                                        backgroundColor: COLORS.lightGray2,
                                        borderRadius: 5,
                                        width: SIZES.responsiveScreenWidth(30),
                                        height: SIZES.responsiveScreenWidth(13),
                                       
                                        elevation: 1,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexDirection: 'row'
                                    }}

                                    locations={[0, 1,]}
                                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={45}>

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Image
                                            source={icons.restaurant}
                                            style={{
                                                marginLeft: 4,
                                                width: SIZES.responsiveScreenWidth(7),
                                                height: SIZES.responsiveScreenWidth(7),

                                            }}
                                        />
                                        <View>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                                fontWeight: '700',
                                                color: COLORS.primary,
                                                marginLeft: 6
                                            }}>I am a</Text>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(2.1),
                                                fontWeight: '900',
                                                color: COLORS.primary,
                                                marginLeft: 6,
                                            }}>Foodie</Text>

                                        </View>
                                    </View>

                                    {youAre == 'Foodie' ?

                                        <View style={{

                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderWidth: 1,
                                            // borderColor: COLORS.primary,
                                            // borderRadius: 5,
                                            width: SIZES.responsiveScreenWidth(5),
                                            height: SIZES.responsiveScreenWidth(5),
                                            marginRight: 4,
                                            position: 'absolute',
                                            right: -10,
                                            top: -10,
                                            zIndex: 999


                                        }}>
                                            <Image
                                                source={icons.check}
                                                style={{
                                                    tintColor: COLORS.primary,
                                                    width: SIZES.responsiveScreenWidth(4.5),
                                                    height: SIZES.responsiveScreenWidth(4.5),

                                                }}
                                            />




                                        </View>
                                        : null
                                    }


                                </LinearGradient>


                            </TouchableOpacity>

                            <TouchableOpacity

                                style={{
                                  
                                }}
                                onPress={() => setYouAre('Seller')}
                                activeOpacity={0.9}>
                                <LinearGradient
                                    style={{
                                        backgroundColor: COLORS.lightGray2,
                                        borderRadius: 5,
                                        width: SIZES.responsiveScreenWidth(30),
                                        height: SIZES.responsiveScreenWidth(13),
                                       
                                      
                                        elevation: 1,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexDirection: 'row'
                                    }}

                                    locations={[0, 1,]}
                                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={45}>

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Image
                                            source={icons.restaurant}
                                            style={{
                                                marginLeft: 4,
                                                width: SIZES.responsiveScreenWidth(7),
                                                height: SIZES.responsiveScreenWidth(7),

                                            }}
                                        />
                                        <View>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                                fontWeight: '700',
                                                color: COLORS.primary,
                                                marginLeft: 6
                                            }}>I am a</Text>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(2.1),
                                                fontWeight: '900',
                                                color: COLORS.primary,
                                                marginLeft: 6,
                                            }}>Seller</Text>

                                        </View>
                                    </View>

                                    {youAre == 'Seller' ?

                                        <View style={{

                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderWidth: 1,
                                            // borderColor: COLORS.primary,
                                            // borderRadius: 5,
                                            width: SIZES.responsiveScreenWidth(5),
                                            height: SIZES.responsiveScreenWidth(5),
                                            marginRight: 4,
                                            position: 'absolute',
                                            right: -10,
                                            top: -10,
                                            zIndex: 999


                                        }}>
                                            <Image
                                                source={icons.check}
                                                style={{
                                                    tintColor: COLORS.primary,
                                                    width: SIZES.responsiveScreenWidth(4.5),
                                                    height: SIZES.responsiveScreenWidth(4.5),

                                                }}
                                            />




                                        </View>
                                        : null
                                    }

                                </LinearGradient>


                            </TouchableOpacity>

                            <TouchableOpacity

                                style={{
                                    
                                }}
                                onPress={() => setYouAre('Rider')}
                                activeOpacity={0.9}>
                                <LinearGradient
                                    style={{
                                        backgroundColor: COLORS.lightGray2,
                                        borderRadius: 5,
                                        width: SIZES.responsiveScreenWidth(30),
                                        height: SIZES.responsiveScreenWidth(13),
                                       
                                        
                                        elevation: 1,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexDirection: 'row'
                                    }}

                                    locations={[0, 1,]}
                                    colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                    useAngle={true}
                                    angle={45}>

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Image
                                            source={icons.delivery}
                                            style={{
                                                marginLeft: 4,
                                                marginTop: 3,
                                                width: SIZES.responsiveScreenWidth(7.5),
                                                height: SIZES.responsiveScreenWidth(7.5),

                                            }}
                                        />
                                        <View>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(1.4),
                                                fontWeight: '700',
                                                color: COLORS.primary,
                                                marginLeft: 6
                                            }}>I am a</Text>
                                            <Text style={{
                                                fontSize: SIZES.responsiveScreenFontSize(2.2),
                                                fontWeight: '900',
                                                color: COLORS.primary,
                                                marginLeft: 7,
                                            }}>Rider</Text>

                                        </View>
                                    </View>

                                    {youAre == 'Rider' ?

                                        <View style={{

                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            // borderWidth: 1,
                                            // borderColor: COLORS.primary,
                                            // borderRadius: 5,
                                            width: SIZES.responsiveScreenWidth(5),
                                            height: SIZES.responsiveScreenWidth(5),
                                            marginRight: 4,
                                            position: 'absolute',
                                            right: -10,
                                            top: -10,
                                            zIndex: 999


                                        }}>
                                            <Image
                                                source={icons.check}
                                                style={{
                                                    tintColor: COLORS.primary,
                                                    width: SIZES.responsiveScreenWidth(4.5),
                                                    height: SIZES.responsiveScreenWidth(4.5),

                                                }}
                                            />




                                        </View>
                                        : null
                                    }
                                </LinearGradient>


                            </TouchableOpacity>

                        </View>




                    </View>


                    <KeyboardAwareScrollView>



                        <View
                            style={{

                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: SIZES.responsiveScreenHeight(2)
                            }}
                        >
                            <LottieView
                                source={animations.logo}
                                style={{
                                    width: SIZES.responsiveScreenWidth(30),
                                    height: SIZES.responsiveScreenWidth(30),

                                }}
                                loop={true}
                                autoPlay
                                cacheComposition={true}
                                hardwareAccelerationAndroid
                            />





                            <View style={{

                                alignItems: 'center',

                                marginTop: SIZES.responsiveScreenHeight(3)
                            }}>



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

                                </View>


                                <TouchableOpacity
                                    style={{
                                        marginTop: '7%',
                                    }}

                                    onPress={handelSignUpScreen}


                                    activeOpacity={0.9}>

                                    <LinearGradient
                                        style={{
                                            backgroundColor: COLORS.lightGray2,
                                            borderRadius: 5,

                                            width: SIZES.responsiveScreenWidth(80),
                                            height: SIZES.responsiveScreenWidth(8.5),
                                           
                                           
                                            elevation: 1.5,

                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}

                                        locations={[0, 1,]}
                                        colors={[COLORS.darkRed, COLORS.lightBlue,]}
                                        useAngle={true}
                                        angle={90}>

                                        <Text style={{
                                            fontSize: SIZES.responsiveScreenFontSize(1.8),
                                            fontWeight: '800',
                                            color: COLORS.primary,

                                        }}>
                                            Register
                                        </Text>

                                    </LinearGradient>


                                </TouchableOpacity>







                            </View>


                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                marginTop: '7%',

                            }}>

                                <View
                                    style={{
                                        height: 1.5,
                                        backgroundColor: COLORS.primary,
                                        width: SIZES.responsiveScreenWidth(20),
                                        marginTop: 4.2,
                                        borderRadius: 5,
                                        elevation: 0.6
                                    }}
                                />

                                <Text style={{
                                    fontWeight: '700',
                                    fontSize: SIZES.responsiveScreenFontSize(1.5),
                                    color: COLORS.primary,
                                    marginHorizontal: 15
                                }}>
                                    or continue with
                                </Text>

                                <View
                                    style={{
                                        height: 1.5,
                                        marginTop: 4.2,
                                        backgroundColor: COLORS.primary,
                                        width: SIZES.responsiveScreenWidth(20),
                                        borderRadius: 5,
                                        elevation: 0.6
                                    }}
                                />






                            </View>


                            <TouchableOpacity
                                style={{

                                    marginTop: '5%'
                                }}

                                onPress={() => navigation.navigate('LoginScreen')}


                                activeOpacity={0.9}>

                                <Text style={{
                                    fontWeight: '700',
                                    fontSize: SIZES.responsiveScreenFontSize(1.5),
                                    color: COLORS.primary,
                                    marginHorizontal: 15,

                                }}>
                                    Already a member?
                                    <Text style={{
                                        fontWeight: '700',
                                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                                        color: COLORS.blue2,

                                    }}> Signin
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAwareScrollView>
                </Wrapper>

                :

                <LoadingScreen />
            }
        </>

    )
}

export default SignIn;