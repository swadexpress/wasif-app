import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, animations, icons } from '../../constants';

import React from 'react';
import CustomSwitch from './CustomSwitch';
import FromInput from './FromInput';

import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import AppStatusBar from '../../components/AppStatusBar';
import Wrapper from '../../components/Wrapper';

const SignIn = () => {

    const navigation = useNavigation() as any

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [youAre, setYouAre] = React.useState('')


    const [emailError, setEmailError] = React.useState('')
    const [usernameError, setUsernameError] = React.useState('')
    const [passwordError, setPasswordError] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)

    const [saveMe, setSaveMe] = React.useState(false)


    function isEnableSignIn() {

        return email != "" && password != "" && emailError == ''

    }
    return (
        <Wrapper>
            <AppStatusBar />

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
                    Signin
                </Text>

            </View>


            <KeyboardAwareScrollView>

            <View
                style={{

                    flex: 1,

                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <LottieView
                    source={animations.location}
                    style={{
                        width: SIZES.responsiveScreenWidth(40),
                        height: SIZES.responsiveScreenWidth(40),

                    }}
                    loop={true}
                    autoPlay
                    cacheComposition={true}
                    hardwareAccelerationAndroid
                />





                <View style={{

                    alignItems: 'center',
                    marginTop: SIZES.responsiveScreenHeight(4)
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
                                                width: SIZES.responsiveScreenWidth(4.5),
                                                height: SIZES.responsiveScreenWidth(4.5),
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


                        </View>



             

                    <View
                        style={{

                            width: SIZES.responsiveScreenWidth(90),
                            flexDirection: 'row',
                            marginTop: 15,
                            justifyContent: 'space-between'
                        }}>

                        <CustomSwitch
                            value={saveMe}
                            onChange={(value: any) => {
                                setSaveMe(value)


                            }}
                        />


                        <TouchableOpacity
                            onPress={() => navigation.navigate("ForgotPassword")}

                            style={{
                                alignItems: 'center',
                                // justifyContent: 'center',
                            }}
                        >

                            <Text style={{
                                color: COLORS.gray,
                                fontWeight: '700',
                                fontSize: SIZES.responsiveScreenFontSize(1.5)
                            }}>
                                Forgot Password

                            </Text>
                        </TouchableOpacity>
                    </View>



                    <TouchableOpacity
                        style={{
                            marginTop: '8%',
                        }}
                        onPress={() => navigation.navigate('SignUpScreen')}
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
                                fontWeight: '900',
                                color: COLORS.primary,

                            }}>
                                Sign in
                            </Text>

                        </LinearGradient>


                    </TouchableOpacity>







                </View>


                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginTop: '8%',

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


                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginTop: '7%',
                }}>



                    <TouchableOpacity


                        onPress={() => navigation.navigate('')}


                        activeOpacity={0.9}>

                        <LinearGradient
                            style={{
                                backgroundColor: COLORS.lightGray2,
                                borderRadius: 5,

                                width: SIZES.responsiveScreenWidth(13),
                                height: SIZES.responsiveScreenWidth(13),
                                elevation: 1,

                                justifyContent: 'center',
                                alignItems: 'center'
                            }}

                            locations={[0, 1,]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={45}>


                            <Image
                                source={icons.google}
                                style={{
                                    width: SIZES.responsiveScreenWidth(6),
                                    height: SIZES.responsiveScreenWidth(6),
                                }}


                            />



                        </LinearGradient>


                    </TouchableOpacity>
                    <TouchableOpacity

                        style={{

                            marginLeft: 20
                        }}

                        onPress={() => navigation.navigate('')}


                        activeOpacity={0.9}>

                        <LinearGradient
                            style={{

                                borderRadius: 5,

                                width: SIZES.responsiveScreenWidth(13),
                                height: SIZES.responsiveScreenWidth(13),
                                elevation: 1,

                                justifyContent: 'center',
                                alignItems: 'center'
                            }}

                            locations={[0, 1,]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={40}>


                            <Image
                                source={icons.apple}
                                style={{
                                    width: SIZES.responsiveScreenWidth(5.5),
                                    height: SIZES.responsiveScreenWidth(6.5),
                                }}


                            />



                        </LinearGradient>


                    </TouchableOpacity>
                    <TouchableOpacity

                        style={{

                            marginLeft: 20
                        }}

                        onPress={() => navigation.navigate('')}


                        activeOpacity={0.9}>

                        <LinearGradient
                            style={{

                                borderRadius: 5,

                                width: SIZES.responsiveScreenWidth(13),
                                height: SIZES.responsiveScreenWidth(13),
                                elevation: 1,

                                justifyContent: 'center',
                                alignItems: 'center'
                            }}

                            locations={[0, 1,]}
                            colors={[COLORS.darkRed, COLORS.lightBlue,]}
                            useAngle={true}
                            angle={20}>


                            <Image
                                source={icons.fb}
                                style={{
                                    width: SIZES.responsiveScreenWidth(6.5),
                                    height: SIZES.responsiveScreenWidth(6.5),
                                    borderRadius: 2,
                                    tintColor: '#106BFF'

                                }}


                            />



                        </LinearGradient>


                    </TouchableOpacity>


                </View>
                <TouchableOpacity
                    style={{

                        marginTop: '5%'
                    }}

                    onPress={() => navigation.navigate('SignUpScreen')}


                    activeOpacity={0.9}>

                    <Text style={{
                        fontWeight: '700',
                        fontSize: SIZES.responsiveScreenFontSize(1.5),
                        color: COLORS.primary,
                        marginHorizontal: 15,

                    }}>
                        Not a member?
                        <Text style={{
                            fontWeight: '700',
                            fontSize: SIZES.responsiveScreenFontSize(1.5),
                            color: COLORS.blue2,

                        }}> Register now
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
        </Wrapper>

    )
}

export default SignIn;