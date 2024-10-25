import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, animations, icons } from '../../../constants';

import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../../components/SingleImageHeader';
import Wrapper from '../../../components/Wrapper';
import FromInput from '../FromInput';

const SignIn = () => {

    const navigation = useNavigation() as any

    const [email, setEmail] = React.useState('foodies@gmail.com')
    const [password, setPassword] = React.useState('foodies12345')
    const [confirmPassword, setConfirmPassword] = useState('foodies12345') as any



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
            <SingleImageHeader
                name={'New Password'}

            />


            <KeyboardAwareScrollView

                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}

                showsVerticalScrollIndicator={false}>




                <LottieView
                    source={animations.password_change_success}
                    style={{
                        width: SIZES.responsiveScreenWidth(48),
                        height: SIZES.responsiveScreenWidth(48),


                    }}
                    loop={true}
                    autoPlay
                    cacheComposition={true}
                    hardwareAccelerationAndroid
                />

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>


                    <FromInput
                        label="New Password"
                        placeholder="New Password"
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
                                Continue
                            </Text>

                        </LinearGradient>


                    </TouchableOpacity>
                </View>

            </KeyboardAwareScrollView>
        </Wrapper>

    )
}

export default SignIn;