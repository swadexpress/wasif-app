import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { COLORS, SIZES, animations, icons } from '../../../constants';

import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SingleImageHeader from '../../../components/SingleImageHeader';
import Wrapper from '../../../components/Wrapper';
import FromInput from '../FromInput';

const SignIn = () => {

    const navigation = useNavigation() as any

    const [email, setEmail] = React.useState('foodies@gmail.com')
    const [password, setPassword] = React.useState('foodies12345')



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
                name={'Forgot Password'}

            />


            <View
                style={{
                    flex:1,

                    alignItems: 'center',
                    // justifyContent: 'center'
                }}
            >


                <LottieView
                    source={animations.forgot_password}
                    style={{
                        width: SIZES.responsiveScreenWidth(50),
                        height: SIZES.responsiveScreenWidth(50),
                        marginTop:'6%'

                    }}
                    loop={true}
                    autoPlay
                    cacheComposition={true}
                    hardwareAccelerationAndroid
                />


    



                    <View style={{

                        alignItems: 'center',
                        marginTop:SIZES.responsiveScreenHeight(2)
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



                        </View>




                        <TouchableOpacity
                            style={{
                                marginTop: '8%',
                            }}
                            onPress={() => navigation.navigate('ForgotPasswordOtpVerificationScreen')}
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



           
            </View>
        </Wrapper>

    )
}

export default SignIn;